'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*Lecture 1 slice , splice , concat */

//slice doesnt changes the original array 

// .slice(startIndex_includes this , End_index_not_included);
let arr = ['a','b','c','d','e'];
console.log(arr.slice(2)); 
console.log(arr.slice(-2)); //gives d e start fron the back 
console.log(1,-2); //except last 2 

//Splice it changes the original array 

 console.log(arr.splice(2)); //=>will return c d e 

 //SPLICE   return the extracted array and changes the array 

//arr becomes => a , b 

//CONCAT
const arr2  =['j','h','f'];
 const letters = arr.concat(arr2);
console.log(letters);

//REVERSE

arr2.reverse();
console.log(arr2);


// JOINS  //return a string that joins the characters 
// a-b-j-h-f

console.log(letters.join('-'));


/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
// Looping over the arrays 



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
  //if we need counter method we use .entries ()

for(const [ind , it] of movements.entries()){
}

*/

/*
//for each method 
  
  array_name.forEach(function(_current elemenr_ , index ,array ) {
    
  });

*/

//for each method 
  movements.forEach(function(it) {
    console.log(it);
  });

//
movements.forEach(function(it,ind,arr) {
    console.log(ind,it);
  });

// 0 200
// 1 450
// 2 -400
// 3 3000
// 4 -650
// 5 -130
// 6 70
// 7 1300

//forEach In map

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key , map){
    console.log(value , key  );
})
// United States dollar USD
// Euro EUR
// Pound sterling GBP

//forEach In set

const currenciesUnique = new Set(['USD','INR','EURO']);
currenciesUnique.forEach(function(value){
  console.log(value);
}
  );
// USD
// script.js:163 INR
// script.js:163 EURO

/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/