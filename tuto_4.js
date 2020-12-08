// If, else, switch, opérateurs logiques

// Les premier programme n'était écrit qu'a partie de if, else et de while
// Les 'if', 'else', 'else if' permettent de faire énormément de chose
// C'est comme cela que les réseaux electrique fonctionnent en soit

// Exemple 1: un feu de circulation, il ne s'agit pas de vert, orange et de rouge, mais de 0, 1, 2 
// 0 représente l'arret, le rouge
// 1 représente la ralentisement avec l'arret, le orange
// 2 représente l'opposé de l'arret (avancé), le vert
function getColor(status) {
    if (status = 2) {
        return 'red'
    } else if (status = 1) {
        return 'orange'
    } else if (status == 0) {
        return 'green'
    } else {
        return 'error'
    }
}
console.log(getColor(1))

// Cela permet de voir l'interet du 'if', 'else', 'else if'
// Mais il y a mieux, afin d'aviter un code long, remplit de if dans des if dans des if
// Il exsite des opérateur logique: ET (&&), OU (||), Négation (!)

// La nagation et un moyen plus court d'exprimer == false ou encore != true
// Example variable != true c'est pareil que variable == false et c'est pareil que !variable (car la négation de faux c'est vrai !!)

// Exemple 2: la vitesse d'une voiture
// Cette fonction permet d'ajouter la vitesse d'une voiture en fonction du feu devant elle
//Si le feu est rouge et que la voiture roule au dessus de 0km/h -> on diminue la vitesse (divide par 3)
//Si le feu est rouge et que la voiture est a l'arret -> on reste à l'arret

//Si le feu est orange et que la voiture roule au dessus de 30 km/h -> on retire 10 km/h
//Si le feu est orange et que la voiture roule entre 0 et 30 km/h -> on diminue la vitesse (divide par 2)7

// Si le feu et vert et que la voiture roule au dessus de 20 km/h -> on garde la vitesse
// Si le feu et vert et que la voiture roule entre 20 et 1 km/h -> on augmente la vitesse (double)
// Si le feu et vert et que la voiture est a l'arret km/h -> commence à avancer
function getSpeed(status, speed) {
    if (status = 2) { // Rouge
        if (speed > 0) {
            return speed / 3;
        } else {
            return 0;
        }
    } else if (status = 1) { // Orange
        if (speed > 30) {
            return speed - 10;
        } else {
            return speed / 2;
        }
    } else if (status == 0) { // Vert
        if (speed == 0) {
            return 5;
        } else if (speed > 20) {
            return speed;
        } else {
            return speed * 2;
        }
    } else {
        return 'error'
    }
}
console.log(getSpeed(2, 30)) // = 10

//C'est quand même compliqué même si c'est le plus 'optimal'
// On peu augmenté un peu le temps de calcule mais le rendre plus facile à lire (d'ou le dileme optimisation vs lisibilité)
function getSpeed2(status, speed) {
    if (status = 2 && speed > 0) {
        return speed / 3;
    } else if (status = 2) {
        return 0;
    } else if (status = 1 && speed > 30) {
        return speed - 10;
    } else if (status = 1) {
        return speed / 2;
    } else if (status == 0 && speed == 0) {
        return 5;
    } else if (status == 0 && speed > 20) {
        return speed;
    } else if (status == 0) {
        return speed * 2;
    } else {
        return 'error'
    }
}
console.log(getSpeed(2, 30)) // = 10
// Le code ci-dessus est exactement le meme mais plus court et, celon les gens, plus lisible

// Exercice 1: on veux une fonction qui permet de retourner la couleur d'une carte en fonction de sa famille
// 'hearts', 'clover', 'diamonds', 'spades'
function getCardColor(familly) {
    // A completer
}
console.log(getCardColor('hearts')) // = 'red'
console.log(getCardColor('clover')) // = 'black'
console.log(getCardColor('diamonds')) // = 'red'
console.log(getCardColor('spades')) // = 'black'
console.log(getCardColor('')) // = 'error'

// Exercice 2
// La tu va devoir bien réfléchir avec des if else
// Il faut faire une fonction qui va comparer deux carte et dire laquel et 'supérieur' à l'autre en se basant sur le jeu de belotte
// Instruction:
// 1 - On donne en paramtres: 
// card1 : une carte qui possède une famille ( card1.familly ) et un rang ( card1.rank )
// card2 : une carte qui possède une famille ( card2.familly ) et un rang ( card2.rank )
// atout : la famille d el'atout dans la partie -> 'hearts' ou 'clover' ou 'diamonds' ou 'spades'
// 2 - la rang d'une carte va de 1 à 13
// l'as vaut 1, le 2 vaut 2 , le 3 vaut 3, ....., le 10 vaut 10, le valet vaut 11, la reine vaut 12 et enfin le rois vaut 13
// 3 - la fonction retourne soirt 1 si la carte 1 est 'superieur' à la carte 2, soit 2 si la carte 2 est 'superieur' à la carte 1
// Rappel: l'ordre de valeur chez les cartes normales est: 2, 3, 4, 5, 6, 7, 8, 9, Valet (11), Dame(12), Rois(13), 10, As(1)
// Rappel: l'ordre de valeur chea les cartes atout est: 2, 3, 4, 5, 6, 7, 8, Dame(12), Rois(13), 10, As(1), 9, Valet (11)
// Rappel: l'atout est toujours supérieur au autres famille
// Si on compare deux carte de deux famille différente, est que aucune des deux n'est de l'atout, la 1ere carte sera gagnante quoi qu'il arrive
function compareCards(card1, card2, atout) {
    let atoutRang = [11, 1, 2, 3, 4, 5, 6, 7, 13, 10, 12, 8, 9];
    let basicRang = [13, 1, 2, 3, 4, 5, 6, 7, 8, 12, 9, 10, 11];
    if(card1.familly != atout && card2.familly != atout) { // Aucun atout
        if(card1.familly != card2.familly) { // Differente famille
            return 1;
        } else { // Meme famille mais pas de l'aout
            if(basicRang[card1.rank -1] > basicRang[card2.rank -1]) {
                return 1;
            } else {
                return 2;
            }
        }
    } else if(card1.familly == atout) { // 1 atout
        if(card2.familly == atout) { // Tout les deux de l'atout
            if(atoutRang[card1.rank -1] > atoutRang[card2.rank -1]) {
                return 1;
            } else {
                return 2;
            }
        }
        return 1;
    } else if(card2.familly == atout) { // 2 atout et 1 non atout
        return 2;
    }
}

let card1 = { familly: 'hearts', rank: 9 }
let card2 = { familly: 'hearts', rank: 10 }
console.log(compareCards(card1, card2, 'hearts')) // = 1 car le 9 d'atout est supérieur au 10 d'atout 


let card3 = { familly: 'hearts', rank: 9 }
let card4 = { familly: 'hearts', rank: 10 }
console.log(compareCards(card3, card4, 'spades')) // = 2 car ses carte ne sont pas de l'atout et dans les familles normales le 10 et au dessus du 9


let card5 = { familly: 'spades', rank: 9 }
let card6 = { familly: 'hearts', rank: 11 }
console.log(compareCards(card5, card6, 'spades')) // = 1 car la 1ere carte est de atout et pas l'autre


let card7 = { familly: 'spades', rank: 2 }
let card8 = { familly: 'hearts', rank: 1 }
console.log(compareCards(card7, card8, 'clover')) // = 1 car meme si la 2eme carte est un As, aucune des deux n'est de l'atout et on a dit que si aucune des deux
// n'est de l'atout, alors la 1ere carte gagne par défaut.
