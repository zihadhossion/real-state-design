//sticky bar for window scroll
window.addEventListener("scroll", () => {
    const stickyDesk = document.querySelector(".desktop-bar");
    // const stickyMob = document.querySelector(".mobile-bar");

    if (window.scrollY > 0) {
        stickyDesk.classList.add("sticky");
    } else {
        stickyDesk.classList.remove("sticky");
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
let swiper1 = new Swiper(".exploreProperty", {
    slidesPerView: 6,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next__active",
        prevEl: ".prev__active",
    },
    pagination: {
        el: ".explore-pagination",
        clickable: true,
    },
});
let swiper2 = new Swiper(".featuredList", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next_active",
        prevEl: ".prev_active",
    },
    pagination: {
        el: ".featuredList-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});
let swiper3 = new Swiper(".cityList", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
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