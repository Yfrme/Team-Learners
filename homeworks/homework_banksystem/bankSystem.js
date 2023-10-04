
let firstClient = ['John', 100];
let secondClient = ['Frank', 100];

while (true) {
    let options = prompt('What you need to do: 1) Remove money, 2) Send money, 3) Check balance (first client), 4) Check balance (second client), 5) Exit');

    if (options === '1') {
        let quantityWithdraw = parseInt(prompt('How much money do you want to withdraw?'));
        let withdraw = firstClient[1] - (quantityWithdraw + ((quantityWithdraw / 100) * 5));
        console.log('You withdrew ' + quantityWithdraw + '$');
        firstClient[1] = withdraw; 
    } else if (options === '2') {
        let sendMoney = parseInt(prompt('How much money do you want to send?'));
        let transaction = sendMoney - (sendMoney * 0.1);
        firstClient[1] -= sendMoney;
        secondClient[1] += transaction;
        console.log('You sent ' + sendMoney + '$ to the second client.');
    } else if (options === '3') {
        let checkBalance = firstClient[1];
        console.log('Your balance: ' + checkBalance + '$');
    } else if (options === '4') {
        let checkBalance = secondClient[1];
        console.log('Your balance: ' + checkBalance + '$');
    } else if (options === '5') {
        console.log('Goodbye!');
        break;
    } else {
        console.log('Invalid option. Please choose a valid option.');
    }
}






