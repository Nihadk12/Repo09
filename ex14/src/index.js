function myForLoop1() {
   var evenNumbers = "";

    for (i = 0; i <=8 ;i+=2) {
        if(i < 8){
        evenNumbers += i +", " ;
        }else {
            evenNumbers += i +"" ;
        }
    }
    return evenNumbers;
}

function myForLoop2(){
    var evenInverseNumbers = "";

    for(j=8; j>=0; j-=2){
        if(j>0){
            evenInverseNumbers += j + ", ";
        }else{
            evenInverseNumbers += j + "" ;
        }
    }
    
    return evenInverseNumbers;

}

console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2    
};