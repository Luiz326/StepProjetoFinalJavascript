let rad;
let rad1;
let rad2;
let rad3;
let rad4;
let listaRad;
let resultado = document.querySelector("#escolhas");


function pegarValorRadio() {
    let cond
    rad = document.querySelector('input[name=musica]:checked');
    rad1 = document.querySelector('input[name=idade]:checked');
    rad2 = document.querySelector('input[name=regiao]:checked');
    rad3 = document.querySelector('input[name=interesse]:checked');
    rad4 = document.querySelector('input[name=frequencia]:checked');

    listaRad = [rad, rad1, rad2, rad3, rad4];


    for (let i = 0; i < listaRad.length; i++) {
        if (listaRad[i] == null) {
            cond = false;
        }

    }

    if (cond !== false) {

        listaRad = [rad.parentNode.innerText, rad1.parentNode.innerText, rad2.parentNode.innerText, rad3.parentNode.innerText, rad4.parentNode.innerText];
            
        listarModal();
      

    } else {
        alert("Preencha os campos")
        
    }
    console.log(rad.value)
    let r1 = document.getElementById('r1');
    let r3 = document.getElementById('r3');
    let r4 = document.getElementById('r4');
    let r5 = document.getElementById('r5');
    let r2 = document.getElementById('r2');

    r1.innerHTML  = "<p> Resposta 1:" +" "+ rad.parentNode.innerText + "</p>";
    r2.innerHTML  = "<p> Resposta 2:" +" "+ rad1.parentNode.innerText + "</p>";
    r3.innerHTML  = "<p> Resposta 3:" +" "+ rad2.parentNode.innerText + "</p>";
    r4.innerHTML  = "<p> Resposta 4:" +" "+ rad3.parentNode.innerText + "</p>";
    r5.innerHTML  = "<p> Resposta 5:" +" "+ rad4.parentNode.innerText + "</p>";
   
}

function listarModal() {
    let el = document.getElementById("resultado");
    
    
    
    el.classList.remove("sem-modal");
    el.classList.add("resposta-modal");
   
   
  
    let p = document.createElement('p');

    resultado.innerHTML = ""
    for (let i = 0; i < listaRad.length; i++) {

        resultado.innerHTML += p.innerHTML = "<p>" + listaRad[i] + "</p>";
       
        
    }
    

}

function confirmaResultado() {
    let el = document.getElementById("resultado");
    let el2 = document.getElementById("resposta");
    el.classList.remove("resposta-modal");
    el.classList.add("sem-modal");
    el2.classList.remove("sem-modal");
    el2.classList.add("div-resposta");
    alert("Resultado preenchido com sucesso")
          
}

function cancelaResultado() {
    let el = document.getElementById("resultado");
    let el2 = document.getElementById("resposta");

    el.classList.remove("resposta-modal");
    el.classList.add("sem-modal");
    el2.classList.remove("div-resposta");
    el2.classList.add("sem-modal");
     
}
function fecharResultado() {
    let el = document.getElementById("resultado");
    let el2 = document.getElementById("resposta");

    el.classList.remove("resposta-modal");
    el.classList.add("sem-modal");
    el2.classList.remove("div-resposta");
    el2.classList.add("sem-modal");
     location.reload();
}
document.getElementById("botao").addEventListener("click", pegarValorRadio);
