alert ("Boas vindas ao jogo do número secreto edição 5");
let numeroSecreto = 7;
console.log(numeroSecreto)
let chute = prompt("Escolha um número entre 1 e 10");


//Se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai, vocÊ descobriu o número secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto) {
        alert (`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }

}