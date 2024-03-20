// AND operator && 
let hasPen = true
let hasPaper = true

// if (hasPaper && hasPen){
//     console.log("I have pen and paper , i can draw now");
// }

// OR Operator || 
let isSaturday = true
let isSun = false

// if(isSaturday || isSun){
//     console.log("now is weekend/dayoff");
// }

// Not operator !
let isSleepy = false
// if(isSleepy){
//     console.log("i want to sleep");
// }

if ((hasPen && hasPaper)&&(isSaturday || isSun)&&(!isSleepy)){
    console.log("its good timing for play");
}