exports.handler = async (event) => {
    const phoneNumber = "5511995555313"; // número protegido, só fica visível no backend
  
    const pacote = event.queryStringParameters.pacote || "1";
    const titulo = event.queryStringParameters.titulo || "Simulado";
    const qtd = pacote === "1" ? "5" : "10";
  
    const mensagem = `Quero o Pacote ${pacote} - ${qtd} Simulados - ${titulo}`;
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ link }),
    };
  };