"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    //*myFunction = 10;
    //*console.log(myFunction);
    //! myFunction = addNumber;
    //! console.log(myFunction(1,2))
    //? myFunction = greet;
    //? console.log(myFunction('David'))
    myFunction = saveTheWorld;
    console.log(myFunction());
})();