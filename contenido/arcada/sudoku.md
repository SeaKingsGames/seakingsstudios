---
nombre: Sudoku
orden: 6
archivo: sudoku
genero: Rompecabezas de lógica
lema: Del 1 al 9 sin repetir, con notas, pistas y deshacer.
descripcion: Sudoku gratis en el navegador con cuatro dificultades, notas, pistas y deshacer. Cada tablero tiene una sola solución.
imagen: /img/arcada/sudoku.webp
datos: [4 dificultades, Notas y pistas, Una sola solución, Gratis]
---

## Cómo se juega

El tablero tiene 81 casillas en nueve filas, nueve columnas y nueve cuadros de 3 × 3. Algunas casillas ya traen número. Tu trabajo es llenar las demás para que **cada fila, cada columna y cada cuadro tenga los números del 1 al 9 sin repetir**.

1. Toca una casilla vacía.
2. Toca el número que va ahí en el teclado de abajo.

Debajo de cada número del teclado ves cuántos te faltan por colocar. Cada sudoku del juego tiene **una sola solución**, así que siempre se puede resolver con lógica, sin adivinar.

## Herramientas

- **Notas:** activa el lápiz para apuntar en una casilla los números que podrían ir ahí. Es la herramienta clave en los niveles difíciles.
- **Pista:** llena por ti una casilla correcta. Tienes tres por partida.
- **Deshacer** y **Borrar** corrigen tus últimas jugadas.
- **Perder con 3 errores:** si activas esta opción, al tercer número equivocado se acaba la partida. Si la quitas, puedes equivocarte las veces que quieras.

Si sales a la mitad, el juego guarda tu sudoku para que lo continúes después.

## Dificultades

| Dificultad | Números que ya trae |
|---|---|
| Fácil | 38 |
| Medio | 32 |
| Difícil | 27 |
| Experto | Alrededor de 24 |

<!-- anuncio -->

## Cómo resolverlo

- **Busca el único lugar.** Elige un número, por ejemplo el 5, y revisa un cuadro donde falte. Si las filas y columnas que lo cruzan ya tienen 5, a veces solo queda una casilla posible.
- **Busca el único número.** En una casilla, descarta los números que ya están en su fila, su columna y su cuadro. Si solo queda uno, ese es.
- **Usa las notas en los niveles altos.** Apunta los candidatos de cada casilla y ve borrando conforme llenas el tablero.
- **Busca parejas.** Si dos casillas de una fila solo pueden tener 3 o 7, esos dos números ya tienen dueño y puedes borrarlos de las demás casillas de esa fila.
- **Empieza por lo más lleno.** Las filas, columnas y cuadros con más números son los que antes se resuelven.
