const container = document.querySelector("section");
const button = document.querySelector("button");

let counter = 1;

const addPokemon = () => {
  if (counter === 900) {
    button.removeEventListener("click", addPokemon);
    button.classList.add("disabled");
  }

  const image = document.createElement("img");
  image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`;
  image.classList.add("pokemon");
  container.appendChild(image);
  counter++;
};

button.addEventListener("click", addPokemon);
