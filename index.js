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
            move_2();
}}
function question3 (){
    let text;
    let favDrink = prompt("Who has the most triple-doubles in NBA history?");
    switch(favDrink) {
        case 'Russell Westbrook': 
        move3()
        text= 'Genius!!Russell Westbrook has 194  triple-doubles. Crazy Right!!!'
        break;
        default:
            move_3();
}}
function question4 (){
    let text;
    let favDrink = prompt("What is the Pi eqaul ?(to the hundredth place of a demical.) ");
    switch(favDrink) {
        case '3.14': 
        move4()
        text= 'Genius!!Russell Westbrook has 194  triple-doubles. Crazy Right!!!'
        break;
        default:
            move_4();
}}
function question5 (){
    let text;
    let favDrink = prompt("What does PEMDAS mean in math?(commas after answer!!) ");
    switch(favDrink) {
        case 'parenthesis, exponents, multiplication, division, addition, subtraction': 
        move5()
        text= 'Genius!!Russell Westbrook has 194  triple-doubles. Crazy Right!!!'
        break;
        default:
            move_5();
}}