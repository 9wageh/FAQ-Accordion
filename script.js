let faqContainer1 = document.querySelector(".faq-1");
let paragraph1 = faqContainer1.getElementsByTagName("p");
let faqContainer2 = document.querySelector(".faq-2");
let paragraph2 = faqContainer2.getElementsByTagName("p");
let faqContainer3 = document.querySelector(".faq-3");
let paragraph3 = faqContainer3.getElementsByTagName("p");
let faqContainer4 = document.querySelector(".faq-4");
let paragraph4 = faqContainer4.getElementsByTagName("p");

function clicks1() {
    for (let i = 0; i < paragraph1.length; i++) {
        let displayValue = window.getComputedStyle(paragraph1[i]).display;
        if (displayValue === "none") {
            paragraph1[i].style.display = "block";
        } else {
            paragraph1[i].style.display = "none";
        }
    }
}

function clicks2() {
    for (let i = 0; i < paragraph2.length; i++) {
        let displayValue = window.getComputedStyle(paragraph2[i]).display;
        if (displayValue === "none") {
            paragraph2[i].style.display = "block";
        } else {
            paragraph2[i].style.display = "none";
        }
    }
}

function clicks3() {
    for (let i = 0; i < paragraph3.length; i++) {
        let displayValue = window.getComputedStyle(paragraph3[i]).display;
        if (displayValue === "none") {
            paragraph3[i].style.display = "block";
        } else {
            paragraph3[i].style.display = "none";
        }
    }
}

function clicks4() {
    for (let i = 0; i < paragraph4.length; i++) {
        let displayValue = window.getComputedStyle(paragraph4[i]).display;
        if (displayValue === "none") {
            paragraph4[i].style.display = "block";
        } else {
            paragraph4[i].style.display = "none";
        }
    }
}