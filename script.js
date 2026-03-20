// Seleciona os elementos HTML pelo ID e armazena em variáveis
const numero1Input = document.getElementById("numero1"); // Campo do primeiro número
const numero2Input = document.getElementById("numero2"); // Campo do segundo número
const resultadoInput = document.getElementById("somatorio"); // Campo do resultado
const erro1 = document.getElementById("erro1"); // Mensagem de erro do primeiro número
const erro2 = document.getElementById("erro2"); // Mensagem de erro do segundo número

// Função que valida e mostra erro para o primeiro número
function validarNumero1() {
  if (!numero1Input.value) {
    // Se estiver vazio, mostra a mensagem de erro
    erro1.textContent = "Por favor, digite o primeiro número";
    erro1.style.display = "block";
  } else {
    // Se preenchido, esconde a mensagem
    erro1.textContent = "";
    erro1.style.display = "none";
  }
  calcularSoma(); // Tenta calcular a soma
}

// Função que valida e mostra erro para o segundo número
function validarNumero2() {
  if (!numero2Input.value) {
    // Se estiver vazio, mostra a mensagem de erro
    erro2.textContent = "Por favor, digite o segundo número";
    erro2.style.display = "block";
  } else {
    // Se preenchido, esconde a mensagem
    erro2.textContent = "";
    erro2.style.display = "none";
  }
  calcularSoma(); // Tenta calcular a soma
}

// Função que calcula a soma dos dois números
function calcularSoma() {
  // Verifica se AMBOS os campos têm valor
  if (numero1Input.value && numero2Input.value) {
    const num1 = parseFloat(numero1Input.value);
    const num2 = parseFloat(numero2Input.value);

    // Verifica se são números válidos
    if (!isNaN(num1) && !isNaN(num2)) {
      // Calcula a soma
      const soma = num1 + num2;
      // Exibe formatado em Real brasileiro
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

// Escuta quando o usuário digita no primeiro número
numero1Input.addEventListener("input", validarNumero1);
// Escuta quando o usuário sai do campo do primeiro número (perde o foco)
numero1Input.addEventListener("blur", validarNumero1);

// Escuta quando o usuário digita no segundo número
numero2Input.addEventListener("input", validarNumero2);
// Escuta quando o usuário sai do campo do segundo número (perde o foco)
numero2Input.addEventListener("blur", validarNumero2);
// Escuta quando o usuário digita no segundo número
numero2Input.addEventListener("input", validarNumero2);
numero2Input.addEventListener("input", calcularSoma); // Calcula quando digita no segundo número
