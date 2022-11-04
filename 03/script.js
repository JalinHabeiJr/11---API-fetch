const inputSearch = document.querySelector(".search");
const getBTN = document.querySelector(".get");
const ul = document.querySelector(".product-list");

const paragraph = document.createElement("p");

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then((result) => {
        console.log(result);
        const array = result.products;
        if (inputSearch.value.length === 0) {
            const list = array.map((information) => {
                return `<li>
                <p>${information.title}</p>
                <img src=${information.thumbnail} alt="icon" />
                <p>${information.description}</p>
            </li>`;
            });
            ul.innerHTML = list
        }
    });

inputSearch.addEventListener("keyup", () => {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(result => {
            ul.innerHTML = result.products.map(information => {
                if (information.title.toLowerCase().includes(inputSearch.value.toLowerCase())) {
                    return `<li>
                        <p>${information.title}</p>
                        <img src=${information.thumbnail} alt="icon" />
                        <p>${information.description}</p>
                    </li>`
                }
            })
        })

});