const btn = document.querySelector(".btn");
const response = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
    const word = document.querySelector(".input-text").value;
    let len = word.length;

    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

    let flip = [...end]
        .reverse()
        .join("");

    start == flip 
        ? response.innerHTML = `${word.toUpperCase()} is a palindrome`
        : response.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
}