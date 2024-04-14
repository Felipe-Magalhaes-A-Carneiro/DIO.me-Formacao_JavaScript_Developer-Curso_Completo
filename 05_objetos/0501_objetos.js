// Forma mais simples de criar um objeto (quando ocorrer o momento de atribuição, utilize duas chaves = { chave, valor } ):

const teste = {  // declaração

};

//Exemplo prático:

const felipe = {
    nome : "Felipe Magalhães",
    idade: 31,
};

console.log(felipe.idade)

//Incrementação de chaves e valores (adicionar informação a um objeto já declarado anteriormente):
felipe.altura = 1.83 + "m."
felipe.cabelo = "preto."

//Deletando chaves e valores:
delete felipe.cabelo;

console.log(felipe);

//-------
//Mais um exemplo prático:

const copo = {
    nome: "copo de vidro",
    material: "vidro",
    formato: "cilindrico",
    tamanho: 11 + "cm",
}

console.log(copo.tamanho);
console.log(copo);


