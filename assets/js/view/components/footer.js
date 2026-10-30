 export default function footer(destination){
    const footer = document.createElement("footer")
     footer.id = "footer"

     // INDE I ELEMENTET
     footer.innerHTML = 
     `
     <h5>Priserne er <span>ex. moms</span> og afgifter<br>
Du vises lige nu priserne for <span>Øst</span> Danmark</h5>
     `

     // APPEND TIL HTML
     destination.appendChild(footer)
 }

  export function alternateFooter(destination){
    const footer = document.createElement("footer")
     footer.id = "alternateFooter"

     // INDE I ELEMENTET
     footer.innerHTML = 
     `
     <div>
     <p>alle priser er <span>eksl. moms</span> og<br> afgifter.</p>
     <p>Du vises lige nu priserne for region<br> <span>øst danmark</span></p>
     </div>
     `

     // APPEND TIL HTML
     destination.appendChild(footer)
 }