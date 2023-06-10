//Autor: Ian Rickmers Blamey

let secuencia = [0,1];
let secuenciaPar = [0];
let secuenciaImpar = [1];
//función que da la secuencia de fibonacci entre los números 0 y 1000
function fibonacci(){

    //Variables iniciales de la secuencia
    let primerTermino = 0;
    let segundoTermino = 1;

    //Variable de apoyo para el ciclo, para ir poder cambiando el valor de fibonacci
    let variableApoyo = 0;
    while(variableApoyo <= 1000){
        //Nuevo término de la secuencia
        variableApoyo = primerTermino + segundoTermino;
        if(variableApoyo > 1000){
            break;
        }
        //Se agrega el nuevo término a la secuencia
        secuencia.push(variableApoyo);
        if(variableApoyo % 2 === 0){
            secuenciaPar.push(variableApoyo);
        }else{
            secuenciaImpar.push(variableApoyo);
        }
        //se reemplazan los valores de los términos
        primerTermino = segundoTermino;
        segundoTermino = variableApoyo;
    }
    //Se imprime la secuencia
    console.log("Secuencia de Fibonacci entre 0 y 1000:\n");
    console.log(secuencia + "\n");
    console.log("Secuencia de números pares:\n");
    console.log(secuenciaPar + "\n");
    console.log("Secuencia de números impares:\n");
    console.log(secuenciaImpar + "\n\n");
}

fibonacci();

let nombresPokemon =
[
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
]

//función que retorna los string de un array en otro array pero en mayúsculas
let pokemonMayusculas = [];

function arrayMayusculas(array){
    for(let i = 0; i < array.length; i++){
        pokemonMayusculas.push(array[i].toUpperCase());
    }
    console.log("Array original:\n");
    console.log(array);
    console.log("\nArray en mayúsculas:\n");
    console.log(pokemonMayusculas);
}

arrayMayusculas(nombresPokemon);


pokemones = [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
]

//función que retorna los string de un array de objetos, donde su tipo es fuego, sino, no lo agrega al nuevo array
function arrayFuego(array){
    if(array.tipo === 'Fuego'){
        return array;
    }
}

//Se filtra el array de objetos, para que solo queden los objetos con tipo fuego
let nuevosPokemon = pokemones.filter(arrayFuego)
console.log("\n\nPokemones de tipo fuego:\n");
nuevosPokemon.map((pokemones) => console.log(pokemones.nombre + "\n" + pokemones.tipo + "\n\n"));

console.log("En el array mismo:\n");
console.log(nuevosPokemon);


let fibonacciHTML = document.getElementById("fibo");
fibonacciHTML.innerHTML = `<h1>Secuencia de Fibonacci entre 0 y 1000:</h1>`;
fibonacciHTML.innerHTML += `<p>${secuencia}</p>`;
fibonacciHTML.innerHTML += `<h1>Secuencia de números pares:</h1>`;
fibonacciHTML.innerHTML += `<p>${secuenciaPar}</p>`;
fibonacciHTML.innerHTML += `<h1>Secuencia de números impares:</h1>`;
fibonacciHTML.innerHTML += `<p>${secuenciaImpar}</p>`;

let nombrePokemones = document.getElementById("pokemonesNombres");
nombrePokemones.innerHTML = `<h1>Array original:</h1>`;
nombrePokemones.innerHTML += `<p>${nombresPokemon}</p>`;
nombrePokemones.innerHTML += `<h1>Array en mayúsculas:</h1>`;
nombrePokemones.innerHTML += `<p>${pokemonMayusculas}</p>`;

let pokemonesFuego = document.getElementById("pokemonesFuego");
pokemonesFuego.innerHTML = `<h1>Pokemones de tipo fuego:</h1>`;
nuevosPokemon.map((item)=>{
    pokemonesFuego.innerHTML+=`<li class="color">${item.nombre}</li>`;
})