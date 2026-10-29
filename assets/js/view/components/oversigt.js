import { findLowestAndHighestPrices } from "../../controllers/dataConversion.js"
import fetchPrices from "../../model/fetchPrices.js"
import hourlyPrices from "../hourlyPrices.js"

export default async function oversigt(destination, prices){
    
    const oversigt = document.createElement("section")
    const dynSection = document.getElementById("dyn")
    oversigt.id = "oversigtSektion"


    // INDE I ELEMENTET
    oversigt.innerHTML = 
    `
    <h1>oversigt</h1>
    <section>
    <div><img src="assets/img/circleoversigt.svg"><div><h2>${prices.billigste.toFixed(3)} KR</h2><p>PR. KWH</p></div><p>Laveste Pris</p></div>
    <div><img src="assets/img/circleoversigt.svg"><div><h2>${prices.dyreste.toFixed(3)} KR</h2><p>PR. KWH</p></div><p>Højeste Pris</p></div>
    </section>
    <section id="pricesByHour">
    </section>
    `
    const pricesByHour = oversigt.querySelector("#pricesByHour")
    hourlyPrices(pricesByHour, await fetchPrices())

    // APPEND TIL HTML
    destination.appendChild(oversigt)
}

export function lowestHighestDesktop(destination, prices){
    const oversigt = document.createElement("section")
    const dynSection = document.getElementById("dyn")
    oversigt.id = "oversigtSektion"

    oversigt.innerHTML = `<section>
    <div><img src="assets/img/circleoversigt.svg"><div><h2>${prices.billigste.toFixed(3)} KR</h2><p>PR. KWH</p></div><p>Laveste Pris</p></div>
    <div><img src="assets/img/circleoversigt.svg"><div><h2>${prices.dyreste.toFixed(3)} KR</h2><p>PR. KWH</p></div><p>Højeste Pris</p></div>
    </section>`
    destination.appendChild(oversigt);
}

// Jeg kan godt se hvorfor jeg skulle have lavede mindre components nu - var nødt til at lave den alligevel
export async function pricesByHourComponent(destination, name) {
    const heading = document.createElement("h1");
    heading.textContent = name;

    const pricesByHour = document.createElement("section");
    pricesByHour.id = "pricesByHour";

    destination.appendChild(heading);
    destination.appendChild(pricesByHour);

    hourlyPrices(pricesByHour, await fetchPrices());
}

