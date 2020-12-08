// Caractère et chaîne de caractères

// Il s'agit de la base de la programmation, la manipulation de chaîne de caractère (appelé 'string')
// Comprendre et manipuler une chaîne de caractères permet ausi de faire de traitement de text, crypter/décrypter des messages, etc.


// Une chaîne de caractères (aussi appelé string) doit être avant tout perçu comme une liste de caractères
// Ex :
let str = 'Coucou tout le monde!';

// Ici il s'agit d'une chaîne de caractères

// Mais comme une liste, si l'on souhaite connaitre le 1ere caractère
// Il suffit de faire :
let char1 = str[0];
// Et si l'on souhaite connaître le 10eme caractère
// Il suffit de faire :
let char10 = str[9];

// Si l'on souhaite connaitre la longeur d'une chaîne de caractères (le nombre de caractères dans une chaîne), il suffit de faire:
console.log(str.length);
// Cela donnera 21 car même les espaces ' ' et la ponctuation tel que '!' est compté comme un caractère!

// En utilisant les connaissance du précédant tuto on peu parcourir chaque caractères d'une chaîne de caractères
// Avec un while:
console.log('Avec un while');
let a = 0;
while(a < str.length) {
    console.log(str[a]);
    a = a + 1;
}
// Avec un for
console.log('Avec un for');
for(let a = 0; a < str.length; a = a + 1) {
    console.log(str[a]);
}

// Attention ne pas oublié que l'index commance à 0 est c'est pour cela qu'on ne cherche jamais le 21eme caractère
// Si tu tape:
// console.log(str[str.length]);
// tu aura une erreur du style 'out of index' car le 21eme caractère et a la position 20.
// comme le 10eme caractère à la position 9 et le 1er caractère à la position 0.
// Si tu as saisi le parcours d'une chaîne de caractères tu passe à la suite

// Conais tu le code ASCII ? Il s'agit d'une norme quasi mondiale sur une indexation des caractères
// c-a-d que chaque caractère possède un numéro qui lui est propre
// Si tu t'amuse à garde la touche 'Alt' appuyée, puis tu tape un code tel que '145', puis relache la touche 'Alt'.
// Tu verra apparaitre le caractère 'æ', caractère que tu n'as pas sur ton clavier il me semble ;)
// Encore plus drole! Garde la touche 'Alt' appuyée, puis tu tape un code tel que '1', puis relache la touche 'Alt'.
// Bref c'est drole mais surtout très pratique!
// Car avec ceci on peut transformer un chiffre en lettre et vice versa

// Exemple 'a' vers 97
// 97 et le code ASCII pour le caractère 'a'
// N'hésite pas a taper code ASCII tu trouvera des tableau avec tout les code 
let asciiCode = 'a'.charCodeAt(0);
console.log(asciiCode);
// PS: le 0 dans la fonction de conversion charCodeAt() correspond à l'index comme quand on fait [0]

// Exemple: inversement, 97 vers 'a'
let charA = String.fromCharCode(97);
console.log(charA);

// Exercice 1:
let str2 = 'je suis un papillon'
// Créer un code permettant de parcourir la chaîne de caractères (while ou for) et afficher le code ascii de chaque caractère

// Exercice 2:
let difficile = [106,101,32,115,117,105,115,32,117,110,101,32,102,108,117,116,101,32,101,110,99,104,97,110,116,101,101];

// Créer un code permettant de parcourir cette liste et de reconstruire la phrase caché derrière ces chiffre 
// Indice 1 : une liste est comme une chaîne de caractères car il possède un '.length' et peu se lire [0], [10], etc
// Indice 2 il faut utiliser la fonction inverse à celle de l'exercice 1

// Ercercie 3
// Maintenant que tu a fait les exercices 1 et 2 on va faire plus dur:
// Tu va devoir créer un code qui permet de crypté une phrase!
// Pour l'instant on ne se complique pas trop trop, les consignes pour crypter une phrase sont:
// 1- les chaînes de caractères ne contiennent que des lettres alphabétiques minuscules et des espaces
// 2- les espaces ne seront pas à crypter (on les ignore)
// 3- on prends une lettre et on fait +13
// 4- Donc 'a' + 13 donne 'n' puisque 'a' est en 1ere position et 'n' en 14
// 'b' + 13 donne 'o'
// lorsque cela dépasse 'z' on revient sur 'a'
// donc 'z' donne 'm', 's' donne 'f', etc

// si on donne la chaîne de caractère: 'abcdefghijklmnopqrstuvwxyz'
// on doit obtenir la chaîne de caractère: 'nopqrstuvwxyzabcdefghijklm'
// on ton clavier ;)

// Exercice 4 
// Reprends l'exercice 3 et fait en sorte qu'on puisse crypté aussi les majuscules
// si on donne la chaîne de caractère: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// on doit obtenir la chaîne de caractère: 'NOPQRSTUVWXYZABCDEFGHIJKLM'

// 'a' -> ( décaler de 13 caractères) -> 'n'
// 97 -> ( décaler de 13 caractères) -> 97 + 13 = 110 


let str ='abcdefghijklmnopqrstuvwxyz';
let res = '';
for(let i = 0; i < str.length; ++i) {
    let codeAscii = str.charCodeAt(i) + 13;
    if(codeAscii > 122 ) {
        codeAscii -= 26;
    }
    res += String.fromCharCode(codeAscii);
}
console.log(res);
