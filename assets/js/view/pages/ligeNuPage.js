import ligeNu from "../components/ligeNu.js"
import navigation from "../components/navigation.js"
import settingsButton from "../components/settingsButton.js"
import dyn from "../components/dyn.js"
import footer from "../components/footer.js"
import getCurrentPrice from "../../controllers/dataConversion.js"

export default async function ligeNuPage(){
    const dynSection = document.getElementById("dyn")
        dynSection.innerHTML = ""
        const currentPrice = getCurrentPrice()
        const data = await getCurrentPrice()
        ligeNu(dynSection, data.pris, data.tid)
}