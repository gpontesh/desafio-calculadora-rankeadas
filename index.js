console.log("********** CLASSIFICADOR DE RANKING ********")

let qtdVitorias = 453
let qtdDerrotas = 358

let totalVitorias = calculoVitorias()
let rankingFinal = calculoRanking()

function calculoVitorias(){
    let saldoVitorias = qtdVitorias - qtdDerrotas
    return saldoVitorias
}

function calculoRanking(){
    if (totalVitorias <= 10){
        return ("Ferro")
    } else if (totalVitorias > 10 && totalVitorias <= 20){
        return ("Bronze")
    } else if (totalVitorias > 20 && totalVitorias <= 50){
        return ("Prata")
    } else if (totalVitorias > 50 && totalVitorias <= 80){
        return ("Ouro")
    } else if (totalVitorias > 80 && totalVitorias <= 90){
        return ("Diamante")
    } else if (totalVitorias > 90 && totalVitorias <= 100){
        return ("Lendário")
    } else{
        return ("Imortal")
    }
}

console.log("O herói tem um saldo de " + totalVitorias + " e está no nível " + rankingFinal)