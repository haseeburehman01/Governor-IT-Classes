// Tuple ===> tuples ak array ha jisma hum array ki value define krta hain 
// Enums ===> by default enums jo ha phali value ko 0 sa define krta ha 
//  Union Types ===> wo type ha jo ak variable ko two type assgin krta ha 
// type aliases ===> ma modification ho sakhti ha .. type interface ma nahi ho sakhti 
// typescript excution pr
// Type Aliases and Interfaces
// Basic Generics
// REST PARAMETOR
// setTimeout(() => {
//     console.log('haseeb ur rehman');
// }, 2000)
var OurTuples = ['haseeb ===> TYPE TUPLES', false, 17];
console.log(OurTuples);
var typeUnion = ['haseeb ===> typeunion', 17, false];
console.log(typeUnion);
// leran promises by sir anus
// function createTea(tasktime: string, delay: number) {
//     let promise: Promise<void> = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(tasktime);
//             resolve()
//         }, delay)
//     })
//     return promise
// }
// createTea('haseeburrehmanjs@gmail.com', 2)
// let bankBalance = 10000
// function shadiPaki() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bankBalance > 20000) {
//                 console.log('shadi paki');
//                 resolve('then')
//             } else {
//                 console.log('abu nahi man raha');
//                 reject('catch')
//             }
//         }, 1000)
//     })
// }
// shadiPaki()
// .then(responce => {
//     console.log(responce);
// })
// .catch(error => {
//     console.log(error);
// })
var bankBalance = 200000;
function shadiPaki() {
    return new Promise(function (resolve, reject) {
        if (bankBalance >= 100000) {
            console.log('ami man gai');
            resolve('then');
        }
        else {
            console.log('abu nahi man raha hain');
            reject('catch');
        }
    });
}
shadiPaki()
    .then(function (reponce) {
    console.log(reponce);
})
    .catch(function (error) {
    console.log(error);
});
