let inpday=document.getElementById('day');
let inpmonth=document.getElementById('month');
let inpyear=document.getElementById('year');
let outday=document.getElementById('answer3');
let outmonth=document.getElementById('answer2');
let outyear=document.getElementById('answer1');

 let button=document.querySelector('button');

 const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

 let date=new Date();
 let day=date.getDate();
 let month=1+ date.getMonth(); 
 let year=date.getFullYear();

 function vailed()
 {
    let inputs=document.querySelectorAll("input");
    let val=true;
    inputs.forEach((i)=>{
        const parent=i.parentElement;
        if(!i.value)
        {
            i.style.borderColor="red";
            parent.querySelector("small").innerText="this field is required";
            val=false;
        }else if(inpday>31)
        {
            inpday.style.borderColor="red";
            parent.querySelector("small").innerText="must be vailed day";
            val=false;
        }
        else if(inpmonth>12)
        {
            inpday.style.borderColor="red";
            parent.querySelector("small").innerText="must be vailed month";
            val=false;
        }else
        {
            i.style.borderColor="balck";
            parent.querySelector("small").innerText="";
            val=true;
        }
    });
    return val;
 }
function vailsubmit(e)
{
    e.preventDefault();
    if(vailed())
    {
        if(inpday.value>day)
        {
            day=day+months[month-1];
            month-=1;
        }
         if(inpmonth.value>month)
        {
            month=month+12;
            year-=1;
        }

        const d=day-inpday.value;
        const m=month-inpmonth.value;
        const y=year-inpyear.value;

        outday.innerHTML=d;
        outmonth.innerHTML=m;
        outyear.innerHTML=y;
    }
}
button.addEventListener("click",vailsubmit);