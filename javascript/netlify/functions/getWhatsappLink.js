exports.handler = async (event) => {
    const phoneNumber = "5511995555313"; // coloque aqui o número SEM DDD ou com código do país, ex: 5511912345678
  
    const pacote = event.queryStringParameters.pacote || "1";
    const titulo = event.queryStringParameters.titulo || "Simulado";
    const qtd = pacote === "1" ? "5" : "10";
    const valor = pacote === "1" ? "20,00" : "25,00";
  
    const mensagemWhatsapp = `Quero o Pacote ${pacote} - ${qtd} Simulados - ${titulo}`;
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagemWhatsapp)}`;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ link }),
    };
  };