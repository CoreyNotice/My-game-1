

       
       function move1() {
    const movepic = [
        // { transform: 'translateY(25%)' },
        { transform: 'translate(-10%,100%)' }];
     const newspaperTiming = {
        duration: 3000,
        iterations: 1,
        fill: 'forwards'

     };
     const move = document.querySelector("#pic");
    //  move.addEventListener('click', () => {
        move.animate(movepic,newspaperTiming);
       setTimeout(()=>{question2()
       },3000);
}

function move2(){

    const movepic = [
    
        // { transform: 'translateY(50%)' },
        { transform: 'translate(150%,200%)' }];
     const newspaperTiming = {
        duration: 3000,
        iterations: 1,
        fill: 'forwards'

     };
     const move = document.querySelector("#pic");
        move.animate(movepic,newspaperTiming);
        setTimeout(()=>{question3()
        },3000);
}
       function  move_2(){
        // back to move1
        const movepic = [
        { transform: 'translate(0%,0%)' }]  
       
     const newspaperTiming = {
        duration: 3000,
        iterations: 1,
        fill: 'forwards'

     }
     const move = document.querySelector("#pic")
    //  move.addEventListener('click', () => {
        move.animate(movepic,newspaperTiming);
        
}
// function move3(){

//     const movepic = [
    
//         // { transform: 'translateY(50%)' },
//         { transform: 'translate(300%,300%)' }];
//      const newspaperTiming = {
//         duration: 3000,
//         iterations: 1,
//         fill: 'forwards'
     
//      };
//      const move = document.querySelector("#pic");
//         move.animate(movepic,newspaperTiming);
//         setTimeout(()=>{question4()
//         },3000);
// }
// function move_3(){
// // back to move2
//     const movepic = [
    
//         // { transform: 'translateY(50%)' },
//         { transform: 'translate(150%,200%)' }];
//      const newspaperTiming = {
//         duration: 3000,
//         iterations: 1,
//         fill: 'forwards'

//      };
//      const move = document.querySelector("#pic");
//         move.animate(movepic,newspaperTiming);
      
// }
function move4(){

    const movepic = [
    
        // { transform: 'translateY(50%)' },
        { transform: 'translate(500%,300%)' }];
     const newspaperTiming = {
        duration: 3000,
        iterations: 1,
        fill: 'forwards'
     
     };
     const move = document.querySelector("#pic");
        move.animate(movepic,newspaperTiming);
        setTimeout(()=>{question5()
        },3000);
}
function move_4(){
// back to move3
    const movepic = [
    
        // { transform: 'translateY(50%)' },
        { transform: 'translate(300%,300%)' }];
     const newspaperTiming = {
        duration: 3000,
        iterations: 1,
        fill: 'forwards'

     };
     const move = document.querySelector("#pic");
        move.animate(movepic,newspaperTiming);
      
}
function move5(){

    const movepic = [
    
        // { transform: 'translateY(50%)' },
        { transform: 'translate(800%,200%)' }];
     const newspaperTiming = {
        duration: 3000,
        iterations: 1,
        fill: 'forwards'
     
     };
     const move = document.querySelector("#pic");
        move.animate(movepic,newspaperTiming);
     
}
function move_5(){
// back to move4
    const movepic = [
    
        // { transform: 'translateY(50%)' },
        { transform: 'translate(500%,300%)' }];
     const newspaperTiming = {
        duration: 3000,
        iterations: 1,
        fill: 'forwards'

     };
     const move = document.querySelector("#pic");
        move.animate(movepic,newspaperTiming);
      
}
