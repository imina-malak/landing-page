//Definition of Global Variables
let nav = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");
const frag = document.createDocumentFragment();
//Helper Functions
function smoothScroll(ele){
    //prevent default scroll motion
    ele.preventDefault();
    //get the href attribute for every anchor
    let href = this.getAttribute("href");
    //measure the displacement to href of the anchor
    let offsetTop = document.querySelector(href).offsetTop;
    //set smooth scroll motion
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
    };
//make the motion in the section while scrolling 
    window.onscroll = function(){ScrollFunction()}
    function ScrollFunction(){
        for (let index = 1; index <= sections.length; index++){
            //define the first term to determine the range of sections
            let sec =`section${index}`;
            //define the second term to determine the range of sections
            let secPlus =`section${index+1}`;
            //get the id of first term
            let element = document.getElementById(sec);
            //measure the displacement to id of the first term
            let offsetTop = document.getElementById(sec).offsetTop;
            //see if the finail term is less or equal to the number of sections
            if ((index+1)<=sections.length){
                //measure the displacement to id of the second term
                let offsetTopPlus = document.getElementById(secPlus).offsetTop;
                //compare if the scrollTop of the body is between the first and second term
                if(document.body.scrollTop>=offsetTop && document.body.scrollTop < offsetTopPlus ){
                    /*if yes compare we see if it has an active class or not and if yes don't do anything
                    and if not add the active class*/
                    if(element.classList.contains("your-active-class")){
                    }else {sections.forEach(function remove(ele) {ele.classList.remove('your-active-class');});
                    document.getElementById(sec).classList.add('your-active-class');};}else{};
            }else{
                if(document.body.scrollTop>=offsetTop){
                    if(element.classList.contains("your-active-class")){}
                    else {sections.forEach(function remove(ele) {ele.classList.remove('your-active-class');});
                    document.getElementById(sec).classList.add('your-active-class');};}else{};
                }
            }
        }

for (let index = 1; index <=sections.length; index++){
    //create li element
    let liElement = document.createElement('li');
    //create anchor element
    let anchorElement =document.createElement('a');
    // I add (menu__link) class to every anchor
    anchorElement.classList.add("menu__link");
    // then add html to every anchor
    anchorElement.innerHTML = `Section ${index}`;
    // setting href attribute to every anchor
    anchorElement.setAttribute("href",`#section${index}`);
    //add click event for every anchor
    anchorElement.addEventListener('click',smoothScroll);
    // append anchor to li
    liElement.append(anchorElement);
    // append every li to fragment to increase the performance
    frag.appendChild(liElement);
}
// add the fragment to the navigation bar
nav.appendChild(frag);