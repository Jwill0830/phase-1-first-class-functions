// receives a function called callback thius should accept a function - in this case a spy, what is a spy? asa a parameter and call it

function receivesAFunction(callBack) {
    callBack()
}

// this was coded because the test indicates that the function 'receives a function' should take another function as an argument adn then call it.
// given that the spy is passed in adn then checked to see if it has been called, the simplest implimentation of the callback function

// next is returns a named function
// this test expects that a function returns a function 'returnsANamedFunction' returns a function
// the returned function should have a name that we assign

function returnsANamedFunction() {
    return function namedFunction() {}
}

// this conclusion was arrived becasue the tests indicate that the function 'returns a named function' should return another function, and this returned a function should have a name. the most straightforward way to create a named function in  javascript is to give it a name between the function keyword and the parenthesis.

//this next test excpects that the function 'returnsAnAnonymousFunction' returns a function
// the returned function should not have a name, implying its an anonymous function

function returnsAnAnonymousFunction() {
    return function() {}
}
// this was arrived because the tests indicate that the function 'returnsAnAnonymousFunction' should return another function and this returned function should be anonymous. in JavaScript an anonymopus function is defined without a aname between the function and the keyword parenthesis.
// with all of these functions in place the  tests will pass.

