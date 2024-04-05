var personName = "Haseeb Ur Rehman";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
