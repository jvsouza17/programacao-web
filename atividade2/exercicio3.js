const a = [[1,3],
        [2,5]];

const b = [[2,2],
        [0,1]];


  // Função para multiplicar valores e construir o array C
    function multiplicaArrays(){
        
        c11 =  1*2 + 3*0;
        c12 =  1*2 + 3*1;

        c21 = 2*2 + 5*0;
        c22 = 2*2 + 5*1;
        
        var c = [[c11,c12],
                [c21,c22]]; 

        for(var z of c){
            console.log(z); // serve somente para imprimir o array no modelo desejado
        }
    }

  // Imprimir os arrays

console.log("Array 1")
    for(var x of a){
        console.log(x); 
    }
console.log("Array 2")
    for(var y of b){
        console.log(y); 
    }
console.log("Array 3");
    multiplicaArrays();

