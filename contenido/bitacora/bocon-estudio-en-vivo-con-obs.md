---
titulo: Bocón Estudio en vivo con OBS
descripcion: Cómo usar a tu personaje de Bocón Estudio como avatar en tus transmisiones con OBS, con la boca moviéndose en tiempo real y gestos con el teclado.
fecha: 2026-10-24
proyecto: bocon-estudio
imagen: /img/bocon-estudio/en-vivo.webp
alt: Modo en vivo de Bocón Estudio con un ajolote saludando sobre fondo verde
pie: El modo en vivo, con el ajolote saludando sobre fondo verde y la ayuda de teclas abajo.
---

El modo en vivo de Bocón Estudio convierte a cualquiera de tus personajes en un avatar para transmitir. Hablas al micrófono y la boca se mueve en tiempo real; con el teclado cambias de gesto y de pose sin dejar de hablar. En esta guía te explicamos cómo conectarlo con OBS para usarlo en TikTok, YouTube o Twitch.

## Lo que necesitas

- Bocón Estudio abierto en Chrome o Edge en tu computadora, de preferencia instalado como programa para que abra en su propia ventana.
- Un micrófono.
- OBS Studio, el programa gratuito para transmitir y grabar.
- Un personaje: uno de los que trae Bocón o el tuyo. Si todavía no lo tienes, revisa [cómo preparar tu personaje](/bitacora/como-preparar-tu-personaje-para-bocon-estudio).

## Paso 1: abre el modo en vivo

En Bocón toca **En vivo**, arriba a la derecha, y da permiso al micrófono cuando el navegador lo pida. Arriba aparece una barra con las opciones:

- **Personaje:** cuál de tus personajes vas a usar.
- **Fondo:** verde, azul o magenta para recortarlo en OBS, negro, o el fondo de tu escena si no vas a recortar nada.
- **Sensibilidad** e **Ignorar ruido:** cuánto reacciona la boca a tu voz.

Elige el personaje y el fondo verde. Si en tu ropa o en el personaje hay mucho verde, usa el azul o el magenta.

## Paso 2: captura la ventana en OBS

1. En OBS, en el panel de Fuentes, agrega una **Captura de ventana** y elige la ventana de Bocón Estudio.
2. Da clic derecho sobre la fuente y entra a **Filtros**.
3. Agrega el filtro **Chroma key** y elige el mismo color que pusiste de fondo en Bocón.

El fondo desaparece y tu personaje queda flotando sobre tu juego, tu cámara o lo que estés transmitiendo. Puedes moverlo y cambiarle el tamaño dentro de OBS como cualquier otra fuente.

## Paso 3: ajusta la boca

Habla un poco y observa la boca:

- Si **se mueve con el ruido de fondo**, como el ventilador o el teclado, sube **Ignorar ruido**.
- Si **casi no se mueve** cuando hablas, sube **Sensibilidad**.

Vale la pena dedicarle un minuto antes de cada transmisión, porque cambia según el micrófono y el cuarto.

<!-- anuncio -->

## Paso 4: actúa con el teclado

Mientras transmites, las teclas cambian la actuación al instante:

| Teclas | Qué hacen |
|---|---|
| 1 a 7 | Gestos: Neutral, Feliz, Triste, Enojado, Sorprendido, Guiño y Pícaro |
| Q, W, E, R, T, Y, U, I, O | Poses: Reposo, Saludar, Señalar, Festejar, En jarras, ¿No sé?, Cruzados, Aplaudir y Bailar |
| Espacio | Empieza o detiene la grabación de tu actuación |
| H | Oculta o muestra la ayuda de teclas |
| Esc | Sale del modo en vivo |

Además, los ojos del personaje siguen al mouse. Arrastra al personaje para moverlo dentro de la ventana y usa la rueda del mouse para cambiarle el tamaño.

Un consejo: oculta la ayuda con **H** antes de empezar, para que no aparezca en tu transmisión.

## Paso 5: graba tu actuación (opcional)

Si tocas **Grabar actuación** o la barra espaciadora, Bocón guarda todo lo que haces: tu voz, los gestos y las poses. Al salir del modo en vivo, la actuación aparece en la línea de tiempo de tu escena como bloques normales. Así puedes improvisar un video de corrido y luego corregir un gesto, agregar textos o efectos y exportarlo.

La opción **Oír la escena** te deja escuchar los sonidos y la música de tu escena mientras actúas, para que tu voz vaya a tiempo.

## Problemas frecuentes

- **No pude usar el micrófono.** El navegador no tiene permiso. Da clic en el candado de la barra de direcciones, activa el micrófono para el sitio y vuelve a entrar al modo en vivo.
- **En OBS la ventana se ve negra.** En Windows, prueba cambiar el método de captura de la fuente o desactivar la aceleración por hardware del navegador.
- **El recorte deja un borde de color.** Sube un poco la similitud y la suavidad del filtro Chroma key en OBS.
