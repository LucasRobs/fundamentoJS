// recurso do ES2015
const pessoa = {
    nome : 'Ana',
    idade : 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero : 1000
    }
}

let { nome, idade } = pessoa; // isso cria as váriaveis copiadas do objeto(função?)

console.log(nome, idade);

const { nome: n, idade: i} = pessoa; // isso pega os valores do objeto e copia eles para novas uma variáveis
console.log(n, i);

const { sobrenome, bemvivido = true} = pessoa; // isso mostra caso a variável buscado do objeto não exista ele retorna undefined. mas caso isso aconteça voc pode transforma esse emtorno em um boolean
console.log(sobrenome, bemvivido);

const { endereco: { logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);