console.log('Trabalhando com listas:');
// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";

const listaDeDestinos = new Array (
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
    "Natal"
)

listaDeDestinos.push('Curitiba') //Adiciona itens na lista
console.log(listaDeDestinos)

listaDeDestinos.splice(2,1) //Retira itens da lista
console.log(listaDeDestinos)

