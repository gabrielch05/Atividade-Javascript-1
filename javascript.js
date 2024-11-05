document.getElementById("cadastro").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const cep = document.getElementById("cep").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const cnpj = document.getElementById("cnpj").value;
    const codigo = document.getElementById("codigo").value;
    
    const dados = { nome, endereco, cep, cpf, telefone, cnpj, codigo };
    localStorage.setItem("dadosFormulario", JSON.stringify(dados));
    
    document.getElementById("mensagem").style.display = "block";
    
    setTimeout(() => {
      window.location.href = "dados.html";
    }, 1000);
  });
  
  const aplicarMascara = (input, mascara) => {
    input.addEventListener("input", () => {
      let valor = input.value.replace(/\D/g, "");
      let i = 0;
      input.value = mascara.replace(/./g, (caractere) => {
        return /[_\d]/.test(caractere) && i < valor.length ? valor[i++] : i >= valor.length ? "" : caractere;
      });
    });
  };
  
  aplicarMascara(document.getElementById("cep"), "##.###-###");
  aplicarMascara(document.getElementById("cpf"), "###.###.###-##");
  aplicarMascara(document.getElementById("telefone"), "(##) # ####-####");
  aplicarMascara(document.getElementById("cnpj"), "##.###.###/####-##");
  aplicarMascara(document.getElementById("codigo"), "##_##//###-###.9.###");