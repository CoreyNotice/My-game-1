

       
       function move1() {
    const movepic = [
        { transform: 'translateY(25%)' },
        { transform: 'translateX(25%)' }];
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
    
        { transform: 'translateY(50%)' },
        { transform: 'translateX(50%)' }];
     const newspaperTiming = {
        duration: 3000,
        iterations: 1,
        fill: 'forwards'

     };
     const move = document.querySelector("#pic");
        move.animate(movepic,newspaperTiming);
}
       function _f(){
    const movepic = [
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-300px)' }]
     const newspaperTiming = {
        duration: 3000,
        iterations: 1,
        fill: 'forwards'

     }
     const move = document.querySelector("#pic")
    //  move.addEventListener('click', () => {
        move.animate(movepic,newspaperTiming);
        
}
 