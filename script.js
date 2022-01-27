const botao = document.querySelector('#submit-button'),
      input = document.querySelector('#password-input'),
      resultado = document.querySelector('#validation');

botao.addEventListener('click', () => {
    let valor = input.value;
    resultado.style.display = "block";
    console.log(validaComplexidade(valor));
})

function validaComplexidade(valor) {
    
    console.log(valor);
    
    //Verificando número de caracteres
    const tamanho = () => {
        if(valor.length >= 8 && valor.length <= 32) {
            return true;
        }
        else {
            return false;
        }
    }

    //Verificando uppercases, lowercases e números
    const caracteres = () => {
        let i;

        //Verificando uppercases
        let uppercase = false;
        for(i = 0; i < valor.length; i++) {
            if(valor.charCodeAt(i) >= 65 && valor.charCodeAt(i) <= 90){
                uppercase = true;
                break;
            }
        }

        //Verificando lowercases
        let lowercase = false;
        for(i = 0; i < valor.length; i++) {
            if(valor.charCodeAt(i) >= 97 && valor.charCodeAt(i) <= 122){
                lowercase = true;
                break;
            }
        }

        //Verificando números
        let numero = false;
        for(i = 0; i < valor.length; i++) {
            if(isNaN(valor[i]) == false){
                numero = true;
                break;
            }
        }

        return uppercase && lowercase && numero;
    }

    //Verificando acentuação, pontuação e espaço
    const especiais = () => {
        let i;
        //Verificando pontos
        let pontoEspaco = false;
        for(i = 0; i < valor.length; i++) {
            if((valor.charCodeAt(i) >= 20 && valor.charCodeAt(i) <= 47) || (valor.charCodeAt(i) >= 58 && valor.charCodeAt(i) <= 64)){
                pontoEspaco = true;
                break;
            }
        }

        //Verificando acentos
        let acento = false;
        for(i = 0; i < valor.length; i++) {
            if((valor.charCodeAt(i) >= 91 && valor.charCodeAt(i) <= 96) || (valor.charCodeAt(i) >= 123 && valor.charCodeAt(i) <= 255)){
                acento = true;
                break;
            }
        }

        if(acento == false && pontoEspaco == false) {
            return true;
        }
        else {
            return false;
        }
    }

    if(tamanho() && caracteres() && especiais()) {
        resultado.textContent = "SENHA VÁLIDA";
        resultado.style.color = "green";
        return true;
    }
    else {
        resultado.textContent = "SENHA INVÁLIDA";
        resultado.style.color = "red";
        return false;
    }
    
}