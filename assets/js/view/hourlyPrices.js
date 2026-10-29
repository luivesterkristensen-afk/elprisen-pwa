export default async function hourlyPrices(destination, array){
    
    

    array.forEach(element => {
        
        const tid = new Date(element.time_start).toLocaleTimeString("da-DK", {
    hour: "2-digit",
    minute: "2-digit"
    });

        const div = document.createElement("div")
        div.innerHTML = `<p>kl. ${tid}</p><p>${element.DKK_per_kWh.toFixed(3)} kr</p>`
        
        destination.appendChild(div)
        
    });
}