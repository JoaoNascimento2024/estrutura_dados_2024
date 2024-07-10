//Criação de arrays no JS
const array1 = [];
const array2 = new Array();
const array3 = [1,2,3,4,5];
const array4 = new Array(1,2,3,4,5);
const array5 = new Array(6); //Cria um array com 6 undefined
const array6 = Array.of(1,2,3,4,5,6);
const array7 = new Array(5).fill(0); //Cria array com 5 elementos de valor Zero

//Inserção de elementos
array1.push(12); //Insere elemento(s) no final do array
array1.unshift(4); //Insere elemento(s) no início do arary
array1.unshift(1); //Insere elemento(s) no início do arary
console.log(array1);

//Remoção de elementos
array1.pop(); //Retira um elemento no final do array
array1.shift(); //Retira um elemento no início do array
console.log(array1);

//Concatenação
const array8 = array3.concat(array1);
console.log(array8);

//Junção
console.log(array8.join("****"));

//Split
const array9 = "1,2,3,4,5,6,7,8".split(",");
const array10 = array9.map(Number);
console.log(array9);
console.log(array10);

console.log("1#2#3".split("#").map(Number))

const array11 = array10.slice(0,7);
console.log(array10);
console.log(array11);