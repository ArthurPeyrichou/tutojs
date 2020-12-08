// While et for

// Le tant que (appelé while), permet de faire tourner du code en boucle sous une certaine condition
let i = 0;
console.log(i);
while (i < 10) {
    i = i + 1;
    console.log('While : ' + i);
}
console.log(i);
// Le code ci-dessus enferme le morceau de code 'i = i +1;' tant que la condition du while n'est pas respecté
// c-a-d tant que i sera inférieur à 10 (i < 10).

// Exercice 1
// Décommente le code ci-dessus et complete la partie du code 'A completer' 
// Pour qu'a la sortie le code affiche 33

//let a = 0;
//while(A completer) {
//  a = a + 3;
//}
//console.log(a);

// Exercice 2
// Décommente le code ci-dessus et complete la partie du code 'A completer' 
// Pour qu'a la sortie le code affiche 40

//let b = 0;
//let c = 0
//while(c < A completer) {
//  b = b + 10;
//  c = c + 1;
//}
//console.log(b);



// Il existe une forme un peu plus complexe que le while mais qui permet d'écrire un code plus court, plus synthétique
// Au lieu d'écrire le code de départs:
let j = 0;
console.log(j);
while (j < 10) {
    j = j + 1;
    console.log('While : ' + j);
}
console.log(j);
// On peu l'écrire avec un 'for' afin d'avoir quelque chose de plus simple en terme de volume de code
for (let k = 0; k < 10; k = k + 1) {
    console.log('For : ' + k);
}
// Il se lit for( une ligne de code d'initialisation (non obligatoire) : on déclare une condition pour que sa boucle (obligatoire) : une ligne de code en fin de boucle (non obligatoire)) {}
// Laissant de nombreuses combinaisons tel que:
let k = 0
for (; k < 10; k = k + 1) {
    console.log('For : ' + k);
}
// Ci-dessus on ne met rien en 1ere ligne mais le code fonctionnera avec k déclaré avant le for

// Autre example:
// let l = 0
// for (; l < 10;) {
//     console.log('For : ' + l);
// }
// Ci-dessus on ne déclare rien apres la boucle donc l ne fera pas +1 est la boucle tournera à l'infini car l sera toujours inférieur à 10

// Exercice 3 
// Refait les exercices 1 et 2 mais remplace les while par des for

// Exercice 4
// On va corser tout ca 
// Connais-tu le factoriel? Il s'écrit '3!' cela revient à faire: 3! = 3 * 2 * 1 = 6
// Ex: 2! = 2 * 1 = 2
// EX: 4! = 4 * 3 * 2 * 1 = 24
// Je veux que tu fasse un code qui, avec un for ou while, permet de retourner le factoriel d'une nombre.
