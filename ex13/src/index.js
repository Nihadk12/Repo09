function inverseWhile() {
    var fiveNumbers = "";
        i = 5;
    while (i >= 0) {
        if(i>0){
        fiveNumbers += i + ",";
        i-=1;
    }else {
        fiveNumbers += i + "";
        i-=1;
    }
    }

    return fiveNumbers ;
}

console.log(inverseWhile());
module.exports = inverseWhile;