function verificaCampoVazioOuPreenchido(id) {
    let assunto = document.getElementById(id).value;
    assunto = assunto.trim();
    if (assunto == "") {
        document.getElementById(id + 'Erro').innerHTML = "Preencha o campo";
        document.getElementById(id + 'Erro').style.color = "red";
        document.getElementById(id).value = "";
    } else {
        document.getElementById(id + 'Erro').innerHTML = "Preenchido corretamente";
        document.getElementById(id + 'Erro').style.color = "green";
        document.getElementById(id).value = assunto;
    }

}

function verificaNome() {
    let nome = document.getElementById("nome").value;
    nome = nome.trim();
    if (nome == null || nome == "") {

        document.getElementById("nomeErro").style.textAlign = "right";
        document.getElementById("nomeErro").style.paddingRight = "66px";
        document.getElementById("nomeErro").style.color = "red";
        document.getElementById("nomeErro").innerHTML = "Preencha o campo";
    } else {
        document.getElementById("nome").value = nome;
        document.getElementById("nomeErro").innerHTML = "Campo preenchido.";
        document.getElementById("nomeErro").style.textAlign = "right";
        document.getElementById("nomeErro").style.paddingRight = "66px";
        document.getElementById("nomeErro").style.color = "green";
    }

    for (let i = 0; i < nome.length; i++) {
        if (verificaNumero(nome) || verificaCaracterEspecial(nome)) {
            document.getElementById("nomeErro").innerHTML = "Caracter inválido";
            document.getElementById("nomeErro").style.color = "red";
        } else {
            document.getElementById("nomeErro").innerHTML = "Preenchido corretamente";
            document.getElementById("nomeErro").style.color = "green";
        }



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

}

function verificaRua() {
    let nome = document.getElementById("rua").value;
    nome = nome.trim();
    if (nome == null || nome == "") {

        document.getElementById("ruaErro").style.textAlign = "right";
        document.getElementById("ruaErro").style.paddingRight = "66px";
        document.getElementById("ruaErro").style.color = "red";
        document.getElementById("ruaErro").innerHTML = "Preencha o campo";
    } else {
        document.getElementById("rua").value = nome;
        document.getElementById("ruaErro").innerHTML = "Campo preenchido.";
        document.getElementById("ruaErro").style.textAlign = "right";
        document.getElementById("ruaErro").style.paddingRight = "66px";
        document.getElementById("ruaErro").style.color = "green";
    }

    for (let i = 0; i < nome.length; i++) {
        if (verificaNumero(nome) || verificaCaracterEspecial(nome)) {
            document.getElementById("ruaErro").innerHTML = "Caracter inválido";
            document.getElementById("ruaErro").style.color = "red";
        } else {
            document.getElementById("ruaErro").innerHTML = "Preenchido corretamente";
            document.getElementById("ruaErro").style.color = "green";
        }



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

}
function verificaBairro() {
    let nome = document.getElementById("bairro").value;
    nome = nome.trim();
    if (nome == null || nome == "") {

        document.getElementById("bairroErro").style.textAlign = "right";
        document.getElementById("bairroErro").style.paddingRight = "66px";
        document.getElementById("bairroErro").style.color = "red";
        document.getElementById("bairroErro").innerHTML = "Preencha o campo";
    } else {
        document.getElementById("bairro").value = nome;
        document.getElementById("bairroErro").innerHTML = "Campo preenchido.";
        document.getElementById("bairroErro").style.textAlign = "right";
        document.getElementById("bairroErro").style.paddingRight = "66px";
        document.getElementById("bairroErro").style.color = "green";
    }

    for (let i = 0; i < nome.length; i++) {
        if (verificaNumero(nome) || verificaCaracterEspecial(nome)) {
            document.getElementById("bairroErro").innerHTML = "Caracter inválido";
            document.getElementById("bairroErro").style.color = "red";
        } else {
            document.getElementById("bairroErro").innerHTML = "Preenchido corretamente";
            document.getElementById("bairroErro").style.color = "green";
        }



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

}

function verificaCidade() {
    let nome = document.getElementById("cidade").value;
    nome = nome.trim();
    if (nome == null || nome == "") {

        document.getElementById("cidadeErro").style.textAlign = "right";
        document.getElementById("cidadeErro").style.paddingRight = "66px";
        document.getElementById("cidadeErro").style.color = "red";
        document.getElementById("cidadeErro").innerHTML = "Preencha o campo";
    } else {
        document.getElementById("cidade").value = nome;
        document.getElementById("cidadeErro").innerHTML = "Campo preenchido.";
        document.getElementById("cidadeErro").style.textAlign = "right";
        document.getElementById("cidadeErro").style.paddingRight = "66px";
        document.getElementById("cidadeErro").style.color = "green";
    }

    for (let i = 0; i < nome.length; i++) {
        if (verificaNumero(nome) || verificaCaracterEspecial(nome)) {
            document.getElementById("cidadeErro").innerHTML = "Caracter inválido";
            document.getElementById("cidadeErro").style.color = "red";
        } else {
            document.getElementById("cidadeErro").innerHTML = "Preenchido corretamente";
            document.getElementById("cidadeErro").style.color = "green";
        }



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

}



function verificaIdentidade() {
    let identidade = document.getElementById("identidade").value;
    identidade = identidade.trim();
    let identidadeFormat;

    if (identidade == null || identidade == "") {

        document.getElementById("identidadeErro").style.textAlign = "right";
        document.getElementById("identidadeErro").style.paddingRight = "66px";
        document.getElementById("identidadeErro").style.color = "red";
        document.getElementById("identidadeErro").innerHTML = "Preencha o campo";
    } else {
        document.getElementById("identidade").value = identidade;
        document.getElementById("identidadeErro").innerHTML = "Campo preenchido.";
        document.getElementById("identidadeErro").style.textAlign = "right";
        document.getElementById("identidadeErro").style.paddingRight = "66px";
        document.getElementById("identidadeErro").style.color = "green";
    }


    for (let i = 0; i < identidade.length; i++) {
        if (identidade.length == 12) {
            identidade = identidade.replace(".", "");
            identidade = identidade.replace(".", "");
            identidade = identidade.replace("-", "");
        }
        if (identidade.length == 9 && identidade) {
            identidadeFormat = identidade.substring(0, 2) + "." + identidade.substring(2, 5) + "." + identidade.substring(5, 8) +
                "-" + identidade.substring(8);

            if (verificaNumero(identidade) && identidade) {
                document.getElementById("identidade").value = identidadeFormat;
                document.getElementById("identidadeErro").innerHTML = "Campo preenchido.";
                document.getElementById("identidadeErro").style.textAlign = "right";
                document.getElementById("identidadeErro").style.paddingRight = "66px";
                document.getElementById("identidadeErro").style.color = "green";
            }


        } else {
            document.getElementById("identidadeErro").style.textAlign = "right";
            document.getElementById("identidadeErro").style.paddingRight = "66px";
            document.getElementById("identidadeErro").style.color = "red";
            document.getElementById("identidadeErro").innerHTML = "Caracter inválido.";
        }



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


}
function verificaCPF() {
    let cpf = document.getElementById("cpf").value;
    cpf = cpf.trim();
    let cpfFormat;

    if (cpf == null || cpf == "") {

        document.getElementById("cpfErro").style.textAlign = "right";
        document.getElementById("cpfErro").style.paddingRight = "66px";
        document.getElementById("cpfErro").style.color = "red";
        document.getElementById("cpfErro").innerHTML = "Preencha o campo";
    } else {
        document.getElementById("cpf").value = identidade;
        document.getElementById("cpfErro").innerHTML = "Campo preenchido.";
        document.getElementById("cpfErro").style.textAlign = "right";
        document.getElementById("cpfErro").style.paddingRight = "66px";
        document.getElementById("cpfErro").style.color = "green";
    }
    if (cpf.length == 14 && cpf.includes(".") && cpf.includes("-") && verificaNumero(cpf)) {
        cpf = cpf.replace(".", "");
        cpf = cpf.replace(".", "");
        cpf = cpf.replace("-", "");
    }

    if (cpf.length == 11 && verificaNumero(cpf)) {
        cpfFormat = cpf.substring(0, 3) + "." + cpf.substring(3, 6) + "." + cpf.substring(6, 9) +
            "-" + cpf.substring(9);

        document.getElementById("cpf").value = cpfFormat;
        document.getElementById("cpfErro").innerHTML = "Campo preenchido.";
        document.getElementById("cpfErro").style.textAlign = "right";
        document.getElementById("cpfErro").style.paddingRight = "66px";
        document.getElementById("cpfErro").style.color = "green";


    } else {
        document.getElementById("cpf").value = "";
        document.getElementById("cpfErro").style.textAlign = "right";
        document.getElementById("cpfErro").style.paddingRight = "66px";
        document.getElementById("cpfErro").style.color = "red";
        document.getElementById("cpfErro").innerHTML = "Preencha corretamente com 11 digitos.";
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


}
function verificaCep() {
    let cep = document.getElementById("cep").value;
    cep = cep.trim();
    let cepFormat;

    if (cep == null || cep == "") {

        document.getElementById("cepErro").style.textAlign = "right";
        document.getElementById("cepErro").style.paddingRight = "66px";
        document.getElementById("cepErro").style.color = "red";
        document.getElementById("cepErro").innerHTML = "Preencha o campo";
    } else {
        document.getElementById("cep").value = cep;
        document.getElementById("cepErro").innerHTML = "Campo preenchido.";
        document.getElementById("cepErro").style.textAlign = "right";
        document.getElementById("cepErro").style.paddingRight = "66px";
        document.getElementById("cepErro").style.color = "green";
    }


    for (let i = 0; i < cep.length; i++) {
        if (cep.length == 9) {
            cep = cep.replace("-", "");
        }
        if (cep.length == 8 && cep) {
            cepFormat = cep.substring(0, 2) + cep.substring(2, 5) + "-" + cep.substring(5, 8) +
                cep.substring(8);

            if (verificaNumero(cep) && cep) {
                document.getElementById("cep").value = cepFormat;
                document.getElementById("cepErro").innerHTML = "Campo preenchido.";
                document.getElementById("cepErro").style.textAlign = "right";
                document.getElementById("cepErro").style.paddingRight = "66px";
                document.getElementById("cepErro").style.color = "green";
            }


        } else {
            document.getElementById("cepErro").style.textAlign = "right";
            document.getElementById("cepErro").style.paddingRight = "66px";
            document.getElementById("cepErro").style.color = "red";
            document.getElementById("cepErro").innerHTML = "Caracter inválido.";
        }



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


}
function verificarTelefone() {
    let telefone = document.getElementById("telefone").value;
    telefone = telefone.trim();
    let telefoneFormat;
    if (telefone == null || telefone == "") {

        document.getElementById("telefoneErro").style.textAlign = "right";
        document.getElementById("telefoneErro").style.paddingRight = "66px";
        document.getElementById("telefoneErro").style.color = "red";
        document.getElementById("telefoneErro").innerHTML = "Preencha o campo";
    } else {
        document.getElementById("telefone").value = telefone;
        document.getElementById("telefoneErro").innerHTML = "Campo preenchido.";
        document.getElementById("telefoneErro").style.textAlign = "right";
        document.getElementById("telefoneErro").style.paddingRight = "66px";
        document.getElementById("telefoneErro").style.color = "green";
    }
    for (let i = 0; i < telefone.length; i++) {
        if (telefone.length == 14) {
            telefone = telefone.replace("(", "");
            telefone = telefone.replace(")", "");
            telefone = telefone.replace("-", "");
        }
        if (telefone.length == 11 && telefone) {
            telefoneFormat = "(" + telefone.substring(0, 1) + telefone.substring(1, 2) + ")" + telefone.substring(2, 7) +
                "-" + telefone.substring(7);
            if (verificaNumero(telefone)) {
                document.getElementById("telefone").value = telefoneFormat;
                document.getElementById("telefoneErro").innerHTML = "Campo preenchido.";
                document.getElementById("telefoneErro").style.textAlign = "right";
                document.getElementById("telefoneErro").style.paddingRight = "66px";
                document.getElementById("telefoneErro").style.color = "green";
            }
        } else {
            document.getElementById("telefoneErro").style.textAlign = "right";
            document.getElementById("telefoneErro").style.paddingRight = "66px";
            document.getElementById("telefoneErro").style.color = "red";
            document.getElementById("telefoneErro").innerHTML = "Caracter inválido.";
        }


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
}
function verificarCelular() {
    let celular = document.getElementById("celular").value;
    celular = celular.trim();
    let celularFormat;
    if (celular == null || celular == "") {

        document.getElementById("celularErro").style.textAlign = "right";
        document.getElementById("celularErro").style.paddingRight = "66px";
        document.getElementById("celularErro").style.color = "red";
        document.getElementById("celularErro").innerHTML = "Preencha o campo";
    } else {
        document.getElementById("celular").value = celular;
        document.getElementById("celularErro").innerHTML = "Campo preenchido.";
        document.getElementById("celularErro").style.textAlign = "right";
        document.getElementById("celularErro").style.paddingRight = "66px";
        document.getElementById("celularErro").style.color = "green";
    }
    for (let i = 0; i < celular.length; i++) {
        if (celular.length == 14) {
            celular = celular.replace("(", "");
            celular = celular.replace(")", "");
            celular = celular.replace("-", "");
        }
        if (celular.length == 11 && celular) {
            celularFormat = "(" + celular.substring(0, 1) + celular.substring(1, 2) + ")" + celular.substring(2, 7) +
                "-" + celular.substring(7);
            if (verificaNumero(celular)) {
                document.getElementById("celular").value = celularFormat;
                document.getElementById("celularErro").innerHTML = "Campo preenchido.";
                document.getElementById("celularErro").style.textAlign = "right";
                document.getElementById("celularErro").style.paddingRight = "66px";
                document.getElementById("celularErro").style.color = "green";
            }
        } else {
            document.getElementById("celularErro").style.textAlign = "right";
            document.getElementById("celularErro").style.paddingRight = "66px";
            document.getElementById("celularErro").style.color = "red";
            document.getElementById("celularErro").innerHTML = "Caracter inválido.";
        }


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
}
function verificaEmail() {
    let email = document.getElementById("email").value;
    email = email.trim();

    if (email == "") {
        document.getElementById("emailErro").style.textAlign = "right";
        document.getElementById("emailErro").style.paddingRight = "66px";
        document.getElementById("emailErro").style.color = "red";
        document.getElementById("emailErro").innerHTML = "Preencha o campo";

    } else {
        document.getElementById("email").value = email;
        document.getElementById("emailErro").innerHTML = "Campo preenchido.";
        document.getElementById("emailErro").style.textAlign = "right";
        document.getElementById("emailErro").style.paddingRight = "66px";
        document.getElementById("emailErro").style.color = "green";
    }

    for (let i = 0; i < email.length; i++) {

        if (verificaAcento(email) || !email.includes("@") || email.includes("@@") || !email.includes(".com") || !email.includes("gmail")
            && !email.includes("outlook") && !email.includes("yahoo")) {
            document.getElementById("emailErro").style.textAlign = "right";
            document.getElementById("emailErro").style.paddingRight = "66px";
            document.getElementById("emailErro").style.color = "red";
            document.getElementById("emailErro").innerHTML = "Preencha o campo corretamente.";

        } else {
            document.getElementById("email").value = email;
            document.getElementById("emailErro").innerHTML = "Campo preenchido.";
            document.getElementById("emailErro").style.textAlign = "right";
            document.getElementById("emailErro").style.paddingRight = "66px";
            document.getElementById("emailErro").style.color = "green";

        }

    } function verificaAcento(acento) {
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


}
function verificaTexto() {
    let texto = document.getElementById('texto').value;
    texto = texto.trim();
    if (texto == "") {
        document.getElementById('textoErro').innerHTML = "Preencha o campo";
        document.getElementById('textoErro').style.color = "red";
        document.getElementById('texto').value = "";
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
function verificaSexo() {
    let rad
    rad = document.querySelector('input[name=sexo]:checked').value;
    let masculino = document.getElementById("masculino").value;
    let feminino = document.getElementById("feminino").value;
    console.log(rad)

    if (rad == masculino) {
        document.getElementById('sexoErro').innerHTML = "Opção escolhida: masculino";
        document.getElementById('sexoErro').style.color = "green";

    } else {
        if (rad == feminino) {
            document.getElementById('sexoErro').innerHTML = "Opção escolhida: feminino";
            document.getElementById('sexoErro').style.color = "green";
        }
    }


}
function verificaEscolaridade() {
    var select = document.getElementById('escolaridade');
    var optionValue = select.options[select.selectedIndex].value;
    console.log(optionValue)
    
    if (optionValue  == 'primeiroGrauCompleto' ) {
        document.getElementById('escolaridadeErro').innerHTML = "Opção escolhida: 1° Grau Completo";
        document.getElementById('escolaridadeErro').style.color = "green";

    }else{
        if(optionValue =='segundoGrauCompleto'){
            document.getElementById('escolaridadeErro').innerHTML = "Opção escolhida: 2° Grau Completo";
        document.getElementById('escolaridadeErro').style.color = "green";
        }else{
            if(optionValue =='terceiroGrauCompleto'){
            document.getElementById('escolaridadeErro').innerHTML = "Opção escolhida: 3° Grau Completo";
            document.getElementById('escolaridadeErro').style.color = "green";
            }else{
                if(optionValue =='primeiroGrauIncompleto'){
                    document.getElementById('escolaridadeErro').innerHTML = "Opção escolhida: 1° Grau incompleto";
                document.getElementById('escolaridadeErro').style.color = "green";
                }else{
                    if(optionValue =='segundoGrauIncompleto'){
                        document.getElementById('escolaridadeErro').innerHTML = "Opção escolhida: 2° Grau incompleto";
                    document.getElementById('escolaridadeErro').style.color = "green";
                    }else{
                        if(optionValue =='terceiroGrauIncompleto'){
                            document.getElementById('escolaridadeErro').innerHTML = "Opção escolhida: 3° Grau incompleto";
                        document.getElementById('escolaridadeErro').style.color = "green";
                        }else{
                            if(optionValue =='escolha'){
                                document.getElementById('escolaridadeErro').innerHTML = "Selecione uma opção";
                            document.getElementById('escolaridadeErro').style.color = "red";
                            }
                        
                        }
                    
                    }
                
                }
            
            }
    
        }

    }
  
}

function selecionarUf() {
    var select = document.getElementById('uf');
    var optionText = select.options[select.selectedIndex].text;
    var optionValue = select.options[select.selectedIndex].value;


    if (optionValue == 'selecione') {
        document.getElementById('ufError').innerHTML = "Selecione a UF";
        document.getElementById('ufError').style.color = "red";
    } else {
        document.getElementById('ufError').innerHTML = "Campo preenchido";
        document.getElementById('ufError').style.color = "green";
    }



}