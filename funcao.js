// par  nome/valor

const saudacao = 'Opa'

function exec(){
    const saudacao = 'falaaa' // contexto léxico
    return saudacao;
}


const cliente = {
    nome : 'pedro',
    idade : 32,
    peso : 90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente.endereco.numero);