"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr, ${guestList[i]}It is our pleasure to invite you in our party.\n\nThank You!\n\n`);
}
let absentGuest = 'Imran khan';
let newguest = 'Kamran Tessori';
guestList[0] = newguest;
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr. ${absentGuest} is not coming to the party.`);
