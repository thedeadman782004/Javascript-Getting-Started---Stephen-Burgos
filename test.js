"use strict";
function sendOut(arg){
    document.write(" ");
    document.write(arg);
}
class numberObject{
    constructor(num1 = 1, num2 = 2, num3 = 3){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }
    set setNum1(num){this.num1 = num;}
    set setNum2(num){this.num2 = num;}
    set setNum3(num){this.num3 = num;}
    get getNum1(){return this.num1;}
    get getNum2(){return this.num2;}
    get getNum3(){return this.num3;}
}

sendOut("Hello, world!");
const [a,b,c] = [1,2,3];
sendOut(`${a} ${b} ${c}`);
try{
    a = 5;
}
catch (error){
    console.log(error);
}

const myNumbers = new numberObject(5,9,15);
console.log(`myNumbers objects: ${myNumbers.getNum1}, ${myNumbers.getNum2}, ${myNumbers.getNum3}.`);
