// RENOMMER CE FICHIER 'index.js' POUR LE FAIRE FONCTIONNER

const indexJackpot = { diamond: 5, bell: 3, seven: 0, watermelon: 1, lemon: 4, cherry: 2, skull: 6 };
const money2Jackpot = { diamond: 100, bell: 50, seven: 30, watermelon: 15, lemon: 10, cherry: 5, skull: 0 };
const money3Jackpot = { diamond: 10000, bell: 5000, seven: 1000, watermelon: 100, lemon: 60, cherry: 30, skull: 10 };

const jackpot = document.getElementById('jackpot');
const runButton = document.getElementById('run-button');
const runButtonStyle = document.getElementById('run-button-style');
const endlesslyButton = document.getElementById('endlessly-button');
const moneyRender = document.getElementById('money');
const logsRender = document.getElementById('logs');

const wheel1 = jackpot.children[0];
const wheel2 = jackpot.children[1];
const wheel3 = jackpot.children[2];

let money = 500;
let maxPossesed = 500;
let countOfRun = 0;
let endlessly = false;
let isRunning = false;
let finishedToTurn = 3;
let oldResult = ['seven', 'seven', 'seven'];
moneyRender.innerHTML = renderPrice(money);

/**
 * Update the monay amount on the screen
 * with an animation
 */
function updateMoney() {
    if (money > maxPossesed) {
        maxPossesed = money;
    }
    moneyRender.innerHTML = renderPrice(money);
    moneyRender.setAttribute('class', 'active');
    setTimeout(() => { moneyRender.setAttribute('class', ''); }, 1000);
}

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
 * @param res [ aSymbol, aSymbol, aSymbol ] Ex: [ 'cherry', 'lemon', 'seven' ]
 */
function isJackpot(res) {
    oldResult = res;
    isRunning = false;
    if (endlessly) {
        runTheGame();
    } else {
        runButton.disabled = false;
    }
    let winSomething = false;
    if (res[0] == res[1] && res[0] != res[2]) { // 2 identique
        winSomething = true;
        money += money2Jackpot[res[0]]
    } else if (res[0] == res[1] && res[0] == res[2]) { // 3 identique
        winSomething = true;
        money += money3Jackpot[res[0]]
    }
    if (winSomething && res[0] != 'skull') {
        logsRender.innerHTML += '<p><img src="assets/' + res[0] + '.png"/><img src="assets/' + res[1] + '.png"/><img src="assets/' + res[2] + '.png"/></p>';
        updateMoney();
        jackpot.setAttribute('class', 'main container row win');
        setTimeout(() => {
            jackpot.setAttribute('class', 'main container row');
            setTimeout(() => {
                jackpot.setAttribute('class', 'main container row win');
                setTimeout(() => {
                    jackpot.setAttribute('class', 'main container row');
                    setTimeout(() => {
                        jackpot.setAttribute('class', 'main container row win');
                        setTimeout(() => {
                            jackpot.setAttribute('class', 'main container row');
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    }
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
    let proba = Math.round(Math.random() * 100);
    if (proba <= 5) {
        return 'diamond'
    } else if (proba <= 15) {
        return 'bell'
    } else if (proba <= 30) {
        return 'seven'
    } else if (proba <= 50) {
        return 'watermelon'
    } else if (proba <= 75) {
        return 'lemon'
    } else if (proba <= 75) {
        return 'cherry'
    } else { // proba <= 100
        return 'skull'
    }
}

/**
 * Recursive function: Turn a number of time a given wheel
 * @param turnCount between 0 and 5 for the six value possible
 * @param aWheel one of the three wheel on top
 * @param speed the speed of symbol transition
 */
function turnTheWheel(turnCount, aWheel, speed, result) {
    if (turnCount <= 0) return;
    let cases = aWheel.children;
    if (turnCount > 5) {
        cases[cases.length - 3].style.transition = 'all ' + (speed / 1000).toFixed(1) + 's';
        cases[cases.length - 2].style.transition = 'all ' + (speed / 1000).toFixed(1) + 's';
        cases[cases.length - 1].style.transition = 'all ' + (speed / 1000).toFixed(1) + 's';
    } else {
        cases[cases.length - 2].style.transition = 'all ' + ((speed / 1000) * 2 * (6 - turnCount)).toFixed(1) + 's';
        cases[cases.length - 1].style.transition = 'all ' + ((speed / 1000) * 2 * (6 - turnCount)).toFixed(1) + 's';
    }

    cases[cases.length - 2].setAttribute('class', 'case');
    cases[cases.length - 1].setAttribute('class', 'case turnDown');
    setTimeout(() => {
        aWheel.prepend(cases[cases.length - 1])
        cases[0].setAttribute('class', 'case turnUp');
        if (turnCount > 1) {
            turnTheWheel(turnCount - 1, aWheel, speed, result);
        } else {
            finishedToTurn++;
            if (finishedToTurn == 3) {
                isJackpot(result);
            }
        }
    }, turnCount > 5 ? speed : (speed * 3 * (6 - turnCount)));
}

/**
 * Recursive function: turn the three wheel a number of time and then show the result
 * @param turnCount the count of time we fully turn the wheel
 * @param result the result of the party
 * @param rollingSpeed the time that a wheel need to turn between two symbols
 * @param delaySpeed the delay of time between two wheel to turn
 */
function turnAll(turnCount, result, rollingSpeed = 500, delaySpeed = 200) {
    finishedToTurn = 0;
    turnTheWheel(7 * turnCount + indexJackpot[result[0]] + (7 - indexJackpot[oldResult[0]]), wheel1, rollingSpeed, result); // Left Wheel
    setTimeout(() => {
        turnTheWheel(7 * turnCount + indexJackpot[result[1]] + (7 - indexJackpot[oldResult[1]]), wheel2, rollingSpeed, result); // Middle Wheel
        setTimeout(() => {
            turnTheWheel(7 * turnCount + indexJackpot[result[2]] + (7 - indexJackpot[oldResult[2]]), wheel3, rollingSpeed, result); // Right Wheel
        }, delaySpeed);
    }, delaySpeed);
}

/**
 * Call on button click
 * Run the machine
 */
function runTheGame() {
    if (money >= 10 && isRunning == false) {
        countOfRun++;
        console.log('Run : ' + countOfRun);
        isRunning = true;
        money -= 10;
        updateMoney();
        runButton.disabled = true;
        runButtonStyle.setAttribute('class', 'pressed');
        setTimeout(() => { runButtonStyle.setAttribute('class', ''); }, 1000);
        let res = [getValue(), getValue(), getValue()];
        setTimeout(() => { turnAll(4, res, 100, 200); }, 100);
    } else {
        console.log('MAX POSSESSED: ' + maxPossesed)
    }
}

function runTheGameEndlessly() {
    endlessly = !endlessly;
    endlesslyButton.innerHTML = endlessly ? 'Stop the loop' : 'Endlessly'
    if (endlessly) {
        runButton.disabled = true;
        runTheGame();
    } else if (isRunning == false) {
        runButton.disabled = false;
    }
}

runButtonStyle.addEventListener('click', () => {
    runButton.click();
});
