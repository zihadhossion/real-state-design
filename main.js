const subMenu = document.querySelectorAll(".side-content .list-item");

for (const ele of subMenu) {
    ele.addEventListener("click", () => {
        const rightAero = document.querySelector("#sidebar .fa-chevron-right");
        const ssMenu = ele.nextElementSibling;
        ssMenu.classList.toggle("ss-menu");
        rightAero.style.transform = "rotate(90deg)";
    })
}

