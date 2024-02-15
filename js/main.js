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
    
    //Boucle à itération non définies(while) : tant que la condition est vraie 
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
            i = i+ 1;// Incrementer i pour éviter une boucle infinie
        }

        //Déclarer vos revenus, avec une base de 20 000euros
        //Tant que vos revenus ne sont pas supérieurs à 30 000 euros 
            //Chaque année mes revenus augmentent de 10% grâce à mes placements
        //Au bout de combien d'années mes revenus dépasseront 30 000 euros
        let r=20000
        let an=0
        while (r <=30000){
            r = r * 1.10;
            an= an+1; // an+=1
        }
        console.log(`Au bout de ${an} ans j'aurais atteint la somme ${r}`)
        
        /* 
            La population de la ville de Marrakech est de 1, 000, 000 habitants et elle augmente de 50, 000 habitants par an.
            Celle de la ville Agadir est de 500, 000 habitants et elle augmente de 8% par an.
            Ecrire un algorithme permettant de déterminer dans combien d'années la population de la ville Agadir dépassera celle de la ville de Marrakech
            */
           let mar= 1000000;
           let aga= 500000;
           let year=0;
           while(mar> aga){
            mar +=50000; //mar= mar+50000 =SUCRE SYNTAXIQUE
            aga*=1.08; //aga= aga*1.08 = SUCRE SYNTAXIQUE
            year= year+1;
           }
           console.log(`Au bout de ${year} année Agadir dépassera la population de Marrakech`)
        //Ecire un algothmique qui inverse les valeur de A et B quel que soit le contenu de A et B
        // a= 12 b=14 
        let a=12
        let b=14
        console.log(a, b)
        let temp =a;
        a = b;
        b = temp;
        console.log(a, b);

    //Boucle à itération définies(for) : 
    for(let i=0; i<11; i = i +1){
        console.log(`${i} x 7= ${i*7}`)
    }
    // Ecrire un algorithme qui fait deviner un chiffre à l'utilisateur en lui indiquant si il est au dessus ou au dessous de ma bonne valeur
    //Demande à l'utilisateur un nombre 
    //Tant que la réponse n'est pas bonne 
        //Si sa réponse est inférieur au chiffre magique 
            //Le nombre magique est plus grand, donne moi une autre réponse
            //Sinon
            //Le nombre magique est plus petit, donne moi une autre réponse
    // let nombre= prompt("Devines le bon nombre")

    // while(nombre !=13){
    //     if(nombre< 13){
    //         nombre= prompt("Le nombre magique est plus grand, donne moi une autre réponse");
    //     } else if(nombre> 13){
    //        nombre= prompt("Le nombre magique est plus petit, donne moi une autre réponse");
    //     }
    // } 
    
    // alert("Le numéro est bon")



        
        /*-------------------------------------Les fonctions-------------------------*/
        /* Une fonction est un bloc d'instructions réutilisable, elle peut prendre des paramétres et renvoyer un résultat , elle est déclarée avec le mot function*/
    function bonjourmonde(){
        console.log("Hello Word")
    }
    bonjourmonde()
    bonjourmonde()
    
    function calculNasa(){
        let res = 46654
        let essence = 7746
        let anneLumiere = 446555

        let solution = ((res*essence)/anneLumiere)*64564645

        return solution
    }
let solution = calculNasa()

//Ecrire une fonction qui afiche Bonjour
function bonjour1(){
    console.log("Bonjour")
}
bonjour1()

// Ecrire une fonction qui prend en paramétre et qui affiche Bonjour [Le prénom passé en paramétre]
function Bonjour2(prenom){
    console.log("Bonjour", prenom)
    /*return "Bonjour" + prenom
    */
}
Bonjour2("Sarah")
Bonjour2("Kenza")
/*let hello3 = Bonjour("Kenza")
console.log(hello3);
*/

// Ecrire une fonction qui calcule le périmétre d'un carré et l'afficher
function Carré(C){
let solution1=(C*4)
return solution1
}
let solution1= 3*4
console.log(solution1)
//Algorithme qui calcule et affiche le carré d'un nombre 
