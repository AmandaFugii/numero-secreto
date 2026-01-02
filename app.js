    alert ('Olá mundo!');
let numeroMaximo = 1000;
let numeroSecreto = parseInt (Math.random () *numeroMaximo + 1);
let chute;
let tentativas = 1;
//enquanto o chute não for igual ao n. secreto 
while (chute != numeroSecreto) {
   chute = prompt (`Escolha um numero de 1 a ${numeroMaximo}`);
//se for igual ao numero secreto
if (numeroSecreto == chute) { 
    break;
} else {
    if (numeroSecreto > chute) {
    alert (`O número secreto é maior que ${chute}`);
}
  else {
    alert (`O número secreto é menor que ${chute}`);
}
  //tentativas = tentativas + 1;
  tentativas++ ;
  }
}

let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa'; 
    alert (`Isso aí! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
     //alert (`Isso aí! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//         alert (`Isso aí! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}

