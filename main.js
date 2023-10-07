const subMenu = document.querySelectorAll(".side-content .list-item");

for (const ele of subMenu) {
    ele.addEventListener("click", () => {
        const ssMenu = ele.nextElementSibling;
        ssMenu.style.transform = "scaleY(1)";
        ele.parentElement.style.height = "10vh";
    })
}

