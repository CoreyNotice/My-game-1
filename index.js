function myFunction() {
    let person = prompt("Welcome to the Game!Please enter a name for your character");
    if (person != null) {
      document.getElementById("statement").innerHTML =
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
        text= 'Yes, guess you are pretty clever!'
    
        break;
        default: 
            text = 'I have never heard of that one..';
            setTimeout(() => {
                question1();
              }, 3000)
     }
document.getElementById("Charctername").innerHTML = text
}

function question2 (){
    let text;
    let favDrink = prompt("How much states are in the United States?");
    switch(favDrink) {
      case '50': 
        move2()
        text='One small question for me, one large step to practice!!! '
        break;
        default:
            move_2()
            text='I am never getting to practice. '
            setTimeout(() => {
                question1();
              }, 3000)
            document.getElementById("Charctername").innerHTML = text
}
document.getElementById("Charctername").innerHTML = text
}
function question3 (){
    let text;
    let favDrink = prompt("Who has the most triple-doubles in NBA history?");
    switch(favDrink) {
        case 'Russell Westbrook': 
        move4()
        text= 'Genius!!Russell Westbrook has 194 triple-doubles. Crazy Right!!!'
        break;
        default:
            move_4();
            text=' Bro, I thought you played basketball!!!'
            setTimeout(() => {
                question2();
              }, 3000)
            
}document.getElementById("Charctername").innerHTML = text
}
// function question4 (){
//     let text;
//     let favDrink = prompt("What is the Pi eqaul ?(to the hundredth place of a demical.) ");
//     switch(favDrink) {
//         case '3.14': 
//          move4()
//          text= 'Showing off that math knowledge I see'
//         break;
//         default:
//           move_4();
//           text='Wrong!!!!!'
//           setTimeout(() => {
//             question3();
//           }, 3000)
            
// }     document.getElementById("Charctername").innerHTML = text
// }
function question5 (){
    let text;
    let favDrink = prompt("What does PEMDAS mean in math?(commas after answer!!) ");
    switch(favDrink) {
        case 'parenthesis, exponents, multiplication, division, addition, subtraction': 
        move5()
        text= 'I know I liked you!!!'
        setTimeout(() => {
            youWon();
          }, 3000)
        break;
        default:
            move_5();
            text='Nope!!!! LOL'
            setTimeout(() => {
                question3();
              }, 3000)
                        
}     document.getElementById("Charctername").innerHTML = text
}
function youWon(){
    let won=window.alert('Congrats You Made it to practice on time!!!!!')
}