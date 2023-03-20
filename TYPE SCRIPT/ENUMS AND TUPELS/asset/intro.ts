let cl=console.log;
type personType={
    fname:string;
    lname: string;
    age:number
    child:{
        fname:string,
        lname:string,
        age:number
    }
}


let person:personType={
    fname:"john",
    lname:"doe",
    age:30,
    child : {
        fname:"jenny",
        lname:"doe",
        age:10
    }
}


type fruitType={
    summer:string,
    winter:string,

}


let fruit:fruitType={
     summer:"mango",
     winter:"apple"
}




 