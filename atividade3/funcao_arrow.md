# Arrow Function

* As Arrow Functions (ou funções de seta) são uma forma concisa de criar funções em JavaScript introduzida no ECMAScript 6 (ES6). Elas oferecem uma sintaxe mais curta e uma maneira mais conveniente de escrever funções, principalmente quando se trata de funções anônimas ou callbacks.

```
let nomeDaFuncao = (parâmetros) => {corpo da função};
```

* Se a função tiver apenas um parâmetro, os parênteses em torno dos parâmetros podem ser omitidos:

```
let dobrar = numero => numero * 2;
```

* Quando a única sentença em uma arrow function é "return", podemos remover "return" e remover as chaves envolvendo a sentença

```
let dobrar = numero => numero * 2;
```

* Se a função não tiver parâmetros, você deve usar parênteses vazios:

```
let saudacao = () => "Olá, mundo!";
```

## Vantagens
* Sintaxe Concisa: Arrow functions eliminam a necessidade de escrever a palavra-chave function e os parênteses ao redor dos parâmetros e do corpo da função, tornando o código mais curto e legível.
* Valor de this: Arrow functions não possuem o próprio this. Em vez disso, elas herdam o valor de this do contexto em que foram definidas. Isso pode ser útil em situações onde você deseja manter o valor de this do escopo externo. Caso seja criada no escopo global, o this irá retornar o objeto window. Caso seja criada dentro de um objeto ou função, o valor de this irá depemder do contexto em que foi chamado.
* Não vinculam arguments: Arrow functions também não possuem o objeto arguments. Isso pode ser vantajoso para evitar confusões em relação ao escopo e parâmetros. Para usar essa funcionalidade só é possível com o "...args".

## Desvantagens
* Não são adequadas para todos os cenários: Arrow functions não são ideais para todas as situações, especialmente quando você precisa de um valor de this dinâmico ou deseja usar o objeto arguments.
* Escopo de this: Enquanto a herança do escopo de this pode ser útil, às vezes pode levar a erros se não for entendida corretamente.