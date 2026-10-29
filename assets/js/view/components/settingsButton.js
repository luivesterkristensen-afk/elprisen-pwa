export default function settingsButton(destination){
    const settingsButton = document.createElement("div")
    settingsButton.id = "settingsBtn"

    // INDE I ELEMENTET
    settingsButton.innerHTML = `<img src="assets/img/settings.svg">`

    // APPEND TIL HTML
    destination.appendChild(settingsButton)
}