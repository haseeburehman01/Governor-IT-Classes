"use strict";
// import {add, sub} from './first.js'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// let result = add(5,10)
// console.log(result);
// let result2 = sub(15, 6)
// console.log(result2);
const first_1 = __importDefault(require("./first"));
let result = first_1.default.add(5, 10);
let result1 = first_1.default.sub(10, 5);
console.log(result);
console.log(result1);
