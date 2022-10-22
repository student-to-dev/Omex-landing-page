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
let lowerMenuArray = [contact, caseStudy, career, pricing, eCommerce, account, utility];
let arrayOfIndexes = [0, 1, 2, 3, 4, 5, 6];
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

    if (id == 2) {
        changeToShow(landings);
        changeToHide(pages);
        changeToHide(blog);
        angleDown(document.getElementById(4));
        angleDown(document.getElementById(6));
    }
    else if (id == 4) {
        changeToShow(pages);
        changeToHide(landings);
        changeToHide(blog);
        angleDown(document.getElementById(2));
        angleDown(document.getElementById(6));
    }
    else if (id == 6) {
        changeToShow(blog);
        changeToHide(landings);
        changeToHide(pages);
        angleDown(document.getElementById(2));
        angleDown(document.getElementById(4));
    }
    else if (id > 7) {
        let newId;

        if (id == 8) {
            newId = id - 8;
        } else { newId = id / 2 - 4 }

        changeToShow(lowerMenuArray[newId]);

        let arrayOfIndexes2 = arrayOfIndexes.filter(index => index !== newId);

        arrayOfIndexes2.forEach(element => {
            changeToHide(lowerMenuArray[element]);
        });
    }
});

header.addEventListener("mouseleave", (e) => {
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


