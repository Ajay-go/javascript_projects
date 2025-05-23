let hour = 0;
let min = 59;
let sec = 0;
let ms = 0;

let showtime = document.getElementById("time");
let start = document.getElementById("start");
let end = document.getElementById("stop");
function timer(){
   ms += 1;
   if(ms == 10){
      ms = 0;
      sec += 1;
   }
   if(sec == 60){
      sec = 0;
      min += 1;
   }
   if(min == 60){
      min = 0;
      hour ++;
   }
   showtime.innerText = `${hour}-hour,${min}-min,${sec}-sec,${ms}-ms`;

}

function start_time(){
   let interval = setInterval(timer,100);
   end.addEventListener("click",()=>{
   clearInterval(interval);
})
}

start.addEventListener("click",start_time);

