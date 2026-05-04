// 1. Seleção dos elementos (Declare cada variável apenas uma vez)
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// 2. Lógica das Abas (Tabs)
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    // Remove a classe "ativo" de todos os botões e textos
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }
    // Adiciona a classe "ativo" apenas no item clicado
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

// 3. Lógica do Cronômetro
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;

  // Conversão de milissegundos para dias, horas, minutos e segundos
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  if (tempoFinal > 0) {
      return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
  } else {
      return "Prazo Encerrado";
  }
}

// Atualiza o texto do contador
contadores[0].textContent = calculaTempo(tempoObjetivo1);