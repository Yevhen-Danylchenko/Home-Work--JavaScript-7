// =================== Завдання 1 ========================

// const minNumb = (a, b) => {
//     if (a < b) {
//         console.log(a);
//     }

//     else if (a > b) {
//         console.log(b);
//     }
// }

// minNumb(3,5);

// ====================== Завдання 2 ====================

// let i;

// const numb = (a,b) => {
//     i = Math.pow(a,b);
//     console.log(i);
// }

// numb(2,2);

// ======================== Завдання 3 =======================

// const numb = (a,b) => {
//     let score = prompt('Введіть дію з числами:');
//     switch(score){
//         case '+':{
//             console.log(a+b);
//             break;
//         }
//         case '-':{
//             console.log(a-b);
//             break;
//         }
//         case '*':{
//             console.log(a*b);
//             break;
//         }
//         case '/':{
//             if(b!=0){
//             console.log(a/b);
//             break;
//             }
//             else {
//                 console.log('Ділити на нуль не можна!');
// break;
//             }
//         }
//         default:
//             console.log('Некорректно введена дія!');
//     }
// }

// numb(4,3);

// ======================= Завдання 4 ========================

// const numb = (a) => {
//     for(let i = 2; i < a; i++){
//     if (a % i == 0){
//         console.log('Число не є простим.');
//         break;
//     }
//     else {
//         console.log('Число просте.');
//         break;
//     }
//     }
// }

// numb(7);

// ======================= Завдання 5 ==========================


// const numb = (a) => {
//     for(let i = 0; i <= 9; i++){
//         console.log(`${a}*${i} = ${a*i}`);
//     }
// }

// numb(1);
// numb(2);
// numb(3);
// numb(4);
// numb(5);
// numb(6);
// numb(7);
// numb(8);
// numb(9);

// ====================== Завдання 6 =======================

// const numb = (a, b) => {
//     if (b != 0) {
//         let index = a / b;
//         index1 = Math.floor(index);
//         let i = index - index1;
//         console.log(i);
//     }
//     else {
//         console.log('Ділити на нуль не можна!');
//     }
// }

// numb(5,3);


// ===================== Завдання 7 ================================


// const sumNumb = (...arr) => {
//     let sum = arr.reduce((total, arr) => total + arr, 0);
//     console.log(sum);
// }

// sumNumb(1,2,3);

// ========================= Завдання 8 ===============================

// const maxNumb = (...arr) => {
//     let sum = Math.max.apply(null, arr);
//     console.log(sum);
// }

// maxNumb(1,2,3,-3);


