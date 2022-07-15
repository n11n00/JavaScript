//ejemplo 2

let entrada = prompt ('ingrese texto');
let textoFinal = '';
    do { 
    textoFinal = textoFinal +' '+entrada;
    alert (textoFinal);
    entrada = prompt ('ingrese texto');
    }while (entrada !='ESC');