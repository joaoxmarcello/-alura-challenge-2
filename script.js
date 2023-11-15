
var numeroSecreto = parseInt(Math.random() * 1001) + 1;
var contador = 0;

function verificarChute() {
    var chute = parseInt(document.getElementById('chute').value);
    contador++;
  
    if (chute == numeroSecreto) {
      alert('Acertou!');
    } else if (chute > numeroSecreto) {
      alert('Errou... o número secreto é menor');
    } else if (chute < numeroSecreto) {
      alert('Errou... o número secreto é maior');
    }

    alert('Você já deu ' + contador + ' chutes');
  }