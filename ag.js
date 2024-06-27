#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "please enter your name"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "select your opponent",
    choices: ["Arup Sridhar", "Prakash", "Saina Nehwal"],
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //arup sridhar
    if (opponent.select == "Arup Sridhar") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "select your opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.whiteBright(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.whiteBright(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelDecrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel Is ${p1.fuel}`));
        }
        ;
        if (ask.option == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
        ;
    }
    ;
    //prakash
    if (opponent.select == "Prakash") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "select your opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.whiteBright(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.whiteBright(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelDecrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel Is ${p1.fuel}`));
        }
        ;
        if (ask.option == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
        ;
    }
    ;
    //saina nehwal
    if (opponent.select == "Saina Nehwal") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "select your opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.whiteBright(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.whiteBright(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelDecrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel Is ${p1.fuel}`));
        }
        ;
        if (ask.option == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
        ;
    }
    ;
} while (true);
