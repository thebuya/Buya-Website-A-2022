// >>   /-MENU SHOW Y HIDDEN //
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // Menu Show
/* Validate if Constant Exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// Menu Hidden
/* Validate if Constant Exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


// >>   /-REMOVE MENU MOBILE //
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, 
    // we remove the show-menu class.
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))











































//HOME-PAGE-GALLERY IMAGE CHANGE
var image =  document.getElementById("gallery-main");
var title = document.getElementById("titlegallery");
var caption = document.getElementById("captiongallery");

// if !(image.getAttribute('src') == "./assets/images/whole_truth")
function changeImageg6() {
        image.style.height="";
        image.src = "./assets/images/faith.jpg";
        title.innerText="THE MUSTARD SEED OF FAITH [2023]";
        caption.innerText="For as long as you have faith as big as a mustard seed, you will move mountains.";
    }
function changeImageg1() {
        image.style.height="";
        image.src = "./assets/images/depress";
        title.innerText="DEPRESSION [2022]";
        caption.innerText="In the face of our demons, even the most obvious answer is hard to reach.";
    }
function changeImageg2() {
        image.style.height="";
        image.src = "./assets/images/suicide";
        title.innerText="SUICIDAL VIEW [2022]";
        caption.innerText="..What if they are going to a better world...";
    }
function changeImageg3() {
    image.style.height=""; //40vh
        image.src = "./assets/images/ianangeline.jpg";
        title.innerText="MARRIAGE [2022]";
        caption.innerText="";
    }
    function changeImageg4() {
        image.style.height="";
        image.src = "./assets/images/whole_truth";
        title.innerText="THE WHOLE POINT [2022]";
        caption.innerText="It takes more than two sides to see";
    }
    function changeImageg5() {
        image.style.height="";
        image.src = "./assets/images/dp.jpg";
        title.innerText="NEW BEGINNINGS [2022]";
        caption.innerText="";
    }













/*BACK TO TOP*/





//Changing Nav-Link Color
var navButtons = document.querySelectorAll(".buya__nav .buya__nav_list .nav__link");
function changeNav(navIndex){
    navButtons.forEach(function(navnode){
        navnode.style.color="";
    })
    navButtons[navIndex].style.color="#DA2727";
}



/*

// >>   /-SHOW SCROLL UP //
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

*/








/*
//CONTACT-FORM CONTAINER
document.querySelector('#contact-btn').onclick = () =>{
    document.querySelector('.contact-form-container').classList.toggle('active');
}

document.querySelector('#close-contact-form').onclick = () =>{
    document.querySelector('.contact-form-container').classList.remove ('active');
}
*/





