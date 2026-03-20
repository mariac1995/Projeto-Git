// Seleciona os elementos HTML pelo ID e armazena em variáveis
// document.getElementById() busca um elemento específico no HTML
const numero1Input = document.getElementById("numero1"); // Campo do primeiro número
const numero2Input = document.getElementById("numero2"); // Campo do segundo número
const resultadoInput = document.getElementById("somatorio"); // Campo do resultado

// Função que calcula a soma dos dois números
function calcularSoma() {
  // Verifica se AMBOS os campos têm valor (não estão vazios)
  if (numero1Input.value && numero2Input.value) {
    // parseFloat() converte o texto do input em número decimal
    const num1 = parseFloat(numero1Input.value); // Converte primeiro número
    const num2 = parseFloat(numero2Input.value); // Converte segundo número

    // isNaN() verifica se é um número válido (false = é número, true = não é)
    // ! inverte o resultado (! = "não")
    if (!isNaN(num1) && !isNaN(num2)) {
      // Realiza a soma dos dois números
      const soma = num1 + num2;
      // Exibe o resultado formatado como moeda brasileira (R$)
      // toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      // = converte para Real com símbolo R$ e 2 casas decimais
      resultadoInput.value = soma.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }
  } else {
    // Se algum campo estiver vazio, limpa o resultado
    resultadoInput.value = "";
  }
}

// addEventListener() = "escuta" quando o usuário digita algo
// "input" = evento que dispara toda vez que o usuário digita
// calcularSoma = função que será executada quando o usuário digita
numero1Input.addEventListener("input", calcularSoma); // Calcula quando digita no primeiro número
numero2Input.addEventListener("input", calcularSoma); // Calcula quando digita no segundo número
