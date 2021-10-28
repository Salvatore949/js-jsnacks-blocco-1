let elemento2 = document.getElementById('mio_id2');

var parola1 = prompt('Inserisci la prima parola');
console.log(parola1)
var parola2 = prompt('Inserisci la seconda parola');
console.log(parola2)




/*if ((parola1.length > parola2.length) && (parola1.length < parola2.length)){
    elemento2.innerHTML = `Le parole sono: ${parola1 , parola2}`; 
}

else if ((parola1.length < parola2.length) && (parola1.length > parola2.length)){
     elemento2.innerHTML = `Le parole sono: ${parola2 , parola1}`; 
}*/

if(parola1 > parola2) {
    console.log("I numeri sono: " + parola1)
    console.log("I numeri sono: " + parola2) 
}

else if(parola2 > parola1) {
    console.log("I numeri sono: " + parola2)
    console.log("I numeri sono: " + parola1) 
}

if(parola2 === parola1) {
    console.log("I numeri sono: " + parola2 , parola1)
}