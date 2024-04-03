#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 30000; // Dollar
let myPin = 1818;
let myIncome = 0;
const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin: ",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option: ",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Select an Amount you want to withdraw: ",
                type: "list",
                choices: [1000, 2000, 5000, 10000, 50000]
            }
        ]);
        console.log(amountAns);
        if (amountAns.Amount <= myBalance) {
            myBalance -= amountAns.Amount;
            console.log(`${amountAns.Amount} withdrawn successfully!!`);
            console.log(`Your Remaining Balance is:  + ${myBalance}`);
        }
        else {
            console.log("You don't have sufficient Balance");
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Balance is:  + ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number!!!");
}
