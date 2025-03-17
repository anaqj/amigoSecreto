let amigos = [];

function asignarTexto(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}


//función para agregar amigos

function agregarAmigo() { 
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    if (nombreAmigo == ''){
        alert('Por favor, inserte un nombre');
    }else{
        amigos.push(nombreAmigo);
        //asignarTexto('listaAmigos',amigos) // mostrar nombres en la pagina
    }
    
    let lista = document.getElementById('listaAmigos');
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombreAmigo;
    lista.appendChild(nuevoElemento);

    console.log(amigos);
    limpiarCaja();
}


function limpiarCaja() {
    let nombre = document.getElementById('amigo')
    nombre.value = '';
}

//función para sortear amigos

function sortearAmigo () {
    if (amigos.length===0) {
        alert("No hay amigos para sortear");
        return
    }
    
    numeroMaximo = (amigos.length)-1;
    amigoAleatoerio = Math.floor(Math.random()*numeroMaximo);
    console.log(amigoAleatoerio);
    quien = (amigos[amigoAleatoerio]);
    asignarTexto('resultado', `🎉 El amigo secreto es: ${quien} 🎉`);
    document.getElementById('listaAmigos').innerHTML = '';
    console.log(amigos);
    limpiarCaja();
}





