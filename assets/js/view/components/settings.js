export default function settings(destination){
    const settings = document.createElement("section")
    settings.id = "settings"

    // INDE I ELEMENTET
    settings.innerHTML = 
    `
    <p>Indstillinger</p>
    <section>
    <div><p>Priser inkl. Moms</p><input type="checkbox"></div>
    <div><p>Laveste pris alarm</p><input type="checkbox"></div>

    </section>
    `

    // APPEND TIL HTML
    destination.appendChild(settings)
}