import settings from "../components/settings.js"
import navigation from "../components/navigation.js"
import settingsButton from "../components/settingsButton.js"
import dyn from "../components/dyn.js"
import footer from "../components/footer.js"

export default function settingsPage(){
    const dynSection = document.getElementById("dyn")
        dynSection.innerHTML = ""
    
        settings(dynSection)
}