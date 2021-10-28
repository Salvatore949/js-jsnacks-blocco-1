let elemento = document.getElementById('mio_id');

const numero1 = prompt('Inserisci il primo numero');
const numero2 = prompt('Inserisci il secondo numero');

if (numero1 > numero2){
    elemento.innerHTML=`Il numero maggiore è: ${numero1}`; 
}

else if (numero2 > numero1){
    elemento.innerHTML=`Il numero maggiore è: ${numero2}`; 
}