//  ARRAY METHODS

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

// ======= OBJECT KI TYPE DESFIN KRANA KA TARIKA OR 
// =========== Anoymus data type
//==== type aliases

// type objectType = {
//     name :string,
//     'father.name': string,
//     phone:number,
//     Qulification: {
//         result:string
//         class :number
//     }
//     email:string
// }

// let obj :objectType = {
//     name : 'haseeb',
//     'father.name' : 'Kamran Ahmed',
//     phone : 1123482 ,
//     Qulification : {
//         result : '10th',
//         class: 10
//     },
//     email : 'askjdhasdf'
// }

// console.log(obj);

// // console.log(obj["father.name"]);
// let studentName = obj
// console.log(studentName);


type student1 = {
    name :string,
    fatherName :string,
    PhoneNumber :number
}

let addAllStuden = []

let studentName:student1 = {
    name: 'haseeb',
    fatherName: 'kamran',
    PhoneNumber: 9072839014
}

function addStudent(){
    console.log(addAllStuden.push(studentName));
}

addStudent()
