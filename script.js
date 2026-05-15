// var myNumber = "32"
// console.log(typeof myNumber);
// console.log(typeof +myNumber);

// var myname = "tanvir";
// if (myname){
//     console.log("its a true");
    
// } else{
//     console.log("its a false");
// }

// const str = ("tanvir " +"hasan");
// console.log(str);


// var fsds= 51;

// console.log(10<fsds); 

// var a= 10;
// var b= 20;  

// console.log (a>b || a<b);


// var age = 22;
// var drivinglicence = true;



// if (age >= 18 && drivinglicence) {
//     console.log("You are eligible to drive.");
// }
// else {
//     console.log("You are not eligible to drive.");
// }



// var age = 17;
// var result = age >= 18 ? "You are eligible to drive." : "You are not eligible to drive.";
// console.log(result);




// var mark = 35;

// var result = mark >= 60 ? "Pass" : "Fail";

// console.log(result);


// console.log(typeof ("5" - 3));


// temp = 30;
// if (temp > 30) {
//     console.log("It's a hot day.");
// }
// else if (temp > 20 && temp <= 30) {
//     console.log("It's a warm day.");
// }
// else {
//     console.log("It's a cold day.");
// }



// temp = 30;
// if( temp >35){
//     console.log("go");
    
// }
// else if (temp > 20 && temp <= 35){
//     console.log("go to school");
// }
// else{
//     console.log("stay at home");
// }




//! Question: if the peroson is 18 years or older , a citizen and a registeged voter, display a msg saying they eligible to vote.

// !if the person is is younger than 18, display a msg saying they are not eligible to vote.
//!if the person is 18 years or older but not a citizen, display a msg saying they are not eligible to vote because they are not a citizen.
//! if the person is 18 years or older and a citizen but not a registered voter, display a msg saying they are not eligible to vote because they are not a registered voter.

// Ans:

// var age = 22;
// var citizen = true;
// var registeredVoter = false;


// if (age >= 18){
//     if (citizen){
//         if (registeredVoter){
//             console.log("You are eligible to vote.");
//         }
//         else{
//             console.log("you are not eligible to vote because you are not a registered voter");
//         }
//     }
//     else{
//         console.log("You are not eligible to vote because you are not a citizen.");
//     }
// }
// else {
//     console.log("You are not eligible to vote.");
//  }



//!check if a number is even or odd:

// var num =10;

// if (num % 2 === 0){
//     console.log( num + "  is even  number.");
// }
// else{
//     console.log(num + "  is odd  number.");
// }


// if (num % 2 === 0){
//     console.log( num + "  is even a number.");
// }





//! switch statement:




//? var day = "Friday";

//? switch (day) {
//?     case "Monday":
//?     console.log("Today is Monday.");
//?    break;

//?     case "Tuesday":
//?     console.log("Today is Tuesday.");
//?     break;

//?     default:
//?     console.log("Today is not Monday or Tuesday.");






//!Q:write a javascript switch statement that takes a variable areaofshapes representing different shapes (e.g., "circle", "square", "rectangle") and calculates the area based on the shape type. Assume you have the necessary dimensions for each shape (e.g., radius for circle, side length for square, length and width for rectangle). ensure that the correct area (25 in this casse) is logged tho the console.


//? ans:

// var areaofshapes = "square";

// var a = 5;
// var b = 10;
// var area;

// switch (areaofshapes) {
//     case "circle":
//         var radius = 2;
//         var area = 3.14116 *( radius * radius);
//         console.log("Area of the circle: " + area.toFixed(2));
//         break; 


//         case "square":
//             var side = a;
//             var area = side * side;
//             console.log("Area of the square: " + area);
//             break;

//             case "rectangle":
//                 var length = a;
//                 var width = b;
//                 var area = length * width;
//                 console.log("Area of the rectangle: " + area);
//                 break;

//                 default:
//                     console.log("sorry the shape is not available")

//     }






//! while loop

    // var a=5;
    // var b=10;
    // while (a<=b){
    //     console.log( a)
    //     a++;
    // }



//! do while loop


    // let a=5;
    // let b=10;
    // do {
    //     console.log(a);
    //     a++;
    // } while (a <= b);


//! for loop

    // for (let i = 1; i <= 10; i++) {
    //     console.log( "5 * " + i + " = " + (i * 5) );
    // }



//!  took a number input from the user and keep asking until they enter a valid positive number. once they enter a valid number, display a message confirming that they entered a valid number.

// let userinput;
// let posiivenum;
// do {
//     userinput =prompt(enter any positive numher )
//     positivenum =parseFloat(userinput)
// }while {isNaN(positivenum)|| positivenum<0}
// console.log(you enter a valid Number);




// let i =1
// for(i=1 ; i<=10; i==)
// {console,log(i+i++)}

 
//! sum of 1 to 10:


//  var sum = 0;  
//  for ( let i =1; i<=10; i++)
//  { sum= sum +i;

//  }
//  console.log(sum);

 

//   debugger;
//  let count = 0;
//  for (let num = 2; count < 10; num++) {
//      let isPrime = true;
//      for (let i = 2; i < num; i++) {
//          if (num % i === 0) {
//              isPrime = false;
//              break;
//          }
//      }
//      if (isPrime) {
//          console.log(num);
//          count++;
//      }
//  }

let num = 10;       
let isPrime = true;    

for ( let i =2 ; i<num; i++){
  if (num % i === 0){
    isPrime = false;
    break;
  }
}
if (isPrime){
  console.log(num + " is a prime number.");
}
else{
    console.log(num + " is not a prime number.");
}