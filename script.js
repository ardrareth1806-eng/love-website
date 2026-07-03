// ===============================
//  LOVE WEBSITE JAVASCRIPT
// ===============================

// Elements
const openBtn = document.getElementById("openBtn");
const readLetter = document.getElementById("readLetter");

const hero = document.querySelector(".hero");
const envelopePage = document.querySelector(".envelope-page");
const loveNote = document.querySelector(".love-note");

// ===============================
// OPEN ENVELOPE
// ===============================

openBtn.addEventListener("click", () => {

    hero.classList.add("hidden");

    envelopePage.classList.remove("hidden");

});

// ===============================
// OPEN LETTER PREVIEW
// ===============================

readLetter.addEventListener("click", () => {

    envelopePage.classList.add("hidden");

    loveNote.classList.remove("hidden");

});

// ===============================
// CREATE FLOATING HEARTS
// ===============================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.classList.add("floating-heart");

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
        Math.random()*20 + 15 + "px";

    heart.style.animationDuration =
        Math.random()*4 + 6 + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,300);

// ===============================
// TWINKLING STARS
// ===============================

function createStar(){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random()*100+"vw";

    star.style.top = Math.random()*100+"vh";

    star.style.animationDelay =
        Math.random()*5+"s";

    document.body.appendChild(star);

}

for(let i=0;i<80;i++){

    createStar();

}

// ===============================
// RANDOM LOVE QUOTES
// ===============================

const quotes=[

"You are my favorite notification ❤️",

"Even though we're apart, you've somehow become part of everything I do. Every song reminds me of you. Every beautiful sunset makes me wonder if you're looking at the same sky. Every little achievement feels incomplete until I tell you about it.",

"I smile every time I think about you.",
  
"Every love song reminds me of you.",

"And I miss you a little more every day."

"Thank you for choosing me every single day. Thank you for loving me through the distance, through the waiting, through the late-night calls, the sleepy good mornings, and the countless "I miss you"s..",

"I love you for the person you are and the person you've almost become. I know I'm a bit late to enter your life but I want to be there for you and support you through the milestones your life is gonna throw at you. So, I promise you that I will love you until the end. I'd choose you in every lifetime over and over again",

"because you are my forever.",
"Happy Birthday to the sweetest and the sexiest gentleman I know. I promise to spend all the impending birthdays with you, Love you, Cheesecake"

];

function randomQuote(){

    const p=document.querySelector(".love-note p");

    if(!p) return;

    const random=
    Math.floor(Math.random()*quotes.length);

    p.innerHTML=quotes[random];

}

setInterval(randomQuote,5000);

// ===============================
// SPARKLE EFFECT ON MOUSE
// ===============================

document.addEventListener("mousemove",(e)=>{

    const sparkle=document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left=e.pageX+"px";

    sparkle.style.top=e.pageY+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },1000);

});
