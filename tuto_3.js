// Les fonctions

// Une fonction est un morceau de code qui :
// Peu possèder un nom, pratique quand on veut l'appeler
// Des données d'entrées (paramètres)
// Des données de sorties

// Exemple
function ditBonjour() {
    console.log('Bonjour');
}
// Le code ci-dessus déclare une fonction ditBonjour()
// Il ne possède pas de donnée d'entrée et pas de donnée de sortie
// Cette fonction permet d'afficher 'Bonjour'

// Exemple 
function plus(a, b) {
    return a + b;
}
// Le code ci-dessus déclare une fonction plus()
// Elle possède 2 données d'entrées : a et b
// Et 1 donnée de sortie: la somme de a et b (a + b)
// Cette fonction permet de retourner la somme de deux variable
// Pour l'appeler il suffit de faire
let res = plus(5, 6);
console.log(res);

// Jusque la ca va je pense
// Mais savais-tu qu'une fonction avec un nom est comme une variable avec un nom?
// C-a-d ? on peut l'appeler et la passer!
// Démonstration
function fois(a, b) {
    return a * b;
}

function calcule(a, doSomething1, b, doSomething2 , c) {
    return doSomething2(doSomething1(a, b), c);
}

// Le code ci-dessus déclare la fonction fois()
// Elle possède 2 données d'entrées : a et b
// Et 1 donnée de sortie: le produit de a et b (a * b)
// Cette fonction permet de retourner la produit de deux variable

// Et il y a la fonction calcule()
// Elle possède 5 données d'entrées : a, doSomething1, b, doSomething2 , c
// Et 1 donnée de sortie: doSomething2(doSomething1(a, b), c)
// Ici doSomething1 et doSomething2 sont deux fonctions!!

// Pour l'appeler il suffit de faire
let res1 = calcule(5, plus, 2, fois , 3)
console.log(res1); 
// Ce qui donne (5 + 2) * 3 = 21
// Ou encore
let res2 = calcule(5, fois, 2, plus , 3)
console.log(res2); 
// Ce qui donne (5 * 2) + 3 = 13

// Magique hein ^^
// Mais il y a mieux!! En un mot.......... Recursivité
// La récursivité est l'art de faire en sorte qu'une fonction s'appel elle meme
// Quoi? Démonstration:
function factoriel(i) {
    if(i == 1) {
        return 1
    }
    return i * factoriel(i - 1);
}
factoriel(5);

// La fonction ci-dessus permet de faire le factoriel d'une nombre
// Comme dans le tuto 1 mais au lieu de faire ca avec un for
// On utilise une fonction récursive ^^
// Attention, le danger avec une fonction récursive c'est
// Comme un while ou un for avec une condition mauvaise
// La fonction peu itérer en boucle et ne jamais s'arreter

// Exercice 1
// On veut une fonction qui permet de savoir si un nombre est un nombre permier
// Rappel, un nombre premier est un nombre divisible uniquement par 1 et lui-même (parmis les nombre entier).
// Les nombres premier commence à partir de 2
// Exemple 11 est un nombre premier car entre 1 et 11 rien ne peux diviser 11 et obtenir un nombre entier (appart 1 et 11)
// Cette fonction peut etre fait avec un for ou en recursive peu importe ^^


// Exercice 2
function countDown(i) {
    setTimeout(function () {
        // A completer
    }, 1000);
}
// setTimeout() permet d'executer du code apres un certain labs de temps
// Le temps de décalage se calcule en milli-seconde
// Donc le 1000 ci-dessus correspond à 1000 milli-secondes = 1 seconde
// Complete le fonction countDown() de facon à ce que lorsqu'on appel 
countDown(5);
// cela affiche un compte à rebours avec des console.log tel que
// 'Count down in 5s'
// 'Count down in 4s'
// 'Count down in 3s'
// 'Count down in 2s'
// 'Count down in 1s'
// 'Booom!!!'
// Indice: le mieux serai de faire de la récursivité ^^