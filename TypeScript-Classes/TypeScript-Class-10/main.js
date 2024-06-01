// // fresh object and stail object a = b dono alag object
// // revise employ project
// // arror function kya hai or isy array mein use karty hain
// // cover all loops 4 loops
// // paragrimiz website for loops details
// // length for loop se define kare hain 
// //  lenght hmesha 1 se start hoti hai. or index zero se start hoti hai
// // KEY VALUE HOLD KARA GA ==> CROSSPONDING VALUE  
// // ARROW FUNCTION ==> (SALARY) => SALARY > 50000;
// // interface employee{
// //     employeeId : string
// //     employeeName : string
// //     employeeSalray : number
// // }
// // let CollectionOfEmployee:employee = {
// //     employeeId : 'jhasdkjahg',
// //     employeeName : 'haseeb',
// //     employeeSalray : 298310
// // }
// // let student = ['hjash','jkhsd','ujhajksd','jhsa']
// // for(let i = 0; i <= student.length; i++){
// //     console.log(student[i]);
// // }
// // import { log } from 'console'
// import inquirer from 'inquirer'
// let condition = true
// let employAdd = []
// while (condition) {
//     let sendData = await inquirer.prompt([
//         {
//             name: 'name',
//             message: 'Enter your name?',
//             type: 'string'
//         },
//         {
//             name: 'id',
//             message: 'Enter your ID',
//             type: 'number'
//         },
//         {
//             name: 'salary',
//             message: 'Enter your Salary',
//             type: 'number'
//         }
//     ])
//     // console.log(sendData);
//     employAdd.push(sendData)
//     let again = await inquirer.prompt(
//         {
//             name: 'Question',
//             message: 'Do you want to add more',
//             type: 'confirm',
//             default: 'true'
//         }
//     )
//     if (again.Question === false) {
//         condition = false
//         console.log(employAdd);
//     }
// }
// let modifiedList = await inquirer.prompt([
//     {
//         name: 'feature',
//         message: 'Do you want modified list',
//         type: 'confirm',
//         default: 'true'
//     }
// ])
// if (modifiedList.feature === true) {
//     let selectedWork = employAdd.map((item, index) => {
//         return {
//             name: `Name : ${item.name} Id : ${item.id} salary : ${item.salary}`, value: index
//         }
//     })
//     let qustion = await inquirer.prompt([
//         {
//             name: 'Choice',
//             message: 'please select your employe',
//             type: 'list',
//             choices: selectedWork
//         }
//     ])
//     let againQuestion = await inquirer.prompt([
//         {
//             name: 'againQuestion',
//             message: 'please select option.',
//             type: 'list',
//             choices: ["name", "id", "salary"]
//         },
//         {
//             name: 'newdata',
//             message: 'What do you want you edit',
//             type: 'input',
//         }
//     ])
//     switch (againQuestion.againQuestion) {
//         case 'name':
//             employAdd[qustion.choices].name = againQuestion.newdata
//             break;
//         case 'id':
//             employAdd[qustion.choices].id = Number(againQuestion.newdata)
//             break;
//         case 'salary':
//             employAdd[qustion.choices].salary = Number(againQuestion.newdata)
//     }
//     console.log(employAdd);
// }
let array = [1, 2, 3];
console.log(array.indexOf(4));
export {};
