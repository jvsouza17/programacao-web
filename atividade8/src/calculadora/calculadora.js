// arquivo para criar a função de calcular da própria calculadora
function calcular(numeroA, numeroB, operacao) {
    numeroA = parseFloat(numeroA);
    numeroB = parseFloat(numeroB);
  
    switch (operacao) {
      case '+':
        return numeroA + numeroB;
      case '-':
        return numeroA - numeroB;
      case '*':
        return numeroA * numeroB;
      case '/':
        return numeroA / numeroB;
    }
  }
  
  module.exports = {
    calcular
  };