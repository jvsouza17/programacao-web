# Promises

* As Promises são um conceito crucial em JavaScript que permite lidar com operações assíncronas de maneira mais eficiente e organizada. Introduzidas com o ECMAScript 6 (ES6), as Promises ajudam a evitar o "callback hell" e permitem que o código seja mais legível e fácil de manter.

* Uma Promise é um objeto que representa a conclusão ou o fracasso eventual de uma operação assíncrona. Ela pode estar em três estados:

Pendente: O estado inicial, representando que a operação ainda não foi concluída.
Resolvida: A operação foi concluída com sucesso, e um valor resultante é retornado.
Rejeitada: A operação não foi concluída com sucesso, geralmente devido a um erro, e um motivo de rejeição é retornado.

```
let minhaPromise = new Promise((resolve, reject) => {
    // Operação assíncrona
    if (operacaoBemSucedida) {
        resolve(resultado);
    } else {
        reject(motivo);
    }
});
```
* Após passar pelo resolve podemos usar o then para passar algo que será executado em caso de sucesso da promise.
* Caso passe pelo reject usamos o catch para lidar com o motivo de rejeição da promise, assim podemos dar continuidade encadeando consecutivos then.

```
minhaPromise.then(resultado => {
    // argumentos
}).catch(motivo => {
    // argumentos
});
```
## Usos 
* As promises são muito usadas com async e await que servem para processamentos assíncronos aguardando a execução de uma outra promise ou função para dar seguimento a execução do código.
* As promises são muito usadas também ao fazer requisições http usando fetch, onde desejamos buscar dados de um site por exemplo e sequenciá-los usando async e await.
* Leitura e gravações de arquivos somente quando necessário.
* Chamadas de API de terceiros.
* Acesso a banco de dados
* Operações de tempo.