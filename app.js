// Referências aos elementos HTML
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Lista para armazenar os nomes adicionados
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const nome = inputAmigo.value.trim(); // Remove espaços extras

  if (nome === "") {
    alert("Por favor, insira um nome válido!"); // Alerta para nome vazio
    return;
  }

  amigos.push(nome); // Adiciona o nome à lista
  atualizarLista(); // Atualiza a lista exibida

  inputAmigo.value = ""; // Limpa o campo de entrada
  inputAmigo.focus(); // Coloca o foco no campo novamente
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

  amigos.forEach((amigo) => {
    const item = document.createElement("li"); // Cria um item da lista
    item.textContent = amigo; // Define o texto como o nome do amigo
    listaAmigos.appendChild(item); // Adiciona o item à lista
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos à lista antes de sortear!"); // Alerta para lista vazia
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length); // Sorteia um índice aleatório
  const amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente

  // Exibe o resultado do sorteio
  resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}
