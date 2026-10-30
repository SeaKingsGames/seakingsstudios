/* =====================================================
   SeaKingsGames · Banco de palabras
   Lo usan: ahorcado.html, ahorcado-live.html y sopa-letras.html
   34 categorías · ~2,300 palabras

   CÓMO AGREGAR PALABRAS
   - Cada línea es:   palabra: pista
   - Escribe con acentos y ñ normales (león, piñata, España).
   - Se valen dos o más palabras ("agujero negro").
   - La pista no debe incluir la palabra.
   - Las líneas que empiezan con // se ignoran.
   La dificultad se calcula sola por el número de letras:
   Fácil 3–5 · Medio 6–7 · Difícil 8–9 · Extra difícil 10 o más.
   ===================================================== */

const SK_PALABRAS_RAW = {

animales: { ico:'🐾', label:'Animales', lista:`
oso: Hiberna en invierno y le encanta la miel
gato: Dicen que tiene siete vidas
perro: El mejor amigo del ser humano
león: El rey de la selva
tigre: Felino naranja con rayas negras
lobo: Le aúlla a la luna
zorro: Astuto, de cola esponjada
pato: Hace cuac cuac
vaca: Nos da leche
cerdo: Le encanta revolcarse en el lodo
burro: Rebuzna y carga bultos
rana: Croa en el estanque
mono: Se cuelga de los árboles y come plátanos
pulpo: Tiene ocho brazos y tres corazones
foca: Aplaude con sus aletas sobre el hielo
puma: Felino americano, también llamado león de montaña
llama: Escupe y vive en los Andes
koala: Duerme casi todo el día abrazado a un eucalipto
panda: Oso blanco y negro que come bambú
cebra: Parece caballo con pijama de rayas
hiena: Su llamado suena como una carcajada
abeja: Hace miel y vive en panal
gallo: Canta al amanecer
búho: Ave nocturna que gira mucho la cabeza
erizo: Pequeño y cubierto de púas
topo: Vive bajo tierra y casi no ve
ratón: Le encanta el queso
alce: Venado gigante con astas anchas
tucán: Ave tropical de pico enorme y colorido
lince: Felino de orejas con pinceles negros
ajolote: Anfibio mexicano que conserva sus branquias toda la vida
jirafa: El animal más alto del mundo
ballena: El animal más grande que ha existido
delfín: Mamífero marino muy listo que usa sonar
caballo: Relincha y galopa
conejo: Orejas largas, salta y come zanahoria
tortuga: Lleva su casa en la espalda
tiburón: Pez cazador con varias filas de dientes
águila: Ave que aparece en el escudo de México
jaguar: El felino más grande de América
coyote: Pariente salvaje del perro que vive en el desierto
canguro: Salta y carga a su cría en una bolsa
ardilla: Guarda nueces para el invierno
camello: Tiene jorobas y aguanta días sin agua
gorila: El primate más grande que existe
mapache: Tiene antifaz natural y lava su comida
nutria: Flota boca arriba y se toma de la mano al dormir
castor: Construye presas con troncos
colibrí: Ave diminuta que puede volar hacia atrás
quetzal: Ave sagrada de largas plumas verdes
venado: Bambi era uno
gaviota: Ave de playa que te roba las papas
medusa: Gelatinosa, transparente y puede picar
jabalí: Cerdo salvaje con colmillos
halcón: Ave rapaz, la más veloz en picada
pantera: Felino de pelaje negro
cacatúa: Loro blanco con cresta
hámster: Roedor que corre en su ruedita
caracol: Baboso, lento y con concha en espiral
elefante: Tiene trompa y dicen que nunca olvida
cocodrilo: Reptil de río con mandíbula poderosa
mariposa: Antes de volar fue oruga
pingüino: Ave que no vuela pero nada en aguas heladas
camaleón: Cambia de color para esconderse
tlacuache: Marsupial mexicano que se hace el muerto
cangrejo: Camina de lado y tiene tenazas
armadillo: Tiene caparazón y algunos se hacen bolita
flamenco: Ave rosa que duerme parada en una pata
guepardo: El animal terrestre más rápido
leopardo: Felino de manchas que sube a sus presas a los árboles
escorpión: Arácnido con aguijón en la cola
capibara: El roedor más grande del mundo
perezoso: Tan lento que le crecen algas en el pelo
avestruz: La ave más grande; corre pero no vuela
zopilote: Ave carroñera de cabeza pelona
lagartija: Pierde la cola para escapar
orangután: Primate de pelo naranja que vive en Asia
tarántula: Araña grande y peluda
cucaracha: Sobrevive a todo y sale de noche en la cocina
pez globo: Se infla cuando se asusta
pez espada: Tiene la nariz larga como un sable
murciélago: Mamífero volador que cuelga de cabeza
hipopótamo: Pasa el día en el río y es muy territorial
rinoceronte: Tiene uno o dos cuernos sobre la nariz
ornitorrinco: Mamífero con pico de pato que pone huevos
salamandra: Anfibio que puede regenerar sus patas
dromedario: Camello de una sola joroba
luciérnaga: Insecto que brilla de noche
mantarraya: Pez plano que parece volar bajo el agua
correcaminos: Ave del desierto que corre muy rápido
chinchilla: Roedor con el pelaje más suave del mundo
saltamontes: Insecto brincador, primo del chapulín
oso hormiguero: Come insectos con una lengua larguísima
caballito de mar: El macho es quien se embaraza
estrella de mar: Tiene cinco brazos y vive en el fondo marino
boa: Serpiente que aprieta a sus presas
orca: Ballena asesina blanca y negra
atún: Pez grande que se come en lata
mosca: Zumba y se para en la comida
cobra: Serpiente que abre su capucha
garza: Ave blanca de patas largas que pesca en el agua
morsa: Tiene colmillos largos y bigotes
grillo: Canta frotando sus patas en la noche
babosa: Caracol sin concha
trucha: Pez de río de agua fría
perico: Ave verde que repite lo que escucha
paloma: Ave gris de las plazas
cuervo: Ave negra y muy inteligente
buitre: Ave que come animales muertos
cóndor: Ave enorme de los Andes
víbora: Serpiente venenosa
gacela: Antílope veloz de la sabana
búfalo: Bovino grande de cuernos curvos
hormiga: Pequeña, trabajadora y vive en colonia
lombriz: Gusano que vive en la tierra mojada
sardina: Pescadito que viene apretado en lata
anguila: Pez alargado como serpiente
calamar: Molusco que suelta tinta
manatí: Mamífero marino lento al que le dicen vaca marina
canario: Pajarito amarillo que canta
bisonte: Búfalo de las praderas de Norteamérica
mosquito: Te pica en la noche y deja ronchas
chapulín: Saltamontes que se come en Oaxaca
catarina: Escarabajo rojo con puntos negros
ciempiés: Bicho largo con muchísimas patas
langosta: Crustáceo grande con antenas
camarón: Crustáceo pequeño que se come en coctel
pelícano: Ave con una bolsa enorme en el pico
zorrillo: Huele horrible cuando se asusta
libélula: Insecto de cuatro alas que vuela sobre el agua
pavorreal: Ave que abre una cola llena de ojos de colores
golondrina: Ave que migra en grupo y anuncia la primavera
pez payaso: Naranja con rayas blancas, vive entre anémonas
tiburón ballena: El pez más grande del mundo
pájaro carpintero: Hace hoyos en los troncos con el pico
`},

comida: { ico:'🌮', label:'Comida', lista:`
taco: El rey de la comida callejera
mole: Salsa espesa con chiles y chocolate
sopa: Se toma caliente con cuchara
pan: Se hornea y acompaña el café
arroz: Grano blanco que acompaña casi todo
queso: Lácteo que se derrite en la tortilla
elote: Mazorca con mayonesa, queso y chile
torta: Bolillo relleno, la de tamal es famosa
sope: Base gruesa de masa con orillas pellizcadas
atole: Bebida caliente y espesa de masa
tamal: Masa envuelta en hoja de maíz
huevo: Estrellado, revuelto o a la mexicana
flan: Postre con caramelo que tiembla
dona: Pan redondo con un hoyo en medio
nopal: Cactus que se come asado o en ensalada
salsa: Verde o roja, le da sabor y picor
chile: Le pone lo picoso a la comida
pollo: Ave que se come rostizada
pozole: Caldo con maíz cacahuazintle y cerdo
birria: Guiso de chivo o res famoso en Jalisco
menudo: Caldo de panza, famoso para la cruda
tlayuda: Tortilla gigante y crujiente de Oaxaca
gordita: Tortilla gruesa rellena de guisado
esquite: Granos de elote servidos en vaso
churro: Masa frita con azúcar y canela
tostada: Tortilla frita y crujiente con todo encima
pambazo: Pan bañado en salsa roja relleno de papa
tlacoyo: Masa ovalada rellena de frijol o haba
flautas: Tacos enrollados y fritos
galleta: Se moja en la leche
pastel: No falta en los cumpleaños
helado: Postre frío que se sirve en cono
tepache: Bebida fermentada de cáscara de piña
jamaica: Agua fresca roja hecha de flor
alegría: Dulce de amaranto y miel
cajeta: Dulce de leche de cabra de Celaya
bolillo: Pan salado que dicen que cura el susto
concha: Pan dulce con cubierta de azúcar
machaca: Carne seca deshebrada del norte
chorizo: Embutido rojo que se fríe con huevo
ceviche: Pescado curado en limón
mixiote: Carne cocida envuelta en hoja de maguey
tortilla: Redonda, de maíz o harina, va con todo
frijoles: Negros o bayos, refritos o de la olla
huarache: Masa alargada con forma de sandalia
barbacoa: Carne cocida bajo tierra en hoyo
carnitas: Cerdo frito en cazo de cobre
gelatina: Postre de colores que tiembla
horchata: Agua fresca de arroz con canela
molletes: Bolillo con frijoles y queso gratinado
chocolate: Viene del cacao y los mexicas lo bebían
guacamole: Salsa de aguacate machacado
tamarindo: Fruto café en vaina, dulce y ácido
aguachile: Camarones crudos en limón y chile
palomitas: Se comen en el cine
chilaquiles: Totopos bañados en salsa, el desayuno campeón
enchiladas: Tortillas enrolladas y bañadas en salsa
quesadilla: ¿Lleva o no lleva queso? El eterno debate
capirotada: Postre de Cuaresma con pan y piloncillo
chicharrón: Piel de cerdo frita y crujiente
mole poblano: Platillo de Puebla con más de veinte ingredientes
pan de muerto: Se come en noviembre y tiene huesitos
rosca de reyes: Trae un muñequito escondido
tacos al pastor: Carne de trompo con piña
chiles en nogada: Platillo patrio con los colores de la bandera
cochinita pibil: Cerdo con achiote, típico de Yucatán
sopa de fideo: Caldito de pasta delgada que hace la abuela
huevos rancheros: Estrellados sobre tortilla con salsa
tripa: Taco crujiente que se pide bien dorado
gringa: Taco de harina con pastor y queso
cemita: Torta poblana con pápalo y quesillo
bistec: Carne de res delgada a la plancha
suadero: Carne suave de res para tacos
chalupa: Tortilla pequeña frita con salsa
memela: Tortilla gruesa con frijol y queso
consomé: Caldo de la barbacoa
cuernito: Pan dulce con forma de media luna
panuchos: Tortillitas rellenas de frijol, de Yucatán
bisquet: Pan esponjoso que se come con mantequilla y mermelada
guajolota: Torta de tamal
arrachera: Carne marinada que se asa al carbón
mantecada: Panquecito en capacillo rojo
pan dulce: Conchas, orejas y cuernitos
campechana: Taco o coctel con dos tipos de carne
papadzules: Tacos yucatecos con huevo y salsa de pepita
sopa azteca: Caldo con tiras de tortilla frita y chile pasilla
champurrado: Atole de chocolate
café de olla: Café con piloncillo y canela en jarro
caldo de res: Sopa con carne y verduras para el frío
elote asado: Mazorca a las brasas con limón y chile
entomatadas: Tortillas bañadas en salsa roja de jitomate
enfrijoladas: Tortillas bañadas en salsa de frijol
sincronizada: Dos tortillas de harina con jamón y queso
taco de canasta: Tacos sudados que llegan en bicicleta
tacos de pescado: Típicos de Ensenada, capeados y con col
`},

dulces: { ico:'🍬', label:'Dulces y botanas', lista:`
ate: Dulce de fruta firme, como el de membrillo
bolis: Hielo de sabor en bolsita alargada
chicle: Se masca y se hacen bombas
paleta: Dulce con palito
cocada: Dulce de coco rallado
oblea: Hoja delgada de harina con cajeta en medio
gloria: Dulce de leche quemada con nuez envuelto en celofán
chamoy: Salsa agridulce y enchilada
mentas: Pastillas que refrescan el aliento
nachos: Totopos con queso derretido
bombón: Dulce suave y esponjoso
mazapán: Dulce de cacahuate que se desmorona
muégano: Cuadritos de harina pegados con piloncillo
gomitas: Dulces de grenetina de colores
regaliz: Dulce negro y largo de sabor muy raro
papitas: Botana de papa delgada y crujiente
totopos: Trocitos de tortilla frita
raspado: Hielo picado con jarabe de sabor
rompope: Bebida dulce de huevo y vainilla
acitrón: Dulce de biznaga cristalizada
pepitas: Semillas de calabaza tostadas
caramelo: Dulce de azúcar derretida
pistache: Semilla verde con cáscara que se abre
frituras: Botanas fritas de bolsita
churritos: Botana de harina enchilada con limón
macarrón: Dulce de leche en forma de tubito
polvorón: Galleta que se deshace en la boca
cacahuate: Botana salada que viene en bolsita
pepitoria: Dulce de pepitas de calabaza con piloncillo
chiclosos: Caramelos masticables que se pegan en los dientes
mangonada: Fruta picada con chamoy y chilito
piloncillo: Azúcar morena en forma de cono
palanqueta: Barra de cacahuate con caramelo
jamoncillo: Dulce de leche en barrita
charamusca: Dulce de piloncillo trenzado
malvavisco: Dulce esponjoso que se asa en la fogata
borrachito: Dulce suave cubierto de azúcar con sabor a rompope
garapiñado: Cacahuate cubierto de azúcar caramelizada
besos de nuez: Bolitas de nuez cubiertas de azúcar glas
dulce de leche: Crema café y espesa, prima de la cajeta
paleta de hielo: Agua de sabor congelada con palito
manzana cubierta: Fruta bañada en caramelo rojo de la feria
algodón de azúcar: Nube de colores que venden en la feria
cacahuates japoneses: Cubiertos de harina crujiente
pulpa de tamarindo: Dulce ácido y enchilado de una fruta en vaina
`},

mundo: { ico:'🌍', label:'Comida del mundo', lista:`
sushi: Arroz con pescado crudo, típico de Japón
ramen: Sopa japonesa de fideos
pizza: Masa italiana con tomate y queso
curry: Salsa especiada de la India
crepa: Tortita francesa delgada y rellena
bagel: Pan con hoyo que se hierve antes de hornear
kebab: Carne asada en trompo, típica de Turquía
gyoza: Empanadita japonesa al vapor o dorada
mochi: Dulce japonés de arroz pegajoso
tofu: Le dicen queso de soya
arepa: Pan de maíz de Venezuela y Colombia
pasta: Espagueti, macarrones, penne y más
paella: Arroz español con mariscos en sartén ancha
hummus: Puré de garbanzo de Medio Oriente
kimchi: Col fermentada y picante de Corea
fondue: Queso derretido donde se sumerge pan
lasaña: Capas de pasta, carne y queso
gelato: Helado al estilo italiano
hot dog: Salchicha dentro de un pan
falafel: Bolitas fritas de garbanzo
strudel: Postre austriaco de manzana enrollado
brownie: Pastelito de chocolate denso
pretzel: Pan alemán en forma de lazo
ravioli: Pasta rellena en cuadritos
risotto: Arroz cremoso italiano
baklava: Postre turco de hojaldre con miel y nueces
tempura: Capeado japonés para camarones y verduras
sashimi: Pescado crudo rebanado, sin arroz
onigiri: Bola de arroz japonesa con alga
pad thai: Fideos salteados de Tailandia
alfajor: Galleta doble con dulce de leche
macarón: Galletita francesa de colores con relleno
panetón: Pan dulce italiano de Navidad con frutas
baguette: Pan francés largo y crujiente
tiramisú: Postre italiano con café y mascarpone
empanada: Masa rellena que se hornea o se fríe
gazpacho: Sopa fría española de tomate
feijoada: Guiso brasileño de frijol negro y cerdo
croissant: Pan francés en forma de media luna
espagueti: Pasta larga y delgada
churrasco: Carne a la parrilla, típica de Brasil y Argentina
hamburguesa: Carne molida entre dos panes
macarrones: Pasta en forma de tubito
papas fritas: Bastones de papa dorados y salados
lomo saltado: Plato peruano de carne salteada con papas
pollo frito: Piezas empanizadas y doradas en aceite
tortilla española: Omelette grueso de papa y huevo
pho: Sopa vietnamita de fideos
asado: Carne a la parrilla en Argentina
nigiri: Bolita de arroz con pescado encima
waffle: Masa en cuadritos con miel
pupusa: Tortilla rellena de El Salvador
borsch: Sopa rusa roja de betabel
dim sum: Bocadillos chinos al vapor
pierogi: Empanaditas polacas
cachapa: Panqueque venezolano de maíz
poutine: Papas con queso y salsa de Canadá
nuggets: Trocitos de pollo empanizado
shawarma: Carne en pan árabe, parecida al pastor
choripán: Chorizo en pan, típico de Argentina
milanesa: Carne empanizada y frita
takoyaki: Bolitas japonesas de pulpo
sancocho: Caldo espeso del Caribe
arroz chaufa: Plato frito chino peruano con huevo y cebollín
bandeja paisa: Plato colombiano con frijoles, carne y huevo
ají de gallina: Guiso peruano de pollo cremoso
fish and chips: Pescado frito con papas, típico de Inglaterra
`},

frutas: { ico:'🍓', label:'Frutas y verduras', lista:`
uva: En Año Nuevo se comen doce
pera: Fruta con forma de campana
piña: Tiene corona y cáscara espinosa
kiwi: Peludo por fuera y verde por dentro
mango: Se come en palito con chile y limón
limón: Ácido, en México va con todo
coco: Tiene agua dentro y cáscara dura
papa: Tubérculo que se come frito, en puré o al horno
ajo: Dicen que ahuyenta vampiros
haba: Semilla grande en vaina, va en sopa
apio: Tallo verde y crujiente para jugos
nuez: Fruto seco de cáscara dura
fresa: Roja y con semillitas por fuera
tuna: Fruto del nopal
lima: Pariente del limón de sabor suave
mamey: Fruta mexicana de pulpa naranja
melón: Redondo, de pulpa naranja o verde
ejote: Vaina verde y tierna del frijol
sandía: Verde por fuera y roja por dentro
cereza: Pequeña y roja, corona los postres
papaya: Fruta naranja de semillas negras
pepino: Verde y fresco, va en rodajas sobre los ojos
rábano: Raíz roja y picosita
jícama: Raíz crujiente que se come con limón y chile
pitaya: Fruta de cactus, rosa por fuera
zapote: El negro parece pudín de chocolate
camote: Tubérculo dulce que se vende con silbato
tomate: Verde y con cascarita, base de la salsa verde
plátano: Amarillo, el favorito de los monos
naranja: Cítrico que también es un color
durazno: Fruta de piel aterciopelada
guayaba: Fruta aromática, rosa o blanca por dentro
manzana: Dicen que le cayó en la cabeza a Newton
ciruela: Morada, y seca se vuelve pasa
cebolla: Te hace llorar al cortarla
brócoli: Parece un arbolito verde
lechuga: Base de casi toda ensalada
toronja: Cítrico grande y amargo
granada: Fruta llena de semillas rojas
chayote: Verdura verde a veces con espinas que se hierve
betabel: Raíz morada que lo pinta todo
calabaza: Se hace dulce en Día de Muertos
espinaca: Hoja verde que comía un marinero muy fuerte
aguacate: Base del guacamole
jitomate: Rojo y jugoso, base de la salsa roja
maracuyá: Fruta de la pasión, muy ácida
arándano: Moras azules pequeñitas
coliflor: Como un brócoli pero blanca
pimiento: Morrón de colores
tejocote: Fruto amarillo del ponche navideño
zanahoria: Naranja, favorita de los conejos
berenjena: Verdura morada y brillante
frambuesa: Frutilla roja y aterciopelada
champiñón: Hongo blanco que va en la pizza
mandarina: Naranjita fácil de pelar
chabacano: Fruta naranja pequeña, también llamada albaricoque
zarzamora: Mora negra de arbusto con espinas
verdolaga: Hierba que se guisa con carne de cerdo
espárrago: Tallo verde y delgado que se come asado
calabacita: Verde y alargada, va en guisos
huitlacoche: Hongo negro del maíz, delicia mexicana
flor de calabaza: Amarilla, se pone en quesadillas
higo: Fruta dulce con muchas semillitas
nabo: Raíz blanca parecida al rábano
poro: Primo de la cebolla, largo y verde
lichi: Fruta asiática de cáscara roja y pulpa blanca
dátil: Fruto dulce de la palmera
nanche: Frutita amarilla que se come en almíbar
acelga: Hoja verde grande para guisos
capulín: Cerecita silvestre de México
lenteja: Legumbre plana para la sopa
chícharo: Bolitas verdes que vienen en vaina
garbanzo: Legumbre redonda del hummus
membrillo: Fruta amarilla con la que se hace ate
carambola: Fruta en forma de estrella
alcachofa: Flor verde que se come hoja por hoja
guanábana: Fruta verde con espinas suaves y pulpa blanca
`},

naturaleza: { ico:'🌿', label:'Naturaleza', lista:`
río: Corriente de agua que llega al mar
lago: Gran cuerpo de agua dulce rodeado de tierra
mar: Agua salada que cubre casi todo el planeta
ola: Movimiento del mar que llega a la orilla
cerro: Montaña pequeña
isla: Tierra rodeada de agua
playa: Arena, sol y olas
selva: Bosque tropical, húmedo y lleno de vida
nube: Algodón blanco en el cielo
roca: Piedra grande
flor: Las abejas la visitan
hoja: Cae de los árboles en otoño
árbol: Tiene tronco, ramas y raíces
cueva: Hueco en la montaña donde viven murciélagos
duna: Montaña de arena en el desierto
bahía: Entrada del mar en la costa
valle: Tierra baja entre montañas
musgo: Alfombra verde sobre piedras húmedas
lava: Roca derretida que sale del volcán
rocío: Gotitas sobre las hojas al amanecer
marea: Sube y baja por culpa de la luna
lluvia: Agua que cae de las nubes
niebla: Nube pegada al suelo que no deja ver
volcán: Montaña que puede hacer erupción
bosque: Lugar lleno de árboles
océano: El Pacífico es el más grande
cascada: Agua que cae desde lo alto
pradera: Llanura cubierta de pasto
glaciar: Río de hielo que avanza muy lento
cenote: Pozo natural de agua, sagrado para los mayas
laguna: Lago pequeño y poco profundo
pantano: Terreno inundado y lodoso
trueno: El estruendo después del rayo
granizo: Lluvia de bolitas de hielo
tornado: Remolino de viento gigante
huracán: Tormenta enorme que nace en el mar
tsunami: Ola gigante provocada por un sismo
géiser: Chorro de agua hirviendo que sale de la tierra
sequía: Cuando no llueve en mucho tiempo
manglar: Bosque de árboles que crecen en agua salada
montaña: Gran elevación de tierra y roca
colina: Elevación suave y redonda
cráter: La boca del volcán
arrecife: Ciudad submarina de corales
desierto: Mucho sol, arena y casi nada de agua
tormenta: Lluvia fuerte con rayos y viento
arcoíris: Aparece con sol y lluvia, tiene siete colores
barranca: Hondonada profunda entre montañas
erupción: Cuando el volcán explota
amanecer: El momento en que sale el sol
relámpago: Destello de luz en una tormenta
península: Tierra rodeada de agua por tres lados
terremoto: La tierra tiembla con fuerza
avalancha: Nieve que se desploma montaña abajo
manantial: Agua que brota del suelo
atardecer: Cuando el sol se mete
acantilado: Pared de roca junto al mar
cordillera: Cadena de montañas
ecosistema: Seres vivos y su ambiente funcionando juntos
estalactita: Cuelga del techo de las cuevas
archipiélago: Grupo de islas
aurora boreal: Luces de colores en el cielo del norte
desembocadura: Donde el río llega al mar
lluvia de estrellas: Muchos meteoros cruzando el cielo
`},

plantas: { ico:'🌻', label:'Plantas y flores', lista:`
rosa: Flor con espinas, símbolo del amor
raíz: Parte de la planta que va bajo tierra
lirio: Flor elegante de pétalos alargados
dalia: Flor nacional de México
nardo: Flor blanca muy perfumada
tallo: Sostiene a la flor
polen: Polvito amarillo que llevan las abejas
abono: Alimento para la tierra
sauce: Árbol de ramas que cuelgan hacia el agua
roble: Árbol fuerte de madera dura
agave: De esta planta sale el tequila
bambú: Tallo largo que comen los pandas
espina: Pica cuando agarras un rosal
pétalo: Parte de colores de la flor
maceta: Recipiente para tener plantas en casa
cactus: Planta del desierto llena de espinas
sábila: Su gel se usa para las quemaduras
romero: Hierba aromática para cocinar
clavel: Flor de bordes rizados
jazmín: Flor blanca de olor dulce
encino: Árbol que da bellotas
trébol: Si tiene cuatro hojas da buena suerte
hiedra: Planta trepadora de las paredes
maguey: De esta planta sale el pulque
vivero: Lugar donde venden plantas
bonsái: Arbolito en miniatura
semilla: De ella nace una planta
girasol: Flor amarilla que sigue al sol
tulipán: Flor de Holanda con forma de copa
amapola: Flor roja de pétalos delicados
helecho: Planta de sombra con hojas como plumas
palmera: Árbol de playa que da cocos
biznaga: Cactus redondo de México
perejil: Hierba verde parecida al cilantro
epazote: Hierba que se le pone a los frijoles
azucena: Flor blanca alargada muy perfumada
cilantro: Hierba que va en los tacos con cebolla
albahaca: Hierba aromática de la salsa pesto
orquídea: Flor exótica y delicada
gardenia: Flor blanca de perfume intenso
alcatraz: Flor blanca con forma de cono
margarita: Flor blanca para jugar a me quiere, no me quiere
jacaranda: Árbol de flores moradas en primavera
ahuehuete: Árbol nacional de México
manzanilla: Flor para el té que calma la panza
bugambilia: Planta trepadora de flores fucsias
suculenta: Planta gordita que guarda agua en sus hojas
enredadera: Planta que crece trepando
hierbabuena: Hoja fresca para el té y el caldo
invernadero: Casa de cristal para cultivar plantas
flor de loto: Flor que nace en el agua lodosa
diente de león: Flor que se sopla y vuelan sus semillas
`},

paises: { ico:'🌎', label:'Países', lista:`
Perú: Tierra de Machu Picchu
Chile: País largo y angosto de Sudamérica
Cuba: Isla caribeña de autos antiguos
Japón: El país del sol naciente
China: Tiene la Gran Muralla
India: Ahí está el Taj Mahal
Rusia: El país más grande del mundo
Kenia: Famoso por sus safaris y corredores
Nepal: Desde aquí se sube al Everest
Qatar: Organizó el Mundial 2022
Suiza: Famoso por sus relojes y chocolates
Haití: Comparte isla con República Dominicana
Corea: Dividida en dos, la del sur creó el k-pop
México: Su capital fue Tenochtitlan
España: Tierra del flamenco y la paella
Francia: Tiene la Torre Eiffel
Brasil: Ha ganado cinco Mundiales
Canadá: Su bandera tiene una hoja de maple
Italia: Tiene forma de bota
Grecia: Cuna de los Juegos Olímpicos
Egipto: Tiene pirámides y una esfinge
Turquía: Su ciudad más grande está entre dos continentes
Bolivia: Tiene el salar más grande del mundo
Ecuador: Se llama igual que la línea que divide la Tierra
Uruguay: Ganó el primer Mundial en 1930
Panamá: Su canal une dos océanos
Irlanda: Su símbolo es el trébol
Noruega: País de fiordos y auroras
Vietnam: País asiático con forma de S
Jamaica: Cuna del reggae
Nigeria: El país más poblado de África
Escocia: Famosa por sus gaitas y el monstruo del lago Ness
Polonia: Ahí nació Chopin
Alemania: Famosa por sus autos y su Oktoberfest
Islandia: Tierra de volcanes y glaciares en el Atlántico norte
Honduras: Centroamericano, tiene las ruinas de Copán
Colombia: Famoso por su café
Paraguay: País sin mar entre Brasil y Argentina
Portugal: Ahí nació Cristiano Ronaldo
Mongolia: Tierra de Gengis Kan
Guatemala: Vecino del sur de México
Venezuela: Tiene la cascada más alta del mundo
Argentina: Tierra del tango y el asado
Australia: País-continente de canguros
Indonesia: País formado por miles de islas
Tailandia: Antes se llamaba Siam
Filipinas: Archipiélago asiático que fue colonia española
Sudáfrica: Organizó el Mundial 2010
Nicaragua: País de lagos y volcanes en Centroamérica
Finlandia: País nórdico de los mil lagos
Dinamarca: Ahí se inventaron los bloques LEGO
Marruecos: País africano frente a España
Costa Rica: País sin ejército, famoso por su naturaleza
Inglaterra: Cuna del futbol moderno
El Salvador: El país más pequeño de Centroamérica
Puerto Rico: Isla caribeña cuna del reguetón
Países Bajos: Tierra de tulipanes y molinos
Corea del Sur: Cuna del k-pop
Nueva Zelanda: Ahí se filmaron muchas películas de fantasía
Estados Unidos: Vecino del norte de México
Arabia Saudita: País del desierto y el petróleo
República Dominicana: Comparte isla con Haití
`},

mexico: { ico:'🇲🇽', label:'México', lista:`
León: Ciudad de los zapatos en Guanajuato
Tepic: Capital de Nayarit
Tula: Pueblo de los atlantes de piedra
Bajío: Región del centro famosa por su campo e industria
Taxco: Pueblo mágico de la plata
Tulum: Ruinas mayas frente al mar Caribe
comal: Plancha para calentar tortillas
Puebla: Tierra del mole y la talavera
Oaxaca: Tierra de la Guelaguetza
Colima: Estado pequeño con un volcán activo
Sonora: Estado del desierto y la carne asada
Toluca: Capital del Estado de México
Mérida: Ciudad blanca de Yucatán
charro: Jinete de sombrero de ala ancha
piñata: Se rompe en las posadas
Zócalo: Plaza principal de la Ciudad de México
sarape: Cobija tejida de muchos colores
rebozo: Chal tradicional de las mujeres mexicanas
huipil: Blusa indígena bordada
posada: Fiesta navideña con ponche y piñata
metate: Piedra para moler maíz
petate: Tapete de palma para dormir
pulque: Bebida blanca de maguey
mezcal: Bebida ahumada de agave
Cancún: Playas del Caribe mexicano
Jalisco: Tierra del tequila y el mariachi
tequila: Bebida de agave azul
catrina: Calavera elegante de sombrero
lotería: El gallo, la dama, el valiente
ofrenda: Altar de Día de Muertos
Chiapas: Tiene el Cañón del Sumidero
Yucatán: Península de los cenotes
Sinaloa: Tierra de la música de banda
Tijuana: Ciudad fronteriza con San Diego
Durango: Ahí se filmaron muchas películas del viejo oeste
Hidalgo: Tierra de los pastes
Tabasco: Tierra del cacao y los olmecas
Nayarit: Estado de playas y de la cultura huichol
Morelos: Estado de la eterna primavera
mariachi: Grupo con trompetas, violines y guitarrón
alebrije: Criatura fantástica de colores
sombrero: Lo usa el charro
tianguis: Mercado sobre ruedas
Acapulco: Famoso por sus clavadistas de La Quebrada
Veracruz: Puerto del son jarocho
Campeche: Ciudad amurallada contra piratas
Tlaxcala: El estado más pequeño
Coahuila: Estado norteño del desierto y los dinosaurios
Monterrey: La Sultana del Norte
Zacatecas: Ciudad minera de cantera rosa
Chihuahua: El estado más grande del país
Michoacán: Aquí llegan las mariposas monarca
Querétaro: Ahí se firmó la Constitución de 1917
molcajete: Mortero de piedra volcánica para salsas
guayabera: Camisa fresca típica de Yucatán
trajinera: Lancha de colores que navega en canales
Xochimilco: Canales con trajineras y mariachis
Guanajuato: Callejones, momias y estudiantinas
Tamaulipas: Estado del noreste en el Golfo
cempasúchil: Flor naranja de Día de Muertos
Teotihuacan: Ciudad de las pirámides del Sol y la Luna
Chichén Itzá: Tiene la pirámide de Kukulcán
Guadalajara: La Perla Tapatía
Quintana Roo: Estado de Cancún y Tulum
Popocatépetl: El volcán que todos llaman Popo
Iztaccíhuatl: El volcán de la Mujer Dormida
Bellas Artes: Palacio blanco con cúpulas doradas en el Centro
jarabe tapatío: Baile típico alrededor del sombrero
Aguascalientes: Famoso por su Feria de San Marcos
Baja California: Península del noroeste
San Luis Potosí: Estado de la Huasteca y Xilitla
`},

mexicanismos: { ico:'🗣️', label:'Mexicanismos', lista:`
chido: Algo muy bueno
neta: La pura verdad
güey: Amigo... o alguien que se equivocó
cuate: Amigo de confianza
chela: Cerveza bien fría
lana: Dinero
codo: Tacaño
sale: Va, de acuerdo
fresa: Persona presumida o muy fina
chafa: De mala calidad
padre: Algo genial
fiaca: Flojera
cruda: Malestar después de la fiesta
morra: Muchacha
chavo: Muchacho
aguas: ¡Cuidado!
órale: ¡Va, de acuerdo!
gacho: Algo feo o malo
chulo: Bonito
mande: ¿Qué? pero con respeto
a poco: ¿En serio?
chamba: Trabajo
carnal: Hermano o amigo muy cercano
ándale: ¡Apúrate!
híjole: Expresión de sorpresa o preocupación
mitote: Escándalo o chisme
gorrón: Va a las fiestas sin poner nada
relajo: Desorden divertido
mocoso: Niño pequeño
sobres: ¡Va, vamos!
qué oso: ¡Qué vergüenza!
ni modo: Ya qué, ni hablar
pirata: Copia falsa de algo original
chamaco: Niño
fodongo: Desarreglado y flojo
ahorita: Puede ser ahora... o nunca
chiripa: Suerte inesperada
aventón: Que te lleven gratis en un carro
guácala: ¡Qué asco!
de pilón: Extra, de regalo
chilango: De la Ciudad de México
argüende: Chisme y alboroto
pachanga: Fiesta
chismoso: Le encanta contar lo ajeno
chiflado: Consentido
pachorra: Calma excesiva
padrísimo: Más que padre
apapachar: Abrazar con mucho cariño
escuincle: Niño travieso, viene del náhuatl
cotorrear: Platicar y echar relajo
no manches: ¡No puede ser!
está cañón: Está muy difícil
buena onda: Persona agradable
mala copa: Se pone mal cuando toma
chamaquear: Engañar a alguien
achicopalado: Triste y sin ánimo
tirar la onda: Coquetear con alguien
hacer la barba: Adular para conseguir algo
ponerse las pilas: Echarle ganas
nel: No
varo: Un peso, dinero
ñero: Compa del barrio
chale: Expresión de decepción
feria: Monedas sueltas, el cambio
simón: Sí, claro
bronca: Problema
godín: Oficinista de horario fijo
menso: Medio tonto
cámara: Va, sale, de acuerdo
baboso: Tonto, despistado
malora: Persona traviesa que hace maldades
rifarse: Hacer algo muy bien
al chile: Sinceramente, sin rodeos
qué onda: Saludo entre cuates
garnacha: Antojito frito y grasoso
cascarita: Partido informal de futbol en la calle
chamagoso: Sucio, mugroso
chachalaca: Persona que habla mucho
`},

dichos: { ico:'📖', label:'Dichos y refranes', lista:`
ver para creer: Solo crees si lo compruebas
el tiempo es oro: No lo desperdicies
el que busca encuentra: La perseverancia da resultados
más vale tarde que nunca: Mejor hacerlo aunque sea con retraso
de tal palo tal astilla: Los hijos se parecen a sus padres
al mal tiempo buena cara: Hay que ponerle actitud a los problemas
perro que ladra no muerde: El que mucho amenaza no hace nada
a falta de pan tortillas: Si no hay lo que quieres, te conformas con otra cosa
el flojo trabaja doble: Por hacerlo mal lo terminas haciendo dos veces
hierba mala nunca muere: Los latosos siempre aguantan
ya ni llorar es bueno: Lamentarse no arregla lo que ya pasó
poco a poco se anda lejos: Con constancia se llega a la meta
la práctica hace al maestro: Repetir te vuelve experto
no todo lo que brilla es oro: Las apariencias engañan
zapatero a tus zapatos: Dedícate a lo que sabes
echando a perder se aprende: Equivocarse es parte de aprender
matar dos pájaros de un tiro: Resolver dos cosas con una sola acción
barriga llena corazón contento: Con la panza satisfecha todo está bien
la curiosidad mató al gato: Por meterte donde no te llaman te puede ir mal
crea fama y échate a dormir: La reputación te sigue aunque ya no hagas nada
más vale prevenir que lamentar: Mejor cuidarse antes de que pase algo
en boca cerrada no entran moscas: A veces es mejor quedarse callado
a palabras necias oídos sordos: Ignora las tonterías que te dicen
el que madruga Dios lo ayuda: Levantarse temprano trae beneficios
no hay mal que por bien no venga: De lo malo también sale algo bueno
ojos que no ven corazón que no siente: Lo que no sabes no te duele
genio y figura hasta la sepultura: La forma de ser no cambia nunca
caras vemos corazones no sabemos: No sabes lo que piensa alguien por su apariencia
en casa del herrero azadón de palo: Donde más debería haber algo, falta
el que mucho abarca poco aprieta: Querer hacer todo hace que nada salga bien
quien bien te quiere te hará llorar: El que te ama a veces te corrige
del plato a la boca se cae la sopa: Nada es seguro hasta que pasa
cría cuervos y te sacarán los ojos: A veces el que ayudaste te traiciona
donde manda capitán no gobierna marinero: Se obedece al que tiene la autoridad
lo que bien se aprende nunca se olvida: Lo que aprendes de verdad se queda contigo
el que es perico donde quiera es verde: El talento se nota en cualquier lugar
a caballo regalado no se le ve colmillo: No critiques lo que te dan gratis
agua que no has de beber déjala correr: No te metas en lo que no te interesa
dime con quién andas y te diré quién eres: Tus amistades dicen mucho de ti
más vale pájaro en mano que ciento volando: Mejor lo seguro que lo que solo es promesa
al que no quiere caldo se le dan dos tazas: Te toca justo lo que no querías, y doble
más sabe el diablo por viejo que por diablo: La experiencia enseña más que la astucia
no hay peor ciego que el que no quiere ver: El que se niega a aceptar la verdad
el que con lobos anda a aullar se enseña: Se te pegan las costumbres de tus amigos
no dejes para mañana lo que puedes hacer hoy: Evita dejar las cosas para después
en el país de los ciegos el tuerto es rey: Entre los que no saben, el que sabe poco destaca
tanto va el cántaro al agua hasta que se rompe: Si te arriesgas siempre, un día sale mal
camarón que se duerme se lo lleva la corriente: Si te distraes, pierdes la oportunidad
no por mucho madrugar amanece más temprano: Apresurarse no adelanta las cosas
cada quien habla de la feria según le va en ella: Uno opina de acuerdo a su experiencia
`},

profesiones: { ico:'👔', label:'Profesiones', lista:`
chef: Jefe de la cocina de un restaurante
juez: Decide en un juicio
actor: Interpreta personajes
poeta: Escribe versos
mago: Saca conejos del sombrero
buzo: Trabaja bajo el agua
espía: Agente secreto
guía: Te lleva por un tour
piloto: Maneja aviones
sastre: Hace trajes a la medida
chofer: Maneja para llevar a otros
mesero: Te toma la orden en el restaurante
médico: Te revisa cuando te enfermas
pintor: Trabaja con pinceles
músico: Toca un instrumento
payaso: Hace reír en el circo
modelo: Desfila en la pasarela
cajero: Cobra en la tienda
niñera: Cuida niños
doctor: Te receta medicina
maestro: Enseña en la escuela
policía: Cuida el orden en la calle
bombero: Apaga incendios
abogado: Te defiende en un juicio
plomero: Arregla fugas de agua
albañil: Construye casas con ladrillo y cemento
herrero: Trabaja el hierro con fuego
cartero: Entrega cartas
taxista: Maneja un auto amarillo o de sitio
soldado: Sirve en el ejército
biólogo: Estudia a los seres vivos
barbero: Corta el pelo y la barba
dentista: Cuida tus dientes
panadero: Se levanta de madrugada a hornear
mecánico: Arregla coches
cocinero: Prepara la comida
cantante: Vive de su voz
escritor: Escribe libros
bailarín: Vive del baile
contador: Lleva las cuentas
pescador: Sale al mar con su red
marinero: Trabaja en un barco
granjero: Cuida animales y cultivos
cirujano: Opera en el quirófano
tatuador: Dibuja en la piel
streamer: Transmite en vivo
youtuber: Sube videos a internet
fotógrafo: Captura momentos con su cámara
enfermero: Cuida pacientes en el hospital
ingeniero: Diseña máquinas, puentes o sistemas
jardinero: Cuida plantas y pasto
detective: Resuelve misterios
psicólogo: Te escucha y cuida tu salud mental
estilista: Te corta y peina el cabello
diseñador: Crea logos, ropa o páginas
traductor: Pasa textos de un idioma a otro
astrónomo: Estudia las estrellas
cerrajero: Abre puertas sin llave
carpintero: Trabaja la madera
arquitecto: Diseña edificios
periodista: Investiga y da las noticias
astronauta: Viaja al espacio
agricultor: Cultiva la tierra
científico: Hace experimentos en el laboratorio
nutriólogo: Te arma tu plan de alimentación
repartidor: Te lleva la comida a domicilio
influencer: Recomienda productos en redes
arqueólogo: Descubre ruinas antiguas
paramédico: Llega en la ambulancia
salvavidas: Vigila la alberca o la playa
veterinario: Doctor de animales
programador: Escribe código
electricista: Arregla la instalación de luz
farmacéutico: Prepara y vende medicinas
joyero: Hace anillos y collares
editor: Corrige y arma textos o videos
taquero: Prepara los tacos en el puesto
elotero: Vende elotes y esquites en la calle
locutor: Habla en la radio
velador: Cuida un lugar durante la noche
gerente: El jefe de la tienda
conserje: Cuida y limpia el edificio
zapatero: Arregla tus zapatos
relojero: Arregla los relojes
animador: Da vida a los dibujos o anima las fiestas
carnicero: Vende carne en el mercado
costurera: Cose y arregla la ropa
vigilante: Cuida la entrada
conductor: Maneja un vehículo o presenta un programa
fumigador: Acaba con las plagas
tortillero: Hace y vende tortillas
tianguista: Vende en el mercado sobre ruedas
lavaplatos: Lava los trastes en el restaurante
ilustrador: Hace dibujos para libros
comerciante: Vive de comprar y vender
camarógrafo: Graba con la cámara de video
recepcionista: Te recibe en la entrada de la oficina
`},

hogar: { ico:'🏠', label:'Hogar', lista:`
mesa: Donde se come en familia
silla: Tiene cuatro patas y respaldo
cama: Donde duermes
sofá: Mueble largo y cómodo de la sala
vaso: Para tomar agua
plato: Donde se sirve la comida
olla: Para hacer caldos y frijoles
llave: Abre la puerta
horno: Hornea pasteles y pizzas
foco: Ilumina el cuarto
reloj: Marca la hora
techo: Lo que está arriba de tu cabeza en casa
piso: Lo que pisas
sala: Donde se recibe a las visitas
baño: Tiene regadera y excusado
patio: Espacio al aire libre de la casa
jabón: Hace espuma y limpia
buró: Mueblecito junto a la cama
cajón: Se abre jalando
taza: Para el café
jarra: Para servir agua fresca
cojín: Almohadita del sillón
chapa: Cerradura de la puerta
cocina: Donde se prepara la comida
puerta: Se abre para entrar
toalla: Para secarte después de bañarte
cobija: Te tapa del frío en la noche
sábana: Tela que cubre el colchón
espejo: Te refleja
escoba: Para barrer
cubeta: Se llena de agua para trapear
sartén: Para freír huevos
ropero: Ahí guardas la ropa
estufa: Tiene quemadores para cocinar
tinaco: Tanque de agua en la azotea
azotea: Techo donde se tiende la ropa
mantel: Cubre la mesa
timbre: Suena cuando llega visita
tapete: Alfombrita de la entrada
zaguán: Entrada techada de la casa
lámpara: Ilumina tu escritorio
cortina: Tapa la ventana
ventana: Por ahí entra la luz
cuchara: Para la sopa
tenedor: Tiene picos para pinchar
comedor: Cuarto donde se come
cochera: Donde se guarda el carro
candado: Cierra con llave la reja
alfombra: Cubre el piso del cuarto
almohada: Donde recargas la cabeza
cuchillo: Para cortar
lavadora: Lava la ropa
secadora: Seca la ropa en vueltas
escalera: Para subir al segundo piso
recámara: Cuarto para dormir
lavadero: Pila para lavar a mano
cafetera: Prepara café
tostador: Dora el pan
excusado: El trono del baño
licuadora: Prepara licuados y salsas
tendedero: Lazo para secar la ropa
regadera: Por ahí sale el agua para bañarte
recogedor: Se usa junto con la escoba
microondas: Calienta la comida en minutos
aspiradora: Se traga el polvo
ventilador: Te echa aire en el calor
televisión: Donde ves tus programas
calentador: Hace que salga agua caliente
servilleta: Para limpiarte la boca
trapeador: Para dejar el piso brillante
refrigerador: Mantiene fría la comida
control remoto: Siempre se pierde entre los cojines
cuna: Camita del bebé
cloro: Blanquea y desinfecta
jerga: Trapo grueso para el piso
gancho: Sirve para colgar la ropa
hamaca: Red colgada para descansar
clóset: Ahí cuelgas la ropa
plancha: Quita las arrugas de la ropa
colchón: Va encima de la base de la cama
colador: Separa el líquido de lo sólido
perchero: Para colgar abrigos y bolsas
persiana: Cortina de tablitas
rallador: Para hacer tiritas de queso o zanahoria
cucharón: Cuchara grande para servir caldo
espátula: Para voltear los hot cakes
mecedora: Silla que se mueve hacia adelante y atrás
tapadera: Cubre la olla
abrelatas: Herramienta para destapar el atún
estropajo: Fibra para tallar los trastes
exprimidor: Para sacarle el jugo al limón
detergente: Jabón para la lavadora
suavizante: Deja la ropa suavecita y perfumada
burro de planchar: Tabla con patas para quitar arrugas a la ropa
`},

ropa: { ico:'👕', label:'Ropa', lista:`
gorra: Tiene visera para el sol
bota: Zapato alto
saco: Prenda elegante de un traje
traje: Saco y pantalón que combinan
tenis: Zapatos para correr
falda: Prenda que cae desde la cintura
short: Pantalón corto
arete: Se cuelga de la oreja
gorro: Te tapa la cabeza del frío
boina: Gorro plano estilo francés
camisa: Tiene botones y cuello
suéter: Tejido calientito
pijama: Ropa para dormir
collar: Se cuelga del cuello
anillo: Va en el dedo
lentes: Te ayudan a ver
overol: Pantalón con tirantes y peto
bikini: Traje de baño de dos piezas
mallas: Ajustadas, para hacer ejercicio
playera: Prenda de manga corta sin botones
bufanda: Te abriga el cuello
guantes: Te abrigan las manos
vestido: Prenda de una pieza
corbata: Se anuda al cuello de la camisa
chaleco: Prenda sin mangas
mochila: Cargas tus cosas en la espalda
pulsera: Va en la muñeca
pañuelo: Tela pequeña para el bolsillo
capucha: Parte de la sudadera que cubre la cabeza
botines: Botas cortas
chamarra: Te protege del frío
calcetín: Va dentro del zapato
cinturón: Sostiene el pantalón
pantalón: Cubre ambas piernas
sudadera: Tiene capucha y es calientita
uniforme: Todos los de la escuela lo usan igual
calzones: Ropa interior
chanclas: El arma favorita de las mamás
tirantes: Sostienen el pantalón desde los hombros
huaraches: Sandalias de piel tejida
sandalias: Zapatos abiertos para el calor
pantuflas: Zapatos de casa calientitos
gabardina: Abrigo largo para la lluvia
mezclilla: Tela azul resistente
minifalda: Falda muy corta
zapatillas: Zapatos de tacón
impermeable: Te protege de la lluvia
traje de baño: Para meterte a la alberca
capa: La usan los superhéroes en la espalda
toga: La usan los jueces y los graduados
bata: Se usa al salir de bañarse o en el laboratorio
moño: Lazo que se pone en el pelo o en el cuello
blusa: Prenda de mujer para la parte de arriba
bolsa: Se carga al hombro con tus cosas
casco: Protege tu cabeza en la moto
poncho: Prenda con un hoyo para pasar la cabeza
abrigo: Prenda larga y gruesa para el invierno
mandil: Protege la ropa cuando cocinas
visera: Gorra sin la parte de arriba
cartera: Ahí guardas el dinero
diadema: Arco que se pone en el pelo
tacones: Zapatos que te hacen ver más alta
esmoquin: Traje elegante para una gala
paraguas: Te cubre de la lluvia
agujetas: Cordones de los tenis
mocasines: Zapatos sin cordones
pantimedias: Medias completas hasta la cintura
`},

transporte: { ico:'🚗', label:'Transporte', lista:`
carro: Tiene cuatro llantas y volante
moto: Dos ruedas, casco y mucha velocidad
tren: Viaja sobre rieles
barco: Navega en el mar
avión: Vuela con alas y turbinas
metro: Tren subterráneo de la ciudad
taxi: Te lleva a donde le pidas por una tarifa
yate: Barco de lujo
canoa: Bote angosto que se rema
kayak: Bote para una persona con remo doble
globo: Vuela gracias al aire caliente
grúa: Se lleva el carro mal estacionado
combi: Microbús de la ruta
ferry: Barco que cruza autos y gente
camión: Transporte público en muchas ciudades
lancha: Bote pequeño con motor
velero: Barco que avanza con el viento
cohete: Despega hacia el espacio
tráiler: Camión enorme de carga
tranvía: Vagón eléctrico que va por la calle
patines: Ruedas en los pies
tractor: Trabaja en el campo
carreta: La jalan caballos o bueyes
autobús: Lleva pasajeros entre ciudades
crucero: Barco gigante de vacaciones
patineta: Tabla con cuatro ruedas
patrulla: Auto de la policía
trolebús: Camión eléctrico con cables arriba
microbús: Camión mediano de pasajeros
metrobús: Autobús articulado con carril exclusivo
carruaje: Coche antiguo tirado por caballos
avioneta: Avión pequeño
bicitaxi: Bicicleta con asiento para pasajeros
limusina: Auto largo de lujo
tren bala: Tren japonés súper rápido
bicicleta: Dos ruedas y pedales
submarino: Navega bajo el agua
monopatín: Tabla con manubrio
camioneta: Más grande que un auto, ideal para carga
dirigible: Globo alargado con motor
ambulancia: Lleva enfermos al hospital
teleférico: Cabina colgada de un cable
cuatrimoto: Moto de cuatro ruedas
helicóptero: Vuela con hélices encima
motocicleta: Vehículo de dos ruedas con motor
nave espacial: Viaja por el universo
balsa: Plataforma flotante hecha de troncos
buque: Barco grande
vagón: Cada carro del tren
vocho: Coche escarabajo de los taxis de antes
pesero: Micro de ruta en la Ciudad de México
góndola: Bote alargado de Venecia
cablebús: Teleférico de transporte público en la CDMX
mototaxi: Moto con cabina para pasajeros
diablito: Carretilla de dos ruedas para cargar cajas
elevador: Sube y baja por los pisos de un edificio
planeador: Avión sin motor
catamarán: Barco de dos cascos
carretilla: Carrito de una rueda para la obra
paracaídas: Para bajar del cielo sin lastimarte
locomotora: Jala a todos los vagones
tren ligero: Tranvía moderno que llega a Xochimilco
portaaviones: Barco donde aterrizan aviones
escalera eléctrica: Escalones que se mueven solos
`},

deportes: { ico:'⚽', label:'Deportes', lista:`
golf: Se juega con palos y hoyos
tenis: Raqueta y pelota amarilla
boxeo: Golpes con guantes en un ring
judo: Arte marcial japonés de derribos
surf: Montar olas en una tabla
remo: Mover el bote a fuerza de brazos
polo: Se juega a caballo con mazo
esquí: Deslizarse por la nieve
lucha: Combate cuerpo a cuerpo
rugby: Balón ovalado y tacleadas
pádel: Raqueta y paredes de cristal
penal: Tiro desde los once pasos
gol: Lo que todos gritan en el estadio
futbol: El deporte más popular del mundo
karate: Arte marcial de golpes y patadas
hockey: Se juega con palos y disco sobre hielo
billar: Bolas numeradas y un taco
dardos: Se lanzan a una diana
jonrón: Batazo que sale del parque
béisbol: Bate, guante y diamante
ajedrez: Rey, reina, caballo y alfiles
boliche: Derribas pinos con una bola
maratón: Carrera de 42 kilómetros
esgrima: Combate con espadas
frontón: Pelota contra la pared
parkour: Saltar obstáculos en la ciudad
portero: Cuida la portería
árbitro: Saca tarjetas amarillas y rojas
estadio: Donde se juegan los partidos
medalla: Oro, plata o bronce
mundial: El torneo más grande del futbol
campeón: El que gana el torneo
raqueta: Con ella golpeas la pelota
canasta: Aro con red del básquet
ciclismo: Competir en bicicleta
natación: Competir en la alberca
gimnasia: Piruetas, saltos y equilibrio
voleibol: Balón por encima de la red
triatlón: Nadar, pedalear y correr
escalada: Subir paredes de roca
patinaje: Deslizarse sobre ruedas o hielo
clavados: Saltos al agua desde la plataforma
atletismo: Carreras, saltos y lanzamientos
taekwondo: Arte marcial coreano de patadas
charrería: El deporte nacional de México
básquetbol: Encestar el balón en el aro
equitación: Montar a caballo
olimpiadas: Juegos cada cuatro años con todos los países
lucha libre: Máscaras, llaves y rudos contra técnicos
tiro con arco: Flechas a una diana
halterofilia: Levantamiento de pesas
futbol americano: Casco, hombreras y touchdown
yoga: Posturas y respiración para relajarse
sumo: Luchadores japoneses muy grandes
rally: Carreras de autos por caminos de tierra
pesas: Se levantan para hacer músculo
rapel: Bajar una pared colgado de una cuerda
softbol: Primo del béisbol con pelota más grande
karting: Carreras en carritos pequeños
pilates: Ejercicio de control y estiramiento
motocross: Carreras de motos en tierra con saltos
balonmano: Se juega con las manos y porterías chicas
bádminton: Raqueta y gallito de plumas
senderismo: Caminar por el campo y las montañas
fórmula uno: Carreras de los autos más rápidos del mundo
tenis de mesa: Le dicen pimpón
`},

futbol: { ico:'🥅', label:'Futbol', lista:`
gol: El grito más esperado del partido
Tri: Apodo de la Selección Mexicana
red: Se infla cuando entra el balón
VAR: Revisión en video de las jugadas polémicas
caño: Pasar el balón entre las piernas del rival
poste: Palo vertical de la portería
penal: Falta en el área que se cobra frente al portero
balón: Se patea durante noventa minutos
porra: Aficionados que cantan en la tribuna
final: El último partido del torneo
Pumas: Club de la UNAM
Atlas: Los Zorros de Guadalajara
Chivas: Club de Guadalajara que solo juega con mexicanos
Tigres: Club felino de la UANL
Santos: Los Guerreros de Torreón
Toluca: Los Diablos Rojos
Necaxa: Los Rayos
córner: Tiro desde la esquina de la cancha
cancha: Pasto con líneas blancas donde se juega
empate: Cuando los dos equipos anotan lo mismo
Pachuca: Los Tuzos de Hidalgo
América: Las Águilas de Coapa
Rayados: Club de Monterrey
Clásico: Partido de las Águilas contra el Rebaño
barrera: Jugadores en fila para tapar un tiro libre
capitán: Lleva el gafete y habla con el árbitro
chilena: Remate de espaldas en el aire
chanfle: Efecto que hace que el balón se curve
regate: Quitarte al rival con el balón pegado al pie
afición: La gente que apoya a un equipo
silbato: Lo usa el árbitro para marcar faltas
tribuna: Gradas donde se sienta la gente
jornada: Fecha del torneo con todos los partidos
autogol: Anotar en tu propia portería
defensa: Jugador que cuida su área
tachones: Zapatos con picos para el pasto
liguilla: Fase final del futbol mexicano
cabezazo: Rematar el balón con la frente
goleador: El que más anotaciones lleva
marcador: Dice cómo va el partido
descenso: Bajar de división por quedar hasta abajo
Cruz Azul: La Máquina celeste
delantero: Su trabajo es meter goles
selección: Equipo que representa a un país
travesaño: Palo de arriba de la portería
asistencia: El pase que termina en anotación
entrenador: El que dirige y decide quién juega
alineación: Los once que salen a la cancha
tiro libre: Cobro tras una falta
sombrerito: Pasar el balón por encima de la cabeza del rival
espinilleras: Protegen tus piernas de las patadas
tiempo extra: Se juega cuando hay empate en una final
medio tiempo: El descanso a la mitad del partido
tarjeta roja: Te expulsa del partido
saque de banda: Se lanza con las manos desde la orilla
fuera de lugar: Cuando el delantero está adelantado al último defensa
tarjeta amarilla: Amonestación, la primera advertencia
tanda de penales: Desempate desde los once pasos
`},

musica: { ico:'🎵', label:'Música', lista:`
rap: Rimas rápidas sobre un ritmo
pop: Música popular y pegajosa
rock: Guitarras eléctricas y batería
jazz: Nació en Nueva Orleans y se improvisa
piano: Teclas blancas y negras
arpa: Tiene muchas cuerdas en un marco
bajo: Cuerdas graves en una banda
tuba: El metal más grande y grave
oboe: Instrumento de viento con doble lengüeta
coro: Muchas voces cantando juntas
nota: Do, re, mi...
ritmo: El pulso de la canción
banda: Grupo con tambora y metales de Sinaloa
gaita: Instrumento escocés con bolsa de aire
banjo: Guitarrita redonda del country
güiro: Calabazo rallado que se raspa
disco: Ahí se graban las canciones
ópera: Teatro cantado
flauta: Instrumento de viento que se sopla de lado
violín: Se toca con un arco
cumbia: Ritmo colombiano que se baila en todo México
tambor: Se toca con baquetas
bolero: Romántico, para cantar en serenata
acorde: Varias notas sonando juntas
compás: Divide la música en partes iguales
bocina: Por donde sale el sonido
vinilo: Disco negro de los tocadiscos
hip hop: Rap, grafiti y breakdance
maracas: Se agitan para hacer ruido
batería: Tambores y platillos
saxofón: Instrumento dorado del jazz
marimba: Teclas de madera que se golpean
ukulele: Guitarrita de cuatro cuerdas de Hawái
trombón: Tiene una vara que se desliza
vihuela: Guitarrita del mariachi
corrido: Canción que cuenta una historia
melodía: La parte que tarareas
armonía: Notas que suenan bien juntas
karaoke: Cantas con la letra en pantalla
trompeta: Instrumento de metal con tres pistones
guitarra: Seis cuerdas y una caja de madera
acordeón: Se abre y se cierra para sonar
xilófono: Teclas de colores que se golpean
reguetón: Ritmo del perreo
ranchera: Música de mariachi para cantar con sentimiento
orquesta: Muchos músicos y un director
sinfonía: Obra grande para orquesta
huapango: Son de la Huasteca con falsete
clarinete: Instrumento de viento negro con llaves
guitarrón: La guitarra panzona del mariachi
partitura: Donde se escribe la música
micrófono: Amplifica tu voz
audífonos: Para escuchar música sin molestar
concierto: Música en vivo para el público
metrónomo: Marca el tiempo con un tic tac
bajo sexto: Guitarra de doce cuerdas de la música norteña
cantautor: Escribe y canta sus canciones
tamborazo: Banda de alientos de Zacatecas
pentagrama: Cinco líneas donde van las notas
estribillo: La parte de la canción que se repite
tocadiscos: Aparato que hace girar los vinilos
son jarocho: Música de Veracruz con jarana y arpa
violonchelo: Violín grande que se toca sentado
sintetizador: Teclado que crea sonidos electrónicos
`},

tecnologia: { ico:'💻', label:'Tecnología', lista:`
app: Programa que bajas al celular
chip: Pequeño circuito que piensa
wifi: Internet sin cables
dron: Aparato volador a control remoto
ratón: Lo mueves para controlar el cursor
cable: Conecta los aparatos
robot: Máquina que hace tareas sola
radio: Aparato para escuchar estaciones
láser: Rayo de luz muy concentrado
virus: Programa que daña la computadora
píxel: Cuadrito mínimo de una imagen
módem: Trae el internet a tu casa
tecla: Botón que presionas para escribir
correo: Mensaje electrónico con asunto
cámara: Toma fotos y videos
router: Reparte el internet en tu casa
código: Instrucciones que escribe un programador
hacker: Experto en meterse a sistemas
antena: Capta señales en el aire
teclado: Tiene letras y números para escribir
celular: Teléfono que llevas en el bolsillo
tableta: Pantalla táctil más grande que un celular
memoria: Donde se guardan los datos
archivo: Documento guardado en la compu
carpeta: Agrupa tus archivos
sistema: Conjunto de partes que trabajan juntas
enchufe: Conecta a la corriente eléctrica
escáner: Copia documentos a la computadora
pantalla: Donde ves las imágenes
cargador: Le da batería al celular
servidor: Computadora que guarda páginas web
internet: La red que conecta al mundo
software: Los programas de la compu
hardware: Las partes físicas de la compu
programa: Hace una tarea en la computadora
buscador: Ahí escribes lo que quieres encontrar
satélite: Orbita la Tierra y manda señales
robótica: Ciencia de las máquinas que se mueven solas
microchip: Circuito diminuto
impresora: Pasa tus documentos a papel
algoritmo: Pasos para resolver un problema
navegador: Programa para abrir páginas web
descargar: Bajar un archivo de internet
holograma: Imagen en 3D hecha de luz
bluetooth: Conecta tus audífonos sin cables
disco duro: Guarda toda la información de la compu
página web: Sitio que visitas en internet
contraseña: Clave secreta para entrar
procesador: El cerebro de la computadora
aplicación: Programa para tu teléfono
computadora: Máquina para trabajar, jugar y navegar
videollamada: Hablas viendo la cara del otro
criptomoneda: Dinero digital
actualización: Versión nueva de un programa
nanotecnología: Ingeniería de cosas diminutas
realidad virtual: Te pones lentes y entras a otro mundo
inteligencia artificial: Máquinas que aprenden y conversan
`},

videojuegos: { ico:'🎮', label:'Videojuegos', lista:`
lag: Retraso por mal internet
vida: Si la pierdes todas, game over
mapa: Te dice dónde estás
jefe: Enemigo poderoso al final del nivel
skin: Apariencia nueva para tu personaje
noob: Jugador novato
nivel: Mundo, etapa o fase
combo: Golpes encadenados
gamer: Persona que juega mucho
mando: Otra forma de decirle al control
logro: Trofeo por hacer algo especial
zombi: Muerto viviente que persigue al jugador
avatar: Tu personaje en el juego
misión: Tarea que debes cumplir
récord: El puntaje más alto
moneda: Se recoge para comprar cosas
tesoro: Cofre lleno de riquezas
espada: Arma del héroe
escudo: Te protege de los golpes
poción: Botellita que te cura
arcade: Máquina de juegos con monedas
torneo: Competencia entre jugadores
trofeo: Premio por un logro
tienda: Donde compras mejoras
dragón: Bestia que escupe fuego
consola: Aparato que se conecta a la tele para jugar
control: Lo tomas con las manos para jugar
partida: Una ronda de juego
enemigo: El que te ataca
batalla: Pelea entre jugadores
joystick: Palanca para moverte
aventura: Género de explorar y descubrir
tutorial: Te enseña a jugar
mazmorra: Calabozo lleno de monstruos
emulador: Programa para jugar juegos viejos
cartucho: Así se jugaba en las consolas viejas
personaje: El que controlas
jefe final: El último y más difícil
maquinita: Arcade de la tiendita
videojuego: Juego en pantalla
inventario: Donde guardas tus objetos
plataforma: Juego de saltar de un lado a otro
estrategia: Género de planear y conquistar
puntuación: Tus puntos totales
experiencia: Te sube de nivel
multijugador: Jugar con otras personas
mundo abierto: Puedes ir a donde quieras
modo historia: Sigues la trama del juego
guardar partida: Para no perder tu avance
pro: Jugador muy bueno
clan: Grupo de jugadores que se juntan
pausa: Detiene el juego un momento
botón: Lo presionas en el control
hongo: Te hace crecer en un juego de plomeros
manco: Así le dicen al que juega muy mal
campero: Jugador que se esconde y espera
minimapa: Mapa chiquito en una esquina de la pantalla
laberinto: Camino con muchas vueltas y salidas falsas
vida extra: Te salva de perder la partida
potenciador: Objeto que te da poderes por un rato
barra de vida: Indica cuánta salud te queda
francotirador: Dispara desde lejos con mira
nivel secreto: Escondido para los que exploran
punto de control: Si pierdes, regresas a ese lugar
pantalla de carga: Lo que ves mientras inicia el nivel
consola portátil: Para jugar en cualquier lugar
modo cooperativo: Juegas en equipo con tus amigos
`},

peliculas: { ico:'🎬', label:'Películas y caricaturas', lista:`
Coco: Película de Pixar sobre el Día de Muertos
Cars: Película del Rayo McQueen
Goku: Guerrero saiyajin de pelo de punta
Nemo: Pez payaso que se perdió en el océano
Dory: Pez azul con muy mala memoria
Elsa: Reina con poderes de hielo
Olaf: Muñeco de nieve que ama los abrazos
Buzz: Guardián espacial de juguete que cree que puede volar
Bart: Hijo travieso de una familia amarilla
Shrek: Ogro verde que vive en un pantano
Dumbo: Elefantito que vuela con sus orejas
Bambi: Cervatillo del bosque que perdió a su mamá
Simba: Cachorro de león que será rey
Moana: Navega por el océano con un semidiós
Mulán: Se disfrazó de soldado para salvar a su padre
Woody: Vaquero de juguete con una serpiente en su bota
Quico: Niño cachetón que presume sus juguetes
Stitch: Experimento azul que vive en Hawái
Frozen: Película de dos hermanas en un reino congelado
Naruto: Ninja que sueña con ser Hokage
Homero: Papá amarillo que trabaja en una planta nuclear
Mickey: Ratón famoso de orejas redondas
Piolín: Canario amarillo que siempre escapa del gato
Popeye: Marinero fuerte gracias a las espinacas
Batman: Héroe enmascarado de Ciudad Gótica
Titanic: Barco que choca con un iceberg en la película
Encanto: La familia Madrigal y su casa mágica
Pinocho: Muñeco de madera al que le crece la nariz
Aladino: Joven con una lámpara mágica y un genio
Tarzán: Lo criaron los gorilas en la selva
Minions: Ayudantes amarillos que hablan raro
Pikachu: Ratón eléctrico amarillo
Scooby: Perro gran danés que resuelve misterios
Pokémon: Hay que atraparlos a todos
Hércules: Semidiós griego en una película de Disney
Garfield: Gato naranja que odia los lunes
Rapunzel: Princesa de cabello larguísimo
Superman: Viene de Kriptón y vuela
Doraemon: Gato robot azul que viene del futuro
Patricio: Estrella de mar rosa, mejor amigo de una esponja
El Chavo: Niño que vive en un barril de la vecindad
Don Ramón: El que nunca paga la renta en la vecindad
Calamardo: Vecino gruñón que toca el clarinete
Toy Story: Película de juguetes que cobran vida
Increíbles: Familia de superhéroes de Pixar
Cenicienta: Perdió una zapatilla de cristal a medianoche
Madagascar: Animales del zoológico que escapan a una isla
Mario Bros: Hermanos plomeros que rescatan a una princesa
Picapiedra: Familia de las cavernas con un dinosaurio de mascota
Chilindrina: Niña pecosa de lentes y coletas
Ratatouille: Rata que sueña con ser chef en París
Bob Esponja: Vive en una piña debajo del mar
Bugs Bunny: Conejo que pregunta qué hay de nuevo, viejo
Era de Hielo: Un mamut, un perezoso y un tigre dientes de sable
Blancanieves: Vivía con siete enanos
Pantera Rosa: Felina elegante que camina de puntitas
Pájaro Loco: Ave carpintera roja de risa escandalosa
Dragon Ball: Serie de Goku y las siete esferas mágicas
Sailor Moon: Guerrera con traje de marinera y poderes de la luna
Monsters Inc: Monstruos que asustan niños para tener energía
Intensa Mente: Película de las emociones dentro de una niña
Harry Potter: Mago con una cicatriz de rayo en la frente
Hombre Araña: Héroe que trepa paredes y lanza telarañas
Kung Fu Panda: Oso que se vuelve guerrero dragón
Parque Jurásico: Isla con dinosaurios clonados
Chapulín Colorado: Héroe de antenitas de vinil
Mi Villano Favorito: Gru y sus ayudantes amarillos
`},

juguetes: { ico:'🪀', label:'Juegos y juguetes', lista:`
yoyo: Sube y baja colgado de un hilo
cubo: Rompecabezas de colores que se gira
dados: Cubos con puntitos que se lanzan
tazos: Fichas redondas que venían en las papitas
globo: Se infla y se amarra
osito: Peluche suavecito de oso
basta: Escribir palabras que empiecen con la misma letra
trompo: Se enrolla con cordón y se lanza a girar
balero: Hay que meter el palito en la bola de madera
muñeca: Juguete con forma de persona
pelota: Rueda, rebota y se patea
dominó: Fichas con puntitos que se emparejan
títere: Muñeco que se mueve metiendo la mano
baraja: Cartas para jugar
cuerda: Se brinca mientras dos la hacen girar
canicas: Bolitas de vidrio que se tiran con el dedo
carrito: Coche de juguete
peluche: Juguete suavecito de tela
resorte: Saltar un elástico estirado entre dos personas
rayuela: Brincar cuadros pintados en el piso
matatena: Se lanza una pelotita y se recogen piezas
papalote: Se eleva con el viento y un hilo
pirinola: Trompito de seis caras: toma uno, pon dos
columpio: Te meces colgado de cadenas
triciclo: Bici de tres ruedas para niños
burbujas: Se soplan con agua y jabón
estampas: Se pegan en el álbum
memorama: Juego de encontrar los pares
quemados: Lanzar la pelota para sacar a los rivales
bebeleche: Otro nombre del avioncito pintado en el piso
cocinita: Juguete para jugar a preparar la comida
marioneta: Muñeco que se mueve con hilos
las traes: Uno persigue y al tocar te toca perseguir
plastilina: Masa de colores para moldear
escondidas: Uno cuenta y los demás se ocultan
encantados: Si te tocan te quedas congelado
trenecito: Juguete que corre sobre rieles
soldaditos: Figuritas verdes de plástico
sube y baja: Tabla con un niño en cada lado
damas chinas: Tablero de estrella con canicas
resbaladilla: Te deslizas por ella en el parque
rompecabezas: Piezas que se arman para formar una imagen
Doña Blanca: Ronda de pilares de oro y plata
gallina ciega: Con los ojos tapados atrapas a los demás
tiro al blanco: Atinarle al centro de la diana
pistola de agua: Juguete para mojar a los demás
casita de muñecas: Hogar en miniatura para jugar
víbora de la mar: Ronda donde se pasa debajo de un puente de brazos
piedra papel o tijera: Se decide quién gana con la mano
serpientes y escaleras: Subes por unas y bajas por otras
`},

ciencia: { ico:'🔬', label:'Ciencia', lista:`
ADN: Molécula que guarda la herencia
eco: Sonido que rebota y regresa
oro: Metal precioso de símbolo Au
imán: Atrae el metal
lupa: Hace ver las cosas más grandes
masa: Cantidad de materia de un cuerpo
onda: Así viajan la luz y el sonido
átomo: La partícula de toda la materia
ácido: Como el limón, tiene pH bajo
fósil: Resto de un ser vivo convertido en piedra
vapor: Agua convertida en gas
polea: Rueda que ayuda a levantar cosas
sodio: Elemento que con el cloro forma la sal
plata: Metal brillante de símbolo Ag
célula: La unidad más pequeña de la vida
órbita: Camino que sigue un planeta
protón: Partícula positiva del núcleo
fuerza: Lo que empuja o jala
física: Estudia la energía y el movimiento
vacuna: Te protege de enfermedades
plasma: El cuarto estado de la materia
sólido: Estado de la materia con forma fija
sonido: Vibración que escuchas
calcio: Mineral de huesos y dientes
hierro: Metal que se oxida
oxígeno: Lo respiramos
carbono: Elemento base de la vida
neutrón: Partícula sin carga del núcleo
energía: Capacidad de hacer trabajo
química: Estudia las sustancias y reacciones
neurona: Célula del cerebro
líquido: Estado de la materia que fluye
probeta: Tubo de laboratorio para medir
mitosis: División de una célula en dos
presión: Fuerza sobre una superficie
inercia: Tendencia a seguir igual
palanca: Barra que multiplica la fuerza
electrón: Partícula negativa del átomo
molécula: Grupo de átomos unidos
proteína: Nutriente que forma los músculos
gravedad: Lo que hace caer las cosas
genética: Estudia la herencia
bacteria: Microbio de una sola célula
biología: Estudia los seres vivos
geología: Estudia las rocas y la tierra
circuito: Camino por donde corre la electricidad
fricción: Fuerza que frena al rozar
densidad: Masa entre volumen
elemento: Está en la tabla periódica
hidrógeno: El elemento más ligero
evolución: Teoría de Darwin
hipótesis: Idea que se pone a prueba
velocidad: Distancia entre tiempo
clorofila: Pigmento verde de las plantas
cromosoma: Paquete de ADN
radiación: Energía que viaja en ondas o partículas
magnetismo: Fuerza de los imanes
dinosaurio: Reptil gigante extinto
termómetro: Mide la temperatura
microscopio: Para ver lo diminuto
laboratorio: Donde se hacen experimentos
experimento: Prueba para comprobar algo
temperatura: Qué tan caliente o frío está algo
aceleración: Cambio de velocidad
electricidad: Prende los focos
fotosíntesis: Las plantas hacen su alimento con luz
metamorfosis: La oruga se vuelve mariposa
tabla periódica: Ordena todos los elementos
`},

espacio: { ico:'🚀', label:'Espacio', lista:`
sol: Nuestra estrella
luna: Satélite natural de la Tierra
ovni: Objeto volador no identificado
sonda: Nave sin tripulación que explora planetas
Ceres: Planeta enano del cinturón de asteroides
Titán: La luna más grande de Saturno
Marte: El planeta rojo
Venus: El planeta más caliente
Urano: Planeta que gira acostado
Orión: Constelación del cazador con su cinturón
cosmos: Otro nombre del universo
cometa: Tiene una cola brillante de hielo y polvo
Tierra: Nuestro planeta
Plutón: Lo bajaron a planeta enano
cohete: Despega con fuego hacia el espacio
órbita: Vuelta alrededor de un planeta o estrella
cráter: Hoyo que deja un meteorito
eclipse: La luna tapa al sol, o la Tierra a la luna
galaxia: Millones de estrellas juntas
planeta: Gira alrededor de una estrella
Júpiter: El planeta más grande
Saturno: El planeta de los anillos
Neptuno: El planeta más lejano del Sol
universo: Todo lo que existe
marciano: Habitante imaginario de Marte
año luz: Distancia que recorre la luz en un año
estrella: Bola de gas que brilla
nebulosa: Nube de gas y polvo donde nacen estrellas
satélite: Gira alrededor de un planeta
Mercurio: El planeta más cercano al Sol
gravedad: Nos mantiene pegados al suelo
asteroide: Roca que viaja por el espacio
meteorito: Roca espacial que llega al suelo
solsticio: El día más largo o más corto del año
Andrómeda: La galaxia vecina de la nuestra
luna llena: Cuando se ve completita
supernova: Explosión de una estrella gigante
telescopio: Para ver lo que está lejos
astronauta: Viaja al espacio
alienígena: Ser de otro planeta
alunizaje: Llegar a la luna
exoplaneta: Planeta fuera del sistema solar
equinoccio: Día y noche duran lo mismo
Vía Láctea: Nuestra galaxia
enana blanca: Lo que queda de una estrella como el Sol
constelación: Grupo de estrellas que forma una figura
agujero negro: Ni la luz escapa de él
estrella fugaz: Pide un deseo cuando la veas
gravedad cero: Flotas como astronauta
traje espacial: Lo usa el astronauta para salir de la nave
sistema solar: El Sol y sus planetas
agujero de gusano: Atajo teórico entre dos puntos del universo
estación espacial: Laboratorio que orbita la Tierra
rover: Vehículo que explora otro planeta
Apolo: Misiones que llevaron humanos a la luna
Fobos: Luna de Marte
púlsar: Estrella que gira y lanza pulsos de radio
cuásar: Núcleo de galaxia superbrillante
Big Bang: La gran explosión que inició todo
Ganímedes: La luna más grande de Júpiter
cosmonauta: Así se le dice al astronauta ruso
luna nueva: Cuando casi no se ve en el cielo
eclipse solar: La luna tapa al sol
materia oscura: No se ve, pero tiene gravedad
lluvia de meteoros: Muchas estrellas fugaces juntas
cinturón de asteroides: Rocas que giran entre Marte y Júpiter
`},

cuerpo: { ico:'🫀', label:'Cuerpo humano', lista:`
ojo: Con él ves
pie: Tiene cinco dedos y talón
uña: Crece en la punta de los dedos
boca: Por ahí comes y hablas
mano: Tiene cinco dedos
dedo: Tienes veinte en total
codo: Parte del brazo que no puedes lamer
pelo: Crece en la cabeza
piel: El órgano más grande del cuerpo
ceja: Pelito arriba del ojo
nuca: Parte de atrás del cuello
vena: Lleva la sangre al corazón
nariz: Con ella hueles
oreja: Con ella oyes
labio: Rodea la boca
brazo: Va del hombro a la mano
pecho: Parte delantera del torso
axila: Debajo del brazo
fémur: El hueso más largo
sangre: Líquido rojo que corre por las venas
lengua: Con ella saboreas
diente: Muerde y mastica
cuello: Une la cabeza con el cuerpo
hombro: Donde empieza el brazo
pierna: Te sostiene y camina
cadera: Se mueve al bailar
frente: Arriba de las cejas
nervio: Lleva mensajes al cerebro
pulmón: Respira aire
riñón: Filtra la sangre
cráneo: Protege el cerebro
pupila: El centro negro del ojo
bíceps: Músculo que se presume
rodilla: Se dobla al caminar
tobillo: Une la pierna con el pie
ombligo: Cicatriz en medio de la panza
espalda: Parte de atrás del torso
cintura: Parte angosta del cuerpo
cerebro: Piensa y controla todo
corazón: Late sin parar
hígado: Órgano que limpia el cuerpo
músculo: Se hace fuerte con ejercicio
mejilla: Se pone roja cuando te da pena
muñeca: Une la mano con el brazo
tímpano: Vibra para que puedas oír
párpado: Se cierra al parpadear
abdomen: La panza
esófago: Lleva la comida al estómago
tráquea: Lleva el aire a los pulmones
estómago: Ahí se digiere la comida
intestino: Tubo larguísimo de la digestión
costilla: Hueso curvo del pecho
columna: Te mantiene derecho
barbilla: Debajo de la boca
pestaña: Pelito en la orilla del párpado
garganta: Te duele cuando estás resfriado
vértebra: Huesito de la columna
esternón: Hueso plano en medio del pecho
omóplato: Hueso triangular de la espalda
esqueleto: Todos los huesos juntos
páncreas: Órgano que produce insulina
cartílago: Lo que tienes en la nariz y orejas
diafragma: Músculo que te ayuda a respirar
mandíbula: Hueso que se mueve al masticar
clavícula: Hueso entre el hombro y el cuello
dedo meñique: El más pequeño de la mano
glóbulo rojo: Célula que lleva oxígeno en la sangre
huella digital: Nadie más tiene la misma
cuerdas vocales: Vibran para que hables
muela del juicio: Sale al final, y a veces duele
sistema nervioso: Red de mensajes del cuerpo
`},

historia: { ico:'📜', label:'Historia', lista:`
rey: Lleva corona y gobierna
maya: Cultura de Chichén Itzá y Palenque
inca: Imperio de Machu Picchu
reina: Esposa del rey o monarca
tribu: Grupo de familias con un mismo líder
momia: Cuerpo vendado y conservado
Villa: El Centauro del Norte
Troya: Ciudad del famoso caballo de madera
códice: Libro pintado de los pueblos antiguos
corona: Símbolo del rey
azteca: Otro nombre de los mexicas
olmeca: Cultura de las cabezas colosales
faraón: Rey del antiguo Egipto
imperio: Reino muy grande con muchos territorios
guerra: Conflicto armado entre pueblos
papiro: Papel del antiguo Egipto
Juárez: El Benemérito de las Américas
Zapata: Tierra y libertad
Hidalgo: Dio el Grito de Dolores
Morelos: El Siervo de la Nación
Esparta: Ciudad griega de guerreros
muralla: Pared enorme para defender una ciudad
tolteca: Cultura de los atlantes de Tula
mixteca: Cultura de Oaxaca de grandes orfebres
vikingo: Guerrero nórdico que navegaba en drakkar
samurái: Guerrero japonés con katana
tratado: Acuerdo firmado entre países
coliseo: Arena romana de gladiadores
cacique: Jefe de un pueblo indígena
Adelita: Mujer soldado de la Revolución
Reforma: Época de las leyes de Juárez
zapoteca: Cultura de Monte Albán
pirámide: Construcción con base cuadrada y punta
castillo: Fortaleza de reyes y caballeros
conquista: Llegada de los españoles a Tenochtitlan
tlatoani: Gobernante de los mexicas
armadura: Traje de metal del caballero
catapulta: Lanzaba piedras contra las murallas
carabela: Barco de Colón
pergamino: Documento antiguo enrollado
Moctezuma: Tlatoani que recibió a Cortés
Napoleón: Emperador francés de baja estatura
gladiador: Peleaba en la arena romana
caballero: Guerrero medieval con armadura
Cleopatra: Última reina de Egipto
monarquía: Gobierno de un rey
democracia: Gobierno del pueblo
Cuauhtémoc: Último tlatoani mexica
virreinato: México bajo el gobierno de España
revolución: Lucha armada de 1910
Porfiriato: Los años de Porfirio Díaz
insurgente: Luchó por la Independencia
jeroglífico: Escritura con dibujos de Egipto
prehistoria: La época antes de la escritura
Tenochtitlan: Ciudad sobre el lago, capital mexica
constitución: La ley más importante de un país
independencia: Se celebra cada 16 de septiembre
Renacimiento: Época de Da Vinci y Miguel Ángel
Niños Héroes: Defendieron el Castillo de Chapultepec
Edad Media: Época de castillos y caballeros
piedra del sol: Calendario mexica tallado en roca
imperio romano: Gobernado por césares desde Roma
Cristóbal Colón: Llegó a América en 1492
Madero: Inició la Revolución en 1910
Cortés: Conquistador español que llegó a Tenochtitlan
Pípila: Quemó la puerta de la Alhóndiga de Granaditas
Allende: Militar insurgente compañero de Hidalgo
Malinche: Intérprete del conquistador español
Carranza: Promulgó la Constitución de 1917
Iturbide: Consumó la Independencia y fue emperador
Sor Juana: Monja poeta del virreinato
Santa Anna: Fue presidente once veces en el siglo XIX
Corregidora: Josefa Ortiz, avisó a los insurgentes
Maximiliano: Emperador austriaco de México
`},

mitos: { ico:'💀', label:'Mitos y leyendas', lista:`
alux: Duende travieso de la selva maya
elfo: Ser del bosque de orejas puntiagudas
gnomo: Hombrecito de gorro rojo que cuida jardines
yeti: El abominable hombre de las nieves
Zeus: Rey de los dioses griegos que lanza rayos
Thor: Dios nórdico del trueno con su martillo
Hades: Dios griego del inframundo
hada: Ser pequeño con alas y varita
ogro: Gigante feo que come gente en los cuentos
bruja: Vuela en escoba
nahual: Brujo que se convierte en animal
sirena: Mitad mujer, mitad pez
calaca: Esqueleto mexicano que siempre sonríe
duende: Ser pequeño y travieso
Tláloc: Dios mexica de la lluvia
Xólotl: Dios perro que guía a los muertos
dragón: Reptil gigante que escupe fuego
Pegaso: Caballo con alas
Xtabay: Mujer bella que pierde a los hombres en la selva
ánima: Alma en pena
cíclope: Gigante de un solo ojo
Llorona: ¡Ay, mis hijos!
chaneque: Duende que cuida bosques y ríos
vampiro: Bebe sangre y odia el ajo
espanto: Aparición que asusta de noche
Mictlán: El inframundo de los mexicas
calavera: Cráneo de azúcar en Día de Muertos
fantasma: Alma que asusta, sábana blanca
centauro: Mitad hombre, mitad caballo
unicornio: Caballo con un cuerno
minotauro: Mitad hombre, mitad toro en un laberinto
Coatlicue: Diosa mexica de la falda de serpientes
ave fénix: Renace de sus cenizas
hombre lobo: Se transforma con la luna llena
chupacabras: Monstruo que ataca al ganado
Quetzalcóatl: La serpiente emplumada
Tezcatlipoca: Dios mexica del espejo humeante
xoloitzcuintle: Perro sin pelo que guía a las almas
Huitzilopochtli: Dios mexica del sol y la guerra
Mictlantecuhtli: Señor del inframundo mexica
callejón del beso: Leyenda de amor de Guanajuato
Odín: Padre de los dioses nórdicos
grifo: Mitad águila, mitad león
hidra: Serpiente de muchas cabezas que vuelven a crecer
troll: Ser feo que vive bajo los puentes
Chaac: Dios maya de la lluvia
gólem: Gigante de barro que cobra vida
kraken: Pulpo gigante que hunde barcos
Medusa: Su mirada convierte en piedra
Atenea: Diosa griega de la sabiduría
Aquiles: Héroe griego con un talón débil
Ehécatl: Dios mexica del viento
lechuza: Dicen que es una bruja transformada
tecolote: Ave nocturna que, según la leyenda, anuncia la muerte
Poseidón: Dios griego del mar
Mayahuel: Diosa mexica del maguey
Kukulkán: Serpiente emplumada de los mayas
valquiria: Guerrera que lleva a los caídos al Valhalla
charro negro: Jinete oscuro que ofrece riquezas a cambio del alma
La Planchada: Fantasma de enfermera que cuida a los pacientes de noche
Xochiquetzal: Diosa mexica de las flores y el amor
mulata de Córdoba: Bruja que escapó de la cárcel en un barco dibujado
`},

muertos: { ico:'🎃', label:'Muertos y Halloween', lista:`
sal: En la ofrenda sirve para purificar
vela: Se enciende para guiar a las almas
agua: Se deja en el altar para la sed de las almas
foto: Imagen del difunto que se pone en el altar
cruz: Se coloca sobre las tumbas
arco: Adorno de flores que enmarca el altar
copal: Resina que se quema y perfuma el altar
altar: Mesa adornada para recordar a los que se fueron
tumba: Ahí descansan los restos de alguien
momia: Cuerpo vendado de las películas de miedo
zombi: Muerto viviente que camina lento
susto: Lo que te dan en una casa embrujada
araña: Teje su red en las esquinas oscuras
ouija: Tablero para hablar con los espíritus
ataúd: Caja donde se sepulta a alguien
diablo: Rojo, con cuernos y cola puntiaguda
lápida: Piedra con el nombre del difunto
escoba: Medio de transporte de las brujas
catrín: Pareja elegante de la famosa calavera de sombrero
disfraz: Te lo pones el 31 de octubre
hechizo: Palabras mágicas de una bruja
caldero: Olla negra donde hierven las pociones
máscara: Te tapa la cara en la noche de brujas
difunto: Persona que ya murió
demonio: Ser maligno de las películas de terror
Mixquic: Pueblo de la CDMX famoso por su noche de velación
panteón: Se visita el 2 de noviembre
Drácula: El conde vampiro de Transilvania
veladora: Vela en vaso que dura toda la noche
Janitzio: Isla de Michoacán donde se vela en el lago
fantasma: Alma en pena tapada con una sábana
telaraña: Red pegajosa en los rincones
monstruo: Criatura que asusta a los niños
incienso: Varita que perfuma con su humo
epitafio: Frase escrita sobre una tumba
calabaza: Se talla con una cara y se le pone una vela adentro
colmillos: Los tiene el vampiro para morder
esqueleto: Todos los huesos juntos y sin piel
alfeñique: Figuritas de azúcar del Día de Muertos
exorcismo: Ritual para sacar a un demonio de un cuerpo
calaverita: Versito chistoso que se escribe en noviembre
camposanto: Otro nombre del cementerio
cementerio: Lugar lleno de tumbas
luna llena: Noche perfecta para los hombres lobo
gato negro: Dicen que trae mala suerte si se te cruza
ultratumba: Lo que hay más allá de la muerte
murciélago: Vuela de noche y es símbolo de Halloween
sepulturero: Trabaja cavando tumbas
Frankenstein: Monstruo armado con partes y despertado con un rayo
papel picado: Banderitas de colores que adornan el altar
Todos Santos: Otro nombre del 1 de noviembre
pan de muerto: Lleva huesitos de masa y azúcar encima
dulce o truco: Lo que dicen los niños al tocar puertas
Día de Muertos: Se celebra el 1 y 2 de noviembre
casa embrujada: Lugar lleno de fantasmas y ruidos raros
espantapájaros: Muñeco de paja que asusta a las aves
noche de brujas: Otro nombre de Halloween
`},

navidad: { ico:'🎄', label:'Navidad y posadas', lista:`
reno: Jala el trineo de Santa
pavo: Se hornea para la cena de diciembre
uvas: Se comen doce a medianoche en Año Nuevo
elfo: Ayudante en la fábrica de juguetes del Polo Norte
heno: Planta gris que se pone en el nacimiento
pino: Árbol que se pone en casa en diciembre
caña: Fruta dulce que va en el ponche y en la piñata
ángel: Figura con alas que se pone en el nacimiento
Belén: Ciudad donde nació el niño Jesús
Santa: Viste de rojo, tiene barba blanca y trae regalos
nieve: Copos blancos que caen en invierno
luces: Foquitos de colores que parpadean en el árbol
abeto: Árbol de hoja que nunca se cae, típico de diciembre
esfera: Bolita brillante que cuelga del árbol
regalo: Se abre el 25 de diciembre
ponche: Bebida caliente con frutas y canela
trineo: Vehículo de Santa sobre la nieve
pierna: Carne de cerdo horneada para la cena
deseos: Se piden con cada uva de Año Nuevo
brindis: Se levantan las copas para celebrar
bacalao: Pescado que se guisa en Nochebuena
pesebre: Lugar con paja donde nació el niño Dios
Rodolfo: El reno de nariz roja
buñuelo: Tortilla dulce y crujiente con miel de piloncillo
campana: Suena en las canciones de diciembre
letanía: Canto que se reza en las posadas
pastores: Figuras del nacimiento que cuidan ovejas
muérdago: Planta bajo la que se dan un beso
estrella: Va en la punta del árbol
galletas: Se le dejan a Santa con un vaso de leche
invierno: La estación del frío
cascabel: Suena colgado del trineo
chimenea: Por donde entra Santa a las casas
colación: Dulces de azúcar que se reparten en las posadas
arrullar: Lo que se hace con el niño Dios en Nochebuena
Niño Dios: Se arrulla y se acuesta en Nochebuena
romeritos: Hierba que se come con mole y tortitas de camarón
guirnalda: Tira brillante para adornar el árbol
aguinaldo: Bolsita de dulces de la posada, y el pago extra de diciembre
Año Nuevo: Se recibe con doce uvas
villancico: Canción de diciembre
peregrinos: Los que piden posada cantando
Nochebuena: La noche del 24 de diciembre
Candelaria: Día de los tamales, el 2 de febrero
nacimiento: Escena del niño Dios con figuritas
intercambio: Se rifa a quién le vas a regalar
Reyes Magos: Melchor, Gaspar y Baltasar
Día de Reyes: El 6 de enero se parte la rosca
árbol de Navidad: Se adorna con esferas, luces y una estrella
bastón de caramelo: Dulce rayado rojo y blanco
chocolate caliente: Bebida perfecta para el frío
flor de nochebuena: Planta roja originaria de México
`},

colores: { ico:'🎨', label:'Colores', lista:`
rojo: Color de la sangre y las fresas
azul: Color del cielo y el mar
gris: Color de la ceniza
rosa: Color del chicle
lila: Morado clarito, como la flor
café: Color de la tierra y el chocolate
ocre: Amarillo terroso
vino: Rojo oscuro como la bebida
oliva: Verde de las aceitunas
verde: Color del pasto
negro: Color de la noche sin luna
blanco: Color de la nieve
dorado: Color del oro
crema: Blanco amarillento y suave
ámbar: Amarillo anaranjado de la resina
sepia: Café de las fotos antiguas
fucsia: Rosa intenso tirando a morado
hueso: Blanco amarillento
beige: Café muy clarito
coral: Rosa anaranjado del arrecife
cobre: Rojizo metálico
bronce: Café dorado de la tercera medalla
marfil: Blanco de los colmillos de elefante
índigo: Azul profundo entre azul y violeta
salmón: Rosa anaranjado como el pescado
morado: Mezcla de rojo y azul
naranja: Mezcla de rojo y amarillo
violeta: Color de la flor del mismo nombre
magenta: Rosa púrpura de las impresoras
lavanda: Morado claro de la planta aromática
celeste: Azul clarito del cielo
carmesí: Rojo intenso
mostaza: Amarillo como el aderezo
amarillo: Color del sol y los plátanos
plateado: Color de la plata
turquesa: Azul verdoso del mar Caribe
escarlata: Rojo brillante
esmeralda: Verde brillante de la piedra preciosa
azul cielo: Azul clarito de un día soleado
berenjena: Morado oscuro como la verdura
frambuesa: Rosa rojizo como la frutita
chocolate: Café oscuro y dulce
terracota: Color del barro cocido
aguamarina: Azul verdoso clarito
azul marino: Azul muy oscuro
verde limón: Como la cáscara del cítrico más ácido
rosa mexicano: Rosa intenso, orgullo nacional
cian: Azul verdoso de las impresoras
tinto: Rojo oscuro como el vino
caqui: Café verdoso de los uniformes de safari
arena: Beige como la playa
mamey: Naranja rosado como la fruta
granate: Rojo oscuro como la piedra preciosa
azul rey: Azul intenso y brillante
gris perla: Gris clarito y brillante
rojo fuego: Rojo intenso como las llamas
verde menta: Como el helado de hierbabuena
verde militar: Color de los uniformes del ejército
café con leche: Café clarito
negro azabache: El tono más oscuro e intenso
amarillo canario: Brillante como el pajarito que canta
`},

escuela: { ico:'🎒', label:'Escuela', lista:`
gis: Para escribir en el pizarrón verde
clip: Sujeta hojas
suma: Más
lápiz: Escribe y se borra
goma: Borra lo que escribiste con lápiz
regla: Para trazar líneas rectas
libro: Tiene páginas para leer
tarea: Trabajo para hacer en casa
salón: Donde se toma la clase
banca: Asiento del alumno
prepa: Después de la secundaria
resta: Menos
tijeras: Para recortar
alumno: El que aprende en la escuela
recreo: La hora favorita de todos
examen: Prueba para calificar
plumón: Marcador de colores
kínder: La primera escuela
boleta: Trae tus calificaciones
horario: Te dice qué clase toca
honores: Ceremonia del lunes a la bandera
escolta: Lleva la bandera en la ceremonia
pupitre: Mesa con asiento del salón
crayola: Color de cera
diploma: Papel que recibes al terminar
maqueta: Modelo en miniatura para un proyecto
cuaderno: Hojas para tus apuntes
mochila: Cargas tus útiles
pizarrón: Donde escribe el maestro
borrador: Limpia el pizarrón
fracción: Un medio, un tercio, un cuarto
ecuación: Tiene una incógnita para resolver
división: Repartir en partes iguales
lonchera: Donde llevas tu comida
proyecto: Trabajo grande en equipo
reprobar: Sacar menos de seis
primaria: De primero a sexto
geografía: Estudia mapas y países
pegamento: Une papeles
escuadra: Regla triangular
biblioteca: Lugar lleno de libros
secundaria: De primero a tercero, después de la primaria
abecedario: Letras de la A a la Z
ortografía: Escribir sin faltas
exposición: Presentar un tema frente al grupo
vacaciones: Cuando no hay clases
calculadora: Hace las cuentas
diccionario: Dice lo que significan las palabras
universidad: Ahí estudias una carrera
sacapuntas: Afila el lápiz
graduación: Fiesta al terminar la escuela
matemáticas: Números, sumas y restas
engrapadora: Une hojas con grapas
marcatextos: Resalta lo importante
cuestionario: Lista de preguntas
calificación: Número del uno al diez
transportador: Mide ángulos
globo terráqueo: Mapa del mundo en forma de pelota
mapa: Representa un país o el mundo en papel
pluma: Para escribir con tinta
compás: Para trazar círculos
útiles: Lista de cosas para el regreso a clases
director: El jefe de la escuela
prefecto: Vigila los pasillos de la secundaria
uniforme: Ropa igual para todos los alumnos
corrector: Tapa los errores de tinta
cartulina: Papel grueso para exposiciones
credencial: Identificación del alumno
monografía: Estampita con información para la tarea
cooperativa: Tiendita de la escuela
jefe de grupo: Representante del salón
tablas de multiplicar: Se memorizan en la primaria: dos por dos...
`},

verbos: { ico:'🏃', label:'Verbos', lista:`
ver: Lo haces con los ojos
oír: Lo haces con las orejas
reír: Lo haces cuando algo te da gracia
leer: Lo haces con un libro
oler: Lo haces con la nariz
nadar: Lo haces en la alberca
jugar: Lo hacen los niños en el recreo
volar: Lo hacen las aves y los aviones
comer: Lo haces tres veces al día
soñar: Lo haces mientras duermes
tocar: Lo haces con las manos, o con un instrumento
mirar: Fijar la vista en algo
besar: Se hace con los labios
lavar: Limpiar con agua y jabón
jalar: Traer algo hacia ti
ganar: Quedar en primer lugar
saltar: Despegar los pies del suelo
correr: Ir más rápido que caminando
bailar: Moverse al ritmo de la música
cantar: Usar tu voz con melodía
dormir: Lo haces en la cama por la noche
llorar: Te salen lágrimas
gritar: Hablar muy, muy fuerte
barrer: Limpiar el piso con escoba
pintar: Dar color con pincel
vender: Dar algo a cambio de dinero
viajar: Ir a un lugar lejos de casa
buscar: Tratar de dar con algo perdido
morder: Clavar los dientes
silbar: Hacer sonido soplando con los labios
roncar: Hacer ruido al dormir
trepar: Subir agarrándote con manos y pies
gatear: Andar a cuatro patas como bebé
pensar: Usar la cabeza para razonar
romper: Hacer pedazos algo
perder: Lo contrario de ganar
abrazar: Rodear a alguien con los brazos
caminar: Avanzar paso a paso
dibujar: Hacer trazos para formar una imagen
cocinar: Preparar la comida
manejar: Lo haces al volante
comprar: Pagar para llevarte algo
empujar: Mover algo hacia adelante con fuerza
olvidar: Ya no acordarte de algo
enseñar: Lo hace el maestro
escribir: Hacer letras con lápiz o pluma
esconder: Poner algo donde nadie lo vea
masticar: Triturar la comida con las muelas
aplaudir: Juntar las manos para felicitar
bostezar: Abrir la boca cuando tienes sueño
tropezar: Casi caerte por un obstáculo
resbalar: Patinar sin querer en el piso mojado
susurrar: Hablar muy bajito al oído
recordar: Traer algo a la memoria
aprender: Saber algo nuevo
arreglar: Componer lo que está roto
encontrar: Dar con lo que buscabas
construir: Levantar una casa o un edificio
parpadear: Abrir y cerrar los ojos rápido
estornudar: Lo que haces con la nariz cuando tienes gripa
`},

emociones: { ico:'😄', label:'Emociones', lista:`
ira: Enojo muy fuerte
paz: Calma total
amor: Lo sientes por quien quieres
odio: Lo contrario del amor
asco: Lo que da algo repugnante
pena: Vergüenza o tristeza
risa: Sale cuando algo da gracia
culpa: Sientes que hiciste algo mal
calma: Tranquilidad
miedo: Te da en las películas de terror
celos: Temor a perder a quien quieres
enojo: Te pones rojo y frunces el ceño
susto: Te salta el corazón de repente
estrés: Demasiadas presiones a la vez
alegría: Estar feliz
ternura: Lo que da un cachorrito
envidia: Querer lo que tiene el otro
orgullo: Satisfacción por algo que lograste
coraje: Enojo, como dicen en México
pánico: Miedo descontrolado
alivio: Cuando por fin pasa la preocupación
rencor: Enojo guardado por mucho tiempo
nervios: Lo que sientes antes de un examen
cariño: Afecto por alguien
emoción: Sentimiento intenso
ilusión: Esperar algo con mucha emoción
empatía: Ponerte en los zapatos del otro
tristeza: Cuando estás triste y lloras
sorpresa: Lo que sientes cuando algo es inesperado
gratitud: Lo que sientes cuando das las gracias
soledad: Cuando te sientes sin nadie
euforia: Alegría desbordada
ansiedad: Preocupación que no te deja en paz
vergüenza: Te pones colorado
nostalgia: Extrañar el pasado
esperanza: Creer que algo bueno vendrá
felicidad: Estar contento con la vida
confianza: Creer en alguien
compasión: Sentir el dolor del otro
decepción: Cuando algo no fue como esperabas
melancolía: Tristeza suave y pensativa
entusiasmo: Muchas ganas de hacer algo
admiración: Lo que sientes por tu ídolo
frustración: Cuando no sale lo que intentas
aburrimiento: No hay nada que hacer
satisfacción: Gusto por el trabajo bien hecho
indiferencia: Que no te importe nada
desesperación: Cuando ya no ves salida
mariposas en el estómago: Lo que sientes cuando te gusta alguien
`},

tiktok: { ico:'📱', label:'Cosas de TikTok', lista:`
reto: Desafío que todos copian
meme: Imagen o video chistoso que se comparte
rosa: El regalo más barato del live
like: Le das al corazón
viral: Cuando todos lo comparten
trend: Tendencia que todos imitan
dueto: Video lado a lado con otro creador
baile: Coreografía de moda
emoji: Caritas para los mensajes
racha: Días seguidos platicando con alguien
video: Lo que subes a tu perfil
TikTok: La app donde estás ahora mismo
en vivo: Transmitir en directo
regalo: Lo mandas en el live con monedas
filtro: Efecto que cambia tu cara
sonido: Audio que se vuelve tendencia
perfil: Tu página con tus videos
para ti: La página principal donde todo se hace viral
monedas: Con ellas compras regalos
hashtag: Etiqueta que empieza con gato
creador: El que hace los videos
batalla: Reto entre dos lives con regalos
guardar: Para ver el video después
mensaje: Lo mandas por privado
edición: Cortar y pegar tu video
corazón: Se manda tocando dos veces la pantalla
seguidor: El que te sigue
insignia: Medallita de los fans en el live
compartir: Mandar el video a tus amigos
biografía: El texto de tu perfil
moderador: Cuida el chat del live
comentario: Lo que escribes debajo del video
espectador: El que ve el live
transición: Cambio de escena con estilo
suscriptor: Paga para apoyar al creador
club de fans: Grupo de seguidores fieles
transmisión: Lo que hace el creador en vivo
cámara lenta: Efecto para que todo vaya despacio
notificación: Aviso que te llega al celular
pantalla verde: Efecto para cambiar el fondo detrás de ti
dona: Regalo del live con chispitas
vista: Cada vez que alguien ve tu video
fijar: Dejar un comentario arriba de todos
efecto: Lo que le pones al video para que se vea diferente
alcance: A cuántas personas llegó tu video
sticker: Calcomanía para tu video o tus mensajes
galaxia: Regalo del live lleno de estrellas
encuesta: Pregunta con opciones para que tus seguidores voten
historia: Video que desaparece en 24 horas
reacción: Video donde respondes a otro video
bloquear: Que alguien ya no pueda ver tu perfil
reportar: Avisar que algo rompe las reglas
silenciar: Dejar de ver lo que publica alguien sin dejar de seguirlo
tendencia: Lo que está de moda en la app
subtítulos: Texto que aparece abajo del video
colaboración: Video que hacen dos creadores juntos
cuenta privada: Solo tus seguidores pueden ver tus videos
`},

};

/* ===== Procesado (no hace falta tocar nada de aquí para abajo) ===== */

/* Quita acentos pero conserva la Ñ */
function SK_normalizar(s){
  return String(s).toUpperCase()
    .replace(/Ñ/g, '\u0001')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/\u0001/g, 'Ñ');
}
/* Cuenta letras (sin espacios ni signos) */
function SK_contarLetras(s){
  return SK_normalizar(s).replace(/[^A-ZÑ]/g, '').length;
}

const SK_PALABRAS = (function(){
  const out = {};
  Object.entries(SK_PALABRAS_RAW).forEach(([key, cat]) => {
    const vistos = new Set();
    const list = [];
    cat.lista.split('\n').forEach(linea => {
      linea = linea.trim();
      if (!linea || linea.startsWith('//')) return;
      const i = linea.indexOf(':');
      const word = (i < 0 ? linea : linea.slice(0, i)).trim();
      const hint = (i < 0 ? '' : linea.slice(i + 1)).trim();
      const id = SK_normalizar(word);
      if (!word || vistos.has(id)) return;
      vistos.add(id);
      list.push({ word, hint, len: SK_contarLetras(word) });
    });
    out[key] = { ico: cat.ico, label: cat.label, list };
  });
  return out;
})();

if (typeof window !== 'undefined') {
  window.SK_PALABRAS = SK_PALABRAS;
  window.SK_normalizar = SK_normalizar;
  window.SK_contarLetras = SK_contarLetras;
}
if (typeof module !== 'undefined') module.exports = { SK_PALABRAS, SK_normalizar, SK_contarLetras };
