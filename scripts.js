function hello(nome = null){
    return "hello world" + (nome ? nome :'' );
}

hello();



function somar(valor1, valor2){
    console.log(valor1+ valor2)
    return valor1 + valor2;

}

function contarletras(palavra){
    return palavra.length + "letras";

}

//funções para um banner
let pos = 0;



function anterior(){
    if(pos > 0){
    return  pos = pos - 1;
    }
    return pos;
}
function proximo(){
    return pos = pos + 1;

}