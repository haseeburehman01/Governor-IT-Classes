import inquirer from "inquirer"

let todos = [];
let condition = true;

while(condition){
    let todoQuestion = await inquirer.prompt(
        [
            {
                name: 'firstQuestion',
                type: 'input',
                message: 'Would you like to add your todo?'
            },
            {
                name: 'secondQuestion',
                type: 'confirm',
                message: 'Would you like to add more todo?',
                default: 'true', 
            },
        ]
    )
    
    todos.push(todoQuestion.firstQuestion);
    console.log(todos);
    condition = todoQuestion.secondQuestion
}
