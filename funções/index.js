// Funções declaradas
function saudacao(nome) {
    return "Olá, " + nome;
}
console.log(saudacao('Bruno'))

// Funções expressas
const isValid = function(argument) {
    return !argument;
}

console.log(isValid(false))

// Arrow functions
const isValidArrow = () => 2*2;

console.log(isValidArrow())

const getFirstName = nomeCompleto => nomeCompleto.split(" ")[0];

console.log(`Primeiro nome: ${getFirstName("Bruno Colares")}`)