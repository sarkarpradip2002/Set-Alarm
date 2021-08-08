var bell=new Audio('bell_4.mp3');

function ringbell(){
    bell.play();
}

function setalarm(){
    let date=new Date();
    let gettime=document.querySelector('.settime').value;
    let settime=new Date(gettime);
    let timediff=settime-date;
    if(timediff>=0)
    {
        setTimeout(()=>{
            console.log("bell ringing");
            ringbell();
        },timediff);
    }
    if(timediff<0 || gettime=="")
    {
       let redmarking=document.getElementById('redmarking');
       let replace=document.querySelector('.settime');
       replace.classList.add('is-invalid');
       redmarking.classList.add('invalid-feedback');
       redmarking.innerText="Please put a future date to set alarm";
  }
}