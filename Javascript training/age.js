var yearBorn = prompt("What year were you born?");
var yearNow = prompt("What year is it?");
var age = (yearNow - yearBorn);
if (age == 21 ){
    alert("Happy 21st Birthday");
}
if (age < 0) {
    alert("Please visit again once you are born.");
}

if (age % 2 !== 0) {
    alert("Your age is odd");
}
    
if (age % Math.sqrt(age) === 0) {
    alert("Your age is a perfect square!");
} else {
    alert("You are " + age + " years old");
}