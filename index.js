function myFunction() {
    let person = prompt("Welcome to the Game!Please enter a name for your character");
    if (person != null) {
      document.getElementById("Charctername").innerHTML =
        person + "! Your have practice in an hour lets get going!!";
    }
    setTimeout(() => {
        question1();
      }, 3000)
  }

 function question1() {
    let text;
    let favDrink = prompt("Who is the first president of the United States?");
    switch(favDrink) {
      case 'George Washington': 
        move1()
        text= 'yes'
    
        break;
        default:
            text = 'I have never heard of that one..';
    }
document.getElementById("Charctername").innerHTML = text
}

function question2 (){
    let text;
    let favDrink = prompt("How much states are in the United States?");
    switch(favDrink) {
      case '50': 
        move2()
        break;
        default:
            _f();
}}