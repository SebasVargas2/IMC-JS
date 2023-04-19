const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const pantalla = document.getElementById('pantalla')
var alturaR

function calculo(){
    
    let imc = "-"

    peso.value = +(peso.value)
    altura.value = +(altura.value)

    if (isNaN (peso.value)  ||  isNaN(altura.value)){
        alert('Esto no es un numero')
    }


    else {
        
        alturaR = altura.value.toString()
        for (i=0; i<alturaR.length; i++){
            if (alturaR[i]==="."){
                alturaR = (alturaR.replace(".",""))
                if (alturaR.length!=3){
                    alturaR+=0
                }
            }
        }

        if (peso.value>0 && alturaR>050 && altura.value<300) {
            let altura2 = alturaR/100
            imc = peso.value/(altura2**2)
            imc = imc.toFixed(2)    
            pantalla.textContent=imc
        }

        else {
            alert('Ingreso alguna medida de forma incorrecta')
        }

        if (imc>0 && imc<=18.5){
            pantalla.style.backgroundColor="blue"
            pantalla.style.color="white"
        }

        else if (imc>18.5 && imc<=24.9){
            pantalla.style.backgroundColor="green"
            pantalla.style.color="white"
        }

        else if (imc>25.0 && imc<=29.9){
            pantalla.style.backgroundColor="yellow"
            pantalla.style.color="white"
        }

        else if (imc>30.0){
            pantalla.style.backgroundColor="red"
            pantalla.style.color="white"
        }

    }

}

function reinicio (){
    peso.value = ""
    altura.value = ""
    pantalla.textContent= ""
    pantalla.style.backgroundColor="transparent"
}
