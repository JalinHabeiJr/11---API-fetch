const title = document.getElementById("title");
const getDIV = document.querySelector(".get");
const getIdDIV = document.querySelector(".get-id");
const getPostsDIV = document.querySelector(".get-posts");
const deleteDIV = document.querySelector(".delete");
const formHTML = document.querySelector(".form");
const input = document.getElementById("numero");
const labels = document.getElementsByClassName("add_label");
const inputs = document.getElementsByClassName("add_input");

// estados
let getState = false;
let getIdState = false;
let getPostsState = false;
let deleteState = false;

// deixando invisiveis ao iniciar
input.classList.add("invisible");
getDIV.classList.add("invisible");
getIdDIV.classList.add("invisible");
getPostsDIV.classList.add("invisible");
deleteDIV.classList.add("invisible");


function imprime(objeto) {
    var mensagem = `
    <br>
    {
    <br>
    "<span class='campo'>id</span>": ${objeto.id},
    <br>
    "<span class='campo'>userId</span>": ${objeto.userId},
    <br>
    "<span class='campo'>title</span>": ${objeto.title},
    <br>
    "<span class='campo'>body</span>": ${objeto.body}
    <br>
    }
    <br>`
    return mensagem;
}

const btn = document.createElement("BUTTON");

const div = document.createElement("div");

const campo = document.createElement("p");

const result = document.createElement("p");

// feito
const get = () => {
    getState = true;
    getIdState = false;
    getPostsState = false;
    deleteState = false;

    title.innerHTML = "Mostrar tudo!";
    input.classList.remove("visible");
    input.classList.add("invisible");
    result.innerHTML = "";

    formHTML.classList.remove("visible")
    formHTML.classList.add("invisible")

    // deixar o input por fora
    deleteDIV.appendChild(input);

    if (getState) {
        getDIV.classList.remove("invisible");
        getDIV.classList.add("visible");

        btn.innerHTML = "Buscar";

        getDIV.appendChild(btn)

        getDIV.appendChild(div);

        div.setAttribute("id", "resp");

        campo.setAttribute("class", "campo");
        campo.innerHTML = "Resposta:";

        div.appendChild(campo);

        result.setAttribute("id", "respjson");
        div.appendChild(result)

        btn.onclick = async function () {
            await fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    respjson.innerHTML = json.map(item => imprime(item));
                });
        };
        return;
    }
    else {
        getDIV.classList.remove("visible");
        getDIV.classList.add("invisible");
    }
}

// feito
const getId = () => {
    getIdState = true;
    getState = false;
    getPostsState = false;
    deleteState = false;

    title.innerHTML = "Pegar pelo 'id'";
    input.classList.remove("invisible");
    input.classList.add("visible");
    result.innerHTML = "";

    formHTML.classList.remove("visible")
    formHTML.classList.add("invisible")

    if (getIdState) {
        getIdDIV.classList.remove("invisible");
        getIdDIV.classList.add("visible");

        getIdDIV.appendChild(input);

        btn.innerHTML = "Buscar";

        getIdDIV.appendChild(btn)

        getIdDIV.appendChild(div);

        div.setAttribute("id", "resp");

        campo.setAttribute("class", "campo");
        campo.innerHTML = "Resposta:";

        div.appendChild(campo);

        result.setAttribute("id", "respjson");
        div.appendChild(result)

        btn.onclick = async function () {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${numero.value}`)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    respjson.innerHTML = imprime(json);
                });
        };
        return;
    }
    else {
        getIdDIV.classList.remove("visible");
        getIdDIV.classList.add("invisible");
    }
}

function getReqPost(e) {
    e.preventDefault()
    var userid = document.getElementById("new_userId").value;
    var new_title = document.getElementById("new_title").value;
    var new_body = document.getElementById("new_body").value;
    result.innerHTML = "";

    console.log("Input Data: " + userid + " " + new_title + " " + new_body);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: new_title,
            body: new_body,
            userId: userid
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log('response: ' + JSON.stringify(json));
            respjson.innerHTML = imprime(json);
        })
}

const getPosts = () => {
    getPostsState = !getPostsState;
    getState = false;
    getIdState = false;
    deleteState = false;

    title.innerHTML = "Postar";
    input.classList.remove("visible");
    input.classList.add("invisible");
    result.innerHTML = "";

    formHTML.classList.remove("invisible")
    formHTML.classList.add("visible")

    let label;
    let post_input;
    for (label of labels) {
        label;
    }

    for (post_input of inputs) {
        post_input;
    }

    if (getPostsState) {
        getPostsDIV.classList.remove("invisible");
        getPostsDIV.classList.add("visible");

        getPostsDIV.appendChild(input);

        btn.innerHTML = "Buscar";

        getPostsDIV.appendChild(btn)

        getPostsDIV.appendChild(div);

        div.setAttribute("id", "resp");

        campo.setAttribute("class", "campo");
        campo.innerHTML = "Resposta:";

        div.appendChild(campo);

        result.setAttribute("id", "respjson");
        div.appendChild(result)

        formHTML.appendChild(label);
        formHTML.appendChild(post_input);

        formHTML.appendChild(btn)

        btn.onclick = getReqPost(event);

    }
    else {
        getPostsDIV.classList.remove("visible");
        getPostsDIV.classList.add("invisible");
        formHTML.classList.remove("visible")
        formHTML.classList.add("invisible")
        console.log("desligado");
    }
}

// feito
const deleteFunction = () => {
    deleteState = true;
    getState = false;
    getIdState = false;
    getPostsState = false;

    title.innerHTML = "Remover";
    input.classList.remove("invisible");
    input.classList.add("visible");
    result.innerHTML = "";

    formHTML.classList.remove("visible")
    formHTML.classList.add("invisible")

    if (deleteState) {
        deleteDIV.classList.remove("invisible");
        deleteDIV.classList.add("visible");

        deleteDIV.appendChild(input);

        btn.innerHTML = "Remover";

        deleteDIV.appendChild(btn)

        deleteDIV.appendChild(div);

        div.setAttribute("id", "resp");

        campo.setAttribute("class", "campo");
        campo.innerHTML = "Resposta:";

        div.appendChild(campo);

        result.setAttribute("id", "respjson");
        div.appendChild(result)

        btn.onclick = async function () {
            fetch(`https://jsonplaceholder.typicode.com/posts/${numero.value}`, {
                method: 'DELETE',
            }).then(response => response.json())
                .then(() => {
                    alert(`deletado com sucesso!`)
                });
        }
        return;
    } else {
        deleteDIV.classList.remove("visible");
        deleteDIV.classList.add("invisible");
    }
};