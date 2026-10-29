import oversigt from "../components/oversigt.js"
import navigation from "../components/navigation.js"
import settingsButton from "../components/settingsButton.js"
import dyn from "../components/dyn.js"
import footer from "../components/footer.js"
import { findLowestAndHighestPrices } from "../../controllers/dataConversion.js"

export default async function oversigtPage(){
    const dynSection = document.getElementById("dyn")
        dynSection.innerHTML = ""

        const prices = await findLowestAndHighestPrices()
    
        oversigt(dynSection, prices)
    
}