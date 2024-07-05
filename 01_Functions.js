// *********************   Functions   ********************

// We use Functions, if we want to do some sort of task again and again. just like in the below examples


// Way# 1
function addTwoNums1(a,b) {
   console.log(a+b);
}

addTwoNums1(6,6);  // this func executes the sum of two numbers


// Way# 2
function addTwoNums2(a,b) {
    let result = a+b;
    return  result;
}

const result = addTwoNums2(67,6);
console.log("Result: ",result);


// way# 3 
function addTwoNums3(a,b) {
    return a+b;
}
const result2 = addTwoNums3(8,9);
console.log("Result2: ", result2 );


// Some other Basic concepts
function isUserLoggedIn(userName) {
    if (userName === undefined) {
        console.log("Please enter a valid userName");
        return
    }
    return `${userName} just logged in`
  
};

const userInfo = isUserLoggedIn("Abdullah Developer");
console.log(userInfo);



//  Functions in case of addingItemsToCart  , as here we don,t know that how many parameters can come, as user adds as many items as he/she wants

function addingItemsToCart(...item1) {
   return item1;
}
console.log(addingItemsToCart(220,450,567,654));

// in the above func, we use ...Rest operator, which can take infinite parameters



// Handling Objects inside Functions
const myShopInfo  = {
    name: "Abdullah,s Shop",
    Location: "Minar-e-Pakistan"
}

function myShop(myObject) {
     console.log(`${myObject.name} is located near ${myObject.Location} `);
}

myShop(myShopInfo);



// Handling Arrays inside Functions
const Prices = [200, 500, 150, 340, 562, 347];

function ArrayThirdValue(getValue) {
    return getValue[3];
}

 console.log(ArrayThirdValue(Prices));
