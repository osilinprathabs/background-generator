// condition ? expr1:expr2;



// function isUserValid (boolean)
// {
// 	return boolean;

// }

// var ans =isUserValid(true ) ?
// " you may enter " :
// "Access denied ";


// var autoans ="your account ##@@$$ is " 
// +(isUserValid(true) ?
//  "12345...0" :
//  "Not valid Try aginn : (    ");



// function moveCommand(direction){

// var hi;

// switch (direction)
// { 
// case "forward":
//  hi ="you encounter a monster";
//  break;

// case "back":
//  hi ="you arrived home";
//  break;

// case "right":
//  hi ="you found a river";
//  break;

// case "left": 
//  hi ="you run into a troll";
//  break;

// default:
// 	 hi ="please eneter a valid direction";
//  }
//   return hi;
// }


const first = () => {
const greet = 'Hi'; 
const second = () => {

alert(greet);

} 
return second;

}

const newFunc = first();
newFunc();

//currying 
const multiply = (a, b) => a = b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply (5);

//compose
const compose= (f, g) => (a) => f(6);
const sum =(num)=> num + 1;
compose(sum, sum) (5);


//forEACH
const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 4);
})
console.log('forEach',double);

//Mapp

const MapArray = array.map(num => num * 4);
console.log('map',MapArray);

//Filter

const filterArray = array.filter(num => num === 5);
console.log('filter',filterArray);

//reduce

const reduceArray = array.reduce((acc,num )=>
{
    return acc+num 
},10);

console.log('reduce', reduceArray);



class Player { 
    constructor(name, type) {
     console.log(this);
      this.name name;
      this.type = type;

} 
introduce() 
     {
        console.log(`Hi I'am ${this.name), Im a ${this.type}v`); 
    }

}

class Wizard extends Player 
{

constructor(name, type) 
{ super(name, type)

} play()
 {

console.log('WEEEEEEE I m a ${this.type}');
}
}

const wizard1 = new Wizard ('Shelly', 'Healer');


 




 

 
 
  
 
 

 
 

 
 
  
 
 




