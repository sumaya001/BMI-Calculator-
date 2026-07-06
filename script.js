function calculateBMI(){

let weight = parseFloat(document.getElementById("weight").value);

let height = parseFloat(document.getElementById("height").value)/100;

let bmi = weight/(height*height);

let category="";

if(bmi<18.5){
category="Underweight";
}
else if(bmi<25){
category="Normal Weight";
}
else if(bmi<30){
category="Overweight";
}
else{
category="Obese";
}

document.getElementById("result").innerHTML=
"Your BMI = "+bmi.toFixed(2)+"<br>"+category;

}