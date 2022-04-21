$(document).ready(function () {
    
    $(".speakers").owlCarousel({
        nav: true,
        responsive : {
            0: {
                items:2,
            },
            780 :{
                items:3,
            },
            980 :{
                items:4,
            }
        }
        
      });
});

//get navbar elements
const navbar = {
    button: document.querySelector(".main-nav-elems button"),
    nav: document.querySelector(".main-nav"),
    menu: document.querySelector(".menu"),
    secondary_nav: document.querySelector(".main-nav-elems"),
}

//get schedule elements
const schedule = {
    buttons : document.querySelectorAll(".schedule-nav a"),
    days : document.querySelectorAll(".schedule-day")
}

//get form elements
const form = {
    exitButton: document.querySelector(".form-container a"),
    page: document.querySelector(".from-page"), 
}

//declare scroll function
function scrollSelector(e){
    // console.log(window.pageYOffset)
    if(window.pageYOffset > 65) navbar.nav.classList.add("fixed");
    else navbar.nav.classList.remove("fixed");
}
//declare hide days function
function hideDays(){
    schedule.days.forEach((elem)=>{
        elem.classList.remove("active")
    })
    schedule.buttons.forEach((elem)=>{
        elem.classList.remove("active")
    })
}

//handle scroll
document.onscroll = scrollSelector;
scrollSelector();

//handle active schedule
schedule.buttons.forEach(function(elem,i){
    elem.onclick = function (){
        hideDays()
        elem.classList.add("active")
        schedule.days[i].classList.add("active")
        //console.log(schedule.days[i])
    }
})
//handle form display
form.exitButton.onclick = function (){
    form.page.classList.remove("active")
}
navbar.button.onclick = function (){
    form.page.classList.add("active")
}
active = false
navbar.menu.onclick = function(){
     if (active == false){
        navbar.secondary_nav.classList.add('active')
         active = true
     }else{
        navbar.secondary_nav.classList.remove('active')
        active = false
     }
}

