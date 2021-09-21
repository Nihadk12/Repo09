function myFunction(myParameter) {
    if(myParameter === true) {
        return "The parameter is true!";
    }else {
        return "The parameter is false!";
    }
}

console.log(myFunction(true));
console.log(myFunction(false));

module.exports = myFunction;