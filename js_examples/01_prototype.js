const dude = {};
// undefined
dude 
//{}
dude.name = 'SINAAAAAAA';
//"SINAAAAAAA"
dude.age = 34
// 34
dude 
//{hame: "SINAAAAAAA", age: 34}
dude.talk
// undefined
dude.walk
//undefined
dude.toString
// f toString() { [native code] }
dude.valueOf
// f valueOf() { [native code] }
dude.anything
// undefined




const myBrothers = ['Ben', 'Sam'];
// undefined 
myBrothers 
//
const name = 'SINA';
// undefined 
name 
// "SINA"
name.__proto__
//String {"", constructor: f, anchor: f, big: f, blink: f, ...}




const human = {
    kind: 'Human'
    
    }
// undefined 
const sina = Object.create(human);
// undefined 
sina
//{}
sina.age=34;
//34
sina 
// {age: 34}
sina.age
// 34
sina.kind
// "Human"
const ben = Object.create(sina);
// undefined 
ben
//{}
ben.age = 12;
//12
ben.age
//12
ben.kind
"Human"
ben
//




class Human{
    talk(){
        return 'Talking'
    }
}

//undefined 
class SuperHuman extends Human {
    fly() {
    return 'Flying';
    }
}
// undefined
const ben = new SuperHuman();
// undefined
ben.fly();
// "Flying"
ben.talk();
// "Talking"
ben.jumpReallyHigh
//undefined
ben
//
