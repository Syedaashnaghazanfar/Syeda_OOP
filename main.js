#! /usr/bin/env node
import chalk from "chalk";
import { input, select } from "@inquirer/prompts";
//creating class for student
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
//creating class for person
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const person = new Person();
const programStart = async (person) => {
    console.log(chalk.green.bold("\t Welcome to Object Oriantation Programming Project \t"));
    do {
        let message1 = await select({
            message: "Whom would you like to interact with?",
            choices: [{ value: "Staff" }, { value: "Student" }, { value: "Exit" }]
        });
        if (message1 === "Staff") {
            console.log(chalk.blue.italic("\n You Entered StaffRoom..."));
            console.log("-".repeat(50));
            let askQuestion = await select({
                message: "What would you like to ask the staff?",
                choices: [{ value: "Fees Structure" }, { value: "Quality of education" }]
            });
            if (askQuestion === "Fees Structure") {
                console.log(chalk.yellow.bold("\t \n Here is the Fees Structure of the students of class I to X : \t"));
                console.log(chalk.magentaBright("Class I to III : 6000 PKR "));
                console.log(chalk.blueBright("Class IV to VIII : 8000 PKR "));
                console.log(chalk.redBright("Class IX to X : 10000 PKR "));
                console.log("-".repeat(50));
            }
            if (askQuestion === "Quality of education") {
                console.log("-".repeat(150));
                console.log(chalk.magentaBright('Staff:- "The quality of education here is very awesome! Children along with their parents are satisfied and the staff is cooperative!"'));
                console.log("-".repeat(150));
            }
        }
        else if (message1 === "Student") {
            console.log("-".repeat(50));
            let nameofStudent = await input({
                message: "Enter the student's name uou would like to interact with:"
            });
            const studentname = person.students.find(name1 => name1.name === nameofStudent);
            if (!studentname) {
                const addStudent = new Student(nameofStudent);
                person.addStudent(addStudent);
                console.log(chalk.blue(`Hi ! I am ${addStudent.name}, nice to meet you`));
                console.log(chalk.bold("\n\t NEW STUDENT ADDED!"));
                console.log("-".repeat(50));
                console.log(chalk.magenta('Current student list :'));
                console.log(person.students);
            }
            else {
                console.log(chalk.blue(`Hi ! I am ${Student.name}, nice to see you`));
                console.log("-".repeat(50));
                console.log(chalk.magenta('Existing student list :'));
                console.log(person.students);
            }
        }
        else if (message1 === "Exit") {
            console.log("-".repeat(50));
            console.log(chalk.italic("\tExiting the program..."));
            console.log("-".repeat(50));
            process.exit();
        }
    } while (true);
};
programStart(person);
