//sticky bar for window scroll
window.addEventListener("scroll", () => {
    const stickyDesk = document.querySelector("#header");
    // const stickyMob = document.querySelector(".mobile-bar");

    if (window.scrollY > 0) {
        stickyDesk.classList.add("sticky");
        // stickyDesk.classList.remove("container");
    } else {
        // stickyDesk.classList.add("container");
        stickyDesk.classList.remove("sticky");
    }
})


//sidebar show/hide
const sideBar = document.querySelector("#sidebar");
const menuBar = document.querySelector("#mobile-bar .menu-bar");
const closeBar = document.querySelector("#closeMenu");

menuBar.addEventListener("click", () => {
    sideBar.classList.add("sideActive");
})
closeBar.addEventListener("click", () => {
    sideBar.classList.remove("sideActive");
})


//sub menu show/hide 
const subMenus = document.querySelectorAll("#sidebar .list-item");
for (const subMenu of subMenus) {
    subMenu.addEventListener("click", () => {
        const ssMenu = subMenu.parentElement.querySelector(".sub-menu");
        const aeroIcon = subMenu.querySelector(".fa-chevron-right");

        if (ssMenu) {
            ssMenu.classList.toggle("ss-menu");
            // ssMenu.style.visibility = "visible";
            // ssMenu.style.height = "auto";

        }
        if (aeroIcon) {
            aeroIcon.classList.toggle("aeroActive");
        }
    })
}


//submenus child menu show/hide 
const childMenus = document.querySelectorAll("#sidebar .child-item");

for (const childMenu of childMenus) {
    childMenu.addEventListener("click", () => {
        const ssMenu = childMenu.parentElement.querySelector(".child-list");
        const aeroIcon = childMenu.querySelector(".fa-chevron-right");

        if (ssMenu) {
            ssMenu.classList.toggle("ss-menu");
        }
        if (aeroIcon) {
            aeroIcon.classList.toggle("aeroActive");
        }
    })
}


//hero section btn active
const btnActive = document.querySelectorAll("#hero .nav-tabs button");

for (const btn of btnActive) {
    btn.addEventListener("click", () => {
        document.querySelector(".btn-active")?.classList.remove("btn-active");
        btn.classList.add("btn-active");
    })
}

//Initialize Swiper
let swiper1 = new Swiper(".exploreProperty", {
    // visibilityFullFit: true,
    autoResize: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".explore_next__active",
        prevEl: ".explore_prev__active ",
    },
    pagination: {
        el: ".explore-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= px;
        992: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    }
});

let testimonial = new Swiper(".testimonial", {
    // visibilityFullFit: true,
    autoResize: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".next__active",
        prevEl: ".prev__active",
    },
    pagination: {
        el: ".testimonial-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= px;
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }
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
let cityList = new Swiper(".cityList", {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: ".cityList_next__active",
        prevEl: ".cityList_prev__active ",
    },
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
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

