function bg_amarelo() {

    document.getElementById('caracteres').style.backgroundColor = 'yellow'
    document.getElementById('caracteres').value =""
    document.getElementById('caracteres').style.color = 'black'
}

function recuperarValor(caracteres){
    
    var caracteres = document.getElementById('caracteres').value

    if(caracteres.length < 3){
        document.getElementById('caracteres').style.backgroundColor = 'red'
        document.getElementById('caracteres').style.color = 'white'
    }else {
        document.getElementById('caracteres').style.backgroundColor = 'green'
        document.getElementById('caracteres').style.color = 'white'
    }

}

function reiniciar(){
    document.getElementById('caracteres').style.backgroundColor = 'white'
    document.getElementById('caracteres').style.color = '#aaa'
    
    document.getElementById('caracteres').value ="digite os caracteres aqui..."

}

document.getElementById('caracteres').value =""