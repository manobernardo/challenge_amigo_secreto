//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
let listaAmigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = ""; // Limpa o campo de input
}

// Função para atualizar a lista exibida na tela
function atualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpa a lista antes de atualizar

    listaAmigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong>!</li>`;
}
