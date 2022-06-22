//Activate the button in the nav-bar. 
const navLink = document.querySelectorAll("li")
let activeLink = document.getElementsByClassName("active")

for (let li of navLink) {
    li.addEventListener("click", function() {
        if(!li.classList.contains("active")) {
            activeLink[0].classList.remove("active")
            li.classList.add("active")
        }
    })
}

const readStory = document.querySelector("#story i")
const divStory = document.querySelector("#story div")
const imgStory = document.querySelector("#story img")
let activeStory = document.getElementsByClassName("story")

readStory.addEventListener("click", function() {
    if (activeStory.length != 0) {
        imgStory.classList.remove("story")
        divStory.classList.remove("story")
    } else {
        divStory.classList.add("story")
        imgStory.classList.add("story")
    }
})