let EndDate = new Date("21 sep,2024 15:00:00").getTime();
let StartDate = new Date().getTime();

function updateTimer() {
  let TimeNow = new Date().getTime();
  let DistanceCovered = TimeNow - StartDate;
  let DistancePending = EndDate - TimeNow;

  //calculate days, hr, min and sec.
  // ms in 1 day=24*60*60*1000ms
  let Days = Math.floor(DistancePending / (24 * 60 * 60 * 1000));
  let hr = Math.floor(DistancePending%(24*60*60*1000) / (60 * 60 * 1000));
  let min = Math.floor(DistancePending%(60*60*1000) / (60 * 1000));
  let sec = Math.floor(DistancePending%(60*1000) / 1000);

  document.getElementById("days").innerHTML=Days
  document.getElementById("hr").innerHTML=hr
  document.getElementById("min").innerHTML=min
  document.getElementById("sec").innerHTML=sec


  // width percentage for progress bar in real time

let totalDistance=EndDate-StartDate;
let percntage=(DistanceCovered/totalDistance)*100   //multiply by 100 for percentage

document.getElementById("progress-value").style.width=percntage+"%"


//for negetive date blocking

if (DistancePending < 0) {
  clearInterval(interval); 
  document.getElementById("progress-value").style.width = "100%"; 
  document.getElementById("days").innerHTML = 0;
  document.getElementById("hr").innerHTML = 0;
  document.getElementById("min").innerHTML = 0;
  document.getElementById("sec").innerHTML = 0;
}


}
let interval=setInterval(updateTimer, 1000);
