"use strict";
//  ARRAY METHODS
Object.defineProperty(exports, "__esModule", { value: true });
// .Map() map jo ha array retrun krta ha.
//.forEach() jo ha kuch bhi retrun hi nahi krta
// .split() string ko array ma krta ha. 
// Object 
// Object 2 tarika sa acces kr skhta hain with . and []
// let names = ['haseeb', 'shohaib', 'Jawad', 'asad']
// let procesName = names.map((name :string) => console.log(name)
// )
// console.log(procesName);
// let abs = 'haseeb ur rehmna'
// console.log(abs.length);
// let arr = ['haseeb', 'khan',['rohan', 'asharib',['shoahaib']]]
// console.log(arr.flat(Infinity));
let obj = {
    name: 'haseeb',
    'father.name': 'Kamran Ahmed',
    phone: 1123482,
    Qulification: {
        result: '10th',
        class: 10
    }
};
console.log(obj);
// // console.log(obj["father.name"]);
// let studentName = obj
// console.log(studentName);
