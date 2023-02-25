// 1st Assignment-->
// var x = prompt("Enter a number");
//         var y = prompt("Enter another number");
//         if (x > y) {
//             alert(x + " is larger than " + y);
//         } else if (x < y) {
//             alert(y + " is larger than " + x);
//         } else {
//             alert(x + " is equal to " + y);
//         }

// var x = prompt("Enter first number");
// var y = prompt("Enter second number");
// var z = prompt("Enter third number")
// if (x * y * z < 0) {
//     alert("The sign is -");

// } else {
//     alert("the sign is +");
// }

/* 2nd assignment-Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. */

// var x = prompt("Enter a number");
// var y = prompt("Enter a number");
// var z = prompt("Enter a number");
// var product = x * y * z;
// if (product > 0) {
//     alert("The sign is +");
// } else if (product < 0) {
//     alert("The sign is -");
// } else {
//     alert("The sign is 0");
// }

// <-- 3rd assignment-->
/* Write a JavaScript conditional statement to sort three numbers. Display an alert box to insert the numbers and show the result. */
// var a = prompt("Enter a number");
// var b = prompt("Enter a number");
// var c = prompt("Enter a number");
// if (a > b && a > c) {
//   if (b > c) {
//     alert(a + ", " + b + ", " + c);
//   } else {
//     alert(a + ", " + c + ", " + b);
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     alert(b + ", " + a + ", " + c);
//   } else {
//     alert(b + ", " + c + ", " + a);
//   }
// } else if (c > a && c > b) {
//   if (a > b) {
//     alert(c + ", " + a + ", " + b);
//   } else {
//     alert(c + ", " + b + ", " + a);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
  


"row 4"
" 3"
" 10"
" 26"
" 7"

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (let i = 0; i < a.length; i++) {
  console.log("row " + i);
  for (let j = 0; j < a[i].length; j++) {
    console.log(" " + a[i][j]);
  }
} 


