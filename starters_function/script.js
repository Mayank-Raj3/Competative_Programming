'use strict';
const bookings=[];
// default can be set to any value 
// const createBooking = function(flightNum,numPassenger=1,price=199*numPassengers ){


// JAVASCRIPT DOESNOT HAVE PASS BY REFERENCE 
/*
=>>In JavaScript, all primitive data types (such as numbers, strings, booleans) are passed by value, 
	meaning that a copy of the value is passed to a function. However, 
	objects (including arrays and functions) are passed by reference. 
	This means that when you pass an object as an argument to a function, 
	you are actually passing a reference to the object in memory.

=>>When you modify the object inside the function, 
	the changes will be reflected outside the function as well because you are working with
	 the same 
	underlying object. 
*/

const createBooking = function(flightNum,numPassenger=1,price=199){
		const booking ={
			flightNum,
			numPassenger,
			price
		}
		console.log(booking);
		bookings.push(booking);
}
createBooking('Lh123');
createBooking('Lh123',2,800);
createBooking('Lh123',2,800);
createBooking('Lh123',undefined,1000);

console.log(bookings);
/*-----------------------------------------------------------------------------------------------------*/

const flight ='LH234';
const jonas ={
	name:'Josan Schmedtmann',
	passport:232323322323
};


const checkIn =function(flightNum,passnger){
	flightNum = 'Lh232';
	passnger.name = 'Mr.'+passnger.name; //since object are reference type so it will chaneg the orignal object also 
}

checkIn(flight,jonas);
console.log(flight);
console.log(jonas);

let flightNum=flight;
flightNum='chamged';//no effect on flight since primitive typr 
console.log(flight);


let newJonas = jonas;
newJonas.name='Mayank'; //this will change the main object 
console.log(jonas);

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
//first class funtion vs high order funtion
/*
			FIRST CLASS 
			-----------
==>Javascript function are sumplly values 
==>function are just  another tyor of object 
==>pass functio as argument to other function 
==> call method on function 
==>return function to another function 
*/

/*
			HIGH ORDER CLASS 
			----------------
==> A function that recueves another functon as an argument that return a new functio or both 
==> this is only possible because of first call function 
*/

//EXAMPLE 

const oneWord = function (str){
		 return str.replace(/ /g,' ').toLowerCase();
}

const upperFirstWord  = function (str){
		 const [first ,...other]=str.split(' ');
		 return [first.toUpperCase(),...other].join(' ');
}

const transfrom = function(str,fn){
	console.log(`oringinal String ${str}`);
	console.log(`Transfomed str ${fn(str)}`);
	console.log(`Transfomed by ${fn.name}`);
}

transfrom('Javascript is the best',upperFirstWord); // here we are just pass the value of function


//callback all the time 
const highFive = function(){
	console.log('HIIHIHI');
}
// document.body.addEventListener('click',highFive); //call back function 

// ['maya','mayakn','rank'].forEach(highFive);
/*
		Function return function 
		------------------------
*/

const greet = function (greeting){
		return function(name){
				console.log(`${greeting} ${name}`);
		}
}
//M1
console.log(greet('HEy')('mayank'));
//M2
const greeter = greet('Hello');
greeter('mayank');

//greet function to arrow function 

const greetArrow =greeting=>name=>console.log(`${greeting} ${name}`)
greetArrow('HEy')('mayank');


/*
		CALL AND APPLY METHOD 
		------------------------
*/

const airIndia ={
	airline:'Airindia',
	iataCode:'LH',
	booking:[],
	book(flightNum,name){
			console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

		this.booking.push({flight : `${this.airline}${flightNum}`, name });
	},
};

console.log(airIndia);
airIndia.book(239,'Mayank Raj');
airIndia.book(244,'Mannu');
console.log(airIndia);

const vistara={
	airline:'Vistara',
	iataCode:'EW',
	booking:[],
}



/*
		THIS ONLY WORK FOR THE FUNTION WHOEVER CALLED SO 
				
				CALL METHOD
				--------------

		call method:
		The call method is used to invoke a function with a specified this value and 
		individual arguments passed in as separate arguments. The syntax for call is as follows:

		functionName.call(thisArg, arg1, arg2, ...);
		thisArg is the value that will be set as this within the function.
		arg1, arg2, etc., are the individual arguments that will be passed to the function.
*/
const book = airIndia.book; //function nikal liya airindia se 
console.log(book);
//DoesNotWork book(23,SarahWillams);


// 
book.call(vistara,23,'Man');
book.call(vistara,24,'Luau');
console.log(vistara);


/* 				APPLY METHOD
			--------------------
			apply method:
			The apply method is similar to call 
			but expects the arguments to be passed as an array or an array-like object. 

			functionName.apply(thisArg, [arg1, arg2, ...]);

*/


const flightdata = [32,'AppiedByApplyMethod'];
book.apply(vistara, flightdata);

console.log(vistara);


/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

/*
			BIND METHOD
	     -------------------

	     we can creater a special function that points to the main function 
	     but we can specically do this for some property 

	     for exapme if we only want to book for airindia 23 

	     so we do 

	     const Air23 = airIndia.bind(airIndia , 23) ; 
	  	// now we only need to give the name of passenger and 23 will be set by defaut

*/
console.log('--------------------BIND--------------------')
const newVistara = book.bind(vistara); //gives the new function 
console.log(newVistara); 

newVistara(23,'MmMmMmM');

console.log(vistara);

airIndia.planes=300;
airIndia.buyPlanes=function(){
		console.log(this);
		this.planes++;
		console.log(this.planes);
}

//withoud bind the add event listner will return Nan becaues this will be pointing to the 
// html 

document.querySelector('.buy').addEventListener('click',airIndia.buyPlanes.bind(airIndia))


//Partial application of Bind 

const addTax = (rate,value)=>value+value*rate;

console.log(addTax(10,100));

//here we will not use this  so null  bind can be used to presat some thing 
const addVat = addTax.bind(null,0.23);
//add vat == > valu =>value_value*23
console.log(addVat(100));

const addTax1 = function(value){
		return function(rate){
			return value+value*rate;
		}
}


console.log(addTax1(100)(0.23));

console.log('--------------------BIND- ENDS-------------------')

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),  
 	
  registerNewAnswer(){
  	const opt =Number(prompt('What is your favourite programming language? \n 0: JavaScript\n 1: Python\n 2: Rust \n3: C++'));
  	if(	(opt>=0 && opt<=3) && opt==='number'){
  	console.log(opt);

  		this.answers[opt]++;
  	}
  		console.log(this.answers);		
  	
  },
  
};

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));



/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

console.log('---------Immediatly Invoke function---------')

const runOnce = function(){
	console.log('This will never run again');
};

runOnce();


// this is immediatly invoked function 

(function(){
	console.log('Immediatly Invoked ')
})(/*here we give argument*/);


// similarly for arrow
(()=> console.log('Arrow Immediatly Invoked'))();



console.log('---------Immediatly Invoke function ENDS---------')




/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

console.log('--------------CLOSER STARTS-------------')
/*
				CLOSERS
	------------------------------------
	==>closeres remeber all the variable at its birthplace

	==> any function has always have the acess to the variable  environment of the 
	execution context in which it was created so booker will have passenger count

					 closer(priority chain)
	[passengerCOunt]---------> booker scope
	
	even if passenger was destyed it will still have the acess

	closer have priority for closer variable then the global varuable 
*/ 

const secureBooking = function(){ 
	let passengerCount = 0 ; 
	return function(){
		passengerCount++;
		console.log(passengerCount);
	}
}


const booker = secureBooking(); //==>global scpre 
console.log(booker);
// these four will give output  1 1 1 1 
secureBooking()();
secureBooking()();
secureBooking()();
secureBooking()();

// But the below will give as 1 2 3 because it exist in booker (global scope) 
booker();
booker();
booker();
console.dir(booker); // by this we can see the closer connection 
/*
SCOPE 

0
: 
Closure (secureBooking) {passengerCount: 3} / have acess to the passenger count 
1
: 
Script {bookings: Array(4), flight: 'LH234', jonas: {…}, createBooking: ƒ, checkIn: ƒ, …}
2
: 
Global {window: Window, self: Window, document: document, name: '', location: Location, …}
*/

let f ; 

const g = function(){
	const a = 23 ; 
	f= function(){
		console.log(a*2);
	}
}

const h = function (){
	const x = 99 ; 
	f = function(){
		console.log(x*2);
	}
}

g();
f(); // gives 46 its a closer 
console.dir(f);

h(); //-- >reassin the value of f 
f(); // f - > f gives 99*2



// 0
// : 
// Closure (g) {a: 23}



console.log('--------------CLOSER ENDS-------------')

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

document.body.addEventListener('click',
(function(){
	const head = document.querySelector('h1');
	head.style.color='red';
}));
