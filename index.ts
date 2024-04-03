#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234; //atm pin

let pinAnswer = await inquirer.prompt([

    {
        name: "pin",
        message: "Please enter your PIN",
        type: "number"
    },

]);

if (myPin === pinAnswer.pin) {
    console.log("Correct pin code");

    let operationAns = await inquirer.prompt([

        {
            name: "operation",
            message: "Select any one 0f the operation",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        },

    ]);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([

            {
                name: "amount",
                message: "Please enter your amount",
                type: "number"
            },

        ]);

        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining amount is: ${myBalance}.`);
        } else {
            console.log(`Your balance is Insufficient`);
        }

    } else if (operationAns.operation === "check balance") {
        console.log(`Your balance is: ${myBalance}.`);
    } else if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([

            {
                name: "fastcash",
                message: "Please select your amount",
                type: "list",
                choices: [2000, 3000, 5000, 10000, 20000]
            }

        ]);

        if (myBalance >= fastcashAns.fastcash) {
            myBalance -= fastcashAns.fastcash;
            console.log(`Your remaining amount is: ${myBalance}.`);
        } else {
            console.log(`Your balance is Insufficient`)
        }
    }

    //end
} else {
    console.log("Incorrect pin code");
}

