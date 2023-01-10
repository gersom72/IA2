function limpiapantalla() {

    // contexto.clearRect(0, 0, 500, 500);
    //rastro 
    contexto.fillStyle = "rgb(255,255,255,1)";
    contexto.fillRect(0, 0, 500, 500);

}

function textoinicial() {
    contexto.fillStyle = "blue";
    //texto 
    contexto.font = "25px san-serif";
    contexto.fillText("Inteligencia Artificial", 200, 220);
    contexto.fillText("Gersom Flores Díaz", 200, 260);
}