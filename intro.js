const pi=3.14;     
r=2;
console.log(pi*r)    //constants
let shopping=[];
shopping=['paintbrush','palletes','colourboxes'];     
console.log(shopping[2]);        
let mix=[];
mix=['one',1,'two',2];
console.log(mix)   //variables
let pen={
    type:'ballpoint',
    cost:'10',
    name:'reynolds trimax'
};
console.log(pen.name)   //objects
let hostel={
    hostelname:'Nelson Mandela',
    roomno:'1003',
    type:'3-sharing-AC'

};
console.log(hostel.hostelname)
console.log(hostel.roomno)
console.log(hostel.type)    

let sid={
    college:'SRM KTR',
    degree:'BTECH CSE-CORE',
    year: '3rd. year',
    subjects:['coding','maths','open-electives','prof. electives']
};
console.log(sid.subjects)
console.log(sid.college)
console.log(sid.degree)

function hello(){
    console.log('hi i am siddhartha dhar,okay can we be friends?');

}
hello();
function prod(a,b){
    return a*b;

}
console.log(prod(5,4))

function multiply(a,b){
    return a*b;
}
console.log(multiply(4,6))

function name(){
    console.log("siddhartha dhar")
}                                   //functions
name(); 
function h(a,b,c){
    return a*b+c;
}
console.log(h(5,6,2))

let x=[];
 x=[1,3,4,1,2,4];                // if else statements
 if(x[0]==x[3]){
    console.log("i am good boiiii")
 }
 else{
    console.log("badboiii")

 }
let names=[];
names=['sid','sam','praksh','kalyani','bittu'];
if(names[0]=='sid'){
    console.log("truee")
}
else{
    console.log("false")
}
let i=0;
for(i=0;i<5;i++){
    console.log("the  number is "  +i)
}

for(i=0;i<=50;i++){
    console.log(i+".I am SIDDHARTHA DHAR")
}

