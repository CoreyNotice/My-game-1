

function f() {
    const movepic = [
        { transform: 'translateY(0px)' },
        { transform: 'translateY(300px)' }]
     const newspaperTiming = {
        duration: 3000,
        iterations: 1,
        fill: 'forwards'

     }
     const move = document.querySelector("#pic")
    //  move.addEventListener('click', () => {
        move.animate(movepic,newspaperTiming);
   // })
}

function f2(){
    const movepic = [
        { transform: 'translateX(0px)' },
        { transform: 'translateX(200px)' }]
     const newspaperTiming = {
        duration: 2000,
        iterations: 1,
        fill: 'forwards'

     }
     const move = document.querySelector("#pic")
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
   // })
}
