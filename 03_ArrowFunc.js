// ++++++++++++++++++  Arrow functions + Extra Investigation  +++++++++++++++++++++



// Understanding  "this."  in JS . "this is used to access current context inside specific portion "
 
const signUpData = {
    userName:  "Abdullah Developer",
    welcomeMessage: function welcomeUser() {
        return console.log(`Hi ${this.userName}, you are welcomed here`);
        console.log(this);  // this will give the above objects

    }
}

signUpData.welcomeMessage(); 
console.log(this); //  this will give us an empty object, beacuse there is nothing 


// ******************** Arrow Function **********************
// Here Below is the simple Arrow Function
const myData = () => {
    let myFirstName = "Abdullah";
    let myLastName  = "Developer";
    return `${myFirstName} ${myLastName}`;
}
console.log(myData());