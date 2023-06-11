'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };
// const account5 = {
//   owner: 'Shreya Gupta',
//   movements: [500,1000,200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 5555 ,
// };
// const accounts = [account1, account2, account3, account4,account5];

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];


// Elements
const labelWelcome = document.querySelector('.welcome'); 
const labelDate =document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value'); 
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest =document.querySelector('.summary__value--interest');
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




  containerMovements.innerHTML=' ';
const displayMovement = function(acc){
  //. innerHTML removes all the elemet of that html container 
  // like we did in .textContent = 0 in previos game to alter number 
  //here we delete all the before html 

  acc.movements.forEach(function(mov , ind){
    const type  = mov>0?'deposit':'withdrawal';
    const html =
    `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${ind+1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    </div>
    `

    containerMovements.insertAdjacentHTML('afterbegin',html);
    //insertAdjacentHTML is used to insert html element and 
    // afterBegin is used insertElement at the starting 
  })

}


const calcPrintBalance = function(acc){
  const balance =  acc.movements.reduce(function(I,curr){
      return I+curr;
  },0)


labelBalance.textContent=`${balance}€
`
}


//userName 

const createUserName = function(accs){
  accs.forEach(function(it){
    console.log(it);
   it.username = it.owner
      .toLowerCase()
      .split(' ')
      .map(function(i){return i[0]})
      .join('');
      console.log(accs.username);
  });
};

createUserName(accounts);


//code for total sum in 
const calcDisplaySummary = function(acc){
  const income = acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
  const outcome = acc.movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0);
  const interestRate = acc.movements.filter(mov=>mov>0)
                                .map(mov=>(mov*acc.interestRate)/100)
                                .filter(mov=> mov>=1)
                                .reduce((acc,mov)=>acc+mov,0);
  labelSumIn.textContent=`${income}€`;
  labelSumOut.textContent=`${-outcome}€`;
  labelSumInterest.textContent=`${interestRate}€`;

}

//implemention current date

const currentDate = function(){
  const currDay =new Date();
  const currdate = currDay.getDate();
  const currMonth = currDay.getMonth();
  const currYear = currDay.getFullYear();
  let now = currdate+'/'+currMonth+'/'+currYear;
  labelDate.textContent =  now;
  console.log(now);  
};

currentDate();
//implementing Login
let currentAccount ; 
btnLogin.addEventListener('click', function(e){
    e.preventDefault();
    currentAccount = accounts.find(acc=> acc.username ===inputLoginUsername.value);
    if(currentAccount && currentAccount.pin==Number(inputLoginPin.value)){

      console.log(currentAccount);  
      calcDisplaySummary(currentAccount);
      calcPrintBalance(currentAccount);
      displayMovement(currentAccount);

      containerApp.style.opacity= 1 ;
      labelWelcome.textContent=`Welcome Back !  ${currentAccount.owner.split(' ')[0]}`
      inputLoginPin.value=inputLoginUsername.value='';
      inputLoginPin.blur();


       btnTransfer.addEventListener('click',function(e){
          console.log('hello');
        e.preventDefault();
        const tansferTo =accounts.find(acc=>acc.username===inputTransferTo.value&&acc.username!==currentAccount.username) ; 
        const  amount = Number(inputTransferAmount.value);
        console.log(tansferTo);
        console.log(amount);
        const  currUserBalance = Number(labelBalance.textContent.slice(0,labelBalance.textContent.length-2));
        console.log("userbalance",currUserBalance);
        if( tansferTo&& currUserBalance>=amount ){
          console.log('Transfered');
          currentAccount.movements.push(-amount);
          console.log(currentAccount);
          calcDisplaySummary(currentAccount);
          calcPrintBalance(currentAccount);
          displayMovement(currentAccount);
          tansferTo.movements.push(amount); 
        }
     })

       btnLoan.addEventListener('click',function(e){
        e.preventDefault();
        
        setTimeout(function () {
          const requestedAmmount= Number(inputLoanAmount.value);
        console.log('Transfered');
        currentAccount.movements.push(requestedAmmount);
        calcDisplaySummary(currentAccount);
        calcPrintBalance(currentAccount);
        displayMovement(currentAccount);
        inputLoanAmount.value= ' ';
        },3000);

       })

        

        btnClose.addEventListener('click',function(e){
          e.preventDefault();
          const closeUser =inputCloseUsername.value;
          const closeUserPin =Number(inputClosePin.value);
          if(currentAccount.username===closeUser && closeUserPin ===currentAccount.pin){
            let index = -1 ;
            accounts.forEach(function(i,ind,arr){
              if(currentAccount=== i ){
                index = ind ;
              }
            })
            accounts  .splice(index, 1); 
            console.log(accounts);
            containerApp.style.opacity= 0 ;
            labelWelcome.textContent=`Log in to get starte`;
          }
        })
    
        let invi = 0 ;
        btnSort.addEventListener('click',function(e){
          e.preventDefault();
          console.log('sorted')
          if(invi){
                   currentAccount.movements.sort((a, b) => a - b);
                    invi= 0 ;
                  }
          else{
            currentAccount.movements.sort((a, b) => b - a);
            invi = 1 ;
          }
          
          containerMovements.innerHTML=' '; 
          displayMovement(currentAccount);  

          })

    }
    

})

console.log(createUserName)




/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*NUMBER DATES AND TIMES */
console.log('/*NUMBER DATES AND TIMES */')

console.log(23===23.0); // all numbers are floting point number 
console.log(0.1+0.2); //0.30000000000000004
//so o.1 +0.2 != 0.3 

//parsing 
console.log(Number.parseInt('30px',)); // used to give number 
console.log(Number.parseFloat('3.55px',)); // used to give number 
console.log(Number.isNaN(20)); //false
console.log("Nan",Number.isNaN(30/0)); //false
// NUmber.isFinite(n: double);
// Number.isInteger();

//BIG INT 
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991




// creating date 

const  date = new Date();
console.log(date);

console.log(new Date(account1.movementsDates[0]));

console.log(new Date('Year','MOnth' ,'hrs','min','ss'));

// Tue Nov 19 2019 03:01:17 GMT+0530 (India Standard Time)

//working with dates

const future = new Date(2037,10,19,15,23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // chages to string 
console.log(future.getTime()); 


//making use of set Interval to make a clock 

setInterval(function(){
  const now  = new Date();
  let time = `${ ((now.getHours()>=0 &&  now.getHours() <=9)?( "0"+now.getHours()) : now.getHours()) }:${ ((now.getMinutes()>=0 &&  now.getMinutes() <=9)?( "0"+now.getMinutes()) : now.getMinutes()) }:${ ((now.getSeconds()>=0 &&  now.getSeconds() <=9)?( "0"+now.getSeconds()) : now.getSeconds()) }`;
  document.querySelector('.center_div').textContent = time ;
},90);


console.log('/*NUMBER DATES AND TIMES ENDS */')

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
//Find method in array 

const firstWithdrawal = account1.movements.find(mov=>mov<0);
console.log(firstWithdrawal);

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

const euroToUsd = 1.1;
const tot=account1.movements.filter(mov => mov>0).map(mov=>euroToUsd*mov ).reduce((acc,mov)=>acc+mov,0);
console.log(tot);

/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
//maxValue in the movement array 
/*
const maxVal =  account1.movements.reduce(function(acc,curr){
  if(curr>acc)
    acc=curr;
  return acc;
  },0)

console.log(maxVal);
*/



//computing username in bankist 


// let UserName ="";
//   const arr = user.toLowerCase().split(" ");
//   arr.forEach(function(i){
//     UserName=UserName+i.charAt(0);

//   })

/*
const createUserName = function(user){
  const UserName = user
      .toLowerCase()
      .split(' ')
      .map(function(i){return i[0]})
      .join('');
  return UserName;
  console.log(UserName);
};
*/

/*FILTER METHOD */

const deposit = account1.movements.filter(
  function(mov){
  return  mov>0;
  }
);
const withdrawal = account1.movements.filter(
  function(mov){
  return  mov<0;
  }
);
console.log(withdrawal);
console.log(deposit);

console.log('--filter--ends--')


/*REDUCE METHOD */
//accumulator is like a snow ball
const balance =  account1.movements.reduce(function(acc,curr,i, arr){
  return acc+curr;
},0);
console.log(balance); 




/*
Codin Challenge 1 WoRKinG wItH aRRaY 

function removeCat(arr){
    let newarr =arr;
    newarr=newarr.slice(1,arr.length-2); 
    return newarr;
}

let arr1 =[3,5,2,12,7];
let arr2 =[4,1,11,34,3243,15,8,3];

arr1 =removeCat(arr1);
arr2 =removeCat(arr2);


let onlyDogs = [...arr1,...arr2];
console.log(onlyDogs);

onlyDogs.forEach(function(dog,num){
    if(dog>=3)
    console.log(`Dog Number ${num+1} is and adult and is ${dog}`);
    else
    console.log(`Dog Number ${num+1} is still a puppy and is  ${dog} year old `);

})


*/

/*-------------------DATA TRANSFORMATION---------------------------------------*/
  /*
MAP ==> MAP RETURNS A NEW ARRAY CONTAINING THE RESULT OF APPLING AN OPERATION ON ORIGINAL ARRAY ELEMENT 

FILTER ==> fILTER RETURNA  A NEW ARRAY CONTAINING THE ARRAY ELEMENTS THAT PASSED A SPECIFIEDN TEST CONDITION

REDUCE => REDUCE BOILS ALL THE ELEMENTS DOWN TO SINGLE VALUE ACC+CURRENT GIVES  A SINGLE SUM 
*/

/*
MAP METHOD 

before - 2 ,3,4 5 6 7 

all element *2
after - 4 6  8 10 12 14 
*/

const movements = [1,2,3,4,5,6];
const euro = 1.1;

const EuroMOvements = movements.map(function(i){
  return i*euro;
  // It doesnt change the movement 
  //this return a new array that will alter the data in movements 
})
console.log("initial",movements);
console.log("returned",EuroMOvements)
// [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6
// ]
// [
//     1.1,
//     2.2,
//     3.3000000000000003,
//     4.4,
//     5.5,
//     6.6000000000000005
// ]