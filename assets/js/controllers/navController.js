import navigation from "../view/components/navigation.js";
import oversigtPage from "../view/pages/oversigtPage.js";
import historikPage from "../view/pages/historikPage.js";
import ligeNuPage from "../view/pages/ligeNuPage.js";
import settingsButton from "../view/components/settingsButton.js";
import settings from "../view/components/settings.js";
import settingsPage from "../view/pages/settingsPage.js";

export default function addEventListenersToNavigation(){
    const oversigtButton = document.getElementById("oversigt")
    const historikButton = document.getElementById("historik")
    const ligeNuButton = document.getElementById("ligeNu")
    const settingsButton = document.getElementById("settingsBtn")

    oversigtButton.addEventListener("click", ()=>{
        oversigtPage()
        ligeNuButton.classList.remove("active")
        historikButton.classList.remove("active")
        oversigtButton.classList.add("active")
    })

     ligeNuButton.addEventListener("click", ()=>{
        ligeNuPage()
        oversigtButton.classList.remove("active")
        historikButton.classList.remove("active")
        ligeNuButton.classList.add("active")
    })

    historikButton.addEventListener("click", ()=>{
        historikPage()
        oversigtButton.classList.remove("active")
        ligeNuButton.classList.remove("active")
        historikButton.classList.add("active")
    })

    settingsButton.addEventListener("click", ()=>{
        settingsPage()
    })
}