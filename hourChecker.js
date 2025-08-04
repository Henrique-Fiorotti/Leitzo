var agora = new Date();
var hora = agora.getHours();

var weatherh1 = document.querySelector("#weatherh1");

if (hora < 6){
    weatherh1.innerHTML =`Boa madrugada! <br> Seja bem-vindo(a) ao seu perfil Leitzo`;
}
else if(hora < 12){
    weatherh1.innerHTML =`Bom dia! <br> Seja bem-vindo(a) ao seu perfil Leitzo`;
}
else if(hora < 18){
    weatherh1.innerHTML =`Boa tarde! <br> Seja bem-vindo(a) ao seu perfil Leitzo`;
}
else if(hora < 24){
    weatherh1.innerHTML =`Boa noite! <br> Seja bem-vindo(a) ao seu perfil Leitzo`;
}
