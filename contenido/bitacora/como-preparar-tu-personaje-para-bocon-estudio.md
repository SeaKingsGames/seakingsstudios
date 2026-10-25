---
titulo: Cómo preparar tu personaje para Bocón Estudio
descripcion: Paso a paso para convertir tu dibujo en una marioneta que habla en Bocón Estudio, ya sea en capas PNG o desde una sola imagen.
fecha: 2026-10-24
proyecto: bocon-estudio
imagen: /img/bocon-estudio/editor.webp
alt: Editor de Bocón Estudio con un ajolote y un gato listos para hablar
pie: Los personajes de ejemplo de Bocón Estudio. Con esta guía puedes poner a los tuyos en su lugar.
---

Bocón Estudio trae personajes listos, pero lo divertido es animar a los tuyos. Hay dos formas de hacerlo: armar una **marioneta en capas**, que da más control, o crear una **marioneta desde una sola imagen**, que es más rápida. Aquí te explicamos las dos.

## Opción 1: marioneta en capas PNG

Esta es la forma con mejores resultados. Separas tu personaje en partes y Bocón las mueve por separado: la cabeza gira, los ojos parpadean, la boca cambia de forma y los brazos hacen poses.

### 1. Dibuja todas las capas en el mismo lienzo

Lo más fácil es dibujar al personaje completo en tu programa de siempre y luego exportar cada parte como **PNG transparente del mismo tamaño de lienzo**. Así, cuando las subes, cada pieza cae justo en su lugar sin que tengas que acomodar nada.

Si tus piezas ya vienen recortadas, también funcionan, pero tendrás que acomodarlas una por una en el editor con la opción «Solo esta pieza».

### 2. Ponle a cada archivo el nombre de su parte

Bocón reconoce las piezas por el nombre del archivo, en español o en inglés. Estos son los nombres básicos:

| Archivo | Qué es |
|---|---|
| `cuerpo.png` | El cuerpo, sin cabeza ni brazos |
| `cabeza.png` | La cabeza, sin ojos ni boca |
| `ojos.png` | Los ojos abiertos |
| `ojos_cerrados.png` | Los ojos cerrados, para parpadear |
| `pupilas.png` | Las pupilas, si quieres que miren a los lados |
| `cejas.png` | Las cejas |
| `brazo_izq.png` y `brazo_der.png` | Los brazos, del hombro al codo |
| `antebrazo_izq.png` y `antebrazo_der.png` | Del codo a la mano |
| `pie_izq.png` y `pie_der.png` | Los pies, que se levantan al caminar |
| `detras.png` | Lo que va detrás de la cabeza, como pelo largo o una capa |

### 3. Dibuja las bocas

Para el lip-sync necesitas una boca por cada sonido. Bocón usa doce formas, y cada una se nombra con `boca_` y su sonido:

| Archivo | Para qué sonidos |
|---|---|
| `boca_neutral.png` | Reposo, cuando no habla |
| `boca_m.png` | M, B y P, con los labios cerrados |
| `boca_aa.png` | A, la boca bien abierta |
| `boca_ee.png` | E e I |
| `boca_oh.png` | O |
| `boca_u.png` | U y W |
| `boca_d.png` | D, T y N |
| `boca_s.png` | S, Z y CH |
| `boca_f.png` | F y V |
| `boca_l.png` | L |
| `boca_r.png` | R |
| `boca_uh.png` | Una boca neutra, a medio abrir |

No necesitas las doce para empezar. Con `boca_neutral`, `boca_m`, `boca_aa`, `boca_ee` y `boca_oh` ya se ve natural; si falta alguna, Bocón usa la más parecida.

### 4. Agrega caras para los gestos (opcional)

Los gestos de Bocón son Feliz, Triste, Enojado, Sorprendido, Guiño y Pícaro. Si quieres que tu personaje cambie de cara con ellos, agrega el nombre del gesto al archivo: `feliz_ojos.png`, `triste_cejas.png` o `enojado_boca.png`. Si no los dibujas, el personaje usa sus ojos y cejas normales.

### 5. Súbelas todas juntas

En Bocón, abre el editor de marioneta y usa **Subir varias** para elegir todos los archivos a la vez. Revisa que cada pieza haya quedado en su grupo y luego ajusta dos cosas:

- **El cuello.** Es el círculo rojo de la cabeza: el punto desde donde gira. Ponlo donde se une con el cuerpo.
- **Hombros y codos.** En los brazos, los círculos rojos marcan el hombro y el codo. Si quedan bien puestos, las poses se ven naturales.

Usa **Probar hablando** y los botones de gesto y pose de prueba para ver cómo se mueve antes de guardar. Cuando te guste, toca **Guardar en biblioteca** para usarlo en todos tus proyectos.

<!-- anuncio -->

## Opción 2: marioneta desde una imagen

Si solo tienes un dibujo completo del personaje, Bocón puede armarle la cara por ti. Desde Agregar, Personaje, elige crear una marioneta desde una imagen y sube tu dibujo.

El programa detecta los ojos y te deja escoger una boca para el lip-sync. Si tu dibujo ya trae boca, elige «Ya tiene boca». También crea la cabeza parpadeando, con los ojos cerrados, y una cara feliz con ojos ^^ para el gesto Feliz. Revisa la vista previa con «Ver cómo queda», ajusta los ojos si no los encontró bien y toca «Crear marioneta».

Para que salga mejor:

- Usa al personaje **completo**, de frente o de tres cuartos.
- Dibújalo **sin boca** y con un contorno marcado.
- Ponlo sobre **fondo verde o transparente**. Si tu imagen tiene fondo, el botón «Quitar fondo» ayuda.

Después puedes subirle más caras de gestos desde «Editar marioneta», como en la opción de capas.

## Errores comunes

- **Las piezas aparecen desacomodadas.** Casi siempre es porque se exportaron recortadas. Vuelve a exportarlas con el mismo tamaño de lienzo o acomódalas con «Solo esta pieza».
- **La cabeza gira desde un lugar raro.** Mueve el círculo rojo del cuello.
- **La boca no se mueve.** Revisa que los archivos de boca empiecen con `boca_` y que la voz esté en la pista de ese personaje.
- **Los brazos se doblan al revés.** Intercambia los círculos de hombro y codo o revisa que izquierdo y derecho no estén cruzados.

Con tu personaje listo, el siguiente paso es ponerle voz. Si quieres usarlo como avatar en una transmisión, sigue la guía de [Bocón Estudio en vivo con OBS](/bitacora/bocon-estudio-en-vivo-con-obs).
