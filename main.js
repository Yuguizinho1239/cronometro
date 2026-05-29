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

// 3. Datas Objetivos (Seus tempos originais mantidos)
const tempoObjetivo1 = new Date(new Date().getTime() + 2 * 365 * 24 * 60 * 60 * 1000); // 2 anos a partir de agora
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// 4. Função de Cálculo (Retorna Array com os 4 tempos ou String se encerrado)
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

    return [dias, horas, minutos, segundos];
  } else {
    return "Prazo Encerrado";
  }
}

// 5. Atualização dos contadores (Lógica de Otimização com Laço For da Aula 9)
function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    let resultadoCalculo = calculaTempo(tempos[i]);

    // Tratamento para prazos ativos (retornam um Array de 4 posições)
    if (typeof resultadoCalculo !== "string") {
      document.getElementById("dias" + i).textContent = resultadoCalculo[0];
      document.getElementById("horas" + i).textContent = resultadoCalculo[1];
      document.getElementById("min" + i).textContent = resultadoCalculo[2];
      document.getElementById("seg" + i).textContent = resultadoCalculo[3];
    } else {
      // Tratamento para prazos já encerrados (ex: suas datas de 2023 e 2024)
      contadores[i].innerHTML = `<p class="prazo-encerrado">Prazo Encerrado</p>`;
    }
  }
}

// 6. Inicialização do Cronômetro
function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
