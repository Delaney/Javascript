
/**
* @description Represents a dinosaur
* @constructor
* @param {string} species - The species of the dino
* @param {string} weight - The weight of the dino
* @param {string} height - The height of the dino
* @param {string} diet - The diet of the dino
* @param {string} where - The where of the dino
* @param {string} when - The when of the dino
* @param {string} fact - The fact of the dino
*/
function Animal(args) {
    const {species, weight, height, diet, where, when, fact} = args;
    return {
        species, weight, height, diet, where, when, fact,
    };
}

const animalArray = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
]

const animals = [];

(function() {
    animalArray.forEach((obj, index) => {
        animals[index] = Animal(obj);
    });
})();


const getHumanData = function() {
    return (function () {
        const humanData = {};
        humanData.species = document.getElementById("name").value;
        humanData.height = (parseInt(document.getElementById("feet").value) * 12) + parseInt(document.getElementById("inches").value);
        humanData.weight = document.getElementById("weight").value;
        humanData.diet = document.getElementById("diet").value;
        return humanData;
    })();
}


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


const btn = document.getElementById("btn");

btn.addEventListener('click', function(e) {
    const humanData = getHumanData();
    const human = Animal(humanData);
});
