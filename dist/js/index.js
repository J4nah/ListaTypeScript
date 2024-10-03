"use strict";
// 1. declare uma função que pode conter uma String ou um Número.
let valor;
valor = 1;
console.log(valor);
valor = "Janaina";
console.log(valor);
// 2. Crie uma função que receba dois numeros e retorne a soma deles.
function somar(a, b) {
    return a + b;
}
console.log(somar(1, 2));
const pessoa = {
    nome: "Janaina",
    idade: 34
};
console.log(pessoa);
// 4. Crie uma classe Animal com um método falar. Depois crie uma classe Cachorro que herda de Animal e sobrescreva o método falar para imprimir "Au Au".
class Animal {
    falar() {
        console.log("O animal está fazendo um som.");
    }
}
class Cachorro extends Animal {
    falar() {
        console.log("Au Au");
    }
}
const animal = new Animal();
animal.falar();
const cachorro = new Cachorro();
cachorro.falar();
// 5. Crie uma função que receba um array de números e retorne o maior valor
function maiorValor(numeros) {
    return Math.max(...numeros);
}
const numeros = [1, 10, 20, 5, 4, 100, 40, 1000];
const maior = maiorValor(numeros);
console.log(maior);
// 6. Crie um enum para representar as cores: vermelho, verde e azul.
var Cores;
(function (Cores) {
    Cores["Vermelho"] = "vermelho";
    Cores["Verde"] = "verde";
    Cores["Azul"] = "azul";
})(Cores || (Cores = {}));
function imprimirCor(cor) {
    console.log(`Cor: ${cor}`);
}
const cor = Cores.Verde;
imprimirCor(cor);
// 7. Crie uma função que receba um parâmetro que pode ser uma string ou um número e retorne o tamanho (se for string) ou o dobro do valor (se for número).
function processarValor(valor) {
    if (typeof valor === "string") {
        return valor.length;
    }
    else {
        return valor * 2;
    }
}
const resultado1 = processarValor("FACENS");
const resultado2 = processarValor(10);
console.log(resultado1);
console.log(resultado2);
