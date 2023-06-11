const button = document.querySelector(".btn");
const text = document.querySelector(".text");
const thanks = document.querySelector(".thanks");
const feedback = document.querySelector(".feedback");
const paragraph = document.querySelector(".paragraph");
const rating = document.querySelector(".rating");
const title = document.querySelector(".title");
const circle = document.querySelector(".circle");
const illustration = document.querySelector(".illustration-thank-you");
const number = document.querySelectorAll(".number");
const container = document.querySelector(".container");

number.forEach((input) => {
    input.addEventListener("click", (e) => {
        input.classList.add("number-active");
        button.addEventListener("click", () => {
            button.classList.add("btn-none");
            text.classList.add("text-visible");
            thanks.classList.add("thanks-visible");
            feedback.classList.add("feedback-non-visible");
            paragraph.classList.add("paragraph-non-visible");
            rating.classList.add("rating-visible");
            document.getElementById("rating").textContent = `You selected ${e.target.textContent} out of 5`;
            title.classList.add("title-non-visible");
            circle.classList.add("circle-non-visible");
            illustration.classList.add("illustration-thank-you-visible");
            container.classList.add("second-container");
        })
    })

    
})