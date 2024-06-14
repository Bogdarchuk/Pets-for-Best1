const checkboxes = document.querySelectorAll("input[type = 'checkbox']");

const cards = document.querySelectorAll(".cat_card_box_wrapper");

const minPriceInput = document.querySelector("#Min")
const maxPriceInput = document.querySelector("#Max");

function filterDogs() {

    const activeFilters = { 
        color: [], // чек бокс в виде обьекта  - регистрация 
        gender: [], // Добавляем все цвета и размеры и пол если они чекед
        size: [],
    }

    checkboxes.forEach(el => {
        if (el.checked) {
          activeFilters[el.name].push(el.value);
            // если чек бокс имеет состояние checked(активный), тогда добавь в обьект значение из чек бокса 
            
        }
    }) 
    const minPrice = minPriceInput.value ? parseFloat(minPriceInput.value): 0 
    const maxPrice = maxPriceInput.value ? parseFloat(maxPriceInput.value) : 0; 
    let filterCount = 0 

    cards.forEach(el => {
      const cardSize = el.getAttribute("data-size"); // дата атрибуты карточек - регистрация
      const cardGender = el.getAttribute("data-gender");
        const cardColor = el.getAttribute("data-color");
        const cardPrice = parseFloat( el.getAttribute("data-price") )
        const sizeMatch = // проверяет размер собаки по выбранным фильтрам
        // соотвецтвует карточка активным фильтрам или нет? 
    activeFilters.size.length === 0 || activeFilters.size.includes(cardSize);
        // перебирание карточек и описание фильтрованного сценария - как мы будем фильтровать? 
        const priceMatch = cardPrice >= minPrice && cardPrice <= maxPrice;
    const genderMatch =
      activeFilters.gender.length === 0 ||
        activeFilters.gender.includes(cardGender);
    const colorMatch =
      activeFilters.color.length === 0 ||
            activeFilters.color.includes(cardColor);
        
        if (sizeMatch && genderMatch && colorMatch && priceMatch) {
            el.style.display = "block"
            filterCount++
        }
        else {
            el.style.display = "none";
        }
    }) 
    document.querySelector(".dogs_cards_title_part_inner_text").textContent = filterCount;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filterDogs)
})
minPriceInput.addEventListener("input", filterDogs)
maxPriceInput.addEventListener("input", filterDogs);

