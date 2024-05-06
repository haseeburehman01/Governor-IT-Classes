"use strict";

const pointMap = {
    "green": 5,
    "yellow": 10,
    "red": 15
};
const points = pointMap[alienColor];
if (points !== undefined) {
    console.log(`The player earned ${points} points.`);
}
else {
    console.log("Unknown alien color."); // If not Filled t ye chalega.
}
