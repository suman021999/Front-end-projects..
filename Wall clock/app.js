const deg=6
const hr=document.querySelector('#hr')
const mn=document.querySelector('#mn')
const se=document.querySelector('#se')

setInterval(()=>{

    let day=new Date();
    let hh=day.getHours()*30;
    let mm=day.getMinutes()*deg
    let ss=day.getSeconds()*deg
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    // hr.style.transform=`rotatez(${(hh)+(mm/12)}deg)`;
    mn.style.transform=`rotatez(${mm}deg)`;
    se.style.transform=`rotatez(${ss}deg)`;
})

