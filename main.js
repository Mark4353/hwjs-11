const minute = 60;

const timer1 = updateTimer(()=>{
    console.log(`Залишилось: ${minute} хвилин`);    
    if (minute === 30) {
        console.log("Залишилось менше половини часу");
    }
    if (minute > 0) {
        minute--;
        setTimeout(updateTimer, 60000); 
    }
}) ;
updateTimer();

