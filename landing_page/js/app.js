//create nav element
const navContainer=document.createElement('nav');
navContainer.classList.add('nav_container');//add class nav_container
//create unordered list
const navList=document.createElement('ul');
navList.classList.add('nav_list');//add class nav_list
//select header 
const pageHead=document.querySelector('header');
pageHead.appendChild(navContainer);//append nav Container to header
navContainer.appendChild(navList);//append unordered list to nav Container
//select all sections and convert them to array form
const sectionsList=Array.from(document.querySelectorAll("section"));
let sectionName="";

/**
* @description create navbar items dynamically and append items to unordered list
*/
function createNavbarItem(){
    //
    for(sec of sectionsList){
        sectionName=sec.getAttribute('data-nav');//select section name
        //create list item
        item=document.createElement("li");
        //change content of list item , create link and set section name to the link
        item.innerHTML=`<a href="#${sec.id}">${sectionName}</a>`;
        item.classList.add("nav_link");//add nav_link class
        navList.appendChild(item);//append list item to unordered list
    }
}
createNavbarItem();//invoke createNavbarItem function

//when scrolling to approprate section the section will have active state
window.addEventListener("scroll",function(){
    //for loop to access all sections
    for(sec of sectionsList){
        //section is in the viewport 
        if(sec.getBoundingClientRect().bottom >= 120 && sec.getBoundingClientRect().top<=130){
            sec.classList.add("active");//Add an active state when a section is in the viewport.
        }
        else{
            sec.classList.remove("active");//Add an active state when a section is in the viewport
        }
    }
});


//if navbar item was click, the link should scroll to appropriate section smoothly
let navLinks = Array.from(document.querySelectorAll("li a")); //select all navbar link
for (let i = 0 ; i < navLinks.length; i++) {
    let link=navLinks[i].getAttribute("href");//get link destination
    //add evwnt click to the link
    navLinks[i].addEventListener('click' , function(page){
            page.preventDefault(); //Prevent the action that normally occurs
            document.querySelector(`${link}`).scrollIntoView({behavior:"smooth"});//scroll to the section smoothly                   
            } , false ) ; 
}


