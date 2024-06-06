"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
function table(time) {
    for (let i = time; i <= time; i++) {
        // console.log(i)
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${j * i}`);
        }
    }
}
exports.table = table;
// table(9)
