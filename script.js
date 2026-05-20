var maths = Number(prompt("Enter maths marks: "))
var physics = Number(prompt("Enter physics marks: "))
var chemistry = Number(prompt("Enter chemistry marks: "))

var totalMarks = (maths + physics + chemistry) / 3
console.log(totalMarks);

if(totalMarks >= 85){
    console.log("scollarship allowed")
} else{
    console.log("scollarship not allowed")
}