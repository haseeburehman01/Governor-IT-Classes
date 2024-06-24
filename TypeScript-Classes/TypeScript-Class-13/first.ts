// EXPORT krna ka liya first ma export laga na ha 

// export function add(a:number, b:number):number{
//     return a + b
// }

// export function sub(a:number , b:number):number {
//     return a - b
// }


function add(a: number, b: number): number {
    return a + b
}

function sub(a: number, b: number): number {
    return a - b
}

let data = {
    add,
    sub
}

export default data