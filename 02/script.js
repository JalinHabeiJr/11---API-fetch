const inputCep = document.querySelector(".cep");
const ul = document.querySelector(".list");
const list = document.createElement("li");

const notFound = document.createElement("h2");
const bairro = document.createElement("p");
const cep = document.createElement("p");
const complemento = document.createElement("p");
const ibge = document.createElement("p");
const localidade = document.createElement("p");
const logradouro = document.createElement("p");
const siafi = document.createElement("p");
const uf = document.createElement("p");

inputCep.addEventListener("keyup", () => {
    if (inputCep.value.length === 8) {
        fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
            .then(response => response.json())
            .then(result => {
                if (result.erro) {
                    list.remove();
                    notFound.textContent = "CEP não encontrado!";
                    ul.appendChild(notFound);
                    return;
                }
                else {
                    console.log(result);
                    list.remove();
                    notFound.remove();
                    bairro.textContent = `Bairro: ${result.bairro}`;
                    cep.textContent = `CEP: ${result.cep}`;
                    complemento.textContent = `Complemento: ${result.complemento}`;
                    ibge.textContent = `IBGE: ${result.ibge}`;
                    localidade.textContent = `Localidade: ${result.localidade}`;
                    logradouro.textContent = `Logradouro: ${result.logradouro}`;
                    siafi.textContent = `SIAFI: ${result.siafi}`;
                    uf.textContent = `UF: ${result.uf}`;
                    list.appendChild(bairro);
                    list.appendChild(cep);
                    list.appendChild(complemento);
                    list.appendChild(ibge);
                    list.appendChild(localidade);
                    list.appendChild(logradouro);
                    list.appendChild(siafi);
                    list.appendChild(uf);
                    ul.appendChild(list);
                    return;
                }
            });
    }
    if (inputCep.value.length > 8) {
        list.remove();
        notFound.textContent = `O CEP inserido contem "${inputCep.value.length}" digitos. Insira um novo cep de apenas 8 digitos`;
        ul.appendChild(notFound);
        return;
    }
    else {
        return ul.innerHTML = "";
    }
});

console.log("API: www.ViaCep.com.br");