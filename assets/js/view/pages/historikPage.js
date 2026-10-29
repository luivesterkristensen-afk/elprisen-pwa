import historik from "../components/historik.js"
import navigation from "../components/navigation.js"
import settingsButton from "../components/settingsButton.js"
import dyn from "../components/dyn.js"
import footer from "../components/footer.js"

export default function historikPage(){
    const dynSection = document.getElementById("dyn")
    dynSection.innerHTML = ""

    historik(dynSection)
}