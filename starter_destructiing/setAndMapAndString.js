  // syntax of set 

const orderSet = new Set(['Pizza','Pizza','Chocolate','Chocolate','Burger ',]);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.add('Milano'));
console.log(orderSet.add('Milano'));
console.log(orderSet.add('Garlic Bread'));
console.log(orderSet);
console.log(orderSet.delete('Garlic Bread'));
console.log(orderSet); 
// orderSet.clear();
console.log(orderSet);
for(const order of orderSet){
	console.log(order);
}

const staff =['Mayank','Mayank','raj','raj','Heheh',]
console.log(staff);
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

/*
Set(3)      {'Pizza', 'Chocolate', 'Burger '}
 3
 true
 Set(4){'Pizza', 'Chocolate', 'Burger ', 'Milano'}
 Set(4){'Pizza', 'Chocolate', 'Burger ', 'Milano'}
 Set(5){'Pizza', 'Chocolate', 'Burger ', 'Milano', 'Garlic Bread'}
 Set(5){'Pizza', 'Chocolate', 'Burger ', 'Milano', 'Garlic Bread'}
 true
 Set(4){'Pizza', 'Chocolate', 'Burger ', 'Milano'}
 Set(4){'Pizza', 'Chocolate', 'Burger ', 'Milano'}
 Pizza
 Chocolate
 Burger 
 Milano
 (5)['Mayank', 'Mayank', 'raj', 'raj', 'Heheh']
 (3)['Mayank', 'raj', 'Heheh']
*/


/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
//maps 

// const rest = new Map(); // created a map  
//to fille the element in the map we use set method 
const rest = new Map();
// map consisit of key and value  

rest.set('Name','Classico Italiano ');
rest.set(1,'Mayank');
rest.set(2,'raj');
rest.set(3,'hellow');
rest.set(true,'Hi i m correct');
rest.set(false,'Hi i m wrong');
console.log(rest);

console.log(rest.get('Name'));
console.log(rest.get(1));
console.log(rest.get(true));
console.log(rest.get(false));

// .has()
// .delete
//.size


//Exception
 rest.set([1,2],'Test');
 // .get will give undifined
console.log(rest.has([1,2])); // will give undefined since [1,2] in set and has is not same 
// will give undifined 
//false


// Map(6) {'Name' => 'Classico Italiano ', 1 => 'Mayank', 2 => 'raj', 3 => 'hellow', true => 'Hi i m correct', …}
// setAndMapAndString.js:60 Classico Italiano 
// setAndMapAndString.js:61 Mayank
// setAndMapAndString.js:62 Hi i m correct
// setAndMapAndString.js:63 Hi i m wrong

//			map Iteration 
//	   ------------------------


const question = new Map([
	['Question','What is the best programming language in the world ?'],
	[1,'C'],
	[2,'C++'],
	[3,'Java'],
	[4,'JavaScript'],
	['Correct',4],
	[true,'Correct 🎉🎉🎉'],
	[false,'try Again 🤣🤣😂😂 Wrong Ans '],
	])
console.log(question);

// conversion of obect to maps 

// const hour_map= new Map(Object.entries(Objectname));

//-----------------------------
//Iteration in map 

console.log(question.get('Question'));
for(const [key,value] of question){
	if(typeof key =='number')
	console.log(key,value);
}

// const opt = prompt('Chose the option ');
const opt = 4;
console.log(question.get(opt==question.get('Correct')));

//----------------------------------------

// conversion of map to array 
console.log(...question);


/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/