const dataInicial = new Date();
const dataAlvo = new Date("2025-12-25T00:00:00"); // 🎄 Natal
const totalMilissegundos = dataAlvo - dataInicial;

function formatarNumero(n) {
  return n < 10 ? "0" + n : n;
}

function atualizarContador() {
  const agora = new Date();
  const diferenca = dataAlvo - agora;

  if (diferenca <= 0) {
    document.getElementById("contador").textContent = "00d 00h 00m 00s";
    document.getElementById("mensagemFinal").textContent = "🎉 O evento começou! Boas festas! 🎉";
    document.getElementById("somFinal").play();
    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  const formato = `${formatarNumero(dias)}d ${formatarNumero(horas)}h ${formatarNumero(minutos)}m ${formatarNumero(segundos)}s`;
  document.getElementById("contador").textContent = formato;

  // Atualizar barra de progresso
  const progresso = 100 - (diferenca / totalMilissegundos) * 100;
  document.getElementById("barraProgresso").style.width = progresso + "%";
}

atualizarContador();
const intervalo = setInterval(atualizarContador, 1000);
