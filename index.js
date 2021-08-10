var bell=new Audio('bell_4.mp3');

function ringbell(){
    bell.play();
}

function setalarm(){
    let date=new Date();
    let gettime=document.querySelector('.settime').value;
    let settime=new Date(gettime);
    let timediff=settime-date;
    console.log(timediff);
    if(timediff>654623625)
    {
        let redmarking=document.getElementById('redmarking');
        let replace=document.querySelector('.settime');
        replace.classList.add('is-invalid');
        redmarking.classList.add('invalid-feedback');
        redmarking.innerText="Please set the alarm within seven days from now";
    }
    else if(timediff>=0)
    {
        let redmarking=document.getElementById('redmarking');
        let replace=document.querySelector('.settime');
        replace.classList.remove('is-invalid');
        redmarking.classList.remove('invalid-feedback');
        replace.classList.add('is-valid');
        redmarking.classList.add('valid-feedback');
        redmarking.innerText="Your alarm is set correctly";
        setTimeout(()=>{
            ringbell();
        },timediff);
    }
    else if(timediff<0)
    {
       let redmarking=document.getElementById('redmarking');
       let replace=document.querySelector('.settime');
       replace.classList.add('is-invalid');
       redmarking.classList.add('invalid-feedback');
       redmarking.innerText="Please put a future date to set alarm";
  }
  else if(gettime=" ")
  {
    let redmarking=document.getElementById('redmarking');
       let replace=document.querySelector('.settime');
       replace.classList.add('is-invalid');
       redmarking.classList.add('invalid-feedback');
       redmarking.innerText="Please put a time to set the alarm"; 
       console.log("Inside null time")  ;
  }
}