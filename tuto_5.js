// La librairie Math

// L'informatique est une branche des mathématiques comme est la logique ou la géométrie.
// Dans ce tuto nous allons voir à quel point les mathématiques sont présentent dans nos programmes
// Pour pouvoir voir toutes les fonctionnalités de la librairie il suffit de faire "Math." dans la console

// Récuperer l'hypoténus d'un triangle
// Hypoténus = Racine carré de (A au carré + B au carré)
let A = 4;
let B = 3;
console.log(Math.sqrt(4 * 4 + 3 * 3));
// Ou encore une fonction directement implémentée par Math
console.log(Math.hypot(4, 3));

// Faire 5 puissance 10
let cinq = 5;
let cinqPuissanceDix = 1
for(let i = 0; i < 10; ++i) {
    cinqPuissanceDix *= cinq;
}
console.log(cinqPuissanceDix);
// Ou une fonction directement implémentée par Math
console.log(Math.pow(5, 10));

// Tu l'aura compris il exite énormément de fonctions disponibles qui apportent plein d'avantages:
// 1 - Code plus courts
// 2 - Code plus simple à comprendre
// 3 - Moins de lignes à tester car d'autres se chargent de tester ces fonctions!!!



// La fonction Math.floor()
// Permet de passe d'une nombre flottant à un nombre entier sans arrondir. 
// Concrètement 6.2 --> 6   et  6.8 --> 6
// Passe d'une valeur d'heures -- à --> heures : minutes : secondes
let heureValue = 12.123456789;
let heure = Math.floor(heureValue);
let minuteValue = (heureValue - heure) * 60;
let minute = Math.floor(minuteValue);
let secondeValue = (minuteValue - minute) * 60;
let seconde = Math.floor(secondeValue);
console.log(heure + ' : ' + minute + ' : ' + seconde);

// Exercice 1: 
// Reproduit le code ci-dessus mais pour des semaines
// Soit pour une valeur de semaines on obtient nombre de semaines : nombre de jours : heures : minutes : secondes
function toString(weekValue) {
    return ''
}
console.log(toString(12.123456789));
console.log(toString(12.892359235));
console.log(toString(12.5));

// Math.random()
// Permet de générer un nombre flottant aléatoire entre 0 et 1
// Beaucoup des jeux de hasard fonctionnent avec cette fonction

// Exemple 
// On veux mélanger les valeurs d'une liste comme on mélangerais un paquet de carte
let list = [1, 2, 3, 4, 5, 6];
let listRandom = [];
for(let i = 0; i< list.length; i ++){
    if(Math.random() > 0.5) { // 50 % du cas puisque chiffre entre 0 et 1
        listRandom = [].concat(listRandom, list[i]);
    } else {
        listRandom = [].concat(list[i], listRandom);
    }
}
console.log(listRandom)
// Comment fonctionne la fonction concat()
// Elle permet de fusionner deux liste entre elle 
// Example [].concat([1, 2],['a', 'b', 'c']) ---> [1, 2, 'a', 'b', 'c']



// Il existe toujout une infinité de manière de faire
// Celle-ci est, je pense, la plus courte
// La fonction sort() est simple
// Il va comparer tout les element de la liste entre eux
// Donc sa se traduit par (a, b) un element de la liste a et un element de la liste b qu'on va comparer
// Si le resultat est positif 'a' gagne et sera mit en premier
// Si le resultat est négatif 'b' gagne et sera mit en premier
let listRandom2 = list.sort( (a, b) => Math.random() - 0.5 );
console.log(listRandom2)

// Allons plus loin des le Math.random()
// On veut reproduire une fonction de machine à sous
// Quand on veut faire une fonction qui répond à un besoin il faut
// 1 - identifier le problème
// 2 - coder un code qui réponds au besoin
// 3 - optimiser le code

// Pour notre machine à sous il faut une fonction qui renvoie une valeur aléatoire parmit celle possible dans une roue
// Partons sur une machine à sous simple avec 6 valeurs possible 
// Cerise (35%) / Citron (25%) / Pasteque (20%) / 7 (10%) / Cloches (6%) / BAR BAR BAR (4%)
// Ordonné du plus probable au moins probable

function getValue() {
    let proba = Math.round(Math.random() * 100);
    if(proba <= 4) {
        return 'BAR BAR BAR'
    } else if(proba <= 10) {
        return 'Cloches'
    } else if(proba <= 20) {
        return '7'
    } else if(proba <= 40) {
        return 'Pasteque'
    } else if(proba <= 65) {
        return 'Citron'
    } else { // proba <= 100
        return 'Cerise'
    }
}
// Et donc pour faire les trois bande de la machine a sous tu fait 
let tirette = getValue() + ' | ' + getValue() + ' | ' + getValue();
console.log(tirette);

// Si tu veux connaitre la probabilité de faire un 7 | 7 | 7
// Suffit de faire la probabilité d'avoir un 7 puissance 3
// -> 0.10 * 0.10 * 0.10 = 0.001 soit une chance sur 1000
// Si tu veux connaitre la probabilité de faire un BAR BAR BAR | BAR BAR BAR | BAR BAR BAR
// -> 0.04 * 0.04 * 0.04 = 0.000064 soit 6.4 chance sur 100 000!
// Pour mieux comprendre renseigne toi sur les 'arbres de probabilité'

// Maintenant on va faire tourner le code pour que 
// tant qu'on à pas un BAR BAR BAR | BAR BAR BAR | BAR BAR BAR
// on boucle le code 
// je l'ai essayé sur mon ordinateur et c'est assez violant, ca à fait jackpot au 37 867em essaye
// La je te met tant qu'on à pas un Citron | Citron | Citron
// C'est moins méchant, ca à fait jackpot au 70em essaye 

let res = 'Citron | Citron | Citron'
//let res = 'BAR BAR BAR | BAR BAR BAR | BAR BAR BAR'
let essaye = ''
let i = 0
do {
    essaye = getValue() + ' | ' + getValue() + ' | ' + getValue();
    i++;
    console.log(i)
} while (essaye != res);
console.log('JACKPOT!!!!!!!!!!!!!!!');


// Exercice 2
// Eh bien tu pourrais faire une fonction qui lance un tirage 
// Et en fonction de la combinaison, donne le montant en euro ou dollars qui à été gagné
// A toi de décider quelles combinaisons donnent quels montants d'argent
// 1 - Identifant le problème, se renseigner si tu ne sais pas, lister les combinason
// 2 - Réaliser un code
// 3 - voir les éventuel erreurs, et l'optimiser si possible
function runTheMachine() {
    return 'A amount lol'
}