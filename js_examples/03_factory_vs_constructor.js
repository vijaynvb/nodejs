function createPerson(name){
    return {
    name: name,
    talk() {
    return 'I am ${this.name}'
        }
    }
}
// undefined 
const me = createPerson('Sina')
const you= createPerson('Qoli')
// undefined
me
//{name: 'Sina', talk: f}
you 
//{name: 'Qoli', talk: f}
me.talk()
// "I am Sina"
you.talk()
// "I am Qoli"
me.talk = function(){
    return 'Hello, I am ${this.name}'
}
// f () {
//     return 'Hello, I am ${this.name}'
// }
you.talk()
// "I am Qoli"
function createPerson(name) {
    return {
        name,
        talk() {
            return 'I am ${this.name}'
        }
    }
}
// You can correct the above function 
me
// {name: 'Sina', talk: f}
Object.prototype === me.__proto__
// true
Object.prototype.speak  = function() {
    return 'Oh Khelloo'
}
//
me
// 
you.speak()
// 
const a = {}
a.speak()
//
window.speak()
//



const myCoolProto = {
    talk() {
    return 'Hello, I am ${this.name}'
    }
}
// undefined
function createPerson(name) {
    return Object.create(myCoolProto, {
    name: {
    value: name
    }
})
    }
// undefined
const me = createPerson('Sina')
// undefined
me
//  {name: "Sina}
me.talk()
// "Hello, I am Sina"
me.__proto__.talk




function Person(name){
    this.name =name
}
// undefined 
const ben = new Person('Ben')
// undefined
ben
// Person {name: "Ben"}
Person.prototype.talk = function() {
    return 'Hello, I am ${this.name}'
}
// f () {
// return 'Hello, I am $(this.name}'
// }
ben.talk()
// "Hello, I am Ben"
ben

const sam = new Person('Sam')
// undefined
sam.talk()
// "Hello, I am Sam"
sam






Person.prototype.talk = function() {
    return 'Ciao, io sono ${this.name}'
    } 
// f () {   
//     return 'Ciao, 10 sono ${this.name}'
// }
ben.talk()
// "Ciao, io sono Ben"
sam.talk()
// "Ciao, io sono Sam"
  



function createPerson(name) {
    return {
    talk() {
    return '${name}'
        }
    }
}
// undefined
const me = createPerson('Sina')
// undefined
ne.talk()
// "Sina"
me.name
// undefined
me
// {talk: f}