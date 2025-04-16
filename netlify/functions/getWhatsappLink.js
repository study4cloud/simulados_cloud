exports.handler = async (event) => {
  const phoneNumber = "5511995555313"; // seu número REAL
  const pacote = event.queryStringParameters.pacote || "1";
  const titulo = event.queryStringParameters.titulo || "Simulado";
  const quantidade = pacote === "1" ? "5" : "10";

  const mensagem = `Quero o Pacote ${pacote} - ${quantidade} Simulados - ${titulo}`;
  const mensagemCodificada = encodeURIComponent(mensagem);

  const linkFinal = `https://wa.me/${phoneNumber}?text=${mensagemCodificada}`;

  return {
    statusCode: 302,
    headers: {
      Location: linkFinal,
    },
  };
};
