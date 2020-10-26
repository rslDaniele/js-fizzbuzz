// User wants to print numbers 1 to 100.
// Numbers divisible by 3 will read FIZZ,those divisible by 5 will read BUZZ

// print numbers 1 to 100

for (var i = 1; i <= 100; i++) {
 console.log(i);
 document.write(i);
 if (i % 3 === 0) {
   document.write("Fizz")

 }else if (i % 5 === 0) {
   document.write("Buzz")
 }
}
