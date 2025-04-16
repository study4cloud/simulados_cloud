window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.wa-link');
  const titulos = document.querySelectorAll('.whatsapp-message');
  const valorPacote1 = "20,00";
  const valorPacote2 = "25,00";

  links.forEach((link, index) => {
    const isPacote1 = index % 2 === 0;
    const tituloIndex = Math.floor(index / 2);
    const titulo = titulos[tituloIndex].textContent.trim();
    const valor = isPacote1 ? valorPacote1 : valorPacote2;
    const pacote = isPacote1 ? "1" : "2";
    const quantidade = isPacote1 ? "5" : "10";

    const mensagem = `Quero o Pacote ${pacote}<br>${quantidade} Simulados - R$ ${valor}`;
    link.innerHTML = mensagem;

    // redireciona para função do Netlify que protege o número
    const url = `/.netlify/functions/getWhatsappLink?pacote=${pacote}&titulo=${encodeURIComponent(titulo)}`;
    link.href = url;
  });
});

  