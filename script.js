console.log("Hello Party People!")

// Setting user input
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// A for loop to make the number count up to the answer the user inputed
for (let i = 1; i <= answer; i++) {
    if ( i % 3 && i % 5 === 0) {
        console.log("FizzBuzz");
    }   else if ( i % 3 === 0) {
        console.log("Fizz");
    }   else if ( i % 5 === 0) {
        console.log("Buzz");
    }   else {
        console.log(i)
    }
}

// The above loop is functioning
// Now for the Fizz part - It was saying undefined for Fizz but I did not make it a string initially




