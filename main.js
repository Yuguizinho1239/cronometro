// 1. Seleção dos elementos
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// 2. Lógica das Abas
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

// 3. Datas Objetivos (Organizadas em uma única lista)
const tempos = [
    new Date(new Date().getTime() + 2 * 365 * 24 * 60 * 60 * 1000), // 2 anos a partir de agora
    new Date("2026-12-31T23:59:59"), 
    new Date("2027-12-31T23:59:59"), 
    new Date("2028-12-31T23:59:59")  
];

// 4. Função de Cálculo
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;

  if (tempoFinal > 0) {
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    // Retorna a estrutura HTML formatada
    return `Tempo restante <br> 
            <span style="font-size: 1.5rem; display: block; margin-top: 10px;">
            ${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos
            </span>`;
  } else {
    return "Prazo Encerrado";
  }
}

// 5. Atualização dos contadores em tempo real
function atualizaCronometros() {
  for (let i = 0; i < contadores.length; i++) {
    if (tempos[i] && contadores[i]) {
      // Usamos innerHTML para que o navegador interprete as tags <br> e <span>
      contadores[i].innerHTML = calculaTempo(tempos[i]);
    }
  }
}

// 6. Inicialização do Cronômetro
function comecaCronometro() {
  atualizaCronometros(); // Executa imediatamente para não começar em branco
  setInterval(atualizaCronometros, 1000); // Atualiza a cada 1 segundo
}

comecaCronometro();
