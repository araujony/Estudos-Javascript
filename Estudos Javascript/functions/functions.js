function maiorIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let result = maiorIdade(20); // Você pode testar com outros valores
console.log(result); // Vai exibir: true


//Crie uma função areaRetangulo que receba largura e altura, e retorne a área (largura × altura)

function areaRetangulo(x,y) {
    return x*y;
}
let result2 = areaRetangulo(4,4);
console.log(result2);

//Crie uma função chamada nomeCompleto que receba primeiroNome e sobrenome, e retorne uma string com o nome completo.

function nomeCompleto(primeiroNome, sobrenome) {
   return primeiroNome + " " + sobrenome;
}
let result3 = nomeCompleto("Nycolas", "Araújo");
console.log(result3);