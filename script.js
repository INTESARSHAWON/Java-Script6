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




// // CALL BACK FUNCTION-> eta ekta higher order function
// // higher order function emn ekta function jeta onno ekta function ke use kore as paramiter, ba onno ekta function return kore 

// let array=[1,2,3,4,5];

// array.forEach (function functionName(val){
//     console.log(val);
// });




//call back er array function
// let array=[1,2,3,4,5];

// array.forEach ((val) =>{
//     console.log(val);
// });



// //arrayr moddhe string thakleo for each eki kaj korbe
// let array=["shawon","nawshin","shawon","nawshin"];

// array.forEach ((val) =>{
//     console.log(val);
// });


//arrayr moddhe string thakleo for each eki kaj korbe, ekhan diye onno toUpperCase er moto function o call kora jabe,
// let array=["shawon","nawshin","shawon","nawshin"];
// array.forEach ((val) =>{
//     console.log(val.toUpperCase());
// });




// callback diye 3 ta jinish pass kora jay- value, index no and array
// let array=["shawon","nawshin","shawon","nawshin"];
// array.forEach ((val, index, array) =>{
//     console.log(val.toUpperCase(), index, array);
// });




// kono number er square print korano
// let array=[1,2,3,4,5,6];
// array.forEach ((val) =>{
//     console.log(val*val);
// });
//etar arekta process niche ache, duivabei kora jay

// let array=[1,2,3,4,5,6];
// let square= (val) =>{
//     console.log(val*val);
// };
// array.forEach (square);
// forEach() use kora hoy jekono calculation korar jonne, map() function use kora hoy notun kono array create korte hole




// map function map()
// let number=[21,22,23,24];

// let newArray= number.map((val)=>{
//     return val*2;
// });
// console.log(newArray);
// // forEach() use kora hoy jekono calculation korar jonne, map() function use kora hoy notun kono array create korte hole




// filter function filter()
// let number=[21,22,23,24,25,25,26,27,28,29,30];

// let newArray= number.filter((val)=>{
//     return val>=25;
// });
// console.log(newArray);
// // eta jekono kichu filter kore dey




// let number=[21,22,23,24,25,25,26,27,28,29,30];
// let oddArray= number.filter((val)=>{
//     return val%2==!0;
// });
// console.log(oddArray);




// reduce() etar kaj hocche input onkgula hote pare, output ektai hobe...avg..sum..eshob khetre
// let number=[20,25,20,25];
// let sumArray= number.reduce((preValue,crntVal)=>{
//     return preValue+crntVal;
// });
// console.log(sumArray);




let number=[5,5,5,5];
let sumArray= number.reduce((preValue,crntVal)=>{
    return preValue+crntVal;
});
let avgValue=sumArray/number.length
console.log(avgValue);







