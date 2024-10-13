const pokemons = [
  { name: "bulbasaur", type: "grass"},
  { name: "blastoise", type: "water"},
  { name: "charmander",  type: "fire"},
  { name: "ivysaur", type: "grass"},
  { name: "charmeleon",  type: "fire"},
  { name: "charizard",  type: "fire"},
  { name: "squirtle", type: "water"},
  { name: "venusaur", type: "grass"},
  { name: "wartortle", type: "water"},
  { name: "pikachu", type: "electric"}
]

//group by return a list of object that are group based on its selector
Object.groupBy(pokemons, (i) => {
    return i.type;
})

