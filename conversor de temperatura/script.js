function converter(para) {
  const entrada = document.getElementById("entradaTemp").value;
  const resultado = document.getElementById("resultado");
  const icone = document.getElementById("iconeClima");

  if (entrada === "" || isNaN(entrada)) {
    resultado.textContent = "Por favor, digite um número válido!";
    icone.style.display = "none";
    document.body.style.background = "#4facfe"; // reset padrão
    return;
  }

  const temp = parseFloat(entrada);
  let convertido, texto, imagem;

  if (para === "C") {
    convertido = ((temp - 32) * 5) / 9;
    texto = `${convertido.toFixed(2)} °C`;
    imagem = "https://cdn-icons-png.flaticon.com/512/1684/1684375.png";
  } else {
    convertido = (temp * 9) / 5 + 32;
    texto = `${convertido.toFixed(2)} °F`;
    imagem = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
  }

  resultado.textContent = `Resultado: ${texto}`;
  icone.src = imagem;
  icone.style.display = "inline";

  // 🔥 Alterar fundo com base na temperatura em °C
  const tempCelsius = para === "C" ? convertido : temp;

  if (tempCelsius >= 26) {
    // fundo quente
    document.body.style.background = "linear-gradient(to right,rgb(253, 135, 100),rgb(255, 95, 167))";
  } else {
    // fundo frio
    document.body.style.background = "linear-gradient(to right,rgb(186, 215, 219),rgb(124, 181, 255))";
  }
}
