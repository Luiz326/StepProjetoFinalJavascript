let relogio = document.getElementById("relogio");
let data = document.getElementById("data");




function inicializa(){
    setInterval(()=>{
       relogio.innerHTML = formataHora(new Date());
    },1000);
    setInterval(()=>{
        data.innerHTML = formataDiaMesAno(new Date());
     },1000);
}
inicializa();

function formataHora(date){
   let h = date.getHours().toString().padStart(2, "0"),
   m = date.getMinutes().toString().padStart(2, "0"),
   s = date.getSeconds().toString().padStart(2, "0");

   return h + ":" + m +":" + s;
}

function formataDiaMesAno(date){
    let dia = date.getDate().toString().padStart(2, "0"),
    mes = (date.getMonth()+1).toString().padStart(2, "0"),
    ano = date.getFullYear();
 
    return dia+ "/" + mes +"/" + ano;
 }