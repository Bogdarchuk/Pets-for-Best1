const btnBurger = document.querySelector(".burger");
const headerListMobile = document.querySelector(".header_list_mobile");
btnBurger.addEventListener("click", function () {
    headerListMobile.classList.toggle("active")
})