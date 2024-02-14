/*-------------------------------------Les Commentaires-------------------------*/
// Un commentaire en JavaScript

/* 
Un commentaire multiligne
en JavaScript
*/

/*-------------------------------------Affichage-------------------------*/

//Afficher des informations dans la console de debbugage du navigateur 
console.log("Hello Word!")

//Afficher une boîte de dialogue avec champs à remplir 
//let response = prompt("Quel est votre âge?")
//console.log(response)
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
/*-------------------------------------Instructions Conditionnnelles-------------------------*/
//Demander à l'utilisateur s'il accepte les cgv 
/*let response = prompt("Acceptez-vous les conditions générals de vente")

console.log(response)

// Si, Sinon (if, else)
if(response =="ok"){
    console.log("Tu as accepté")
} else{
    console.log("Tu n'as pas accepteé")
}/*
//Si; Si non,Si, Sinon (if, else if, else)
//Si la condition est vraie le premier bloc d'instruction est exécuté 
//Sinon il test la deuxiéme condition 
//Sinon aucune condition n'est vraie il exécute le bloc final
//si il répond yes
//Vous êtes redirigez vers le site en anglais 
//Sinon s'il répond oui
//Vous êtes redirigez vers le site en français 
//Sinon s'il répond da 
//Vous êtes redirigez vers le site en russe 
//Sinon
//Vous ne pouvez pas acceder au site 
if(response =="yes"){ 
    console.log("Vous êtes redirigez vers le site en anglais")
}else if(response =="oui"){
    console.log("Vous êtes redirigez vers le site en français")
}else if(response =="da"){
    console.log("Vous êtes redirigez vers le site en russe")
}else{
    console.log("Vous ne pouvez pas acceder au site")
}

console.log("la suite..")
/*-------------------------------------Les outils de comparaisons-------------------------*/
//Déclarer une variable qui s'appelle variable, lui assigner la valuer 16
//Si la variable est égale à 16 afficher félicitation 
// ==, >, >=, < , <= , !=, ===
let variabble = "16";

if(variabble ===16){ 
    console.log("Félicitations")
}

//Ecrire un algorithme qui demande à l'utilisateur son âge. Il indique ensuite à l'utilisateur quel film il peut aller voir.
//"Action Man" si il a moins de 13 ans
//"Matrix" si il entre 13 et 18 ans 
//"Evil Dead" si il a plus de 18 ans 
/*let age= prompt("Quel âge avez-vous?")
if(age <13){
    console.log("Tu peux aller voir Action man")
}else if(age >18){
    console.log("Tu peux aller voir Evil Dead")
}else if (age >= 13 && age <=18){
    console.log("Tu peux aller voir Matrix")
}*/
// Demander à l'utilisateur son âge
// Demande sa nationalité 

//Si il est français ET qu'il a plus de 18 ans OU s'il est étranger et qu'il a moins de 18 ans 
//Assistance juridique gratuite
/*let age= prompt("Quel âge avez-vous?")
let nat= prompt("De quel nationalité êtes-vous ?")
if((nat== "Français" && age >= 18) ||(nat== "Etranger" && age <18))
{ 
    console.log("Assitante Juridique gratuite")
} */
//Demande sa nationalité 
//Si il est français
//Demander à l'utilisateur son âge 
//Si il a plus de 18 ans il a le droit au APL 
//Sinon 
//Vous n'avez aucun droit 
// let nat= prompt("Quel est votre nationalité ?")
// if(nat== "Français"){
//     let âge= prompt("Quel est est votre age")
//     if(âge >= 18){
//         console.log("Vous avez le droit au APL")
//     } else{
//         console.log("Vous n'avez pas le droit aux APL")
//     }
// }else {
//         console.log("Vous avez pas le droit au APL")
//     } 
    
    /*-------------------------------------Les boucles-------------------------*/

    //Les boucles sont des structures permettant d'excecuter plusieurs fois des instructions
    
    //Boucle à itération non définies(while) 
    // let i =0
    // while(i<9) {
    //     i=i+1;
    //     console.log(i)
    // } 

    //Afficher la table de multiplication de 7
   let i=0
   while (i <=10) {
    let res = i * 7;
    console.log(`${i} x 7 = ${res}`)
    i = i+ 1;
   }
   //Ecire un algothmique qui inverse les valeur de A et B quel que soit le contenu de A et B
   // a= 12 b=14 
   let a=12
   let b=14
   console.log(a, b)
   let temp =a;
   a = b;
   b = temp;
   console.log(a, b);
