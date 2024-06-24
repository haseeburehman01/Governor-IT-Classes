"use strict";
// EXPORT krna ka liya first ma export laga na ha 
Object.defineProperty(exports, "__esModule", { value: true });
// export function add(a:number, b:number):number{
//     return a + b
// }
// export function sub(a:number , b:number):number {
//     return a - b
// }
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
let data = {
    add,
    sub
};
exports.default = data;
