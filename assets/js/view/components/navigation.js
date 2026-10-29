import settingsButton from "./settingsButton.js"

export default function navigation(destination){
    
    const navBar = document.createElement("nav")
    navBar.id = "navBar"

    // INDE I NAV
    navBar.innerHTML = `
    <img src="assets/img/navIcon.svg">
    <ul>
    <li><a id="oversigt">Oversigt</a></li>
    <li><a id="ligeNu">Lige Nu</a></li>
    <li><a id="historik">Historik</a></li>
    </ul>`

    // APPEND TIL HTML
    destination.appendChild(navBar)
}

export function deskTopNavBar(destination){
    
    const navBar = document.createElement("nav")
    navBar.id = "navBar"

    // INDE I NAV
    navBar.innerHTML = `
    <div><img src="assets/img/navIcon.svg"><p>ELprisen.nu</p>`

    // APPEND TIL HTML
    destination.appendChild(navBar)
    settingsButton(navBar)
}