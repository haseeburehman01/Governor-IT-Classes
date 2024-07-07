// Tuple ===> tuples ak array ha jisma hum array ki value define krta hain 
// Enums ===> by default enums jo ha phali value ko 0 sa define krta ha 
//  Union Types ===> wo type ha jo ak variable ko two type assgin krta ha 

// Type Aliases and Interfaces
// Basic Generics
// REST PARAMETOR


// global excution context 
// function excution context

let ul = document.querySelector('ul')

function data(...username: string[]){
    console.log(username);
    username.map(item => {
        console.log(item);
    })
}
data('haseeb', 'shoaib', 'razaq')

// TUPLES
let tuple: [string, number, boolean] = ['haseeb', 17, true]
console.log(tuple);

let tuples :(string|number|boolean)[] = ['haseeb', 17, 'khalid', 50, 'shoaib']

let OurTupples : [string , number ,boolean] = ['haseeb ur rehman', 17, true]
console.log(OurTupples);
