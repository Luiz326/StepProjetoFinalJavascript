function verificaNome() {
    let nome = document.getElementById('nome').value;
    nome = nome.trim()
    if (nome == "") {
        document.getElementById('nomeErro').innerHTML = "Preencha o campo";
        document.getElementById('nomeErro').style.color = "red";
    } else {
        document.getElementById('nomeErro').innerHTML = "Preenchido corretamente";
        document.getElementById('nomeErro').style.color = "green";
        document.getElementById('nome').value = nome;
    }
    for (let i = 0; i < nome.length; i++) {

        if (verificaCaracterEspecial(nome) || verificaNumero(nome)) {
            document.getElementById('nomeErro').innerHTML = "Caracter inválido";
            document.getElementById('nomeErro').style.color = "red";
           
        } else {
            document.getElementById('nomeErro').innerHTML = "Preenchido corretamente";
            document.getElementById('nomeErro').style.color = "green";

        }

    }

}

function verificaEmail() {
    let email = document.getElementById("email").value;
    email = email.trim();

    if (email == "") {
        document.getElementById('emailErro').innerHTML = "Preencha o campo";
        document.getElementById('emailErro').style.color = "red";
        document.getElementById('email').value = "";
    } else {
        document.getElementById('assuntoErro').innerHTML = "Preenchido corretamente";
        document.getElementById('assuntoErro').style.color = "green";
        document.getElementById('assunto').value = email;
    }

    for (let i = 0; i < email.length; i++) {

        if (verificaNumero(email) || verificaAcento(email) || !email.includes("@") || email.includes("@@")|| !email.includes(".com")
        || !email.includes("gmail") && !email.includes("outlook")  && !email.includes("yahoo")) {
            document.getElementById('emailErro').innerHTML = "Campo preenchido incorretamente";
            document.getElementById('emailErro').style.color = "red";
           
        } else {
            document.getElementById('emailErro').innerHTML = "Preenchido corretamente";
            document.getElementById('emailErro').style.color = "green";
        }

    }

}

function verificaAssunto() {
    let assunto = document.getElementById('assunto').value;
    assunto = assunto.trim();
    if (assunto == "") {
        document.getElementById('assuntoErro').innerHTML = "Preencha o campo";
        document.getElementById('assuntoErro').style.color = "red";
       
    } else {
        document.getElementById('assuntoErro').innerHTML = "Preenchido corretamente";
        document.getElementById('assuntoErro').style.color = "green";
        document.getElementById('assunto').value = assunto;
    }

}

function verificaTexto() {
    let texto = document.getElementById('texto').value;
    texto = texto.trim();
    if (texto == "") {
        document.getElementById('textoErro').innerHTML = "Preencha o campo";
        document.getElementById('textoErro').style.color = "red";
      
    } 
}
function verificaCaracter() {
    let desc = document.querySelector("#texto");
    let maxChars = 250

desc.addEventListener("keypress", function (e) {
        if (desc.value.length >= maxChars) {
            e.preventDefault();
            document.getElementById('textoErro').innerHTML = "250 caracteres OK";
            document.getElementById('textoErro').style.color = "green";
          
        }
    })
 
}


function verificaNumero(numero) {
    let cont;
    let numeros = "1234567890";
    for (let i = 0; i < numeros.length; i++) {
        if (numero.includes(numeros.charAt(i))) {
            cont++;
            if (cont == 0) {
                return false;
            } else {
                return true;
            }
        }

    }
}


function verificaCaracterEspecial(especial) {
    let cont;
    let especiais = "!@#$%¨&*()-_+={}[];:.,?/";
    for (let i = 0; i < especiais.length; i++) {
        if (especial.includes(especiais.charAt(i))) {
            cont++;
            if (cont == 0) {
                return false;
            } else {
                return true;
            }
        }

    }
}
function verificaAcento(acento) {
    let cont;
    let acentos = "´`^~";
    for (let i = 0; i < acentos.length; i++) {
        if (acento.includes(acentos.charAt(i))) {
            cont++;
            if (cont == 0) {
                return false;
            } else {
                return true;
            }
        }

    }
}

