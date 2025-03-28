/* Mostrar quantas letreas repetidas aparecem em uma palavra */
const palavra = "Bruno Colares".toLowerCase().replaceAll(" ", "");
let letras = {};


for(let i = 0; i < palavra.length; i++) {
    if(letras[palavra[i]]) {
        letras[palavra[i]]++;
    } else {
        letras[palavra[i]] = 1
    }
}

console.log(letras);
