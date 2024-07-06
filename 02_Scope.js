// ********************   Scope   ************************
 
// There are three ways of declaring variables  const, Let and Var . 
// let, const are blocked scope , means they work in a specific portion of code inside one block
// while var is a Global scope, means it can work in whole file of that coding

const one = 10;
let Two = 100;
var Three = 1000;

if (true) {
    const one = 20;
    let Two = 200;
    var Three = 2000;

    console.log("Inner 1", one);
    console.log("Inner 2", Two);
    console.log("Inner 3", Three);

}

console.log("External 1", one);
console.log("External 2", Two);
console.log("External 3", Three);

// In the above example let, const of both the internal and external don,t clash with eachother as they,re blocked scope but values of Var clash due to Global Scope



//   Nested or closure scopes
 
function parentFunction(a,b) {
    let userName = "Abdullah Developer";
    
    function childFunction(c,d) {
        let userEmail = "abdullah@google.com";
        console.log(userName);
    }
    //console.log(userEmail);  // here you,ll get error, because parent can,t access the child values while child can

    childFunction();
}

parentFunction();

// In above function child is able to access the parent,s data but parent isn,t
// Just Remember it like: Elders can,t ask for something from youngers but youngers can ask


//  +++++++++++++++++++++  Interesting Fact  +++++++++++++++++++

console.log(squreOfNums1(5));  // in this case, Accessing the func1 before intilization is allowed

function squreOfNums1(num) {
    return num * num;
}


console.log(squreOfNums2(10));  // here you,ll get error, beacuse we Cannot access 'squreOfNums2' before initialization

const squreOfNums2 = function (num) {
    return num * num;
}
