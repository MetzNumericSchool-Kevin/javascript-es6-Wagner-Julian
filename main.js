/**
 * Exercice 1
 * Template literals
 */

// Exercice 1.1 : Transforme la concaténation en interpolation de chaîne de caractères avec les backticks `
function afficheAddresse(address) {
  return (
    "Votre adresse est : " +
    address.street +
    ", " +
    address.city +
    ", " +
    address.country +
    "."
  );
}

console.log("Exercice 1.1");
console.log(
  afficheAddresse({
    street: "10 rue de la republique",
    city: "Paris",
    country: "France",
  })
);

function afficheAddresse1(address) {
  return `Votre adresse est : ${address.street}, ${address.city}, ${address.country}.`;

};


console.log("solution");
console.log(
  afficheAddresse1({
    street: "10 rue de la republique",
    city: "Paris",
    country: "France",
  })
);

// Exercice 1.2 : Utilise les chaînes multilignes avec les backticks ` pour afficher plus simplement le menu
console.log("Exercice 1.2");
console.log(
  "Menu de la semaine :\n    - Pâte à tartine\n    - Hoagie\n    - Salade de pommes"
);

console.log("solution");
console.log(
  `Menu de la semaine :  
    - Pâte à tartine 
    - Hoagie    
    - Salade de pommes
`);
/**
 * Exercice 2
 * Décomposition (Destructuring)
 */

const colors = ["Red", "Green", "Blue", "Yellow"];

// Exercice 2.1 : Utilise la décomposition pour créer les constantes de couleurs plutôt que d'accéder aux indices
const red = colors[0];
const green = colors[1];
const blue = colors[2];
const yellow = colors[3];

console.log("Exercice 2.1");
console.log(red, green, blue, yellow);


let [color1, color2,color3,color4 ]= colors;
console.log("solution");
console.log(red, green, blue, yellow);


// Exercice 2.2 : La même chose, mais en ignorant ici "Red" et "Yellow"
const green2 = colors[1];
const blue2 = colors[2];

console.log("Exercice 2.2");
console.log(green2, blue2);

const green3= colors[1];
const blu3 = colors[2];
let [,green4,blue4,]=colors;

console.log("solution");
console.log(green2, blue2);

// ------ Version objet

const roman = {
  title: "Solo Leveling",
  editor: "kbooks",
  tome: 12,
  type: "fantasy",
  author: "Chugong",
  mainCharacter: {
    name: "Sung Jinwoo",
    animeJapaneseVoice: "Taito Ban",
  },
  characters: [
    {
      name: "Sung Jinah",
      animeJapaneseVoice: "Haruna Mikawa",
    },
    {
      name: "Go Gunhee",
      animeJapaneseVoice: "Banjō Ginga",
    },
  ],
};

// Exercices 2.3 : Décompose l'objet pour récupérer le titre, l'éditeur et le tome dans des constantes
const title = roman.title;
const editor = roman.editor;
const tome = roman.tome;

console.log("Exercice 2.3");
console.log(title, editor, tome);

const {title:titles , editor: editors, tome: tomes} =roman;
console.log(titles, editors, tomes);

// Exercice 2.4 : Décompose l'objet pour récupérer le nom du personnage principal,
// le nom du premier personnage secondaire
// et la voix Japonaise dans l'anime du second personnage secondaire
const mainCharacterName = roman.mainCharacter.name;
const secondCharacterName = roman.characters[0].name;
const thirdCharacterJapaneseVoice = roman.characters[1].animeJapaneseVoice;

console.log("Exercice 2.4");
console.log(
  mainCharacterName,
  secondCharacterName,
  thirdCharacterJapaneseVoice
);

const {mainCharacter:{name:mainCharacterNames},characters:[{name:secondCharacterNames},{animeJapaneseVoice:thirdCharacterJapaneseVoices}]} = roman;
console.log(mainCharacterNames, secondCharacterNames, thirdCharacterJapaneseVoices);


const{mainCharacter:{name: mainCharacterNamee,},characters:[{name: secondCharacterNamee,},{animeJapaneseVoice: thirdCharacterJapaneseVoicee,},],} = roman;

console.log(mainCharacterNamee, secondCharacterNamee, thirdCharacterJapaneseVoicee);

// ------

let firstname = "John";
let lastname = "Doe";

// Exercice 2.5 : Faites l'inversion du prénom et nom avec la décomposition
// plutôt qu'avoir une variable temporaire
let temp = firstname;
firstname = lastname;
lastname = temp;


console.log("Exercice 2.5");
console.log(firstname, lastname);

firstname = "John";
lastname = "Doe";

[firstname, lastname] = [lastname, firstname];
console.log("solution");
console.log(firstname, lastname);

// ------
const person = {
  firstname,
  lastname,
  age: 30,
  location: "Paris",
};

// Exercice 2.6 : Fais une décomposition du paramètre pour extraire directement le prénom et le nom
function hello(person) {
  console.log(`Bonjour ${person.firstname} ${person.lastname} !`);
}

console.log("Exercice 2.6");
hello(person);

function hello2({firstname, lastname}) {
  console.log(`Bonjour ${firstname} ${lastname} !`);
  }

console.log("solution");
hello2(person);


/**
 * Exercice 3
 * Opérateur de reste ...
 */

// Exercice 3.1 : Décompose le tableau colors pour ne garder dans le reste que les couleurs bleue et jaune
const restOfColors = [];

restOfColors.push(colors[2]);
restOfColors.push(colors[3]);

console.log("Exercice 3.1");
console.log(restOfColors);

const [,,...restOfColors2] = colors;

console.log("solution");
console.log(restOfColors);
// Exercice 3.2 : Décompose l'objet, de telle sorte à ce que le reste contienne seulement les clés
// titre, editeur, tome, titre, auteur

const roman2 = {};
roman2.title = roman.title;
roman2.editor = roman.editor;
roman2.tome = roman.tome;
roman2.auteur = roman.auteur;

console.log("Exercice 3.2");
console.log(roman2);

const {type: typemod , mainCharacter: mainCharactermod, characters: charactersmod,  ...reste} = roman;

console.log("solution");
console.log(reste);

// ------
const randomNumbers = [12, 13, 52, 68, 2, 23, 5];

// Exercice 3.3 : Math.min prend un nombre indéfini d'arguments
// Utilise l'opérateur de reste pour pouvoir passer un tableau
console.log("Exercice 3.3");
console.log(Math.min(12, 13, 52, 68, 2, 23, 5));

console.log("solution");
console.log(Math.min(...randomNumbers));

// Exercice 3.4 : Transforme cette fonction pour qu'elle puisse prendre
// un nombre indéfini de paramètres car actuellement elle en prend que 3
function min(a, b, c) {
  return Math.min(a, b, c);
}

console.log("Exercice 3.4");
console.log(min(12, 13, 52, 68, 2, 23, 5)); // Le résultat doit être 2

function mini(...numbers) {
  return Math.min(...numbers);
}

console.log("solution");
console.log(mini(12, 13, 52, 68, 2, 23, 5)); // Le résultat doit être 2

/**
 * Exercice 4
 * Opérateur de dispersion (spread)
 */

// Exercice 4.1 : Utilise l'opérateur de dispersion pour ajouter "Pink" et "Magenta" dans un nouveau tableau
const moreColors = colors.concat("Pink", "Magenta");

console.log("Exercice 4.1");
console.log(moreColors);
// const colors = ["Red", "Green", "Blue", "Yellow"];
const moreColors2= [...colors, "Pink", "Magenta"];
console.log("solution");
console.log(moreColors2);

// Exercice 4.2 : Utilise l'opérateur de dispersion pour créer un nouveau tableau
// où Red est ajouté au début, et "Violet" à la fin
const partialRainbow = ["Orange", "Yellow", "Green", "Blue", "Indigo"];
const rainbow = ["Red"].concat(partialRainbow, ["Violet"]);

console.log("Exercice 4.2");
console.log(rainbow);

const partialRainbow2= ["Red", ...partialRainbow, "Violet"];
console.log("solution");
console.log(partialRainbow2);

// Exercice 4.3 : Copier l'adresse en ajoutant une nouvelle clé pour le code postal
const adress = {
  street: "10 rue de la republique",
  city: "Paris",
  country: "France",
};

const completeAdress = Object.assign({}, adress, { postalCode: 75001 });

console.log("Exercice 4.3");
console.log(completeAdress);

const completeAdress2 = { ...adress, postalCode: 75001 };
console.log("solution");
console.log(completeAdress2);

// Exercice 4.4 : Utilise l'opérateur de dispersion pour copier l'objet person et modifier la valeur de l'age à 20
const person2 = Object.assign({}, person, { age: 20 });

console.log("Exercice 4.4");
console.log(person2);
// const person = {
//   firstname,
//   lastname,
//   age: 30,
//   location: "Paris",
// };
const person3 = { ...person, age: 20 };
console.log("solution");
console.log(person3);

/**
 * Exercice 5
 * Fonctions fléchées
 */

// Exercice 5.1 : Convertir en fonction fléchée
const thatsAllFolks = function () {
  console.log("That's all folks!");
};

console.log("Exercice 5.1");
thatsAllFolks();

const thatsAllFolks2 = thatsAllFolks2 => console.log("That's all folks!");
console.log("solution");
thatsAllFolks2();


// Exercice 5.2 : Convertir toutes les fonctions en fonction fléchée
// Et si c'est possible, faire un return implicite
const makeDouble = function (numbers) {
  return numbers.map(function (number) {
    const newNumber = number * 2;
    return newNumber;
  });
};

console.log("Exercice 5.2");
console.log(makeDouble([1, 2, 3]));

const makeDouble2 = numbers => numbers.map(number => number * 2);
console.log("solution");
console.log(makeDouble2([1, 2, 3]));

// Exercice 5.3 : Convertir en fonction fléchée avec un return implicite
function convertToPerson(firstnameLastnameTuple) {
  return {
    firstname: firstnameLastnameTuple[0],
    lastname: firstnameLastnameTuple[1],
  };
}

console.log("Exercice 5.3");
console.log(convertToPerson(["John", "Doe"]));

const convertToPerson3 = (firstnameLastnameTuple) => ({
  firstname: firstnameLastnameTuple[0],
  lastname: firstnameLastnameTuple[1],
});
console.log("solution");
console.log(convertToPerson3(["John", "Doe"]));
// parenthe pour return implicite du objet  et les objet se mette entre accolade et => pour la fonction fléchée

/**
 * Exercice 6
 * Syntaxe raccourcie d'assignation d'objets
 */

// Exercice 6 : raccourci l'assignation à l'objet

import {addToCart, updateCartQuantity, computeTotal, displayAmount} from "./functionExport.js";

console.log("Exercice 7");

console.log("Ajout d'un Shampoing x2 à 10€");
addToCart({ product: "Shampoing", price: 10 }, 2);

console.log("Mise à jour du panier : Shampoing x4");
updateCartQuantity("Shampoing", 4);

console.log("Ajout d'un Biscuit x10 à 3€");
addToCart({ product: "Biscuit", price: 3 }, 10);

console.log("Ajout d'un Biscuit x2 à 3€");
addToCart({ product: "Biscuit", price: 3 }, 2);

console.log("Affichage du total panier :");
console.log(displayAmount(computeTotal()));




/**
 * Exercice 8
 * Operation asynchrone
 */

// Exercice 8 : Transforme les opérations asynchrone avec la syntaxe async/await

function loadFruits() {
  return fetch("http://127.0.0.1:5500/data/fruits.json").then((response) =>
    response.json()
  );
}

function program() {
  loadFruits()
    .then((fruits) => console.log(fruits))
    .catch((error) =>
      console.log("Problème lors du chargement des fruits", error)
    );
}

console.log("Exercice 8");
program();

async function loadFruits1() {
  const reponse = await fetch ("http://127.0.0.1:5500/data/fruits.json");
    return reponse.json(
  );
}

function program1() {
  loadFruits1()
    .then((fruits) => console.log(fruits))
    .catch((error) =>
      console.log("Problème lors du chargement des fruits", error)
    );
}

console.log("solution");
program1();