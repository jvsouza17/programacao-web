// funções que serão exportadas para o arquivo index

function somar(a,b){
    return Number.parseInt(a) + Number.parseInt(b);
}

function subtrair(a,b){
    return Number.parseInt(a) - Number.parseInt(b);
}

function multiplicar(a,b){
    return Number.parseInt(a) * Number.parseInt(b);
}

function dividir(a,b){
    return Number.parseInt(a) / Number.parseInt(b);
}

module.exports = {
    somar,
    subtrair,
    multiplicar, 
    dividir
};