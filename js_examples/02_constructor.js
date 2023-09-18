function Dude(name) {
    this.name= name;
}

// undefined 
const me= new Dude('Sina');
// undefined
me
// Dude { name: "Sina"}
me.prototype
// undefined
Dude.prototype
//{constructor: f}
me.__proto__
// {constructor: f}
me.__proto__ === Dude.prototype
// true
Dude.prototype.talk = function () {
    return 'Talking';
}
//    f () {
//    return 'Talking':
//    }
me.talk(); 
// "Talking"
me.__proto__
//talk: f, constructor: f} 
// talk: f ()
// constructékr: f Dude(name)
// _proto__: Object