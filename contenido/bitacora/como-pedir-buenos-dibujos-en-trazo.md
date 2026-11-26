---
titulo: Cómo pedir buenos dibujos en Trazo (y cómo una IA puede dibujar con código)
descripcion: Llega Trazo, nuestra herramienta para hacer dibujos de caricatura en SVG. Te contamos cómo dibuja una IA de texto, qué pedidos salen mejor y cómo llevar tus dibujos a Bocón Estudio.
fecha: 2026-11-26
proyecto: trazo
imagen: /img/trazo/tapete.webp
alt: Trazo con el campo para escribir el dibujo y una manzana de caricatura con borde blanco sobre un tapete de corte verde
pie: En Trazo escribes qué quieres y el dibujo sale sobre el tapete, listo para descargarlo o llevarlo a Bocón Estudio.
---

Hoy estrenamos **Trazo**, en [trazo.seakingsstudios.com](https://trazo.seakingsstudios.com). Es una herramienta para hacer dibujos de caricatura: escribes qué quieres y sale un dibujo con contorno grueso y colores planos, que puedes descargar o llevar directo a [Bocón Estudio](/proyectos/bocon-estudio). En esta nota te contamos cómo funciona por dentro y, sobre todo, cómo pedirle las cosas para que salgan bien a la primera.

## Una IA que no pinta: escribe

Cuando piensas en dibujos con IA, seguro piensas en programas que pintan una imagen pixel por pixel. Trazo no funciona así. Usa una IA de **texto**, Gemini de Google, y le pide que escriba el dibujo como código **SVG**.

Un SVG es un archivo de texto que describe figuras. Por ejemplo, este pedacito dibuja un círculo rojo con borde oscuro:

```
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="#ff4b55" stroke="#1b1a22" stroke-width="6"/>
</svg>
```

`cx` y `cy` dicen dónde está el centro, `r` qué tan grande es, `fill` el color de relleno y `stroke` el color del contorno. Un dibujo de Trazo es eso mismo, pero con decenas de figuras y curvas: la silueta de una manzana, su hoja, los ojos, el brillo.

Que el dibujo sea código tiene sus ventajas. Se ve nítido aunque lo agrandes, pesa unos cuantos KB y se puede abrir en Inkscape, Illustrator o Figma para cambiarle un color. Y como a la IA le damos siempre las mismas reglas de estilo, todos los dibujos combinan entre sí.

## Lo que mejor sale

La IA tiene que imaginarse el dibujo y escribirlo de memoria, figura por figura, sin verlo. Por eso le van mejor las cosas sencillas y reconocibles. Estos consejos hacen mucha diferencia:

1. **Un solo protagonista.** «Un taco feliz» sale mejor que «una taquería con clientes».
2. **Dos o tres detalles, no diez.** «Un gato naranja con bufanda» le da suficiente para hacerlo especial sin enredarse.
3. **Di la emoción.** Con «enojado», «dormido», «sorprendido» o «presumido», la cara cambia y el dibujo cuenta algo.
4. **Di los colores que importan.** «Un coche azul» o «un hongo rojo con puntos blancos» evita que la IA elija por ti.
5. **Evita los textos largos.** Las letras no son su fuerte. Si tu video necesita un letrero, ponle el texto después en Bocón, que tiene estilos de letra para eso.
6. **Cosas, no lugares.** Un objeto o un personaje con fondo transparente es más útil en un video que un paisaje, porque lo puedes poner encima de cualquier fondo.
7. **Arregla en vez de empezar de cero.** Si casi quedó, usa «¿Le cambias algo?» con un cambio concreto: «hazle los ojos más grandes», «quítale las piernas», «que la hoja sea verde oscuro». La IA recibe el dibujo actual y solo cambia eso.
8. **Si no se parece, pide otra versión.** «Hacer otra versión» le pide un diseño distinto, con otra pose u otro ángulo.

<!-- anuncio -->

## Ideas para tus videos

Si no sabes por dónde empezar, estas ideas suelen salir bien:

- **Comida:** un elote con chile, una concha de chocolate, un tamal sonriente, un vaso de agua de horchata.
- **Objetos que un personaje puede sostener:** un celular con la pantalla rota, un trofeo dorado, una lupa, un paraguas abierto.
- **Reacciones:** un corazón roto, una bombilla encendida, un signo de interrogación nervioso, una nube de tormenta enojada.
- **Animales:** un ajolote rosa nadando, un perro salchicha con lentes, un gallo despertador, un pez globo inflado.
- **Fechas:** una calaverita de azúcar, una piñata de estrella, una rosca de reyes, una vela de cumpleaños.

## Llévalo a Bocón Estudio

Hay dos caminos:

1. **Desde Trazo.** Toca **Estampita para Bocón**: se descarga el dibujo recortado, con fondo transparente y borde blanco. En Bocón ve a **Imagen → Subir de tu equipo**. Si lo vas a volver a usar, en los ajustes de la imagen toca **Guardar en mis imágenes**.
2. **Desde Bocón.** En **Imagen → Dibujar con IA** está la misma herramienta. Al tocar **Poner en la escena**, el dibujo entra al video y se guarda solo en **Dibujos con IA**, para usarlo en cualquier proyecto.

Ya en la escena es una imagen como cualquier otra: puede aparecer con un pop, flotar o acercarse con la cámara, y tus personajes la pueden señalar.

## Cuántos dibujos tienes

Para dibujar entras con tu cuenta de SeaKings, la misma de Bocón. Con la cuenta gratis tienes **10 dibujos al mes** y con Bocón Pro, **30**. Se cuentan juntos en Trazo y en Bocón y se renuevan el día 1. Si la IA falla, ese intento no se cuenta. Debajo de cada dibujo ves cuántos te quedan.

Trazo también se instala como app: toca **Instalar** arriba, o en iPhone usa Compartir y luego «Agregar a inicio».

Cuéntanos en nuestro Discord qué dibujaste y qué cosas te gustaría que Trazo dibujara mejor. Con lo que nos digan vamos afinando sus reglas de estilo.
