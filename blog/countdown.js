const endDate = "13 July 2023 11:41 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate);
    const now = new Date()
   // console.log(end,now);
    const diff = (end - now)/1000;
    if(diff < 0) return;
    console.log(diff);
   inputs[0].value = (Math.floor(diff/3600/24));          //number of days
   inputs[1].value = (Math.floor(diff/3600)% 24);         //number of hours
   inputs[2].value = (Math.floor(diff/60)%60);            //number of minutes
   inputs[3].value = (Math.floor(diff)%60);



    
}

clock()
setInterval(
    () =>{
        clock()
    },1000
)