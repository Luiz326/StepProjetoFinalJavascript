let dia1 = document.getElementById("dia").value;
let dia2 = document.getElementById("dia2").value;
let dia3 = document.getElementById("dia3").value;
let dia4 = document.getElementById("dia4").value;

let evento = document.getElementById("evento").value;
let evento2 = document.getElementById("evento2").value;
let evento3 = document.getElementById("evento3").value;
let evento4 = document.getElementById("evento4").value;



function pegarValorRadio() {
    let rad = document.getElementsByName("mes");
    let mes;
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            mes = rad[i].value;
            console.log(mes)
        }
        switch (mes) {
            case "setembro":
                dia1 = document.getElementById('dia').innerHTML = "22/09/2021";
                dia2 = document.getElementById('dia2').innerHTML = "23/09/2021";
                dia3 = document.getElementById('dia3').innerHTML = "24/09/2021";
                dia4 = document.getElementById('dia4').innerHTML = "25/09/2021";

                evento = document.getElementById('evento').innerHTML = "Evento 1";
                evento2 = document.getElementById('evento2').innerHTML = "Evento 2";
                evento3 = document.getElementById('evento3').innerHTML = "Evento 3";
                evento4 = document.getElementById('evento4').innerHTML = "Evento 4";
                break;
            case "outubro":
                dia1 = document.getElementById('dia').innerHTML = "22/10/2021";
                dia2 = document.getElementById('dia2').innerHTML = "23/10/2021";
                dia3 = document.getElementById('dia3').innerHTML = "24/10/2021";
                dia4 = document.getElementById('dia4').innerHTML = "25/10/2021";

                evento = document.getElementById('evento').innerHTML = "Evento 1";
                evento2 = document.getElementById('evento2').innerHTML = "Evento 2";
                evento3 = document.getElementById('evento3').innerHTML = "Evento 3";
                evento4 = document.getElementById('evento4').innerHTML = "Evento 4";
                break;
            case "novembro":
                dia1 = document.getElementById('dia').innerHTML = "22/11/2021";
                dia2 = document.getElementById('dia2').innerHTML = "23/11/2021";
                dia3 = document.getElementById('dia3').innerHTML = "24/11/2021";
                dia4 = document.getElementById('dia4').innerHTML = "25/11/2021";

                evento = document.getElementById('evento').innerHTML = "Evento 1";
                evento2 = document.getElementById('evento2').innerHTML = "Evento 2";
                evento3 = document.getElementById('evento3').innerHTML = "Evento 3";
                evento4 = document.getElementById('evento4').innerHTML = "Evento 4";
                
        }


    }




}

