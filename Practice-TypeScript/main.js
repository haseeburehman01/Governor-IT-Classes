"use strict";
// let isLogin = false;
// let checked :string = isLogin ? 'You are login' : 'First you login'
// console.log(checked);
// let email = 'example@gmail.com';
// let password = 'abcd1234'
// let islogined = false
// if (email && password){
//     islogined = true;
//     console.log('login ');
// }
// let dayName = 'monday'
// switch (dayName) {
//     case 'sunday':
//         console.log('You are in class ');
//         break
//     case 'monday':
//         console.log('khan ha bhai');
//         break
//         case 'tuesday':
//             console.log('ap ay nahi ho');
// }
// let halfHungry = function(){
//     console.log('hers is haseeb');
// }
// halfHungry()
// let productPrice = 1000;
// function store(){
//     let totalPrice = (productPrice - (productPrice / 100 * 10) )
//     let percentage = (productPrice / 100 * 10)
//     console.log(`Here is Your price ${totalPrice} & discount ${percentage}` );
// }
// store()
let productPrice = 1000;
function store() {
    let percentage = (productPrice / 100 * 10);
    let totalPrice = (productPrice - percentage);
    console.log(`Here is Your price ${totalPrice} & discount ${percentage}`);
}
store();
