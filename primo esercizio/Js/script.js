// chiedo all'utente di inserire il primo numero
// chirdo all'utente di inserire il secondo numero
// Inserisco la condizione: Se il primo numero è più grande del secondo allora verrà visualizzato nel browser
// Se il secondo numero è maggiore del primo allora sarà quest'ultimo ad essere visualizzato nel browser


let elemento = document.getElementById('mio_id');

const numero1 = prompt('Inserisci il primo numero');
const numero2 = prompt('Inserisci il secondo numero');

if (numero1 > numero2){
    elemento.innerHTML=`Il numero maggiore è: ${numero1}`; 
}

else if (numero2 > numero1){
    elemento.innerHTML=`Il numero maggiore è: ${numero2}`; 
}