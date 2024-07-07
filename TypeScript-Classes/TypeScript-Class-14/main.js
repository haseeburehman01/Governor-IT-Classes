// Tuple ===> tuples ak array ha jisma hum array ki value define krta hain 
// Enums ===> by default enums jo ha phali value ko 0 sa define krta ha 
//  Union Types ===> wo type ha jo ak variable ko two type assgin krta ha 
// Type Aliases and Interfaces
// Basic Generics
// REST PARAMETOR
// global excution context 
// function excution context
var ul = document.querySelector('ul');
function data() {
    var username = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        username[_i] = arguments[_i];
    }
    console.log(username);
    username.map(function (item) {
        console.log(item);
    });
}
data('haseeb', 'shoaib', 'razaq');
// TUPLES
var tuple = ['haseeb', 17, true];
console.log(tuple);
var tuples = ['haseeb', 17, 'khalid', 50, 'shoaib'];
var OurTupples = ['haseeb ur rehman', 17, true];
console.log(OurTupples);
