this
//
if(true){
    console.log(this)
}
//

function talk() {
    return this
}
// undefined 
const mev = {
    name: "Sina",
    talk
}
// undefined
me.talk()
// {name: "Sina", talk: f}

talk()
// window
window
//
window.talk()
//





function talk(){
    return 'I am ${this.name}'
}
// undefined 
const me = {
    name: 'Sina',
    talk
}
// undefined
const you = {
    name: 'Ooli',
    talk
}
// undefined
me.talk()
// "I am Sina"
you.talk()
// "I am Ooli"
   






function talk(){
    return 'I am ${this.name}'
}
// undefined 
const me = {
    name: 'Sina',
}
// undefined 
talk.bind(me)
// 
const meTalk = talk.bind(me)
// undefined
meTalk()
// "I am Sina"
talk.bind(me){}
// "I am Sina"
talk.call(me)
// "I am Sina"





function talk(lang) {
    if (lang === 'en') {
    return 'I am ${this.name}'
    } else if (lang === 'it') {
    return 'Io sono ${this.name}'
    }
}
//    undefined
const me = {
    name: 'Sina'
}
// undefined
talk.call(me, 'en')
// "I am Sina"
talk.call(me, 'it')
// "Io sono Sina"
    





function talk(lang, isPolite) {
    if (isPolite) {
    if (lang === 'en') {
    return 'Hello, I am ${this.name}'
    } else if (lang === 'it') {
    return 'Ciao bella, sono ${this.name}'
    }
    }
    if (!isPolite) {
    if (lang === 'en') {
    return '${this.name}, what you want?'
    } else if (lang === 'it') {
    return 'Sono ${this.name}, '
    }
    }
    }
// undefined 
const me = { 
    name: 'Sina'
}
// undefined
talk.call(me, 'it', true)
//
talk.call(me, 'en', true)
//
talk.call(me, 'it', false)
//
talk.call(me, 'en', false)
//
talk.apply(me, ['en', true])
//





// Constructor functions 

function Person(n) {
    this.name = n
    this.talk = function() {
     console.log(this)
    }
}
// undefined
const me = new Person('Sina')
//   undefined 
me.talk()
//



// call back functions 
function Person(n) {
    this.name = n
    this.talk = functiont() {
    console.log(this)
    }
    setTimeout(function() {
    console.log(this)
    }, 100)
}
// undefined
const me = new Person('Sina')
// undefined
// window



function Person(n) {
    this.name = n
    this.talk = functiont() {
    console.log(this)
    }
    setTimeout(function() {
    console.log(this)
    }.bind(this), 100)
}
// undefined
const me = new Person('Sina')
// undefined
// Person