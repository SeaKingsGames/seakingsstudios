/* =====================================================
   SeaKingsGames · Banco de palabras
   Lo usan: ahorcado.html, ahorcado-live.html y sopa-letras.html

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
piedra del sol: Calendario azteca de piedra
imperio romano: Gobernado por césares desde Roma
Cristóbal Colón: Llegó a América en 1492
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
verde limón: Verde brillante y amarillento
rosa mexicano: Rosa intenso, orgullo nacional
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
