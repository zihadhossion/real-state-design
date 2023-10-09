//sticky bar for window scroll
window.addEventListener("scroll", () => {
    const stickyDesk = document.querySelector(".desktop-bar");
    const stickyMob = document.querySelector(".mobile-bar");

    if (window.scrollY > 0) {
        stickyDesk.classList.add("sticky");
        stickyMob.classList.add("sticky");

    } else {
        stickyDesk.classList.remove("sticky");
        stickyMob.classList.remove("sticky");
    }
})


//sidebar show/hide
const sideBar = document.querySelector(".sidebar");
const menuBar = document.querySelector(".mobile-bar .menu-bar");
const closeBar = document.querySelector("#closeMenu");

menuBar.addEventListener("click", () => {
    sideBar.classList.add("sideActive");
})
closeBar.addEventListener("click", () => {
    sideBar.classList.remove("sideActive");
})



//sub menu show/hide 
const subMenu = document.querySelectorAll(".side-content .list-item");
const rightAeros = document.querySelectorAll(".sidebar .fa-chevron-right");

for (const ele of subMenu) {
    ele.addEventListener("click", () => {
        const ssMenu = ele.nextElementSibling;
        ssMenu.classList.toggle("ss-menu");

        for (const aero of rightAeros) {
            aero.classList.toggle("aeroActive");
        }
    })
}

