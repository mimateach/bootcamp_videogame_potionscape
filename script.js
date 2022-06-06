

const potionScape = initMap();
const actions = defineVerbs();
const button = document.getElementById("do");
button.onclick = verbValidation;


function initMap() {

    const potionScape = [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
    ];


    potionScape[0] = new Array();
    potionScape[1] = new Array();
    potionScape[2] = new Array();

    potionScape[0][0] = {description:'BIBLIOTECA', 
                        exits: ['S','E'], 
                        objects: new Map([["libros", true],["tarro", true],["pluma", true],["pergamino", true]])};
    potionScape[0][1] = {description:'SALA DE POCIONES', 
                        exits: ['E','W']};
    potionScape[0][2] = {description:'DESPENSA DEL MAGO', 
                        exits: ['W']};
    potionScape[1][0] = {description:'INVERNADERO', 
                        exits: ['N','S']};
    potionScape[1][1] = {description: 'Cuando te despiertas, te encuentras en una mazmorra que, curiosamente, parece cálida y acogedora. Hay cadenas y algunas ratas, sí, pero una pequeña chimenea está encendida. Parece que alguien acaba de avivar el fuego. ¿O no? A tu izquierda hay una enorme puerta de hierro. ¿Quién diría, en este ambiente, que se trata de una "sencilla" prueba de pociones de tu escuela de magia?', 
                        exits: ['N', 'S', 'E']};
    potionScape[1][2] = {description:'COCINAS ABANDONADAS', 
                        exits: ['W']};
    potionScape[2][0] = {description:'DESPENSA DEL ELFO', 
                        exits: ['N','E']};
    potionScape[2][1] = {description:'SALÓN CON INSTRUMENTOS', 
                        exits: ['E','W']};
    potionScape[2][2] = {description:'SALA DE TROFEOS', 
                        exits: ['W']};
    return potionScape;
}

console.log(potionScape[0][0]);
//EXPERIMENTOS PARA POSITION

//console.log(potionScape[1][1]);
let player = {position:[1,1]};

const initialDescription = potionScape[player.position[0]][player.position[1]].description;
document.getElementById("description").innerHTML = initialDescription;
console.log(initialDescription);


  
function movement()[x,y]{
  let currentRoom = potionScape[player.position[0]][player.position[1]]; 
  
}


function defineVerbs() {

    const actions = new Map();

    actions.set("ir", );   
    actions.set("observar");
    actions.set("coger");
    actions.set("usar");
    actions.set("hablar");
    
    return actions;
}

function verbValidation () {
    let command = document.getElementById("commands").value;
    let separatedWords = command.toLowerCase().split(" ");
    let verb = separatedWords[0];
    let noAction =
      'Esta acción no es posible en este juego, las acciones posibles son "ir", "observar", "coger", "usar" y "hablar."';
    /*console.log(actions.has(verb)); */
    if (actions.has(verb) == true) {
    } else {
      return (document.getElementById("description").innerHTML = noAction);
    }
  }; 


  function moveValidation () {
    let command = document.getElementById("commands").value;
    if (verb == "ir") {
    let separatedWords = command.toLowerCase().split(" "); 
    let direction = separatedWords[1];
    return direction;
  }
}

console.log(direction);

  /* if (potionScape[x,y].has(direction) == true) {
    let player = {position:[1,]};
  } */



/* function movePlayer(direction) {} */




/*
  if (separatedWords[1] === ir) {

    return moveValidation
  } else {

  }

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map


map {usar, do function("nombre del objeto")}
/*
    /*console.log(potionScape[1][0]);



console.log(actions.get('ir'));
console.log(actions.get("Laura").otros.color_favorito); 
*/

/*
dentro de la interfaz, cuando haga click en el botón, coger el texto del input, separarlo en dos, coger el primer elemento (verbo) y revisar que se encuentre en el mapa de verbos.
Para esto se crea un mapa que contenga los 5 verbos, llave verbo valor true
si no se encuentra en el map de verbos debe da un error en que diga que no usa esos verbos, que son estos los verbos que usa. 
convertir a minúscula los comandos
*/
/*
dentro de la matriz, vamos a enriquecerlo poniendo un objeto que tnega una variable uqe sea description y otra que sea exits (en esta metemos un array con las asalidas válidas N, S, E, W) 
variable que se llame jugador: va a ser un objeto, que tenga una position, array de dos elem, coordenadas
dentro del global de javascript, coger la descripción de la casilla correspondiente para ponerla en el output. 
nuevo objeto - (funcion: do) 
mover jugador
nuevas coordenadas --> scroll acumulando instrucciones

<!--
objects.map ( objeto, boolean)
validar que existe en la sala

player = {possition: , objects.map[]}

cuando se añada al player, eliminar de la sala

mirar inventario


más adelante: usar

switch y case para cuatro direcciones
player.position[0] eje X --> sumar y restar para moverse a derecha e izquierda
currentlevel sería la posición inicial y a la que se le reasigna la nueva posición después de moverse


FINAL: en qué casilla tiene que estar el jugador y qué tendría que hacer para ganar el juego

-->
*/