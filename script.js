var names = ["John", "Jane", "Bob", , "Mike"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.push("Dominik");

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    if (names[i] == "Jane") {
        console.warn("Izlazim..");
    }
}
console.log("-----------");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
for (let i = 0; i < names.length; i++) {
    if (typeof names[i] === "undefined") {
        names.splice(i, 1);
    }
}
console.log("-----------");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
