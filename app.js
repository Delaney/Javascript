const form = document.getElementById("dino-compare");
const grid = document.getElementById("grid");

/**
 * @description The dinosaur data
 * @returns Array of dinosaur objects (plus a pigeon)
 */
function animalData() {
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
            "fact": "All birds are dinosaurs."
        }
    ];

    return animalArray;
}

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

    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

const compareProto = {
    compareDiet: function(diet) {
        if (this.diet == diet) {
            return `Both you and ${this.species} are ${diet}s.`;
        } else {
            const a = diet == 'omnivore' ? 'an' : 'a';
            return `You are ${a} ${diet}, but ${this.species} wasn't.`;
        }
    },

    compareWhen: function(when) {
        if (this.when.search(when) > -1) {
            return `Both you and ${this.species} are from the ${when} era.`;
        } else {
            return `You are from the ${when}, but ${this.species} was from the ${this.when}.`;
        }
    },

    compareWhere: function(where) {
        if (this.where.search(where) > -1) {
            return `Both you and ${this.species} are located in ${where}.`;
        } else {
            const in_word = where === 'Worldwide' ? '' : 'in ';
            return `You are located ${in_word}${where}, but ${this.species} was located in ${this.where}.`;
        }
    },

    randomFact: function(human) {
        let fact;


        const randomNumber = this.species === 'Pigeon' ? 0 : Math.floor(Math.random() * 5);

        switch (randomNumber) {
            case 0:
                fact = this.fact;
                break;

            case 1:
                fact = this.compareDiet(human.diet);
                break;

            case 2:
                fact = this.compareWhen(human.when);
                break;

            case 3:
                fact = this.compareWhere(human.where);
                break;

            case 4:
                fact = `${this.species} weighed about ${this.weight} lbs!`;
                break;

            case 5:
                fact = `${this.species} was ${this.height} inches tall!`;
                break;

            default:
                fact = this.fact;
                break;
        }

        return fact;
    }
};

Animal.prototype = compareProto;

function createAnimalsArray() {
    const animals = [];
    const animalArray = animalData();
    
    animalArray.forEach((obj) => {
        animals.push(new Animal(obj));
    });

    return animals;
};

function getHumanData() {
    return (function () {
        const humanData = {};
        humanData.species = document.getElementById("name").value;
        humanData.height = (parseInt(document.getElementById("feet").value) * 12) + parseInt(document.getElementById("inches").value);
        humanData.weight = document.getElementById("weight").value;
        humanData.diet = document.getElementById("diet").value;
        humanData.where = document.getElementById("where").value;
        humanData.when = document.getElementById("when").value;
        return humanData;
    })();
}

function generateTiles(human) {
    function shuffle(array) {
        let m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }      
        return array;
    }

    const animals = createAnimalsArray();

    let tiles = shuffle(Array.from(animals));

    tiles.splice(4, 0, human);
    return tiles;
}

function showTiles(tiles) {
    form.style.display = "none";
    const human = tiles[4];

    tiles.forEach((tile, index) => {
        const src = index != 4 ? 'images/' + tile.species + '.png' : 'images/human.png';
        const fact = tile.fact ? `<p class="fine-print">${tile.randomFact(human)}</p>` : '';
        const element = document.createElement("div");
        element.classList.add("grid-item");
        element.innerHTML = `
            <h3>${tile.species}</h3>
            <div style="display: flex; width: 100%;">
                <div>${tile.where}</div>
                <div></div>
                <div>${tile.when}</div>
            </div>
            <img src="${src}" title="${tile.species}"/>
            ${fact}
        `;
        grid.append(element);
    });

    const element = document.createElement("div");
    element.innerHTML = "Back!";
    element.classList.add("btn");
    grid.append(element);
    element.addEventListener('click', function(e) {
        resetForm()
    });
    grid.style.display = "flex";
}

function resetForm() {
    form.style.display = "block";
    form.reset();
    grid.style.display = "none";
    grid.innerHTML = "";
}

function click() {
    const humanData = getHumanData();
    const human = new Animal(humanData);

    const tiles = generateTiles(human);
    showTiles(tiles);
}

(function() {
    const btn = document.getElementById("btn");
    btn.addEventListener('click', click);
})();
