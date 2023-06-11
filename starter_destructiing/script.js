'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  order: function(startIndex,mainIndex){
      return [this.starterMenu[startIndex],this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  // function destructuring 
  orderDelivery: function({starterIndex,mainIndex,time,address}){
    console.log(`order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}`);
  },
  
  orderPasta: function(i , j , k ){
    console.log(`Here is yout decliciout pasta with ${i} ${j} ${k}`)
  },
};


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ARRAY DESTRUCTURING 
//Eg:-1
const arr=[2,3,4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  
const [x,y,z] = arr; //desturcturing assingnment and the original array is not affected 
console.log(x,y,z);

//Eg:-2
const [first ,second] = restaurant.categories;
// to skip we just do [fsd, ,dsf]
let [main , ,secondary] = restaurant.categories; 
console.log(first,second); 

//Eg:-3

// to swap the value 

/*
  const temp = main;
  main= secondary;
  secondary= temp;
*/

console.log(main,secondary);
  [main,secondary] = [secondary,main];
console.log(main,secondary);

//otp
// Italian Vegetarian
// Vegetarian Italian

//Eg4 

// we passed startIndex,aand the maincourse Index 
console.log(restaurant.order(2,0)); //returns an array 

// now we will destrure it into a variable
const [starter,mainCourse]=restaurant.order(2,0);
console.log(starter,mainCourse);
//Garlic Bread Pizza

//EG:-5 NESTED DESTURCTURING

const nested =[2,4,[5,6]];

const [ff, ,ss]=nested;
console.log(ff,ss);

// now we will create 3 variable one for 2 & one for 5 and one for 6
// ImP
const [fff, ,[sss,ttt]]=nested;
console.log(fff,sss,ttt);
 // 2 5 6

//EG:- 6 If we dont know the array and we try to acess the third element 

const [p,q,r]=[8,9];
console.log(p,q,r);
// 8 9 undefined
// now it will give n as 1 
const [l=1,m=1,n=1]=[8,9];
console.log(l,m,n);
// 8 9 1


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Object DESTRUCTURING

//EX1:-

//similarly like array we use {} to sdestructure the objects 
const {name ,openingHours,categories}=restaurant;
console.log(name ,openingHours,categories);

/*Classico Italiano {thu: {…},
 fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']*/

// EX2:- to give variable name 

const {name :resturantName ,openingHours :hours ,categories:tags}=restaurant;
console.log(resturantName,hours,tags);


//EX3:- Default Value
 
const {menuu=[],starterMenu: stattt=[]}=restaurant;
// Here also we can set default value 
// so that if that value does't exist then we get dont get undifined
console.log(menuu,stattt);

// []  ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// EX4:-  Mutating Variable

let aa = 111 , bb =99;
const obj ={aa:23,bb:7,c:14};
({aa,bb}=obj);
console.log(aa,bb);


// EX5:- Nested Object

const {fri:{open,close}} = openingHours;
console.log(open,close);
// 11 23 


//Ex6:-
 // orderDelivery: function(obj){
 //    console.log(obj);
 //  },
/*
   function destructuring 
  
  orderDelivery: function({starterIndex,mainIndex,time,address}){
//  body code
  }
  */
restaurant.orderDelivery({
  time:'22:30',
  address:'Via del sole,21',
  mainIndex:2,
  startIndex:2,
});

// order recieved undefined and Risotto 
// will be delivered to Via del sole,21 at 22:30

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*SPREAD OPERATOR*/

const arra =[7,8,9];
const badNewArr =[1,2,arra[0],arra[1],arra[2]];
console.log(badNewArr);
//with the use of spead array 

// [1,2,arr] =[1,2,[7,8,9]] but with spread
const newArr =[1,2,...arra]; // ==> [1,2,3,7,8,9]
console.log(newArr);

// now if we aagian spread newarr we will get single variable 

console.log(...newArr);
// similar to console.log(1,2,3,7,8,9);


const newMenu=[...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);
// ['Pizza', 'Pasta', 'Risotto', 'Gnocci']


// copy array 
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// to join main and startermenu
const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);

// Iterables are : array , strings ,maps ,sets But not OBJECTS;

const strr ='Jonas';
const letters =[...strr,' ','S.'];
console.log(letters)
//  ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(...strr);// J o n a s


// const ingredients =[prompt('Lets\'s Make Pasta ing1  !'),prompt('Lets\'s Make Pasta ing2!') ,prompt('Lets\'s Make Pasta! ing 3')];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[3]); 
// instead we can do the below 
// restaurant.orderPasta(...ingredients);


//Object
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  /*REST OPERATOR */

//spread because it is of right side of = 
const arrr =[1,2,...[3,4]];
console.log(arrr);

//rest because it  left side of =

const [aaaa,bbbb,...others]=[1,2,3,4,5,5];
console.log(aaaa,bbbb,others);
/*
Here 
 a = 1, b = 2 
 others = [3,4,5,5]
*/

// Objects 
// sat ik baki weekdays me 
const {sat,...weekdays} =restaurant.openingHours;
console.log(weekdays);

//FUNCTION

//Number ko --->>> array Opp of spread 
const add = function(...numbers){
  let res = 0;
    console.log(numbers);
    for(let i = 0 ; i < numbers.length ; i++)
      res+=numbers[i];
      return res;    
}

console.log(add(2,3)); // nuymber denege tho array milega 
console.log(add(5,3,7,2));
add(5,3,7,2,4,3,4,5,1);

const xxx =[1,2,3];
let mmm =add(...xxx);
console.log(mmm);

// 

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*Short Circuting*/
  //Use any data types && return any datatypes 

// if first value is truthy value that will directly return that value 
  console.log(3||'Mayank'); //res = 3
  
  console.log(' '||'Mayank'); //res = Mayank
  
  console.log(true|| 0); //res = True
  
  console.log(undefined||null); //res = null
  
  console.log(undefined|| 0 || 'Helo' ||23); //res = helo
  
  
  // more practical application 
  
  const guests1 =restaurant.numGuests ? restaurant.numGuests:10;
  console.log(guests1);
  
  const guests2= restaurant.numGuests||10; // agr resturant.guest me value ha tho whi rhega else shortcicuit and 1- ho jayega ans 
  //similar as above 
  
  console.log('______AND_____');
  // sare value true honge tho last value dega else jo false kar rha vo karega 
  console.log(0&&'Mayank'); //res = 0
  console.log(7&&'Mayank'); //res = Mayank , dono true hoga tho last true return 
  console.log('Hello'&&7&&null&&'Mayank'); //res = null ,jo false kar rha 
  
  //practical exaplme 
  
  if(restaurant.orderPizza){
      restaurant.orderPizza('Mushroom','Spanich');
  }  
  
  
  

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// codinChallenge 1

  // Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players.
 So create a new array ('players1Final') containing all the original team1 players plus 
 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/
// GOOD LUCK 😀
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Q1
/*
const player1 =game.players[0];
const player2 =game.players[1];
*/
const [player1,player2]=game.players;
console.log(player1);
console.log(player2);
//q2
function fieldPly(pl){
  const [,...pf]=pl;
  return pf;
}
const gk1 =player1[0];
let fp = fieldPly(player1);
console.log(fp);
//Q3
const Allplayer=[...player1,...player2]
console.log(Allplayer)

//Q4
const Players1Final = [...player1, 'Thiago', 'Coutinho' , 'Perisic'];
console.log(Players1Final);
//Q5
// 5. Based on the game.odds object, create one variable for each
// odd (called 'team1', 'draw' and 'team2')
const {odds:{team1,x:draw,team2}} =game;
console.log(team1);
console.log(team2);
console.log(draw);

//Q6. Write a function ('printGoals') that receives an arbitrary number 
// of player names (NOT an array) and prints each of them to the console, along with 
// the number of goals that were scored in total (number of player names passed in)

 const  printGoals =function(...Goals) {
    console.log(`${Goals.length} were made ` );
  }
  printGoals('dsf','ew','erw');



// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// New Way of Looping the Array 
  const menuuu =[...restaurant.starterMenu,...restaurant.mainMenu];
  /*
  for(const variable  of menu) console.log(items);
  */
  for(const item of menuuu) console.log(item);

    // .entries to get the index of the array 
  for(const item of menuuu.entries()) console.log(item);
  //gives vector of painr
  for(const item of menuuu.entries()) console.log(`${item[0]} and  ${item[1]}` );
/*
 (2) [0, 'Focaccia']
 (2) [1, 'Bruschetta']
 (2) [2, 'Garlic Bread']
 (2) [3, 'Caprese Salad']
 (2) [4, 'Pizza']
 (2) [5, 'Pasta']
 (2) [6, 'Risotto']
*/

// Enhanced Object Literals 
/*
1.

IN resturant object which is a object literal  all the object rre written 

2. In es6  we can merge two object easyli 
  const ob1={
  name:'Mayank' 
  };
  
  const naames = {
    Name2:'raj';
    ,ob1:ob1 , this is
  };

*/

 const ob1 ={
  name:'Mayank' 
  };
  
  // const naames ={
  //   Name2:'raj',
  //   ob1:ob1 , //this is enhanced object literal
  
  // };
  
  // console.log(naames);
  /*

{Name2: 'raj', ob1: {…}}
Name2
: 
"raj"
ob1
: 
{name: 'Mayank'}    
  */

// 2. WRITNG NEW WAY OF WRITEING METHOD IN OBJ 

/*
IN this we dont need to write function in object
*/

 const naames ={
    Name2:'raj',
    ob1:ob1 , //this is enhanced object literal
    //fucntion
    printNaames(names){
      console.log(names);
    }
  };
naames.printNaames('Heheheh');

//3RD : 
 // we can write the property name of object in [] square brackets 
/*
const days : {
[weekdays[]]:{
  
}

[`days-${2+3}`]:{
  
}

}

*/

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//OPTION CHAINING
// if it exists then only it will print other wise it gives undifined
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant?.openingHours?.mon?.open);

//example , it helps us to reduce use of if and else and give ans in a fast manner 
const dayss =['mon','tue','wed','thu','fri','sat','sun'];
for(const day of dayss){
  console.log(day);
  const open =restaurant.openingHours[day]?.open;
  console.log(`on ${day} , we open at ${open}`)
}

//2 For methods  it also work on array but i find it too complex 
console.log(restaurant.order?.(0,1)??'Method does not exist');

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Looping for object 
console.log("Loopinf for Object");
const properties = Object.keys(openingHours);
console.log(properties) //gives arrya 

for(const day of Object.keys(openingHours)){
  console.log(day);
}

const values =Object.values(openingHours);
console.log(values);

const entries =Object.entries(openingHours);
// console.log(entries);
for(const x of entries){ //entries gives the index 
  console.log(x);
}
for(const [key,{open,close}] of entries){ //here we are desturcturing and loopin over the index of object 
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console,
 along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). HINT: Note how the odds and the game objects have the 
same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the
 players who scored as properties, and the number of goals as the value. 
 In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

//Q1
console.log("Goal 1");
// for(const x of game.scored)
for(const [i,player] of game.scored.entries())
  console.log(`Goal ${i+1} : ${player}`);

//Q2. Use a loop to calculate the average odd and log it to the console 
// (We already studied how to calculate averages, you can go check if you don't remember)

// entries give the key value pair 

let oddds = game.odds;
let sum = 0;
console.log(typeof (Object.entries(oddds)));
for(const i of Object.entries(oddds)){
  sum+=i[1];
}
console.log(`Goal 2: The average is ${sum/(Object.entries(oddds).length)}`);
//      Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5

for(const i of Object.entries(oddds)){
    console.log(`Odd of victory ${( game[i[0]] == 'undifined') ? 'draw' : game[i[0]] } is  ${i[1]} `);
  }

//Q4
  let scorers={};
for(const x of game.scored){
  if(!scorers[x])
     scorers[x]=1;
  else 
    scorers[x]+=1;
}

console.log(scorers);
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
