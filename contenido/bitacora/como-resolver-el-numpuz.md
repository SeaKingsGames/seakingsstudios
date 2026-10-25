---
titulo: Cómo resolver el Numpuz, el puzzle de los números
descripcion: Un método paso a paso para resolver cualquier tablero del Numpuz, del 3 × 3 al 6 × 6, y la historia del famoso puzzle del 15.
fecha: 2026-10-24
proyecto: seakings-classic-games
imagen: /img/arcada/numpuz.webp
alt: Tablero de Numpuz de 4 × 4 con las piezas revueltas
pie: Un tablero de 4 × 4 recién mezclado. Con este método se resuelve sin adivinar.
---

El Numpuz de nuestra arcada es la versión digital de un juguete con casi 150 años: el rompecabezas deslizante de números. A primera vista parece cuestión de suerte, pero tiene un método que funciona siempre. Aquí te lo explicamos, con el tablero de 4 × 4 como ejemplo.

## Las reglas, en corto

El tablero tiene piezas numeradas y un hueco. Solo puedes deslizar al hueco una pieza que esté junto a él. El objetivo es dejar los números en orden, de izquierda a derecha y de arriba abajo, con el hueco en la esquina inferior derecha.

En la PC también puedes jugar con las flechas: la flecha indica hacia dónde se mueve la pieza. Si te pierdes, el botón **Ver objetivo** te enseña cómo debe quedar el tablero.

## La idea clave: resolver por partes

El error más común es intentar acomodar todos los números a la vez. Lo que funciona es resolver **una fila o una columna a la vez** y no volver a tocarla. Cada vez que terminas una, el tablero que te queda es más chico, hasta que solo quedan unas pocas piezas.

En un 4 × 4 el orden es:

1. La primera fila: 1, 2, 3 y 4.
2. La segunda fila: 5, 6, 7 y 8.
3. Las dos filas que quedan, columna por columna: primero 9 y 13, luego 10 y 14.
4. El último cuadrito de 2 × 2: 11, 12 y 15.

## Paso 1: las primeras piezas de la fila

Las primeras piezas de una fila son fáciles: lleva el 1 a su lugar, luego el 2, sin mover el 1. Para llevar una pieza a donde quieres, mueve el hueco alrededor de ella. Piensa que es el hueco el que viaja: lo pones delante de la pieza en la dirección en la que quieres moverla, y la deslizas.

## Paso 2: las dos últimas de la fila

Aquí está el truco. Si pones el 3 en su lugar, ya no hay forma de meter el 4 sin sacar el 3. La solución es meterlas **juntas**:

1. Lleva el **4** a la casilla donde va el **3**.
2. Lleva el **3** justo **debajo** del 4.
3. Lleva el hueco a la esquina de arriba a la derecha, sin mover el 1 ni el 2.
4. Desliza el 4 a la derecha y luego el 3 hacia arriba.

Listo: la fila queda 1, 2, 3, 4. Si al hacer el paso 2 el 3 se te atora en la esquina donde va el 4, sácalo de ahí antes de empezar; con dos o tres movimientos se acomoda.

La segunda fila se resuelve igual: 5 y 6 normales, y 7 y 8 juntos con el mismo truco.

## Paso 3: las últimas dos filas, por columnas

Cuando solo quedan dos filas ya no puedes seguir fila por fila, porque no hay espacio para el truco. Ahora se resuelven **columnas**, con el mismo truco de lado:

1. Lleva el **13** a la casilla donde va el **9**.
2. Lleva el **9** justo a la **derecha** del 13.
3. Lleva el hueco a la esquina de abajo a la izquierda.
4. Desliza el 13 hacia abajo y luego el 9 a la izquierda.

Repite con la siguiente columna: 10 y 14.

## Paso 4: el último cuadrito

Al final quedan tres piezas y el hueco en un cuadro de 2 × 2. Solo hay que girarlas en círculo hasta que queden en orden. Si das una vuelta completa y no quedan, gira en el otro sentido.

<!-- anuncio -->

## Para otros tamaños

- **3 × 3:** resuelve la primera fila con el truco de las dos últimas y luego las dos filas que quedan por columnas.
- **5 × 5 y 6 × 6:** el método es el mismo, solo que repites más veces el paso de las filas. Resuelve filas hasta que solo queden dos, y termina por columnas.

Los tableros grandes no son más difíciles, solo más largos. La clave es la paciencia: no deshagas lo que ya resolviste.

## ¿Siempre tiene solución?

En nuestro Numpuz, sí. El juego no coloca las piezas al azar: parte del tablero ordenado y lo revuelve con movimientos válidos, 30 en el de 3 × 3 y hasta 200 en el de 6 × 6. Como cada movimiento se puede deshacer, siempre existe un camino de regreso.

Si las piezas se acomodaran completamente al azar, la mitad de los tableros serían imposibles. Esto tiene que ver con la paridad: cada movimiento cambia el orden de las piezas de una forma que nunca permite, por ejemplo, intercambiar solo dos números y dejar todo lo demás igual.

## Un poco de historia

El rompecabezas de 15 piezas apareció en Estados Unidos en la década de 1870, y su invención se atribuye a Noyes Chapman, un jefe de correos de Nueva York. Hacia 1880 se volvió una fiebre: se jugaba en las oficinas, en los trenes y en las calles, en Estados Unidos y en Europa.

Desde 1879, dos matemáticos, William Johnson y William Story, habían demostrado que la mitad de las posiciones no tienen solución. Años después, el autor de acertijos Sam Loyd aseguró haber inventado el juego y contaba que había ofrecido mil dólares a quien resolviera el tablero con el 14 y el 15 intercambiados. Nadie podía cobrarlos: esa posición es una de las imposibles.

¿Listo para probar el método? [Juega Numpuz](/arcada/numpuz) gratis en tu navegador.
