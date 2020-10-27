// User wants to print numbers 1 to 100.
// Numbers divisible by 3 will read FIZZ,those divisible by 5 will read BUZZ

// print numbers 1 to 100 defining those divisible for 3 and 5 

for (var i = 1; i <= 100; i++) {

 if (i % 3 === 0 && i % 5 === 0) {
   console.log("FizzBuzz");

 } else if (i % 5 === 0) {
   console.log("Buzz");

 } else if (i % 3 === 0) {
   console.log("Fizz");

 } else {
   console.log(i);
 }

}
