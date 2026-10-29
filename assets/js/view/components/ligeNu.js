export default function ligeNu(destination, pris, tid){
    const ligeNu = document.createElement("section")
    ligeNu.id = "ligeNuSektion"

    // INDE I ELEMENTET
    ligeNu.innerHTML = 
    `
    <h1>elprisen lige nu</h1><section><img src="assets/img/ligeNuBillede.svg"><div><h2>${pris.toFixed(3)} KR</h2><p>PR. KWH</p></div></section><h3>${tid}</h3>
    `

    // APPEND TIL HTML
    destination.appendChild(ligeNu)
}