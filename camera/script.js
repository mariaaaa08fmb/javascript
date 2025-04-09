const video = document.querySelector("video");
const filtro = document.querySelector("#filtro");
const canvas = document.querySelector("canvas"); 
const ctx = canvas.getContext("2d"); 


navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    console.error("Erro ao acessar a câmera:", error);
  });


filtro.addEventListener("change", () => {
  video.style.filter = filtro.value;
});


document.querySelector("#capturar").addEventListener("click", () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight; 

  ctx.filter = filtro.value;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imagem = canvas.toDataURL("image/png"); 

  const link = document.createElement("a");
  link.href = imagem;
  link.download = 'foto.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});