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
