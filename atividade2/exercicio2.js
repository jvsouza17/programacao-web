let a = [[1,2],
         [3,4],
         [5,6]];

  // Função para criar o array 2 baseado no array 1

  function mudarPosicao(a) {
    b = [
      [a[0][0], a[1][0], a[2][0]],
      [a[0][1], a[1][1], a[2][1]]
    ];
    return b;
  }
  
  // Criar o array 2 utilizando a função
    b = mudarPosicao(a);

  // Imprimir os arrays no modelo certo

console.log("Array 1")
    for(var x of a){
        console.log(x); 
    }
console.log("Array 2")
    for(var y of b){
        console.log(y); 
    }







