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

// 3. Datas Objetivos
const tempos = [
  new Date(new Date().getTime() + 2 * 365 * 24 * 60 * 60 * 1000), 
  new Date("2026-12-31T23:59:59"), 
  new Date("2027-12-31T23:59:59"), 
  new Date("2028-12-31T23:59:59")  
];

// 4. Função de Cálculo estruturada conforme o protótipo da aula
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

    // Esta estrutura gera dinamicamente os blocos exigidos no protótipo
    return `
      <div class="contador-digito">
        <p class="contador-digito-numero">${dias}</p>
        <p class="contador-digito-texto">dias</p>
      </div>
      <div class="contador-digito">
        <p class="contador-digito-numero">${horas}</p>
        <p class="contador-digito-texto">horas</p>
      </div>
      <div class="contador-digito">
        <p class="contador-digito-numero">${minutos}</p>
        <p class="contador-digito-texto">min</p>
      </div>
      <div class="contador-digito">
        <p class="contador-digito-numero">${segundos}</p>
        <p class="contador-digito-texto">seg</p>
      </div>
    `;
  } else {
    return `<p class="prazo-encerrado">Prazo Encerrado</p>`;
  }
}

// 5. Atualização dos contadores
function atualizaCronometros() {
  for (let i = 0; i < contadores.length; i++) {
    if (tempos[i] && contadores[i]) {
      contadores[i].innerHTML = calculaTempo(tempos[i]);
    }
  }
}

// 6. Inicialização
function comeceCronometro() {
  atualizaCronometros();
  setInterval(atualizaCronometros, 1000);
}

comeceCronometro();
