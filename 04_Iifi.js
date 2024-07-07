// ++++++++++++++++++   IIFI Concept   ++++++++++++++++++++++

// IIFI  is used to call any function  immediatly after it,s made


// Un-Named IIFI
((city) => {
    console.log(`I am from ${city}`);
})("Lahore");

// Here in the above example we just enclosse the whole function in paranthesis and at the end of that again  paranthesis for making an IIFI



// Named IIFI
(function myInfo(Name) {
    console.log(`My Name is ${Name}`);
})("Abdullah Developer")


