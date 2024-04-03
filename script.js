// // Declare and callng function

// function myFunction () {
//     console.log ("hi");
//     console.log ("i am learning function");
// }

// myFunction(); 
// myFunction();




// // passing peramiter in function

// function myFunction (msg, n) {
//     console.log (msg, n);
// }

// myFunction("i love JS", 100); 
// myFunction("i love Nawshin");
// // function er moddhe jeta jay oita peramatre, ar function call er moddhe jeta jay oita ke argument bole



// // function 2 number, sum
// function sum (x, y, z) {
//         console.log (x+y+z);
// }

// // using return
// function sum (x,y) {
//     s=x+y;
//     return s;
// }
// // return diye string, array, object sob return korano jay, kintu ekbar e, eksathe onk kichu na
// // console diye dekhte hobe




// function sum (x,y) {
//     s=x+y;
//     console.log("before return");
//     return s;
//     console.log("after return"); //return jeta korbe erpor kichu print hobe na ejonno eta odrissho
// }
//     // x,y hocche local variable, eigula sudhu {} etar moddhei jibito thakbe, er baire print dile undefined ekhabe, nche example
// let val= sum(2,3);
// // console.log(x); // eta example
// console.log(val);





// // arrow functons
// function sum(a,b){
//     return a+b;
// }

// const arrowSum= (a,b) =>{
//     //console.log(a+b);
//     return a+b;
// }
// // arrow function use kore evabe kora jay
// // ekahne arrowSum ekta variable, etar moddhe just value ta rakha



// function multiplication(a,b){
//     return a*b;
// }

// const arrowMul= (a,b) =>{
//     //console.log(a*b);
//     return a*b;
// }

// // arrow function use kore evabe kora jay
// // ekahne arrowMul ekta variable, etar moddhe just value ta rakha




// // NORMALLY VOWEL NUMBER PRINT KORA (using for of loop)
// function vowel(str){
//     let count=0;
//     for (let char of str){
//         if (
//             char==="a" || char==="e" || char==="i" || char==="o" || char==="u"
//         ){
//                     count++;
//                 }

//     }
//     return(count);
// }




// //ARRAY FUNCTION USE KORE VOWEL NUMBER PRINT KORA (using for of loop)
// function vowel(str){
//     let count=0;   
//     for (const char of str){
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// const finalStr= (str) => {
//      let count=0;   
//      for (const char of str){
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//             count++;
//         }
//     }
//     return count;
// }





// //NORMALLY VOWEL NUMBER PRINT KORA (using for loop)
// function vowel(str){
//     let count=0;
//     for (let i=0;i < str.length; i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
//         count++;
//     }
//    }
//     console.log(count);
// }




// // ARRAY FUNCTION USE KORE VOWEL NUMBER PRINT KORA (using for loop)
// function vowel(str){
//     let count=0;
//     for (let i=0;i < str.length; i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
//         count++;
//     }
//    }
//     console.log(count);
// }

// const finalStr= (str) => {
//     let count=0;
//     for (let i=0;i < str.length; i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
//         count++;
//     }
//    }
//     console.log(count);
// }




// CALL BACK FUNCTION-> eta ekta higher order function
// higher order function emn ekta function jeta onno ekta function ke use kore as paramiter, ba onno ekta function return kore 

let array=[1,2,3,4,5];

array.forEach (function functionName(val){
    console.log(val);
});
