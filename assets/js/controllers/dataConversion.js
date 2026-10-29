import fetchPrices from "../model/fetchPrices.js";

export default async function getCurrentPrice() {
    try {
        const apiData = await fetchPrices();
        const nu = new Date();

        const aktuelData = apiData.find(item => {
            const start = new Date(item.time_start);
            const end = new Date(item.time_end);
            return nu >= start && nu < end;
        });

        if (aktuelData) {
            const start = new Date(aktuelData.time_start);
            const slut = new Date(aktuelData.time_end);

            const startTid = start.toLocaleTimeString("da-DK", {
                hour: "2-digit",
                minute: "2-digit"
            });

            const slutTid = slut.toLocaleTimeString("da-DK", {
                hour: "2-digit",
                minute: "2-digit"
            });

            return {
                pris: aktuelData.DKK_per_kWh,
                tid: startTid + " - " + slutTid
            };
        }
    } catch (error) {
        console.log("Der var en fejl", error);
    }
}


// FIND LAVEST OG HØJESTE PRIS

export async function findLowestAndHighestPrices(){
    const data = await fetchPrices()
    
    let billigste = data[0];
let dyreste = data[0];

data.forEach(item => {
    if (item.DKK_per_kWh < billigste.DKK_per_kWh) {
        billigste = item;
    }

    if (item.DKK_per_kWh > dyreste.DKK_per_kWh) {
        dyreste = item;
    }

    
}) 
return {
    billigste: billigste.DKK_per_kWh,
    dyreste: dyreste.DKK_per_kWh
}
}