import fetchPrices from "../../model/fetchPrices.js";
import hourlyPrices from "../hourlyPrices.js";

export default async function historik(destination){
    const historik = document.createElement("section")
    historik.id = "historikSektion"

    // INDE I ELEMENTET
    historik.innerHTML = 
    `
    <h1>Historik</h1>
    <section id="datePicker">
    <input type="date">
    </section>
    <h2 id="selectedDateHeading">Vælg en dato</h2>
    <section class="pricesByHour">
    
    </section>
    `

    const datePicker = historik.querySelector("input");
    const pricesByHour = historik.querySelector(".pricesByHour");
    const heading = historik.querySelector("#selectedDateHeading");

    datePicker.addEventListener("change", async () => {
    const selectedDate = datePicker.value;
    pricesByHour.innerHTML = "";

    if (!selectedDate) return;

    heading.textContent = `Elpriserne d. ${selectedDate}`;

    try {
        const data = await fetchPrices(selectedDate);
        hourlyPrices(pricesByHour, data);
    } catch (error) {
        pricesByHour.textContent = error.message;
    }
})

    // APPEND TIL HTML
    destination.appendChild(historik)
}

