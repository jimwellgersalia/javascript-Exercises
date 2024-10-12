//Evaluate these:
//#1
[2] === [2]  false
{} === {} false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1;  
const object3 = object2;  
const object4 = { a: 5};
object1.a = 4;

1. {a: 4}
2. {a: 4}
3. {a: 4}
4. {a: 5}

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor(name, type, color){
		this.name = name;
		this.type = type;
		this.color = color
	}

//if i create function here it will be inherited or shared to the class Mammal.

}

class Mammal extends Animal {
	constructor(name,type, color){
		super(name,type,color); //Reference to the Animal class
	}

	sound(){
		console.log(`Mooooo my name is ${this.name}, i am a ${this.type}, and i am color ${this.color}`)
	}
}

const cow = new Mammal("john", "cow", "black");
const cow2 = new Mammal("ana", "cow", "brown");