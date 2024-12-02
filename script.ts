let arr: [];

let arrr: string;

let str= "okk";

let arr2: [boolean, number, string] = [false,12, "hey"];

arr2.push(4);

//any
let variable: any;

variable= 12;
variable= "okk";

// unknown




//never

// function abcd(): never{
//     while(true){
//         console.log("infinite run");
//     }
// }

// abcd();
// console.log("hey");






//void 
function ab(): void{
    console.log("hey");
}
ab()


// enums

enum Direction{
    up= "UP",
    left= "LEFT",
    right= "RIGHT",
    bottom= "BOTTOM"

}

Direction.bottom

enum Human{
    name= "harsh",
    age= 25
}

console.log(Human.name);



let  variable1: string| null;
variable1= null;
variable1= "harsh"
// variable1= 12;



let abc : string | number;
abc= "12";

if(typeof abc === 'string'){
     abc.toUpperCase();
}else if(typeof abc === 'number'){
    //  abc.toFixed(2);
}


function abcde(variable5: number | string) {
    if(typeof variable5 === 'string'){
        variable5.toUpperCase();
    
   }else if(typeof variable5 === 'number'){
        variable5.toFixed(2);
   }   
}

abcde(12);
abcde("1233ok")
// abcde(true)







//Intersection Types
type Classmates = {
    section: string
}

type Students = {
    name: string
}

type ClassmatesInStudents = Classmates & Students;

let a: ClassmatesInStudents = {
    name: "rohan",
    section: "a"
}


// example 2

type City = {
    name: string,
    population: number
}

type Planet = {
    name: string,
    cities: number
}

type CitiesInPlanet = City & Planet;

let value: CitiesInPlanet ={
name: "Bhopal",
population: 1452965,
cities: 12
}
 





//Type Aliases

//primitive type aliases
type sankhya= number;
let b: number;

//future me hoga b = number



//type is the parent which follows to others
type Human1 = {
    name: string,
    age: number,
    email: string
}


let harsh: Human1= {
    name: 'harsh',
    age: 25,
    email: "harsh@email.com"
}


//example 2
type  dabba = {
    weight: number,
    color: string
}

let dabba123: dabba = {
    weight: 5,
    color: "#FFFFFFF"
}








//interfaces

interface user {
    name: string,
    username: string,
    age: number,
    email: string,
    password:string
}

function getUser(user1: user){
// user1.age.  ;
}






interface food{
    name: string;
    price: number;
}

interface mithaFood extends food{
    verySweet: boolean;
}

interface khataFood extends food{
    verySour: boolean;
}

function getMithai(mithai: mithaFood){
 mithai.verySweet
 mithai.name
}




//class

class airpod{
    price: 25000;
    image= "images/airpod";
    color = "white";

    playMusic(){
        console.log("Music Playing")
    }

    switchMode(mode: string){
        console.log(mode);
    }
}



class airConditioner{
    color= "white";
    tons = .75;
    company= "Voltas";

 

    turnOn(){
        console.log("turning on...");
        console.log("turned on"); 
    }

    turnOff(){
        console.log("turning off");
        console.log("Turned Off");
    }

    raiseTemperature(){
        console.log("temp raised by 1");
        
    }

    decreaseTemp(){
        console.log("decreasing temp by 1");
        
    }
}









//

type Data = string | null;

class Pendrive{
    company= "hp";
    price= 1200;
    data: null | string =  null;


    putData(data: Data){
        console.log(`putting some data ${data}`);
        this.data= data;       
    }

    getData(data: Data){
        console.log(data);
        
    }
}


let pendrive1= new Pendrive();

pendrive1.putData("12");
pendrive1.getData("25");



//constructor

class pendrive {
    public company: string;

    constructor(name: string){
        this.company= name;
    }
}


let p1= new pendrive("sandisk");
let p2= new pendrive("Hp")