// Implementa un método de la clase pokemon, de nombre 'atacar'. El método toma por parámetro otro objeto de la clase Pokemon.

// El Pokemon que ejecuta el método realiza un ataque
// pokemonA.atacar(PokemonB)

/**
 * Primero ataca el Pokemon A:
 * 1. Calcular un número al azar entre 0 y 'poder de ataque' para el Pokemon A
 * 2. Calcular un número al azar entre 0 y 'poder de defensa' para el Pokemon B
 * 2. El Pokemon A asesta un golpe al Pokemon B. El Pokemon B recibe el siguiente daño: "poder de ataque que ha sacado el Pokemon A - poder de defensa que ha sacado el Pokemon B". Dicha diferencia debemos restarla a la vida total del Pokemon B"

 * Dentro del mismo método 'atacar', muestra por consola cada uno de los pasos tal y como se sugiere en el ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU1MF8xNTc3MzM3OQ
 

 */

class Pokemon {
  constructor(id, nombre, tipos, vida, ataque, defensa) {
    this.id = id;
    this.nombre = nombre;
    this.tipos = tipos;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
  }

  atacar(pokemon) {
    console.log("Yo soy " + this.nombre);
    console.log("Ataco al pokemon " + pokemon.nombre);
  }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ["Grass", "Poison"], 45, 49, 49);
let squirtle = new Pokemon(7, "Squirtle", ["Water"], 44, 48, 65);
let pikachu = new Pokemon(25, "Pikachu", ["Electric"], 44, 48, 65);

bulbasaur.atacar(pikachu);
