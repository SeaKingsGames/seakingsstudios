// =====================================================================
//  GENERADOR DEL SITIO
//  Lee contenido/ y sitio.config.mjs, y escribe las páginas en dist/.
//  Vercel lo corre solo en cada commit (npm run build).
//  Para probarlo en tu compu: npm install, npm run build y npx serve dist
//  Normalmente no necesitas tocar este archivo para agregar contenido.
// =====================================================================

import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import yaml from 'js-yaml';
import SITIO from './sitio.config.mjs';

const RAIZ = path.dirname(new URL(import.meta.url).pathname);
const DIST = path.join(RAIZ, 'dist');
const CONTENIDO = path.join(RAIZ, 'contenido');
const PUBLICO = path.join(RAIZ, 'publico');
const AHORA = new Date();

// ---------------------------------------------------------------------
//  Utilidades
// ---------------------------------------------------------------------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const iso = (f) => (f instanceof Date ? f.toISOString().slice(0, 10) : String(f));
const fechaLarga = (f) => { const [a, m, d] = iso(f).split('-').map(Number); return `${d} de ${MESES[m - 1]} de ${a}`; };
const fechaCorta = (f) => { const [a, m, d] = iso(f).split('-').map(Number); return `${d} ${MESES[m - 1].slice(0, 3)} ${a}`; };
const quitarEtiquetas = (h) => h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const slug = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const urlAbs = (ruta) => SITIO.dominio + (ruta === '/' ? '/' : ruta);

function escribir(ruta, contenido) {
  const f = path.join(DIST, ruta);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, contenido);
}

function copiarCarpeta(origen, destino, transformar) {
  if (!fs.existsSync(origen)) return;
  for (const e of fs.readdirSync(origen, { withFileTypes: true })) {
    const o = path.join(origen, e.name), d = path.join(destino, e.name);
    if (e.isDirectory()) copiarCarpeta(o, d, transformar);
    else {
      fs.mkdirSync(destino, { recursive: true });
      if (transformar && e.name.endsWith('.html')) fs.writeFileSync(d, transformar(fs.readFileSync(o, 'utf8'), e.name));
      else fs.copyFileSync(o, d);
    }
  }
}

// Medidas de imágenes (PNG, JPG y WEBP) para evitar saltos al cargar
const cacheMedidas = new Map();
function medidas(ruta) {
  if (!ruta || /^https?:/.test(ruta)) return null;
  if (cacheMedidas.has(ruta)) return cacheMedidas.get(ruta);
  let r = null;
  try {
    const b = fs.readFileSync(path.join(PUBLICO, ruta));
    if (b[0] === 0x89 && b.toString('ascii', 1, 4) === 'PNG') r = [b.readUInt32BE(16), b.readUInt32BE(20)];
    else if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
      const t = b.toString('ascii', 12, 16);
      if (t === 'VP8 ') r = [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
      else if (t === 'VP8L') { const n = b.readUInt32LE(21); r = [(n & 0x3fff) + 1, ((n >> 14) & 0x3fff) + 1]; }
      else if (t === 'VP8X') r = [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
    } else if (b[0] === 0xff && b[1] === 0xd8) {
      let i = 2;
      while (i < b.length) {
        const m = b[i + 1], len = b.readUInt16BE(i + 2);
        if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) { r = [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]; break; }
        i += 2 + len;
      }
    }
  } catch { console.warn('  ⚠ No encontré la imagen', ruta); }
  cacheMedidas.set(ruta, r);
  return r;
}
function img(src, alt, { clase = '', perezosa = true, ancho } = {}) {
  const m = medidas(src);
  const wh = m ? ` width="${m[0]}" height="${m[1]}"` : '';
  return `<img src="${esc(src)}" alt="${esc(alt)}"${wh}${clase ? ` class="${clase}"` : ''}${perezosa ? ' loading="lazy" decoding="async"' : ' fetchpriority="high"'}${ancho ? ` sizes="${ancho}"` : ''}>`;
}

// ---------------------------------------------------------------------
//  Lectura de contenido: Markdown con datos arriba (entre líneas ---)
// ---------------------------------------------------------------------
marked.use({ gfm: true });

function leerMd(archivo) {
  const txt = fs.readFileSync(archivo, 'utf8').replace(/\r\n/g, '\n');
  const m = txt.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`Falta el bloque de datos (---) en ${archivo}`);
  let datos;
  try { datos = yaml.load(m[1]) || {}; }
  catch (e) { throw new Error(`Error en los datos de ${path.relative(RAIZ, archivo)}: ${e.message}`); }
  const id = path.basename(archivo, '.md');
  return { id, ...datos, cuerpo: m[2] };
}
function leerCarpeta(carpeta) {
  const dir = path.join(CONTENIDO, carpeta);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_')).map((f) => leerMd(path.join(dir, f)));
}

// Convierte el Markdown a HTML y le pone ids a los subtítulos, imágenes perezosas y anuncios
function markdown(texto, opciones = {}) {
  let html = marked.parse(texto);
  const indice = [];
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, t) => {
    const id = slug(quitarEtiquetas(t));
    indice.push({ id, texto: quitarEtiquetas(t) });
    return `<h2 id="${id}">${t}</h2>`;
  });
  html = html.replace(/<img src="([^"]+)" alt="([^"]*)"(?: title="([^"]*)")?>/g, (_, src, alt, titulo) => {
    const tag = img(src, alt.replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
    return titulo ? `<figure>${tag}<figcaption>${titulo}</figcaption></figure>` : tag;
  });
  html = html.replace(/<p>(<figure>[\s\S]*?<\/figure>)<\/p>/g, '$1');
  html = html.replace(/<table>/g, '<div class="tabla"><table>').replace(/<\/table>/g, '</table></div>');
  html = html.replace(/<a href="(https?:\/\/[^"]+)"/g, (m, u) => (u.startsWith(SITIO.dominio) ? m : `<a href="${u}" target="_blank" rel="noopener"`));
  html = html.replace(/<!--\s*anuncio\s*-->/g, () => anuncio('contenido'));
  if (opciones.juegos) html = html.replace(/<!--\s*juegos\s*-->/g, opciones.juegos);
  return { html, indice, palabras: quitarEtiquetas(html).split(' ').length };
}

// ---------------------------------------------------------------------
//  Anuncios de AdSense
// ---------------------------------------------------------------------
function anuncio(espacio) {
  const a = SITIO.adsense || {};
  const slot = a.espacios && a.espacios[espacio];
  if (!a.cliente || !slot) return '';
  return `<aside class="anuncio" aria-label="Publicidad"><span class="anuncio-etiqueta">Publicidad</span>
<ins class="adsbygoogle" style="display:block" data-ad-client="${esc(a.cliente)}" data-ad-slot="${esc(slot)}" data-ad-format="auto" data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script></aside>`;
}

// ---------------------------------------------------------------------
//  Estados de proyecto
// ---------------------------------------------------------------------
const ESTADOS = {
  publicado: { texto: 'Disponible', clase: 'ok' },
  acceso: { texto: 'Acceso anticipado', clase: 'prueba' },
  prueba: { texto: 'Prueba cerrada', clase: 'prueba' },
  desarrollo: { texto: 'En desarrollo', clase: 'dev' },
};
const chipEstado = (e) => { const s = ESTADOS[e] || ESTADOS.desarrollo; return `<span class="estado estado--${s.clase}"><i aria-hidden="true"></i>${s.texto}</span>`; };

// ---------------------------------------------------------------------
//  Piezas comunes de las páginas
// ---------------------------------------------------------------------
const AJOLOTE = `<svg class="ajolote" viewBox="0 0 220 190" role="img" aria-label="Lito, el ajolote con corona de SeaKingsStudios">
  <g class="flota">
    <path class="cuerpo" d="M150 140 q40 6 58 -14 q-6 30 -52 32z" stroke="#16222b" stroke-width="3" stroke-linejoin="round"/>
    <ellipse class="cuerpo" cx="112" cy="140" rx="50" ry="28" stroke="#16222b" stroke-width="3"/>
    <g class="branquia" fill="none" stroke-width="9" stroke-linecap="round">
      <path d="M58 72 Q40 58 26 44"/><path d="M52 90 Q34 88 16 90"/><path d="M58 108 Q40 118 28 134"/>
      <path d="M162 72 Q180 58 194 44"/><path d="M168 90 Q186 88 204 90"/><path d="M162 108 Q180 118 192 134"/>
    </g>
    <ellipse class="cuerpo" cx="110" cy="92" rx="62" ry="48" stroke="#16222b" stroke-width="3"/>
    <ellipse cx="80" cy="104" rx="9" ry="5" fill="#ff8fb1" opacity=".75"/><ellipse cx="140" cy="104" rx="9" ry="5" fill="#ff8fb1" opacity=".75"/>
    <circle cx="88" cy="86" r="7" fill="#16222b"/><circle cx="132" cy="86" r="7" fill="#16222b"/>
    <circle cx="90.5" cy="83.5" r="2.2" fill="#fffaf0"/><circle cx="134.5" cy="83.5" r="2.2" fill="#fffaf0"/>
    <path d="M98 104 Q110 115 122 104" fill="none" stroke="#16222b" stroke-width="3" stroke-linecap="round"/>
    <path d="M86 50 L84 24 L98 38 L110 18 L122 38 L136 24 L134 50 Z" fill="#ffd24d" stroke="#16222b" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="110" cy="40" r="3.5" fill="#e8506e"/>
  </g>
</svg>`;

// Ilustraciones para proyectos sin capturas
const ICONOS = {
  sol: `<svg viewBox="0 0 120 90" aria-hidden="true">
    <g transform="rotate(-10 40 46)"><rect class="i-papel" x="18" y="14" width="42" height="62" rx="4" stroke="currentColor" stroke-width="3"/>
      <rect x="24" y="20" width="30" height="50" rx="2" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/></g>
    <g transform="rotate(8 78 44)"><rect class="i-papel" x="56" y="12" width="44" height="64" rx="4" stroke="currentColor" stroke-width="3"/>
      <g transform="translate(78 40)"><circle r="11" class="i-rojo" stroke="currentColor" stroke-width="2.5"/>
        <g stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M0 -15 V-21"/><path d="M0 15 V21"/><path d="M-15 0 H-21"/><path d="M15 0 H21"/>
        <path d="M10.6 -10.6 L14.8 -14.8"/><path d="M-10.6 10.6 L-14.8 14.8"/><path d="M-10.6 -10.6 L-14.8 -14.8"/><path d="M10.6 10.6 L14.8 14.8"/></g>
        <circle r="3.5" class="i-tinta"/></g>
      <path class="i-tinta" d="M62 70 H94 V65 H88 V60 H83 V55 H73 V60 H68 V65 H62 Z"/></g>
  </svg>`,
};

function cabecera(rutaActual) {
  const items = SITIO.menu.map((m) => {
    const activo = rutaActual === m.url || rutaActual.startsWith(m.url + '/');
    return `<a href="${m.url}"${activo ? ' aria-current="page"' : ''}>${esc(m.texto)}</a>`;
  }).join('');
  return `<header class="cabecera"><div class="envoltura cabecera-in">
  <a class="marca-chica" href="/" aria-label="${esc(SITIO.nombre)}, inicio">${ICONO_MARCA}<span>SeaKings<b>Studios</b></span></a>
  <nav class="menu" aria-label="Principal">${items}</nav>
</div></header>`;
}
const ICONO_MARCA = `<svg viewBox="0 0 64 64" aria-hidden="true" class="marca-icono"><rect width="64" height="64" rx="14" fill="#0a2129"/><g fill="none" stroke="#ff8fb1" stroke-width="4" stroke-linecap="round"><path d="M14 26 Q8 21 4 16"/><path d="M12 33 Q6 33 2 34"/><path d="M14 40 Q8 44 5 49"/><path d="M50 26 Q56 21 60 16"/><path d="M52 33 Q58 33 62 34"/><path d="M50 40 Q56 44 59 49"/></g><ellipse cx="32" cy="36" rx="20" ry="16" fill="#7fe3c4" stroke="#16222b" stroke-width="2.5"/><circle cx="25" cy="33" r="2.6" fill="#16222b"/><circle cx="39" cy="33" r="2.6" fill="#16222b"/><path d="M27 41 Q32 45 37 41" fill="none" stroke="#16222b" stroke-width="2.2" stroke-linecap="round"/><path d="M22 21 L21 11 L27 16 L32 8 L37 16 L43 11 L42 21 Z" fill="#ffd24d" stroke="#16222b" stroke-width="2.2" stroke-linejoin="round"/></svg>`;

function pie(proyectos) {
  const listaProy = proyectos.map((p) => `<li><a href="${p.ruta}">${esc(p.nombre)}</a></li>`).join('');
  const redes = SITIO.redes.map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.red)} <span>${esc(r.usuario)}</span></a></li>`).join('');
  return `<footer class="pie"><div class="envoltura">
  <div class="pie-rejilla">
    <div class="pie-marca">
      <a class="marca-chica" href="/">${ICONO_MARCA}<span>SeaKings<b>Studios</b></span></a>
      <p>Estudio independiente de juegos y herramientas creativas hecho en el ${esc(SITIO.lugar.split(',')[0])}. ${esc(SITIO.lineaDeJuegos)} es nuestra línea de juegos.</p>
      <p class="pie-correo">${esc(SITIO.correo)}</p>
    </div>
    <div><h2>Proyectos</h2><ul>${listaProy}</ul></div>
    <div><h2>Estudio</h2><ul><li><a href="/bitacora">Bitácora</a></li><li><a href="/acerca">Acerca de</a></li><li><a href="/contacto">Contacto</a></li><li><a href="/privacidad">Política de privacidad</a></li></ul></div>
    <div><h2>Síguenos</h2><ul class="pie-redes">${redes}</ul></div>
  </div>
  <p class="pie-legal">© ${AHORA.getFullYear()} ${esc(SITIO.nombre)} · ${esc(SITIO.responsable)} · Todos los derechos reservados.</p>
</div></footer>`;
}

function migas(items) {
  const html = items.map((it, i) => (i < items.length - 1 ? `<a href="${it.url}">${esc(it.texto)}</a>` : `<span aria-current="page">${esc(it.texto)}</span>`)).join('<span class="sep" aria-hidden="true">›</span>');
  return `<nav class="migas" aria-label="Estás aquí">${html}</nav>`;
}
function jsonMigas(items) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.texto, item: urlAbs(it.url) })) };
}

function layout({ titulo, descripcion, ruta, imagen, cuerpo, jsonld = [], anuncios = true, indexar = true, tipoOg = 'website', proyectos }) {
  const tituloCompleto = ruta === '/' ? `${SITIO.nombre}: juegos y herramientas creativas` : `${titulo} | ${SITIO.nombre}`;
  const og = urlAbs(imagen || '/og.jpg');
  const ads = anuncios && SITIO.adsense?.cliente
    ? `<meta name="google-adsense-account" content="${esc(SITIO.adsense.cliente)}">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(SITIO.adsense.cliente)}" crossorigin="anonymous"></script>` : '';
  const ld = jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join('\n');
  return `<!doctype html>
<html lang="es-MX">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(tituloCompleto)}</title>
<meta name="description" content="${esc(descripcion)}">
${indexar ? `<link rel="canonical" href="${urlAbs(ruta)}">` : '<meta name="robots" content="noindex">'}
${SITIO.verificacionGoogle ? `<meta name="google-site-verification" content="${esc(SITIO.verificacionGoogle)}">\n` : ''}<meta name="theme-color" content="#0a2129">
<meta property="og:type" content="${tipoOg}">
<meta property="og:site_name" content="${esc(SITIO.nombre)}">
<meta property="og:locale" content="es_MX">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descripcion)}">
<meta property="og:url" content="${urlAbs(ruta)}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/icono.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chango&family=Hanken+Grotesk:ital,wght@0,400;0,500;0,700;1,400&family=IBM+Plex+Mono:wght@500&display=swap">
<link rel="stylesheet" href="/estilos.css?v=${VERSION_CSS}">
${ads}
${ld}
</head>
<body>
<a class="saltar" href="#principal">Saltar al contenido</a>
${cabecera(ruta)}
<main id="principal">
${cuerpo}
</main>
${pie(proyectos)}
</body>
</html>
`;
}

// ---------------------------------------------------------------------
//  Tarjetas
// ---------------------------------------------------------------------
function tarjetaProyecto(p, i) {
  const arte = p.tarjeta
    ? img(p.tarjeta.imagen, p.tarjeta.alt || '', { clase: p.tarjeta.ajuste === 'contener' ? 'contener' : '' }).replace('<img ', p.tarjeta.posicion ? `<img style="object-position:${esc(p.tarjeta.posicion)}" ` : '<img ')
    : (ICONOS[p.ilustracion] || '');
  return `<a class="carta" href="${p.ruta}">
  <div class="carta-top"><span>Nº ${String(i + 1).padStart(2, '0')}</span><span>${esc(p.tipo)}</span></div>
  <div class="arte${p.tarjeta ? ' arte--foto' : ''}" style="--c:${esc(p.color || '#7fe3c4')}">${arte}</div>
  <h3 class="carta-nombre">${esc(p.nombre)}</h3>
  <p class="carta-lema">${esc(p.lema)}</p>
  <div class="carta-pie">${chipEstado(p.estado)}<span class="ver">Ver página <span aria-hidden="true">→</span></span></div>
</a>`;
}
function tarjetaJuego(j) {
  return `<a class="juego" href="/arcada/${j.id}">
  <div class="juego-foto">${img(j.imagen, `Pantalla de ${j.nombre}`)}</div>
  <div class="juego-texto"><h3>${esc(j.nombre)}</h3><p>${esc(j.lema)}</p></div>
</a>`;
}
function tarjetaArticulo(a, proyectosPorId) {
  const p = a.proyecto && proyectosPorId[a.proyecto];
  return `<article class="nota">
  ${a.imagen ? `<a class="nota-foto" href="/bitacora/${a.id}" tabindex="-1" aria-hidden="true">${img(a.imagen, '')}</a>` : ''}
  <div class="nota-texto">
    <p class="nota-meta"><time datetime="${iso(a.fecha)}">${fechaCorta(a.fecha)}</time>${p ? ` · ${esc(p.nombre)}` : ''}</p>
    <h3><a href="/bitacora/${a.id}">${esc(a.titulo)}</a></h3>
    <p>${esc(a.descripcion)}</p>
  </div>
</article>`;
}

// ---------------------------------------------------------------------
//  Páginas
// ---------------------------------------------------------------------
function paginaInicio({ proyectos, juegos, articulos, proyectosPorId }) {
  const cuerpo = `
<section class="portada envoltura">
  <div class="portada-texto">
    <p class="ceja">${esc(SITIO.portada.ceja)}</p>
    <h1 class="marca" aria-label="${esc(SITIO.nombre)}"><span class="m1">SEAKINGS</span><span class="m2">STUDIOS</span></h1>
    <p class="entrada">${esc(SITIO.portada.entrada)}</p>
    <div class="acciones">
      <a class="btn btn--principal" href="/proyectos">Ver proyectos</a>
      <a class="btn btn--menta" href="/arcada">Jugar en la arcada</a>
    </div>
    <dl class="cifras">
      <div><dt>Proyectos</dt><dd>${proyectos.length}</dd></div>
      <div><dt>Juegos en la arcada</dt><dd>${juegos.length}</dd></div>
      <div><dt>Guías y notas</dt><dd>${articulos.length}</dd></div>
    </dl>
  </div>
  ${AJOLOTE}
</section>
<div class="ola" aria-hidden="true"></div>

<section class="seccion envoltura" aria-labelledby="t-proyectos">
  <div class="seccion-cab">
    <div><p class="ceja">La baraja del estudio</p><h2 id="t-proyectos">Proyectos</h2></div>
    <a class="enlace-flecha" href="/proyectos">Todos los proyectos <span aria-hidden="true">→</span></a>
  </div>
  <div class="rejilla-cartas">${proyectos.map(tarjetaProyecto).join('')}</div>
</section>

<section class="seccion envoltura" aria-labelledby="t-arcada">
  <div class="seccion-cab">
    <div><p class="ceja">Gratis y sin descargar</p><h2 id="t-arcada">Juega ahora en la arcada</h2></div>
    <a class="enlace-flecha" href="/arcada">Ver la arcada <span aria-hidden="true">→</span></a>
  </div>
  <p class="seccion-intro">Siete juegos clásicos rehechos por nosotros para jugarse con el dedo o con el teclado. Cada uno tiene su página con reglas, controles y consejos.</p>
  <div class="tira-juegos">${juegos.map(tarjetaJuego).join('')}</div>
</section>

${anuncio('inicio') ? `<div class="envoltura">${anuncio('inicio')}</div>` : ''}

<section class="seccion envoltura" aria-labelledby="t-bitacora">
  <div class="seccion-cab">
    <div><p class="ceja">Guías, tutoriales y notas</p><h2 id="t-bitacora">Bitácora</h2></div>
    <a class="enlace-flecha" href="/bitacora">Toda la bitácora <span aria-hidden="true">→</span></a>
  </div>
  <div class="rejilla-notas">${articulos.slice(0, 3).map((a) => tarjetaArticulo(a, proyectosPorId)).join('')}</div>
</section>

<section class="seccion envoltura estudio" aria-labelledby="t-estudio">
  <div class="estudio-texto">
    <p class="ceja">Quiénes somos</p>
    <h2 id="t-estudio">Un estudio pequeño, juegos para compartir</h2>
    <p>SeaKingsStudios es un estudio independiente del ${esc(SITIO.lugar.split(',')[0])}, dirigido por ${esc(SITIO.responsable)}. Diseñamos, programamos y probamos cada proyecto nosotros mismos, y los publicamos para que se jueguen desde el navegador, el celular o la PC.</p>
    <p>Lito, nuestro ajolote con corona, aparece en los videos y en las redes de ${esc(SITIO.lineaDeJuegos)}, donde más de 70 mil personas siguen lo que vamos haciendo.</p>
    <a class="enlace-flecha" href="/acerca">Conoce el estudio <span aria-hidden="true">→</span></a>
  </div>
  <ul class="estudio-redes">${SITIO.redes.map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener"><b>${esc(r.red)}</b><span>${esc(r.usuario)}</span>${r.seguidores ? `<em>${esc(r.seguidores)} seguidores</em>` : ''}</a></li>`).join('')}</ul>
</section>

<script>
// Enlaces viejos de la página anterior (seakingsstudios.com/#arte-o-cringe) llevan a la página nueva
(function () {
  var m = { 'arte-o-cringe': '/proyectos/arte-o-cringe', 'bocon-studio': '/proyectos/bocon-estudio', 'juego-de-cartas': '/proyectos/cartas-del-quinto-sol' };
  var h = location.hash.slice(1);
  if (m[h]) location.replace(m[h]);
})();
</script>`;
  const org = {
    '@context': 'https://schema.org', '@type': 'Organization', name: SITIO.nombre, url: SITIO.dominio, logo: urlAbs('/icono.svg'),
    email: SITIO.correo, founder: { '@type': 'Person', name: SITIO.responsable }, sameAs: SITIO.redes.map((r) => r.url),
  };
  return layout({ titulo: SITIO.nombre, descripcion: SITIO.descripcion, ruta: '/', cuerpo, jsonld: [org], proyectos });
}

function paginaProyectos({ proyectos }) {
  const items = proyectos.map((p, i) => `<article class="fila-proyecto">
  <a class="fila-arte" href="${p.ruta}" tabindex="-1" aria-hidden="true">${tarjetaProyecto(p, i).replace(/^<a class="carta" href="[^"]*">/, '<div class="carta carta--chica">').replace(/<\/a>$/, '</div>')}</a>
  <div class="fila-texto">
    <p class="ceja">${esc(p.tipo)}</p>
    <h2><a href="${p.ruta}">${esc(p.nombre)}</a></h2>
    ${chipEstado(p.estado)}
    <p>${esc(p.resumen)}</p>
    <a class="enlace-flecha" href="${p.ruta}">Leer más sobre ${esc(p.nombre)} <span aria-hidden="true">→</span></a>
  </div>
</article>`).join('');
  const mg = [{ texto: 'Inicio', url: '/' }, { texto: 'Proyectos', url: '/proyectos' }];
  const cuerpo = `<div class="envoltura">${migas(mg)}
<header class="cab-pagina"><p class="ceja">La baraja del estudio</p><h1>Proyectos</h1>
<p class="entrada">Todo lo que estamos haciendo en SeaKingsStudios: juegos para jugar con amigos, una arcada de clásicos y un programa para animar personajes. Cada proyecto tiene su página con detalles, capturas y preguntas frecuentes.</p></header>
<div class="lista-proyectos">${items}</div></div>`;
  return layout({ titulo: 'Proyectos', descripcion: 'Juegos y herramientas de SeaKingsStudios: Arte o Cringe, Cartas del Quinto Sol, Bocón Estudio y SeaKings Classic Games.', ruta: '/proyectos', cuerpo, jsonld: [jsonMigas(mg)], proyectos });
}

function bloqueFicha(p) {
  const filas = [['Estado', ESTADOS[p.estado]?.texto || 'En desarrollo'], ...Object.entries(p.ficha || {})];
  return `<aside class="ficha" aria-label="Ficha técnica"><h2 class="ficha-titulo">Ficha</h2><dl>${filas.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${Array.isArray(v) ? v.map(esc).join('<br>') : esc(v)}</dd></div>`).join('')}</dl></aside>`;
}
function botones(enlaces = []) {
  return enlaces.filter((l) => l && l.url).map((l, i) => {
    const ext = /^https?:/.test(l.url);
    const clase = l.descarga ? 'btn btn--descarga' : i === 0 ? 'btn btn--principal' : 'btn btn--borde';
    return `<a class="${clase}" href="${esc(l.url)}"${l.descarga ? ' download' : ext ? ' target="_blank" rel="noopener"' : ''}>${esc(l.texto)}${ext && !l.descarga ? ' <span aria-hidden="true">↗</span>' : ''}</a>`;
  }).join('');
}

function paginaProyecto(p, { proyectos, juegos, articulos, proyectosPorId }) {
  const juegosHtml = juegos.length ? `<div class="rejilla-juegos">${juegos.map(tarjetaJuego).join('')}</div>` : '';
  const { html, indice } = markdown(p.cuerpo, { juegos: juegosHtml });
  const relacionados = articulos.filter((a) => a.proyecto === p.id);
  const otros = proyectos.filter((o) => o.id !== p.id);
  const mg = [{ texto: 'Inicio', url: '/' }, { texto: 'Proyectos', url: '/proyectos' }, { texto: p.nombre, url: p.ruta }];
  const portada = p.portada
    ? (p.portada.vertical
      ? `<div class="portada-telefonos">${p.portada.imagenes.map((im, i) => `<figure class="telefono${i ? ' telefono--atras' : ''}">${img(im.imagen, im.alt, { perezosa: false })}</figure>`).join('')}</div>`
      : `<figure class="pantalla">${img(p.portada.imagen, p.portada.alt, { perezosa: false })}</figure>`)
    : `<div class="arte arte--grande" style="--c:${esc(p.color)}">${ICONOS[p.ilustracion] || ''}</div>`;
  const galeria = (p.capturas || []).length ? `<section class="galeria" aria-labelledby="t-capturas"><h2 id="t-capturas">Capturas</h2>
  <div class="galeria-tira">${p.capturas.map((c) => `<figure class="${(medidas(c.imagen) || [1, 0])[1] > (medidas(c.imagen) || [1, 0])[0] ? 'vertical' : 'horizontal'}">${img(c.imagen, c.texto)}<figcaption>${esc(c.texto)}</figcaption></figure>`).join('')}</div></section>` : '';
  const preguntas = (p.preguntas || []).length ? `<section class="preguntas" aria-labelledby="t-preguntas"><h2 id="t-preguntas">Preguntas frecuentes</h2>
  ${p.preguntas.map((q) => `<div class="pregunta"><h3>${esc(q.p)}</h3><p>${esc(q.r)}</p></div>`).join('')}</section>` : '';
  const historial = (p.historial || []).length ? `<section class="historial" aria-labelledby="t-historial"><h2 id="t-historial">Historial del proyecto</h2>
  <ol>${[...p.historial].sort((a, b) => iso(b.fecha).localeCompare(iso(a.fecha))).map((h) => `<li><time datetime="${iso(h.fecha)}">${fechaLarga(h.fecha)}</time><p>${esc(h.texto)}</p></li>`).join('')}</ol></section>` : '';
  const indiceHtml = indice.length > 2 ? `<nav class="indice" aria-label="En esta página"><h2 class="ficha-titulo">En esta página</h2><ol>${indice.map((h) => `<li><a href="#${h.id}">${esc(h.texto)}</a></li>`).join('')}${galeria ? '<li><a href="#t-capturas">Capturas</a></li>' : ''}${preguntas ? '<li><a href="#t-preguntas">Preguntas frecuentes</a></li>' : ''}</ol></nav>` : '';

  const cuerpo = `<div class="envoltura">${migas(mg)}</div>
<section class="heroe envoltura">
  <div class="heroe-texto">
    <div class="heroe-sello">${p.icono ? img(p.icono, '', { clase: 'app-icono', perezosa: false }) : ''}<p class="ceja">${esc(p.tipo)}</p>${chipEstado(p.estado)}</div>
    <h1>${esc(p.nombre)}</h1>
    <p class="heroe-lema">${esc(p.lema)}</p>
    <p class="entrada">${esc(p.resumen)}</p>
    <div class="acciones">${botones(p.enlaces)}</div>
    ${p.nota ? `<p class="nota-boton">${esc(p.nota)}</p>` : ''}
  </div>
  <div class="heroe-arte">${portada}</div>
</section>
<div class="envoltura cuerpo-proyecto">
  <div class="lado">${bloqueFicha(p)}${indiceHtml}</div>
  <article class="contenido">${html}</article>
</div>
<div class="envoltura extras">
  ${galeria}
  ${preguntas}
  ${anuncio('final')}
  ${historial}
  ${relacionados.length ? `<section aria-labelledby="t-rel"><h2 id="t-rel">En la bitácora</h2><div class="rejilla-notas">${relacionados.map((a) => tarjetaArticulo(a, proyectosPorId)).join('')}</div></section>` : ''}
  <section aria-labelledby="t-otros"><h2 id="t-otros">Otros proyectos</h2><div class="rejilla-cartas rejilla-cartas--chica">${otros.map((o) => tarjetaProyecto(o, proyectos.indexOf(o))).join('')}</div></section>
</div>`;

  const esquema = p.esquema ? {
    '@context': 'https://schema.org', '@type': p.esquema.tipo || 'SoftwareApplication', name: p.nombre, description: p.resumen, url: urlAbs(p.ruta),
    image: urlAbs(p.compartir || '/og.jpg'), inLanguage: 'es', author: { '@type': 'Organization', name: SITIO.nombre, url: SITIO.dominio },
    ...(p.esquema.genero ? { genre: p.esquema.genero } : {}), ...(p.esquema.categoria ? { applicationCategory: p.esquema.categoria } : {}),
    ...(p.esquema.plataformas ? { [p.esquema.tipo === 'VideoGame' ? 'gamePlatform' : 'operatingSystem']: p.esquema.plataformas } : {}),
    ...(p.esquema.gratis ? { offers: { '@type': 'Offer', price: '0', priceCurrency: 'MXN' } } : {}),
  } : null;
  const faq = (p.preguntas || []).length ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.preguntas.map((q) => ({ '@type': 'Question', name: q.p, acceptedAnswer: { '@type': 'Answer', text: q.r } })) } : null;
  return layout({ titulo: p.nombre, descripcion: p.descripcion || p.resumen, ruta: p.ruta, imagen: p.compartir, cuerpo, jsonld: [jsonMigas(mg), esquema, faq].filter(Boolean), proyectos });
}

function paginaJuego(j, { juegos, proyectos }) {
  const { html } = markdown(j.cuerpo);
  const mg = [{ texto: 'Inicio', url: '/' }, { texto: 'Arcada', url: '/arcada' }, { texto: j.nombre, url: `/arcada/${j.id}` }];
  const otros = juegos.filter((o) => o.id !== j.id);
  const cuerpo = `<div class="envoltura">${migas(mg)}</div>
<section class="heroe heroe--juego envoltura">
  <div class="heroe-arte"><figure class="telefono">${img(j.imagen, `Partida de ${j.nombre} en un celular`, { perezosa: false })}</figure></div>
  <div class="heroe-texto">
    <div class="heroe-sello"><p class="ceja">${esc(j.genero)}</p></div>
    <h1>${esc(j.nombre)}</h1>
    <p class="heroe-lema">${esc(j.lema)}</p>
    <p class="entrada">${esc(j.descripcion)}</p>
    <div class="acciones"><a class="btn btn--principal btn--grande" href="/arcada/jugar/${j.archivo}">Jugar ${esc(j.nombre)}</a></div>
    <ul class="chips">${(j.datos || []).map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
  </div>
</section>
<div class="envoltura cuerpo-juego">
  <article class="contenido">${html}</article>
</div>
<div class="envoltura extras">
  ${anuncio('final')}
  <section aria-labelledby="t-mas"><h2 id="t-mas">Más juegos de la arcada</h2><div class="rejilla-juegos">${otros.map(tarjetaJuego).join('')}</div></section>
</div>`;
  const esquema = {
    '@context': 'https://schema.org', '@type': 'VideoGame', name: j.nombre, description: j.descripcion, url: urlAbs(`/arcada/${j.id}`),
    image: urlAbs(j.imagen), genre: j.genero, inLanguage: 'es', gamePlatform: ['Navegador web', 'Android', 'iPhone', 'PC'],
    author: { '@type': 'Organization', name: SITIO.nombre }, offers: { '@type': 'Offer', price: '0', priceCurrency: 'MXN' },
  };
  return layout({ titulo: `${j.nombre}: juega gratis en línea`, descripcion: `${j.descripcion} Gratis, en español y sin descargar.`, ruta: `/arcada/${j.id}`, imagen: j.imagen, cuerpo, jsonld: [jsonMigas(mg), esquema], proyectos });
}

function paginaBitacora({ articulos, proyectos, proyectosPorId }) {
  const mg = [{ texto: 'Inicio', url: '/' }, { texto: 'Bitácora', url: '/bitacora' }];
  const cuerpo = `<div class="envoltura">${migas(mg)}
<header class="cab-pagina"><p class="ceja">Guías, tutoriales y notas</p><h1>Bitácora</h1>
<p class="entrada">Explicamos cómo se juegan y cómo se usan nuestros proyectos, contamos de dónde salen sus ideas y avisamos qué hay de nuevo. Todo lo escribimos nosotros.</p></header>
<div class="rejilla-notas rejilla-notas--lista">${articulos.map((a) => tarjetaArticulo(a, proyectosPorId)).join('')}</div></div>`;
  return layout({ titulo: 'Bitácora', descripcion: 'Guías, tutoriales y notas de SeaKingsStudios sobre Arte o Cringe, Cartas del Quinto Sol, Bocón Estudio y la arcada.', ruta: '/bitacora', cuerpo, jsonld: [jsonMigas(mg)], proyectos });
}

function paginaArticulo(a, { articulos, proyectos, proyectosPorId }) {
  const { html, palabras } = markdown(a.cuerpo);
  const p = a.proyecto && proyectosPorId[a.proyecto];
  const minutos = Math.max(1, Math.round(palabras / 200));
  const mg = [{ texto: 'Inicio', url: '/' }, { texto: 'Bitácora', url: '/bitacora' }, { texto: a.titulo, url: `/bitacora/${a.id}` }];
  const mas = articulos.filter((o) => o.id !== a.id).slice(0, 3);
  const cuerpo = `<div class="envoltura">${migas(mg)}</div>
<article class="envoltura articulo">
  <header class="cab-articulo">
    <p class="nota-meta"><time datetime="${iso(a.fecha)}">${fechaLarga(a.fecha)}</time> · ${minutos} min de lectura${p ? ` · <a href="${p.ruta}">${esc(p.nombre)}</a>` : ''}</p>
    <h1>${esc(a.titulo)}</h1>
    <p class="entrada">${esc(a.descripcion)}</p>
    <p class="autor">Por ${esc(SITIO.responsable)}, ${esc(SITIO.nombre)}</p>
  </header>
  ${a.imagen ? `<figure class="articulo-foto${(medidas(a.imagen) || [1, 0])[1] > (medidas(a.imagen) || [1, 0])[0] ? ' vertical' : ''}">${img(a.imagen, a.alt || '', { perezosa: false })}${a.pie ? `<figcaption>${esc(a.pie)}</figcaption>` : ''}</figure>` : ''}
  <div class="contenido">${html}</div>
  ${p ? `<aside class="caja-proyecto"><div><p class="ceja">Sobre el proyecto</p><h2>${esc(p.nombre)}</h2><p>${esc(p.resumen)}</p></div><a class="btn btn--principal" href="${p.ruta}">Ver ${esc(p.nombre)}</a></aside>` : ''}
  ${anuncio('final')}
</article>
<div class="envoltura extras"><section aria-labelledby="t-mas"><h2 id="t-mas">Sigue leyendo</h2><div class="rejilla-notas">${mas.map((o) => tarjetaArticulo(o, proyectosPorId)).join('')}</div></section></div>`;
  const ld = {
    '@context': 'https://schema.org', '@type': 'Article', headline: a.titulo, description: a.descripcion, datePublished: iso(a.fecha), dateModified: iso(a.actualizado || a.fecha),
    inLanguage: 'es', mainEntityOfPage: urlAbs(`/bitacora/${a.id}`), image: urlAbs(a.imagen || '/og.jpg'),
    author: { '@type': 'Person', name: SITIO.responsable }, publisher: { '@type': 'Organization', name: SITIO.nombre, logo: { '@type': 'ImageObject', url: urlAbs('/icono.svg') } },
  };
  return layout({ titulo: a.titulo, descripcion: a.descripcion, ruta: `/bitacora/${a.id}`, imagen: a.imagen, cuerpo, jsonld: [jsonMigas(mg), ld], tipoOg: 'article', proyectos });
}

function paginaSimple(pg, { proyectos }) {
  const ruta = `/${pg.id}`;
  const { html } = markdown(pg.cuerpo.replace(/\{\{correo\}\}/g, SITIO.correo).replace(/\{\{responsable\}\}/g, SITIO.responsable));
  const mg = [{ texto: 'Inicio', url: '/' }, { texto: pg.titulo, url: ruta }];
  const extra = pg.id === 'contacto' ? `<div class="caja-correo"><p class="ceja">Correo del estudio</p><p class="correo" id="correo">${esc(SITIO.correo)}</p>
  <div class="acciones"><a class="btn btn--principal" href="mailto:${esc(SITIO.correo)}">Escribir un correo</a><button class="btn btn--borde" type="button" id="copiar">Copiar dirección</button></div><p class="aviso" id="aviso" aria-live="polite"></p></div>
  <script>document.getElementById('copiar').addEventListener('click',function(){var a=document.getElementById('aviso');var t=document.getElementById('correo').textContent;var sel=function(){var r=document.createRange();r.selectNodeContents(document.getElementById('correo'));var s=getSelection();s.removeAllRanges();s.addRange(r);a.textContent='Dirección seleccionada. Cópiala con tu teclado.';};try{navigator.clipboard.writeText(t).then(function(){a.textContent='Dirección copiada.';},sel);}catch(e){sel();}});</script>` : '';
  const cuerpo = `<div class="envoltura">${migas(mg)}</div>
<article class="envoltura articulo">
  <header class="cab-articulo"><p class="ceja">${esc(pg.ceja || SITIO.nombre)}</p><h1>${esc(pg.titulo)}</h1>${pg.entrada ? `<p class="entrada">${esc(pg.entrada)}</p>` : ''}${pg.actualizado ? `<p class="nota-meta">Última actualización: ${fechaLarga(pg.actualizado)}</p>` : ''}</header>
  ${extra}
  <div class="contenido">${html}</div>
</article>`;
  return layout({ titulo: pg.titulo, descripcion: pg.descripcion, ruta, cuerpo, jsonld: [jsonMigas(mg)], proyectos });
}

function pagina404({ proyectos }) {
  const cuerpo = `<section class="envoltura no-encontrada">${AJOLOTE}<div><p class="ceja">Error 404</p><h1>Esta página se fue nadando</h1>
<p class="entrada">No encontramos lo que buscabas. Puede que la dirección esté mal escrita o que la página haya cambiado de lugar.</p>
<div class="acciones"><a class="btn btn--principal" href="/">Ir al inicio</a><a class="btn btn--borde" href="/proyectos">Ver proyectos</a><a class="btn btn--borde" href="/arcada">Ir a la arcada</a></div></div></section>`;
  return layout({ titulo: 'Página no encontrada', descripcion: 'La página que buscas no existe.', ruta: '/404', cuerpo, anuncios: false, indexar: false, proyectos });
}

// Los juegos clásicos se publican tal cual, pero sin la publicidad externa
// que traían, sin service worker y con el botón de regresar a la arcada.
function prepararJuego(html) {
  return html
    .replace(/<link rel="manifest"[^>]*>\s*/g, '')
    .replace(/'serviceWorker' in navigator/g, 'false')
    .replace(/function loadAd\(([^)]*)\)\s*\{/, 'function loadAd($1){ return;')
    .replace(/href="index\.html"/g, 'href="/arcada"')
    .replace('</head>', '<meta name="robots" content="noindex">\n<link rel="icon" href="/icono.svg" type="image/svg+xml">\n<style>.ad-label,.ad-slot,.ad-banner-bottom{display:none!important}</style>\n</head>');
}

// ---------------------------------------------------------------------
//  Armado
// ---------------------------------------------------------------------
const VERSION_CSS = String(AHORA.getTime()).slice(-8);

function construir() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  const proyectos = leerCarpeta('proyectos').map((p) => ({ ...p, ruta: p.ruta || `/proyectos/${p.id}` })).sort((a, b) => (a.orden ?? 99) - (b.orden ?? 99));
  const juegos = leerCarpeta('arcada').sort((a, b) => (a.orden ?? 99) - (b.orden ?? 99));
  const articulos = leerCarpeta('bitacora').filter((a) => !a.borrador).sort((a, b) => iso(b.fecha).localeCompare(iso(a.fecha)));
  const paginas = leerCarpeta('paginas');
  const proyectosPorId = Object.fromEntries(proyectos.map((p) => [p.id, p]));
  const datos = { proyectos, juegos, articulos, paginas, proyectosPorId };

  for (const a of articulos) if (a.proyecto && !proyectosPorId[a.proyecto]) console.warn(`  ⚠ El artículo ${a.id} menciona un proyecto que no existe: ${a.proyecto}`);

  copiarCarpeta(PUBLICO, DIST);
  fs.copyFileSync(path.join(RAIZ, 'estilos.css'), path.join(DIST, 'estilos.css'));
  copiarCarpeta(path.join(RAIZ, 'juegos-clasicos'), path.join(DIST, 'arcada', 'jugar'), prepararJuego);

  const rutas = [];
  const pagina = (ruta, html) => { escribir(ruta === '/' ? 'index.html' : `${ruta.slice(1)}.html`, html); rutas.push(ruta); };

  pagina('/', paginaInicio(datos));
  pagina('/proyectos', paginaProyectos(datos));
  for (const p of proyectos) pagina(p.ruta, paginaProyecto(p, { ...datos, juegos: p.ruta === '/arcada' ? juegos : [] }));
  for (const j of juegos) pagina(`/arcada/${j.id}`, paginaJuego(j, datos));
  pagina('/bitacora', paginaBitacora(datos));
  for (const a of articulos) pagina(`/bitacora/${a.id}`, paginaArticulo(a, datos));
  for (const pg of paginas) pagina(`/${pg.id}`, paginaSimple(pg, datos));
  escribir('404.html', pagina404(datos));

  escribir('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rutas.map((r) => `  <url><loc>${urlAbs(r)}</loc></url>`).join('\n')}\n</urlset>\n`);
  escribir('robots.txt', `User-agent: *\nAllow: /\nDisallow: /arcada/jugar/\n\nSitemap: ${urlAbs('/sitemap.xml')}\n`);

  console.log(`✓ Sitio listo en dist/: ${rutas.length} páginas (${proyectos.length} proyectos, ${juegos.length} juegos, ${articulos.length} artículos).`);
}

construir();
