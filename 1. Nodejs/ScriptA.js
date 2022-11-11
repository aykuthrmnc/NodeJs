// global

// globalThis.setTimeout(() => {
//     console.log("Aykut");
// }, 2000);
// console.log(global);

// -----------------------------------
// module

// private
let age = 30;
// public
let firstName = "Aykut";
let log = (name) => console.log(name);

// module.exports.name = firstName;
// module.exports.log = log;
module.exports = {
    firstName,
    log
}