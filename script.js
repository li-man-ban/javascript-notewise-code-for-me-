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



// Question: if the peroson is 18 years or older , a citizen and a registeged voter, display a msg saying they eligible to vote.

// if the person is is younger than 18, display a msg saying they are not eligible to vote.
//if the person is 18 years or older but not a citizen, display a msg saying they are not eligible to vote because they are not a citizen.
// if the person is 18 years or older and a citizen but not a registered voter, display a msg saying they are not eligible to vote because they are not a registered voter.

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
// }



// check if a number is even or odd

var num =9;

if (num % 2 === 0){
    console.log( num + "  is even a number.");
}
else{
    console.log(num + "  is odd a number.");
}