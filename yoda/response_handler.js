// Declaring variables that you may want to use.
let names = ['cute', 'regular'];
let moods = ['dark', 'force', 'std'];

let dark_quotes = ["Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
"In a dark place we find ourselves, and a little more knowledge lights our way.",
"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
"Always two there are, no more, no less. A master and an apprentice.",
"In the end, cowards are those who follow the dark side."];
let force_quotes = ["Luminous beings are we, not this crude matter.",
"A Jedi uses the Force for knowledge and defense, never for attack.",
"Clear your mind must be, if you are to find the villains behind this plot.",
"The force. Life creates it, makes it grow. Its energy surrounds us and binds us.",
"My ally is the Force, and a powerful ally it is."];
let std_quotes = ["Patience you must have, my young padawan.",
"When nine hundred years old you reach, look as good you will not.",
"No! Try not! Do or do not, there is no try.",
"Judge me by my size, do you?",
"Difficult to see. Always in motion is the future."
];

function respond() {
    // Your Code Here
    console.log("Hello World!");

    // random number generator
    let i = Math.floor(Math.random() * 2);

    // say hmmmm
    document.getElementById('text1').innerHTML = "hmmmmmmmmmmmmmmmmmmmmmmmm";
    
    // set text in text boxes randomly on click
    document.getElementById('text1').innerHTML = names[i];
    var text = document.getElementById("text1");
    console.log(text.textContent);
    document.getElementById('text2').innerHTML = moods[i];
    var text2 = document.getElementById("text2");
    console.log(text2.textContent);

    // check for conditions to adjust text content|image
    if (document.getElementById('text1').innerHTML == "cute" || 
        document.getElementById('text2').innerHTML == "baby" ||
        document.getElementById('text2').innerHTML == "cute" ||
        document.getElementById('text1').innerHTML == "baby") {
            document.getElementById("img2").src = "img/cute-std.jpg";
    }
    else if(document.getElementById('text1').innerHTML == "force" ||
            document.getElementById('text2').innerHTML == "force") {
                document.getElementById('text1').innerHTML = force_quotes;
            }

    // clear text boxes
    //document.getElementById('text1').value = "";
    //document.getElementById('text2').value = "";
}