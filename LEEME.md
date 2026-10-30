# SeaKingsStudios: sitio web

Este repositorio genera **www.seakingsstudios.com**. Las páginas no se escriben a mano: se arman solas a partir de los textos de la carpeta `contenido/`. Cada vez que subes un cambio a GitHub, Vercel corre `npm run build` y publica la carpeta `dist/`.

## Qué hay en cada carpeta

| Carpeta o archivo | Qué es |
|---|---|
| `sitio.config.mjs` | Datos generales: nombre, correo, redes, menú y AdSense |
| `contenido/proyectos/` | Una página por proyecto (Arte o Cringe, Bocón Estudio…) |
| `contenido/arcada/` | Una página por juego de la arcada |
| `contenido/bitacora/` | Guías y notas (el blog) |
| `contenido/paginas/` | Acerca de, Contacto y Política de privacidad |
| `publico/` | Archivos que se publican tal cual: imágenes, APK, `ads.txt`, ícono |
| `juegos-clasicos/` | Los juegos de la arcada (se publican en `/arcada/jugar/…`) |
| `estilos.css` | Colores, letras y diseño de todo el sitio |
| `build.mjs` | El generador. Normalmente no hay que tocarlo |

## Cómo agregar un proyecto nuevo

1. Copia `contenido/proyectos/bocon-estudio.md` y cámbiale el nombre, por ejemplo `mi-juego.md`. Ese nombre será la dirección: `seakingsstudios.com/proyectos/mi-juego`.
2. Cambia los datos de arriba, entre las dos líneas `---`: nombre, lema, resumen, estado, enlaces, ficha, preguntas…
3. Abajo de la segunda línea `---` escribe el texto largo. Usa `## Título` para cada sección.
4. Sube las capturas a `publico/img/mi-juego/` y escríbelas como `/img/mi-juego/captura.webp`.
5. Haz commit. En un minuto la página nueva aparece en el inicio, en Proyectos y en el menú de abajo.

**Estados posibles:** `publicado` (Disponible), `acceso` (Acceso anticipado), `prueba` (Prueba cerrada) y `desarrollo` (En desarrollo).

**Orden:** el campo `orden` decide en qué lugar sale la carta (1, 2, 3…).

**Si un enlace todavía no existe**, déjalo con `url: ""` y el botón no se muestra.

**Si un texto de los datos lleva dos puntos seguidos de un espacio** (por ejemplo `Ojo: algo`), ponlo entre comillas: `"Ojo: algo"`. Si no, el generador marca error y te dice en qué línea.

## Cómo agregar una guía o nota a la bitácora

1. Crea un archivo en `contenido/bitacora/`, por ejemplo `novedades-de-octubre.md`.
2. Arriba pon:

   ```
   ---
   titulo: El título de la nota
   descripcion: Una o dos frases de qué trata.
   fecha: 2026-11-01
   proyecto: arte-o-cringe
   imagen: /img/arte-o-cringe/captura-2.webp
   alt: Qué se ve en la imagen
   ---
   ```

   `proyecto` es opcional y es el nombre del archivo del proyecto, sin `.md`.
3. Abajo escribe el texto. Para que una nota no se publique todavía, agrega `borrador: true`.

## Cómo agregar un juego a la arcada

1. Copia el archivo del juego (`mi-juego.html`) a `juegos-clasicos/`. Si el repo de la arcada cambió `comun.css`, `comun.js` o `palabras.js`, cópialos también. El generador les quita los anuncios externos y el service worker, y el botón «Volver al inicio» lleva a la arcada.
2. Copia `contenido/arcada/snake.md` como `mi-juego.md` y pon `archivo: mi-juego`.
3. Agrega una captura en `publico/img/arcada/`.

## La arcada como app

La arcada se puede instalar en el celular. El generador arma solo:

- `/arcada/app.webmanifest`, a partir del `manifest.json` de `juegos-clasicos/` (nombre, colores, íconos y accesos directos).
- `/arcada-sw.js`, el service worker que guarda los juegos para jugar sin internet.

El botón «Instalar la arcada en tu celular» aparece en la página de la arcada y en la de cada juego, solo si la abren desde un navegador. La app abre en el menú de juegos (`/arcada/jugar`).

## Anuncios de AdSense

- El código de verificación de AdSense ya va en todas las páginas, con tu ID `ca-pub-7210216260904848`.
- Cuando Google apruebe el sitio, crea bloques de anuncios en AdSense y pega su número (`data-ad-slot`) en `sitio.config.mjs`, en `adsense.espacios`. Los anuncios aparecen solos donde los textos tienen `<!-- anuncio -->` y al final de cada página.
- Mientras esos espacios estén vacíos no se dibuja ningún recuadro.
- La página 404 y los juegos de `/arcada/jugar/` no llevan código de AdSense, para no poner anuncios encima de los controles.

## Probarlo en tu compu

```
npm install
npm run build
npx serve dist
```

Y abre la dirección que te muestre la terminal.
