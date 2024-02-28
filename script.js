var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
document.addEventListener("DOMContentLoaded", function() {
    var heading = document.getElementById("heading");
    heading.classList.add("active");
});
function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
circleMouseFollower();
// firstPageAnim();

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

function handleMouseEvents(elementClass, imgSelector) {
    document.querySelectorAll(elementClass).forEach(function (elem) {
        var rotate = 0;
        var diffrot = 0;

        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(elem.querySelector(imgSelector), {
                opacity: 0,
                ease: "power3.inOut", // Updated easing function
                duration: 0.5,
            });
        });

        elem.addEventListener("mousemove", function (dets) {
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;

            gsap.to(elem.querySelector(imgSelector), {
                opacity: 1,
                ease: "power3.inOut", // Updated easing function
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
            });
        });
    });
}

// Usage for elem1
handleMouseEvents(".elem1", "img");
handleMouseEvents(".elem2","img")
// Usage for elem2
handleMouseEvents(".elem", "img");
function downloadPDF(elementClass, pdfUrl, downloadFileName) {
    document.querySelectorAll(elementClass).forEach(function (elem) {
        elem.addEventListener("click", function () {
            var link = document.createElement('a');
            link.href = pdfUrl;
            link.download = downloadFileName;
            link.click();
        });
    });
}

// Usage for elem


// Usage for elem1
downloadPDF(".elem1", "https://drive.google.com/file/d/15if1G23T_Xbr0lh0_9ssmALLx0Rvpocx/view?usp=sharing.pdf", "shubhaminternship.pdf");
downloadPDF(".elem2", "https://drive.google.com/file/d/1Yp09Y9cn5SnDArSrVhjRx0euUfJnhqEd/view?usp=sharing", "shubhamresume.pdf");

function updateCurrentDateTime() {
  var currentDateTimeElement = document.getElementById("dte");

  if (currentDateTimeElement) {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var formattedDateTime = currentDate.toLocaleDateString('en-US', options);

    dte.innerHTML = formattedDateTime;
  }
}


document.addEventListener("DOMContentLoaded", function () {
  updateCurrentDateTime();
});