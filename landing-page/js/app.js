/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let nav = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section')
const frag = document.createDocumentFragment(); 

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function smoothScroll(a) {
    //prevent default scroll motion 
    a.preventDefault();
    //get the href attribute of every anchor
    let href = this.getAttribute("href");
    //measure the displacement to href anchor  
    let offsetTop = document.querySelector(href).offsetTop;
    //set smooth scroll
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
    }


    window.onscroll = function(){myFunction()} 
    function myFunction(){
        for (let index = 1; index <= sections.length; index++){
            let sec =`section${index}`;
            let secPlus =`section${index+1}`;
            let element = document.getElementById(sec);
            let offsetTop = document.getElementById(sec).offsetTop;
            if ((index+1)<=sections.length) {
                let offsetTopPlus = document.getElementById(secPlus).offsetTop;
                if(document.body.scrollTop>=offsetTop && document.body.scrollTop < offsetTopPlus ){
                    if(element.classList.contains("your-active-class")){}
                    else {sections.forEach(function remove(ele) {ele.classList.remove('your-active-class')});
                    document.getElementById(sec).classList.add('your-active-class')}}else{};
            }else{
                if(document.body.scrollTop>=offsetTop){
                    if(element.classList.contains("your-active-class")){}
                    else {sections.forEach(function remove(ele) {ele.classList.remove('your-active-class')});
                    document.getElementById(sec).classList.add('your-active-class')}}else{};
                }
                
            }
        }




for (let index = 1; index <=sections.length; index++) {
    let liElement = document.createElement('li');
    let aElement =document.createElement('a');
    // I add (menu__link) class to every anchor
    aElement.classList.add("menu__link");
    // then add html to every anchor 
    aElement.innerHTML = `Section ${index} `;
    // setting href attribute to every anchor 
    aElement.setAttribute("href",`#section${index}`);
    //add click event for every anchor 
    aElement.addEventListener('click',smoothScroll)
    // append anchor to li 
    liElement.append(aElement);
    // append every li to fragment to increase the performance 
    frag.appendChild(liElement);
}
// add the fragment to the navigation bar
nav.appendChild(frag)

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
    