//Use this file to implement Part One of your project

var animal = {};

animal.username = "cow";

animal['tagline'] = 'Yippeeee!';

var noiseArray = ['cough'];

noiseArray.push("yell");
noiseArray.unshift("whisper");

noiseArray[3] = 'scream';


var noises = noiseArray;

animal['noises'] = noises;

for (var key in animal) {
    if (key === 'username') {
        console.log("Hi my name is " + animal[key]);
    } else if (key === 'tagline') {
        console.log("I like to say " + animal[key]);
    }
}


var animals = [];

animals.push(animal);

var quackers = {
    username: 'DaffyDuck',
    tagline: 'Yippeeeee!',
    noises: [
        'quack',
        'honk',
        'sneeze',
        'growl'
    ]
};

animals.unshift(quackers);

animals[2] = {
    username: 'Sheep',
    tagline: 'Oh god no',
    noises: [
        'scream',
        'cavort',
        'giggle'
    ]
};

var pirahna = {
    username: 'pirahna',
    tagline: 'Nom nom nom',
    noises: [
        'scream',
        'nom nom nom nom',
        'nom nom nom nom nom nom',
        'swish'
    ]
};
animals.push(pirahna);

function AnimalMaker(name) {
    return {
        speak: function () {
            console.log("My name is ", name);
        },
        name: name,
        owner: 'Ben'
    };
}

var animalNames = ['Sheep', 'Liger', 'Big Bird'];
var farm = [];
for (var i = 0; i < animalNames.length + 1; i++) {
    farm.push(AnimalMaker(animalNames[i]));
}

for ( var key in farm ) {
    farm[key].speak();
}

function AnimalTestUser(username) {
    var args = arguments.length;
    var otherArgs = [];
    if (args > 1) {
        for (var i = 1; i < args; i++) {
            otherArgs.push(arguments[i]);
        }
    }
    return {
        username: username,
        otherArgs: otherArgs
    };
}

function AnimalCreator(username, species, tagline, noises) {
    return {
        username: username,
        species: species,
        tagline: tagline,
        noises: noises,
        friends: []
    };
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['bah', 'woof', 'whaaaaa?']);
console.log(sheep);


function addFriend(animal, friend) {
    animal.friends.push(friend.username);
}

myFarm = [];

function addMatchesArray(farm) {
    for (var animal in farm) {
        farm[animal].matches = [];
    }
}

function giveMatches(farm) {
    for (var animal in farm) {
        farm[animal].matches.push(farm[animal].friends[0]);
    }
}











