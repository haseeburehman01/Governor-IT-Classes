// 1_ premitive data types > work Done
// 2_ strong types         > work Done
// 3_ inference Types      > work Done
// 4_ let and const        > work Done
// 5_6_why we use Var & let  > work Done
// 7_ String Data Type     > work Done
// 8_ Number Data Type     > work Done
// 9_ Boolean Data Type    > work Done
// 10_bignit types         > work Done
// 11_any Data Type        > work Done
// 12_unknown Data Type    > work Done
// 13_undefined Data Type  > work Done
// 14_null Data Type       > work Done
// 15_Never Data Type      > work Done
// 16_symble Data Type     > work Done
// 17_custom Data Type     > work Done
// 18_syntax error         > work Done
// 19_Type error           > work Done
// 20_Assignability error  > work Done
// 21_String Concatenation > work Done
// 22_Template literals    > work Done
// 23_modules oprater      > work Done
// 24_ inquirer            > work Done
// 25_cover All oppraters  > work in progress
// 26_slides cover 1 and 2 > work in progress
// All Typescript Data Type cover   > work in progress
// <-----------------------------------------------End------------------------------------------------>
// 1
// premitive data types
//TypeScript mein primitive data types un data types ko kaha jata hai jo directly
// memory mein store hoti hain aur immutable (unchangeable) In sabhi ko primitive data types kaha jata hai
// kiyun ke ye primitive operations perform karte hain or directly memory mein store hote hain.....
// 1_ String,
// 2_ Number,
// 3_ boolean,
// 4_ null,
// 5_ undefined,
// 6_ symble,
// 7_ bigint,
// <-----------------------------------------------End------------------------------------------------>
// 2
// Explicit > Manual
// let name_: string = "Shoaib";  < type define call strong types....
// 3
// Implicit > automatic
// let name_ = "shoaib";          < inferance types auto identify...
// <-----------------------------------------------End------------------------------------------------>
// 4
// let ki value Reassign yani change ki ja sakti hai...
// let person: string = "Shoaib";
// person = "Owais";
// console.log(person);
// <-----------------------------------------------End------------------------------------------------>
// 4
// Const ki values Reassign nahi ki ja sakti jo hai hmesha wahi rhegi or const noramly
// aisi values ke liye use karte hain jiski value fix rakhni hoti hai jese banck account number...
// const person: string = "Shoaib";
// person = "Owais";
// console.log(person);
// <-----------------------------------------------End------------------------------------------------>
// 5
// Var error
// var isliye ham use nahi karte kiyun ke aik hi same se jitne veribles chahy bana den ye erorr nahi dega... 
// var person = "Shoaib";
// var person = "Arshad";
// var person = "Asif"    // dont show error
// console.log(person);
// <-----------------------------------------------End------------------------------------------------>
// 6
// let is best
// let isliye ham use karte hai kiyun ke ye same name ka dubara veribles declare karne pe foran erro dey deta hai..
// let person = "Shoaib";
// let person = "Arshad";
// let person = "Asif"    // show error
// console.log(person);
// <-----------------------------------------------End------------------------------------------------>
// 7
// string Data Type
// let person: string = "String"
// <-----------------------------------------------End------------------------------------------------>
// 8
// Number Data Type
// 5, 3.14, -10  in sab ko bhi number data type mein call kiyya jata hai
// let value: number = 33
// <-----------------------------------------------End------------------------------------------------>
// 9
// Boolean Data Type
// let check: boolean = true/false
// <-----------------------------------------------End------------------------------------------------>
// 10
// bignit type
// let value: bigint = 774678463746n
// let value2: bigint = 8984739878343n
// let final: bigint = value + value2
// console.log(final);
// <-----------------------------------------------End------------------------------------------------>
// 11
// any Data Type
// any ko kisi bhi value se reassign kar denge to error nahi dega...
// let person: any = "shoaib";
// person = 33
// person = true
// console.log(person); // output true
// <-----------------------------------------------End------------------------------------------------>
// 12
// unknown Data Type
// ye type bhi any ki tarhn hoti hai lekin use se behtar hai ham wahn use karte hain jahn hamen type maloom nahi hoti
// phir jab hamy type maloom ho jati hai to ham isy replace kar sakty us value ki type ke sath "as" ke zriye....
// let a: unknown = "shoaib";  // now string value...
// a = 33                      // and now number value
// let b = a as number;        // we declare number
// b = 40                     // now its officialy number value
// b = "shoaib"               // now its error
// console.log(a);
// <-----------------------------------------------End------------------------------------------------>
// 13
// undefined Data Type
// let person: string;
// console.log(person); // show undefined
// let person: string = ""
// console.log(person); // show white space
// <-----------------------------------------------End------------------------------------------------>
// 14
// null Data Type
// ye type aksar optional form waghera mein use hoti hai jisme agr data mily tab bhi sahi hai 
// or agr data na milt tab bhi khair hai...
// let check: null = null;
// console.log(check);
// <-----------------------------------------------End------------------------------------------------>
// 15
// Never Data Type
// let a: never = 33   // never is rarrely use
// <-----------------------------------------------End------------------------------------------------>
// 16
// symble Data Type
// * what is symble
// * make a program with symble
// * use symble as key of object
// * use symble as function of class
// ye type hmesha uniqe id provide karti hai apko iska use tab hota hai jab hmara oject ya function waghera
// collaps kar rha ho to symble ke zariye usy ham aik uniqe id provide karte hain...
// let s1 = Symbol();
// console.log(s1);  // output is Symbol()
// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1 == s2); // output is false
// let s1 = Symbol("shoaib");
// console.log(s1);          // ouput is Symbol(shoaib)
// let s1 = Symbol("shoaib");
// console.log(s1.toString()); // normal output Symbol(shoaib)
// let s1 = Symbol("d1");
// let data = {
//     [s1]:"this is shoaib"
// }
// console.log(data[s1]); // out put this is shoaib
//class
// let s1 = Symbol("d1");
// class Demo {
//     demof1() {
//         return " give back my insurance money"
//     }
// }
// let d1 = new Demo(); // object
// console.log(d1.demof1());
// <-----------------------------------------------End------------------------------------------------>
// 17
// custom Data Type
// type Customer = {   // we creat this type just like typesript builtin types string, number, boolean, etc.
//     name: string;
//     age: number;
//     hobbies: string[];
//     email: string;
// };
// const person_1: Customer = {
//     name: "Shoaib",
//     age: 23,
//     hobbies: ["Cricket", "Videos games", "watch movies"],
//     email: ""
// }
// person_1.email = "sk9952908@gmail.com";
// // // console.log(person_1); // isko print na bhi kiyya jaye to phir bhi customers ka array khud kar dega
// let customers: Customer[] = []; // is array mein all customers ki information save ki jaa rhi hai...
// customers.push(person_1); // push karne se ye sara data customers[] ke array mein save hota chala jaega
// customers.push({
//     name: "Arshad",
//     age: 21,
//     hobbies: ["Wella", "Farigh", "nikamma"],
//     email: "pata nahi"
// });
// console.log(customers); // array print
// <-----------------------------------------------End------------------------------------------------>
// 18
// syntax error
// lett message = "Hello World";
// console.log(message);
// <-----------------------------------------------End------------------------------------------------>
// 19
// Type error
// let message = "Hello World";
// console.loger(message);
// <-----------------------------------------------End------------------------------------------------>
// 20
// Assignability error
// let message = "Hello World";
// message = 3
// console.log(message);
// <-----------------------------------------------End------------------------------------------------>
// 21
// String Concatenation
// let firstName: string = "Shoaib";
// let lastName: string = "Bashir";
// let fullName: string = firstName + " " + lastName;
// console.log(fullName)
// <-----------------------------------------------End------------------------------------------------>
// 22
// Template literals
// let firstName: string = "Shoaib";
// let lastName: string = "Bashir";
// let fullName: string = ${firstName} ${lastName};
// console.log(fullName);
// <-----------------------------------------------End------------------------------------------------>
// 23
// Modules 3 method
// 1st module code ko alag alag parts mein orgnize karne ki saholat deta hai....
// 2nd module se code ko reuse kar sakty hain matlab aik bar likha hua code jitni bar chahen dubara use kar sakty hain...
// 3rd module incapsulation matlab module code ko safe kar ke rakhty hain
// jahn ham code ko acces denA chahen sirf wahi hmara code avelible hoga baqi jagah nahi
// or parts mein jitna bara data alag bana ho lekin usy ham aik hi line likh kar apne pass add kar lete hain...
// import sLogin from "./Student.js";  // import ke bad jo (sLogon) (tLogin) likha hai ye iska name rakha hai hamne 
// import tLogin from "./Teacher.js";  // or ye name ham khud rakht sakty hain kuch bhi apni marzi se...
// let teacher = new tLogin();
// console.log(teacher.data);
// let student = new sLogin();
// console.log(student.data);
// <-----------------------------------------------End------------------------------------------------>
// 24
// inquirer
// ye aik use friendly package hota hai jo user se prompt ke zariye intract karta hai...
// installation in terminal
// 1_ npm i inquirer
// 2_ npm i --save-dev @types/inquirer
// 3_ npm fund
// import inquirer from "inquirer";
// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age"
// }])
// console.log("Insha Allah, in " + (60 - answers.age) + " Years you will be 60 years Old");
// <-----------------------------------------------End------------------------------------------------>
// 25
// Arthmetic operators
// let x: number =  10
// let y: number = 5
// let sum: number = x + y;
// console.log(sum)           // plus
// let x: number =  10
// let y: number = 5
// let sum: number = x - y;
// console.log(sum)          // addition
// let x: number =  10
// let y: number = 5
// let sum: number = x * y;
// console.log(sum)         // multiply
// let x: number =  10
// let y: number = 5
// let sum: number = x / y;
// console.log(sum)           // devide
// let x: number =  10
// let y: number = 5
// let sum: number = x % y;
// console.log(sum)           // modulus
//>
// incriment and dicriment
// let x: number =  10
// let y: number = 5
// let sum: number = x++;
// console.log(sum)           // output 10
// let x: number =  10
// let y: number = 5
// let sum: number = ++x;
// console.log(sum)           // output 11
// let x: number =  10
// let y: number = 5
// let sum: number = x--;
// console.log(sum)           // output 10
// let x: number =  10
// let y: number = 5
// let sum: number = --x;
// console.log(sum)           // output 9
// <-----------------------------------------------End------------------------------------------------>
// 26 
// Assignment operators
// let x: number =  10
// let y: number = 5
// x += y
// console.log(x)           // output 15
// let x: number =  10
// let y: number = 5
// x += y   >     same  // x = x+y         // x=10 mein y=5 ki value bhi store krwa di total = 15
// y += x   >     same  // y = x+y          // now x=15 and y=5 total value of Y = 20
// console.log(x)      // output 15
// let x: number =  10
// let y: number = 5
// x += y   >     same  // x = x+y         // x=10 mein y=5 ki value bhi store krwa di total = 15
// y += x   >     same  // y = x+y          // now x=15 and y=5 total value of Y = 20
// console.log(x)      // output 20
// <-----------------------------------------------End------------------------------------------------>
// string operators
// let msg: string = "Hello" + " " + "world";
// console.log(msg)
// <-----------------------------------------------End------------------------------------------------>
var fname = "100";
var lname = "100";
console.log(+fname + +lname);
