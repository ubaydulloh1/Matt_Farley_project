let pascal_card = document.querySelector(".pascal");
let alvin_card = document.querySelector(".alvin");

let pascal_pagination = document.querySelector(".pagin-1");
let alvin_pagination = document.querySelector(".pagin-2");

pascal_pagination.addEventListener('click', function() {
    pascal_card.style.left = "0%";
    alvin_card.style.right = "-100%";
    pascal_pagination.classList.add("active-pagination");
    alvin_pagination.classList.remove("active-pagination");
});


alvin_pagination.addEventListener('click', function() {
    pascal_card.style.left = "-100%";
    alvin_card.style.right = "-0%";
    pascal_pagination.classList.remove("active-pagination");
    alvin_pagination.classList.add("active-pagination");
});
