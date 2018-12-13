var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);
function BMI(weight, height){
    return weight/(height*height)
  }
  var weight =parseInt(prompt("enter weight"));
  var height =parseInt(prompt("enter height"));
  var result =BMI(weight , height);
  alert(result);

  var grade=parseInt(prompt("Enter grade"));
if(grade >= 80){
  console.log("A");
}
else if(grade >= 60){
  console.log("B");
}
else if(grade >= 40){
  console.log("C");
}
else if(grade >= 20){
  console.log("D");
  
}
else{
  console.log("E");
  
}