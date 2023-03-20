///whenever there is situation to store string or number at a time then union type is used.


let myVar= 'string'|'number'

myVar="hello";




type combinable=string|number

function combine(a:combinable,b:combinable){
    if(typeof a==="string"||typeof b==="string"){
        return a.toString() + b.toString()
    }else{
        return a+b
    }
}
cl(combine("hello","world"))