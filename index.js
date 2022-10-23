let header = document.querySelector(".header");
let landings = document.querySelector(".down-from-landings");
let pages = document.querySelector(".down-from-pages");
let blog = document.querySelector(".down-from-blog");
let contact = document.querySelector(".contacts-menu");
let caseStudy = document.querySelector(".case-menu");
let career = document.querySelector(".career-menu");
let pricing = document.querySelector(".pricing-menu");
let eCommerce = document.querySelector(".e-commerce-menu");
let account = document.querySelector(".account-menu");
let utility = document.querySelector(".utility-menu");
let upperMenuArray = [landings, pages, blog];
let lowerMenuArray = [contact, caseStudy, career, pricing, eCommerce, account, utility];
let arrayOfIndexes1 = [0, 1, 2];
let arrayOfIndexes2 = [0, 1, 2, 3, 4, 5, 6];
let upperMenuIdArray = [2, 4, 6];
let lowerMenuIdArray = [8, 10, 12, 14, 16, 18, 20];

function changeToShow(selector) {
    selector.classList.contains("hide") ? selector.classList.replace("hide", "show") : null
};

function changeToHide(selector) {
    selector.classList.contains("show") ? selector.classList.replace("show", "hide") : null
};

function angleUp(selector) {
    selector.classList.replace("fa-angle-down", "fa-angle-up");
};

function angleRight(selector) {
    selector.classList.replace("fa-angle-down", "fa-angle-right");
};

function angleDown(selector) {
    selector.classList.replace("fa-angle-up", "fa-angle-down");
    selector.classList.replace("fa-angle-right", "fa-angle-down");
};

header.addEventListener("mouseover", (e) => {
    let id = "";
    if (e.target.id) {
        parseInt(e.target.id) % 2 == 0 ? id = e.target.id : id = parseInt(e.target.id) + 1;
        if (id <= 6) {
            angleUp(document.getElementById(id));
        }
        if (id > 6) {
            angleDown(document.getElementById(id));
        }
    }

    if (id < 7) {
        let newId;

        if (id == 2) {
            newId = id - 2;
        } else { newId = id / 2 - 1 }

        if (newId > -1) {
            changeToShow(upperMenuArray[newId]);

            let arrayOfIndexes3 = arrayOfIndexes1.filter(index => index !== newId);
            let upperMenuIdArrayNew = upperMenuIdArray.filter(i => i !== id);

            arrayOfIndexes3.forEach(element => {
                changeToHide(upperMenuArray[element]);
            });
            upperMenuIdArrayNew.forEach(i => {
                angleDown(document.getElementById(i));
            });
        }
    }
    else if (id > 7) {
        let newId;

        if (id == 8) {
            newId = id - 8;
        } else { newId = id / 2 - 4 }

        changeToShow(lowerMenuArray[newId]);

        let arrayOfIndexes4 = arrayOfIndexes2.filter(index => index !== newId);

        arrayOfIndexes4.forEach(element => {
            changeToHide(lowerMenuArray[element]);
        });
    }
});

header.addEventListener("mouseleave", () => {
    changeToHide(landings);
    changeToHide(pages);
    changeToHide(blog);
    upperMenuIdArray.forEach(item => {
        angleDown(document.getElementById(item));
    });
    lowerMenuIdArray.forEach(item => {
        angleRight(document.getElementById(item));
    });
    lowerMenuArray.forEach(item => {
        changeToHide(item);
    });
});

document.querySelectorAll(".pages-menu").forEach(item => {
    item.addEventListener("mouseleave", () => {
        lowerMenuIdArray.forEach(item => {
            angleRight(document.getElementById(item));
        });
    });
});

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector("nav").classList.contains("desktop-nav") ? document.querySelector("nav").classList.replace("desktop-nav", "mobile-nav") : null;
    document.querySelector("nav").classList.add("slide-in");
    document.querySelector(".fa-xmark").style.display = "block";
    document.querySelector(".hamburger").style.display = "none";
    lowerMenuIdArray.forEach(item => {
        angleDown(document.getElementById(item));
    });
    document.querySelector("header").addEventListener("mouseover", (e) => {
        let id = "";
        if (e.target.id) {
            parseInt(e.target.id) % 2 == 0 ? id = e.target.id : id = parseInt(e.target.id) + 1;
            if (id > 7) {
                angleUp(document.getElementById(id));
            }
        }
    });

    document.querySelectorAll(".pages-menu").forEach(item => {
        item.addEventListener("mouseleave", () => {
            lowerMenuIdArray.forEach(item => {
                angleDown(document.getElementById(item));
            });
        });
    });

    document.querySelectorAll(".submenu").forEach(item => {
        item.addEventListener("mouseleave", () => {
            lowerMenuIdArray.forEach(item => {
                angleDown(document.getElementById(item));
            });
        });
    });

    document.querySelector("header").addEventListener("mouseleave", () => {
        lowerMenuIdArray.forEach(item => {
            angleDown(document.getElementById(item))
        });
    });
});

document.querySelector(".fa-xmark").addEventListener("click", () => {
    document.querySelector("nav").classList.remove("slide-in");
    document.querySelector("nav").classList.contains("mobile-nav") ? document.querySelector("nav").classList.replace("mobile-nav", "desktop-nav") : null;
    document.querySelector(".fa-xmark").style.display = "none";
    document.querySelector(".hamburger").style.display = "block";
    lowerMenuIdArray.forEach(item => {
        angleDown(document.getElementById(item))
    });
    upperMenuArray.forEach(item => {
        changeToHide(item);
    });
    lowerMenuArray.forEach(item => {
        changeToHide(item);
    });
});

window.addEventListener('resize', function () {
    document.querySelector("nav").classList.remove("slide-in");
    document.querySelector("nav").classList.contains("mobile-nav") ? document.querySelector("nav").classList.replace("mobile-nav", "desktop-nav") : null;
    document.querySelector(".fa-xmark").style.display = "none";
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    if (mediaQuery.matches) {
        document.querySelector(".hamburger").style.display = "none";
    } else {
        document.querySelector(".hamburger").style.display = "block";
    }
    document.querySelectorAll(".pages-menu").forEach(item => {
        item.addEventListener("mouseleave", () => {
            lowerMenuIdArray.forEach(item => {
                angleRight(document.getElementById(item));
            });
        });
    });
}, true);

window.addEventListener('load', () => {
    document.querySelector(".fa-xmark").style.display = "none";
});


