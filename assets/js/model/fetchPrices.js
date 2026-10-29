export default async function fetchPrices(selectedDate) {
    const nu = new Date();
    const aar = nu.getFullYear();
    const maaned = String(nu.getMonth() + 1).padStart(2, "0");
    const dag = String(nu.getDate()).padStart(2, "0");


    const dato = selectedDate || `${aar}-${maaned}-${dag}`;
    const [year, month, day] = dato.split("-");


    const response = await fetch(
    `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_DK2.json`
);

    if (!response.ok) {
        throw new Error("Kunne ikke hente priser for denne dato");
    }

    return response.json();
}