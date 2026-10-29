export default function buildDesktopDivs(){
        const DesktopDiv1 = document.createElement("div")
        const DesktopDiv2 = document.createElement("div")
        const DesktopDiv3 = document.createElement("div")
    
        DesktopDiv1.id = "desktopDiv1"
        DesktopDiv2.id = "desktopDiv2"
        DesktopDiv3.id = "desktopDiv3"
    
        return { DesktopDiv1, DesktopDiv2, DesktopDiv3 };
}