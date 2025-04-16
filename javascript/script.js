// window.addEventListener('DOMContentLoaded', () => {
//     const phoneNumber = "5511995555313";  
//     const links = document.querySelectorAll('.wa-link');
//     const titulos = document.querySelectorAll('.whatsapp-message');
//     const valorPacote1 = "20,00";
//     const valorPacote2 = "25,00";
    
//     links.forEach((link, index) => {
//       const isPacote1 = index % 2 === 0;
//       const tituloIndex = Math.floor(index / 2);
//       const titulo = titulos[tituloIndex].textContent.trim();
//       const valor = isPacote1 ? valorPacote1 : valorPacote2;
//       const pacote = isPacote1 ? "1" : "2";
  
//       const mensagem = `Quero o Pacote ${pacote}<br>${isPacote1 ? "5" : "10"} Simulados - R$ ${valor}`;
//       const mensagemCodificada = encodeURIComponent(mensagem.replace(/<br>/g, '\n'));
//       const mensagemWhatsapp = `Quero o Pacote ${pacote} - ${isPacote1 ? "5" : "10"} Simulados - ${titulo}`
  
//       link.innerHTML = mensagem;
//       link.href = `https://wa.me/${phoneNumber}?text=${mensagemWhatsapp}`;
//     });    
//   });

  
fetch(`/.netlify/functions/getWhatsappLink?pacote=${pacote}&titulo=${encodeURIComponent(titulo)}`)
  .then(res => res.json())
  .then(data => {
    link.href = data.link;
  });  