//part-1
//1
function welcome (){
    console.log("Welcome to Javascript")

}
welcome();

//2
function student (name,age,city){
    console.log(name);
    console.log(age);
    console.log(city);
}
student("anitha",22,"chennai");

//3
function addition(a,b){
    console.log(a+b);
}
addition(10,40);

//4
function calculator(a,b){
    console.log(a+b);
    console.log(a-b);

}
calculator(20,15);

//5
function company(){
    console.log("Welcome to Stackly");

}
company();

//6
function multiplication(a,b){
    console.log(a*b);

}
multiplication(2,3);

//7
function greeting(){
    console.log("Happy Birthday");
    
}
greeting();
greeting();
greeting();

//PART_2
//8
function addition(a,b){
    console.log(a+b);
}
addition(9,3);

//9
function three(a,b,c){
    console.log(a,b,c)
}
three(1,2,3)

//10
function employeeDetails(name, sal){
    console.log(name, sal)
}

employeeDetails("Anitha", 40000)

//11
function threeMul(a,b,c){
    console.log(a*b*c)
}

threeMul(2,3,6)

//12
function welcomeEmployee(name){
    console.log(`Welcome ${name}`)
}

welcomeEmployee("Anitha")

//13
function take3(a,b,c){
    console.log(a,b,c)
}

take3(1,2)

//14
function take2(a,b){
    console.log(a,b)
}

take2(1,2,3)

//PART 3
//15
function addtwo(a,b){
    return a+b
}
console.log(addtwo(14,5))

//16
function subtwo(a,b){
    return a-b
}
console.log(subtwo(14,5))

//17
function multwo(a,b){
    return a*b
}

var mulres = multwo(5,6)
console.log(mulres)

//18
function getAge(yob){
    return 2026-yob
}

console.log(getAge(2004))

//19
function div(a,b){
    return (a/b)
}

console.log(div(10,2))

//20
function retAddFive(a){
    return a+5
}
var x = retAddFive(10)
function print(a){
    console.log(a)
}
print(x)


//Part 4
//21
{
    var inBlock = 100
}
console.log(inBlock)

//22
{
    let letVar = 1
}
// console.log(letVar)  //error


//23
{
    const cVar = 1
}
// console.log(cVar)  //error


//24
function myFun(){
    var inFunVar = 50
}

myFun()
// console.log(inFunVar)  //error


//25
var newVar
console.log(newVar)
newVar = "variable"

//26
let letVariable
console.log(letVariable)
// const constVariable   //must be initialized when declared
// console.log(constVariable)

//Part 5
//27
function printName(name){
    console.log(name)
}

printName("Anitha")

//28

var anymPrintName = function(name){
    console.log(name)
}

anymPrintName("Ani")

//29
var arrAdd = (a,b) => {
    console.log(a+b) 
}

arrAdd(10,20)

//30
function namedSub(a,b){
    console.log(a-b)
}
namedSub(4,3)

var anymMul = function(a,b){
    console.log(a*b)
}
anymMul(9,9)

const arrDiv = (a,b) => {
    console.log(a/b)
}
arrDiv(8,4)