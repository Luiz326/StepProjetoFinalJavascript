let lista = [];
lista.push("Imagem/principal.jpeg");
lista.push("Imagem/hiroshi1.jpeg");
lista.push("Imagem/hiroshi2.jpeg");
lista.push("Imagem/hiroshi3.jpeg");
lista.push("Imagem/hiroshi4.jpeg");

let texto = [];
texto.push("Foto 1");
texto.push("Foto 2");
texto.push("Foto 3");
texto.push("Foto 4");
texto.push("Foto 5");

let i = 0;
function anterior() {

    if (i <= 0) {
        i = lista.length - 1;
    } else {
        i--;
    }

    document.getElementById('tela').src = lista[i];
    document.getElementById('texto').innerHTML = texto[i];
 
}

function proximo() {
     
        if (i == lista.length - 1) {
            i = 0;
        } else {
            i++;
        }

        document.getElementById('tela').src = lista[i];
        document.getElementById('texto').innerHTML = texto[i];
 

}
