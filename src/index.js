import loadMenu from "./menu.js"
import loadAbout from "./about.js"

function loadHome() {
    const homeContent = document.createElement("div")
    homeContent.setAttribute("class", "homeContent")

    const hdHome = document.createElement("h1")
    const paragraphHome = document.createElement("div")

    hdHome.textContent = "Welcome to steve's great ramen restaurant"
    paragraphHome.textContent = "We have a great selection of different tupes of ramen . If you want to see our menu please choose the menu option. If you want to learn about the history and where we are located, choose the about option. Thank you."

    homeContent.append(hdHome)
    homeContent.append(paragraphHome)
    return homeContent
}

const contentDiv = document.getElementById("content")

contentDiv.append(loadHome())