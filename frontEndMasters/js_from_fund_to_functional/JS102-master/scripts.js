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