//sticky bar for window scroll
window.addEventListener("scroll", () => {
    const stickyBar = document.querySelector("#header");

    if (window.scrollY > 10) {
        stickyBar.classList.add("sticky");
    } else {
        stickyBar.classList.remove("sticky");
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

