function switchCaseSequential (num) {
    var answer;

    switch (num) {
        case 1:
            answer = "Low";
            break;
        case 2:
            answer = "Low";
            break;
        case 3:
            answer = "Low";
            break;
        case 4:
            answer = "Mid";
            break;
        case 5:
            answer = "Mid";
            break;
        case 6:
            answer = "Mid";
            break;
        case 7:
            answer = "High";
            break;
        case 8:
            answer = "High";
            break;
        case 9:
            answer = "High";           
            break;
        default:
            break;
    }
    return answer;
}

console.log(switchCaseSequential(1));
console.log(switchCaseSequential(2));
console.log(switchCaseSequential(3));
console.log(switchCaseSequential(4));
console.log(switchCaseSequential(5));
console.log(switchCaseSequential(6));
console.log(switchCaseSequential(7));
console.log(switchCaseSequential(8));
console.log(switchCaseSequential(9));

module.exports = switchCaseSequential;


