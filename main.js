const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener("click", () => {
    const navBar = document.querySelector(".nav");
    navBar.classList.toggle("nav-active");

});

// quantity

const plus = document.querySelectorAll(".plus");
const count = document.querySelectorAll(".count");
const minus = document.querySelectorAll(".minus");



for (let i = 0; i < plus.length; i++) {
    const elementPlus = plus[i];
    const elementCount = count[i];
    const elementMinus = minus[i];

    elementPlus.addEventListener("click", () => {
        count[i].innerText++;
        // console.log("plus");
    });

    elementMinus.addEventListener("click", () => {
        count[i].innerText--;
        // console.log("minus");
        if (count[i].innerText <= 0) {
            count[i].innerText = 0;
        }
    });

}

