// =====================================================================
//  DATOS GENERALES DEL SITIO
//  Lo que cambies aquí se aplica a todas las páginas.
// =====================================================================

export default {
  nombre: 'SeaKingsStudios',
  dominio: 'https://www.seakingsstudios.com',
  descripcion: 'Estudio independiente mexicano de juegos para navegador, celular y PC: Arte o Cringe, Cartas del Quinto Sol, Bocón Estudio y una arcada de juegos clásicos.',
  lugar: 'Estado de México, México',
  responsable: 'Omar Medina Zambrano',
  correo: 'seakingsgames@gmail.com',
  lineaDeJuegos: 'SeaKingsGames',

  // Google Search Console → Etiqueta HTML: pega aquí solo el código de content="…"
  verificacionGoogle: 'dkazhYElwZubpvLf82z67UTvtWyqV4E77ui7lidiMJk',

  // Texto de la portada
  portada: {
    ceja: 'Estudio independiente · Estado de México',
    entrada: 'Hacemos juegos para reírte con tus amigos y herramientas para animar tus propios personajes. Todo funciona en el navegador, en el celular y en la PC, sin cuentas obligatorias.',
  },

  // Menú principal (en este orden)
  menu: [
    { texto: 'Proyectos', url: '/proyectos' },
    { texto: 'Arcada', url: '/arcada' },
    { texto: 'Bitácora', url: '/bitacora' },
    { texto: 'Acerca', url: '/acerca' },
    { texto: 'Contacto', url: '/contacto' },
  ],

  redes: [
    { red: 'TikTok', usuario: '@litoelajolote', seguidores: '45 mil', url: 'https://www.tiktok.com/@litoelajolote' },
    { red: 'TikTok', usuario: '@seakingsstudios', seguidores: '', url: 'https://www.tiktok.com/@seakingsstudios' },
    { red: 'Facebook', usuario: 'SeaKingsGames', seguidores: '25 mil', url: 'https://www.facebook.com/share/1Bp8ELTga8/' },
  ],

  // -------------------------------------------------------------------
  //  GOOGLE ADSENSE
  //  cliente: tu ID de editor (AdSense → Cuenta → Información de la cuenta).
  //  espacios: cuando AdSense apruebe el sitio, crea bloques de anuncios
  //  (Anuncios → Por bloque de anuncios → Display) y pega aquí el número
  //  de "data-ad-slot" de cada uno. Mientras estén vacíos, no se dibuja
  //  ningún recuadro: la página se ve limpia y solo queda el código de
  //  verificación que Google necesita para revisar el sitio.
  // -------------------------------------------------------------------
  adsense: {
    cliente: 'ca-pub-7210216260904848',
    espacios: {
      inicio: '',     // portada, entre la arcada y la bitácora
      contenido: '',  // dentro del texto de proyectos, juegos y artículos
      final: '',      // al final de proyectos, juegos y artículos
    },
  },
};
