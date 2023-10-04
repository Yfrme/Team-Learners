/*В користувача є початковий бюджет 10$. Кожна ставка коштує 2$. Загадується рандомне число від 1 до 4. 
Якщо користувач вгадав це число з першого разу то він виграє 5$, якщо з другого то 3$ якщо з третього то 1$. Я
кщо користувач виграв або використав більше трьох спроб то його бюджет відповідно міняється і запитує чи хоче він продовжити 
іграти дальше і так до тих пір поки він не відмовиться. Якщо відмовиться вивести бюджет що залишився*/

let balance = 10;
let bet = 2;

do {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    let attempts = 1;

    while (attempts <= 3) {
        let number = parseInt(prompt("Write your number 1 to 4: "));

        if (number === randomNumber) {
            if (attempts === 1) {
                balance += 5;
            } else if (attempts === 2) {
                balance += 3;
            } else if (attempts === 3) {
                balance += 1;
            }
            break;
        } else {
            attempts++;
        }
    }

    if (balance >= 2) {
        const userInput = prompt("Write 'true' if you want to continue or 'false' if not: ");
        if (userInput === "true") {

        } else {
            console.log('Your balance is ' + balance + '$');
            break;
        }
    } else {
        console.log('Your balance is ' + balance + '$. You have no money to bet');
        break;
    }
} while (true);





        