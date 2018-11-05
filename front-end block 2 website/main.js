var pokemons = ["Pikachu", "Charmander", "Balbausar", "Mew", "Mewtwo", "Squirtle", "Psyduck", "Charmeleon", "Blastoise", "Weedle", "Pidgey", "Ninetales", "Meowth", "Gastly", "Ditto"];

var message = "";

function encounterPokemon(){
    document.getElementById("message").innerHTML = "Probeer deze Pokemon te vangen";
    // take random pokemon from array and show on page
    var pokemon = pokemons[(Math.floor(Math.random() * pokemons.length))];
    document.getElementById("pokemon").innerHTML = pokemon; 

    // randomly generate if pokemon is caught or got away and set message
    var number = Math.random();
    if (number >= 0.5){
        message = "Gelukt! Je hebt " + pokemon + " gevangen!";
    } else if (number < 0.5){
        message = "Helaas, " + pokemon + " is weggekomen!";
    }
};

// show message
function showMessage(){
    document.getElementById("message").innerHTML = message;
}