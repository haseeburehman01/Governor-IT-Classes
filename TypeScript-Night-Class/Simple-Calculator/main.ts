import { log } from 'console';
import inquirer from 'inquirer';

const answer = await inquirer.prompt(
    [
        {
            name: 'firstnumber',
            type: 'number',
            message: 'Enter Your First Number'
        },
        {
            name: 'secondnumber',
            type: 'number',
            message: 'Enter Your Second Number'
        },
        {
            message: 'Select Of the one operator to perfrom Action.',
            type: 'list',
            name: 'operator',
            choices: ['+', '-', '*', '/']
        }
    ]
)

console.log(answer);

if (answer.operator === '+') {
    console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === '-'){ 
    console.log(answer.firstnumber - answer.secondnumber)
}else if(answer.operator === '*'){
    console.log(answer.firstnumber * answer.secondnumber);
}else if(answer.operator === '/'){
    console.log(answer.firstnumber / answer.secondnumber);
}