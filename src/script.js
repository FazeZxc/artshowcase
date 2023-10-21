


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


var flag = 0;
 window.addEventListener("scroll", function () {
     if (flag > 60) {
        
        document.querySelector(".visual").style.visibility = "hidden";
        
    }
    else
    {
        document.querySelector(".visual").style.visibility = "visible";
         flag ++;
        }
})


var myClock = document.getElementById("clock")

function updateTime()
{
    myClock.innerHTML = Date()
}

 

setInterval(updateTime, 1000);


var timeout;


function circleSkew() {

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        this.clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);
        timeout = setTimeout(function () {
            document.querySelector("#minicircle1").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
            
            document.querySelector("#minicircle2").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
            document.querySelector("#minicircle3").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    })
}
circleSkew();


function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.getElementById("minicircle1").style.opacity = "1";
        document.getElementById("minicircle2").style.opacity = "0.9";
        document.getElementById("minicircle3").style.opacity = "0.8";
        document.querySelector("#minicircle1").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
        document.querySelector("#minicircle2").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
        document.querySelector("#minicircle3").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}




circleMouseFollower();