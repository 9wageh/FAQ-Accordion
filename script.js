let faqContainer1 = document.querySelector(".faq-1");
let paragraph1 = faqContainer1.getElementsByTagName("p");
let faqContainer2 = document.querySelector(".faq-2");
let paragraph2 = faqContainer2.getElementsByTagName("p");
let faqContainer3 = document.querySelector(".faq-3");
let paragraph3 = faqContainer3.getElementsByTagName("p");
let faqContainer4 = document.querySelector(".faq-4");
let paragraph4 = faqContainer4.getElementsByTagName("p");
let imgOne = document.getElementById("plus-minse-img-1");
let imgTwo = document.getElementById("plus-minse-img-2");
let imgThree = document.getElementById("plus-minse-img-3");
let imgFour = document.getElementById("plus-minse-img-4");

function clicks1() {
    for (let i = 0; i < paragraph1.length; i++) {
        let displayValue = window.getComputedStyle(paragraph1[i]).display;
        if (displayValue === "none") {
            paragraph1[i].style.display = "block";
            imgOne.src = "./assets/images/icon-minus.svg";
        } else {
            paragraph1[i].style.display = "none";
            imgOne.src = "./assets/images/icon-plus.svg";

        }
    }
}

function clicks2() {
    for (let i = 0; i < paragraph2.length; i++) {
        let displayValue = window.getComputedStyle(paragraph2[i]).display;
        if (displayValue === "none") {
            paragraph2[i].style.display = "block";
            imgTwo.src = "./assets/images/icon-minus.svg";

        } else {
            paragraph2[i].style.display = "none";
            imgTwo.src = "./assets/images/icon-plus.svg";

        }
    }
}

function clicks3() {
    for (let i = 0; i < paragraph3.length; i++) {
        let displayValue = window.getComputedStyle(paragraph3[i]).display;
        if (displayValue === "none") {
            paragraph3[i].style.display = "block";
            imgThree.src = "./assets/images/icon-minus.svg";

        } else {
            paragraph3[i].style.display = "none";
            imgThree.src = "./assets/images/icon-plus.svg";

        }
    }
}

function clicks4() {
    for (let i = 0; i < paragraph4.length; i++) {
        let displayValue = window.getComputedStyle(paragraph4[i]).display;
        if (displayValue === "none") {
            paragraph4[i].style.display = "block";
            imgFour.src = "./assets/images/icon-minus.svg";

        } else {
            paragraph4[i].style.display = "none";
            imgFour.src = "./assets/images/icon-plus.svg";

        }
    }
}
