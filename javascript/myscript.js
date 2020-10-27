// User wants to print numbers 1 to 100.
// Numbers divisible by 3 will read FIZZ,those divisible by 5 will read BUZZ

// print numbers 1 to 100 defining those divisible for 3 and 5

var numero = "";

for (var i = 1; i <= 100; i++) {

 if (i % 3 === 0 && i % 5 === 0) {
   console.log("FizzBuzz");
   numero = numero + "<li>" + "FizzBuzz" + "</li>";
 } else if (i % 5 === 0) {
   console.log("Buzz");
   numero = numero + "<li>" + "Buzz" + "</li>";
 } else if (i % 3 === 0) {
   console.log("Fizz");
   numero = numero + "<li>" + "Fizz" + "</li>";
 } else {
   console.log(i);
   numero = numero + "<li>" + i + "</li>";
 }

}

// html output
document.getElementById('output').innerHTML = numero;
