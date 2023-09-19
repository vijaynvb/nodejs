// es06 
/*
1. class [static, access specifiers private ]
2. variable [static]
    var 
    get set 
3. functions [static]
    constructors
    custom function
*/
// PL versions
class Language{
    #name = 'JS'; // access specifier private
    version; // object variable
    static type; // class variable
    constructor(v){
        this.version=v;
    }
    static printType(){
        console.log(Language.type);
    }
    getInfo(){
        return `Language: ${this.#name} - Version: ${this.version}`;
    }
}

const lang1 = new Language('ES6');
const lang2 = new Language('ES7');
//lang2.#name = 'Python'
Language.type = 'Programing';
Language.printType();
console.log(lang2.getInfo());

//es05