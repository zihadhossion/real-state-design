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

const btnActive = document.querySelectorAll("#home .nav-tabs button");

for (const btn of btnActive) {
    btn.addEventListener("click", () => {
        document.querySelector(".btn-active")?.classList.remove("btn-active");
        btn.classList.add("btn-active");
    })
}
//Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inOut-ani');
            return;
        }
        entry.target.classList.remove('inOut-ani');
    });
});

const exploreItem = document.querySelectorAll('#explore-property .in-out');

// Loop over the elements and add each one to the observer
exploreItem.forEach((element) => observer.observe(element));