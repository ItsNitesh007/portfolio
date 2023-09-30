
// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// JavaScript function to automatically resize the textarea
function autoResize(textarea) {
    textarea.style.height = 'auto'; // Reset the height to auto
    textarea.style.height = (textarea.scrollHeight) + 'px'; // Set the new height based on content
}

// Call the autoResize function initially
autoResize(document.getElementById('textareamsg'));