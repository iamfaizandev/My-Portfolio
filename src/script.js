
function Clock(){
    var now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleTimeString();
    document.getElementById("date").innerHTML = now.toLocaleDateString();
}
function bodyload(){
    setInterval(Clock,1000);
    var date = new Date();
    var hrs = date.getHours();
   
    if (hrs>0 && hrs<12) {
        status.innerHTML = "Good Morning";
      
    } else if (hrs>12 && hrs<17) {
        status.innerHTML = "Good Afternoon";
      
    } else if (hrs>17 && hrs<24) {
        status.innerHTML = "Good Evening";
       
    }
}

// ==============================
// -----------Hamburger---------------
// ==============================

burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
});

// ==============================
// -----------Typing Words---------------
// ==============================
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Full-Stack Web Developer", "Web Desginer", "Programmer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});




//const form = document.getElementById("Form-Message").value;
// const email = document.getElementById("email").value;
// const contact = document.getElementById("contact").value;
// const txtmsg = document.getElementById("txtMsg").value;

//  onsubmit = e =>{
//   fetch()
//   .then(response =>{
//     txtmsg.innerHTML = "Message Sent Successfully"
//     setTimeout(function(){
//       txtmsg.innerHTML=""
//     },3000)
//     form.reset()
//   })
// };
