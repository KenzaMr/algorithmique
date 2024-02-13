/*-------------------------------------Les Commentaires-------------------------*/
// Un commentaire en JavaScript

/* 
Un commentaire multiligne
en JavaScript
*/

/*-------------------------------------Affichage-------------------------*/

//Afficher des informations dans la console de debbugage du navigateur 
console.log("Hello Word!")

/*-------------------------------------Les Variables-------------------------*/
// Declarer une variable 
let uneVariable;

//Remplir une variable (affectation d'une variable)
uneVariable = "Je suis une variable!"

//Afficher les infomation dans la console
console.log(uneVariable)

//Les 2 se font généralement en même temps
//Les variables sont sensibles à la casse
let helloword="Hello Word!"
console.log(helloword)

uneVariable="Je suis une nouvelle variable"
console.log(uneVariable)

//Les différents types de variables
let messages = `un message`;
let number = 20;
let decimal = 20.5;
let boolean = true;
let boolean2 = false; 

//Les opérations arithmétiques (+, -, *, /)
//Déclarer 3 variables, sum, number1, number2
//Affecter le nombre 10 à number1
//Affecter le nombre 20 à number2
//Affecter à sun l'opération de multiplication des 2 variables précédentes 
//Afficher le résultat en console
let number1= 10;
let number2= 20;
let sum;
console.log(number1 + sum + number2)
//Cette écriture est fausse
//Correction
sum = number1* number2
console.log(sum)


/*-------------------------------------La Concatenation-------------------------*/
let variable = "Nom"
let lastname= "Prenom"
//Je m'appelle Nom Prenom
console.log("Je m'appelle "+ variable +" "+ lastname)
//Déclarer une variable city, afficher le message j'adore vivre à city
let ville="city"
console.log("J'adore vivre à "+ ville)
//Plusieurs maniére d'écrire 
ville="city"
ville='city'

console.log("j'adore vivre à "+ ville)
console.log('j\'adore vivre à ' + ville)

//Modifier le message pour afficher j'adore vivre à <ville> et je m'appelle <variable> <lastname>, faire attentioon ici ce n'est pas alt+4 mais alt+7
console.log(`j'adore vivre à ${ville} et je m'appelle ${variable} ${lastname}`)
