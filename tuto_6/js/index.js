// La machine à sous, suite

// ICI mettre les variable global nécessaire
// solde du joueur
// tableau des prix des combianaisons gagnante
// tableau des nombres de tour nécessaires pour afficher un symbol donné
// les pointer vers les div qu'on va manipuler 
// EX:
const runButton = document.getElementById('run-button');
const runButtonStyle = document.getElementById('run-button-style');
// Bien reflechir sur ce qui est variable global et ce qui est constante global

/**
 * Render a given price
 * @param price a integer
 */
function renderPrice(price) {
    const beautyPrice = Number.parseFloat(price).toFixed(2).replace('.', ',');
    let res = '';
    for (i = 0; i < beautyPrice.length; ++i) {
        res = beautyPrice[beautyPrice.length - i - 1] + res;
        if (i > 2 && (i - 2) % 3 == 0) { res = ' ' + res; }
    }
    return res + ' $';
}

/**
 * Call at the end everytimes
 * Add money to the acount if money earned
 * And add a funny animation
 * @param result [ aSymbol, aSymbol, aSymbol ] Ex: [ 'cherry', 'lemon', 'seven' ]
 */
function isJackpot(result) {
    // Si la combianaison est bonne alors incrémenter le solde du joueur par la valeur de la combinaison
}

/**
 * Return a value : diamond or bell or seven or watermelon or lemon or cherry
 * diamond 4% ->    2x = 0.16% ->   3x = 0.0064%
 * bell 6% ->       2x = 0.36% ->   3x = 0.0216%
 * seven 10% ->     2x = 1% ->      3x = 0.1%
 * watermelon 13%-> 2x = 1.69% ->   3x = 0.2197%
 * lemon 17% ->     2x = 2.89% ->   3x = 0.4913%
 * cherry 25% ->    2x = 6.25% ->   3x = 1.5625%
 * skull 25% ->     2x = 6.25% ->   3x = 1.5625%
 * Ne rien avoir -> 100 - 0.16 - 0.36 - 1 - 1.69 - 2.89 - 6.25 = 87.65%
 */
function getValue() {
    // A completer avec les données ci-dessus
    // Meme fonction dans le tuto précédants
}

/**
 * Recursive function: Turn a number of time a given wheel
 * @param turnCount between 0 and 5 for the six value possible
 * @param aWheel one of the three wheel on top
 * @param speed the speed of symbol transition
 */
function turnTheWheel(turnCount, aWheel, speed, result) {
    // Si le turnCount est inferieur à 0 on doit sortie car il ne faut pas faire touner la roue
    
    // Il faut faire basculer le symbol visible ver le bas
    // En meme temps il faut faire basculer le symbol qui le succede pour qu'il prenne la place visible

    // Puis il faut remonter le symbole qui vient de glisser vers le bas en haut de la pile
    // Le tout de manière récursive

    // Il faut savoir lorsque la roue a fini de tourner et si c'est la dernière roue des trois
    // Cela afin de lancer la fonction isJackpot()

    // PS le code css est deja fournit, il est possible d'écrire sont propre code css
    // ou d'utiliser celui qui existe en testant ce que font les class 'case', 'case turnUp' et 'case turnDown'
}

/**
 * Recursive function: turn the three wheel a number of time and then show the result
 * @param turnCount the count of time we fully turn the wheel
 * @param result the result of the party
 * @param rollingSpeed the time that a wheel need to turn between two symbols
 * @param delaySpeed the delay of time between two wheel to turn
 */
function turnAll(turnCount, result, rollingSpeed = 500, delaySpeed = 200) {
    // On fait tourner la 1ere roue un certain nombre de fois
    setTimeout(() => {
        // On fait tourner la 2eme roue un certain nombre de fois
        setTimeout(() => {
            // On fait tourner la 3eme roue un certain nombre de fois
        }, delaySpeed);
    }, delaySpeed);
}

/**
 * Call on button click
 * Run the machine
 */
function runTheGame() {
    // Si il y a assez d'argent sur le compte (creer une valeur global  qui contient le solde du joueur)
    // ALors on met a jour le solde par rapport au coup d'un tirage de la machine 
    // On récupere trois symbole avec le getValue() 
    // Puis on lance la roue

    // Ce bout de code permet de faire de l'animation sur le bouton, voir fichier css
    runButtonStyle.setAttribute('class', 'pressed');
    setTimeout(() => { runButtonStyle.setAttribute('class', ''); }, 1000);
}

// Permet de clicker sur un run bouton invisible (display: none;)
runButtonStyle.addEventListener('click', () => {
    runButton.click();
});

// Bonus, ignorer pour l'instant
// Il ne faut pas pouvoir clicker sur le bouton de lancement tant que les roues tournent
// Il ne faut pas pouvoir clicker sur le bouton de lancement si c'est en mode 'endlessly'
function runTheGameEndlessly() {
    console.log('A completer')
}
