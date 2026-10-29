import navigation, { deskTopNavBar } from "./view/components/navigation.js";
import dyn from "./view/components/dyn.js";
import ligeNu from "./view/components/ligeNu.js";
import oversigt, { lowestHighestDesktop, pricesByHourComponent } from "./view/components/oversigt.js";
import historik from "./view/components/historik.js";
import settings from "./view/components/settings.js";
import settingsButton from "./view/components/settingsButton.js";
import footer, { alternateFooter } from "./view/components/footer.js";
import addEventListenersToNavigation from "./controllers/navController.js"
import buildDesktopDivs from "./view/components/desktopDivs.js";
import fetchPrices from "./model/fetchPrices.js"
import getCurrentPrice, { findLowestAndHighestPrices } from "./controllers/dataConversion.js";
import historikPage from "./view/pages/historikPage.js";
const app = document.getElementById("app")


async function init(){
    

    if (window.innerWidth < 1000) {

  

navigation(app)
settingsButton(app)
dyn(app)

const dynSection = document.getElementById("dyn")
const data = await getCurrentPrice()

if (data) {
    ligeNu(dynSection, data.pris, data.tid)
} else {
    dynSection.innerText = "Kunne ikke hente den aktuelle elpris.";
}
footer(app)

addEventListenersToNavigation()

// JEG SKAL HAVE LAVET SÅDAN AT HVIS MAN ER PÅ pc, SÅ SKAL DEN LOADE ALLE SAMMEN
// Hvis jeg er på PC, append nav og append tre diver til dyn sektion og så smide hver page ind i hver div. og lav en modal med settings
} else {
    deskTopNavBar(app)
    dyn(app)
    const dynSection = document.getElementById("dyn")
    const data = await getCurrentPrice()

    const { DesktopDiv1, DesktopDiv2, DesktopDiv3 } = buildDesktopDivs();
    dynSection.appendChild(DesktopDiv1)
    dynSection.appendChild(DesktopDiv2)
    dynSection.appendChild(DesktopDiv3)

    if (data) {
    ligeNu(DesktopDiv1, data.pris, data.tid);
} else {
    DesktopDiv1.innerText = "Kunne ikke hente den aktuelle elpris.";
}

    const prices = await findLowestAndHighestPrices()
        lowestHighestDesktop(DesktopDiv1, prices)
        alternateFooter(DesktopDiv1)
        
        await pricesByHourComponent(DesktopDiv2, "OVERSIGT");
        historik(DesktopDiv3)

}}

init()
findLowestAndHighestPrices()

