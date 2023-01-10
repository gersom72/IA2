class Robot {
    x = Math.random() * 500;
    y = Math.random() * 500;
    direccion = Math.random() * Math.PI * 2;

    //colores robot
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    //velocidad robot
    velocidad = Math.random() * 1;

    //lomo robot
    radio = Math.random() * 28;



    dibuja() {

        //patitas.
        //1
        contexto.fillStyle = "black";
        contexto.beginPath();
        contexto.arc(this.x + Math.cos(this.direccion + Math.PI / 2 * 0.5) * this.radio, this.y + Math.sin(this.direccion + Math.PI / 2 * 0.5) * this.radio, 3, 0, Math.PI * 2, true);
        contexto.fill();
        //2
        contexto.fillStyle = "black";
        contexto.beginPath();
        contexto.arc(this.x + Math.cos(this.direccion - Math.PI / 2 * 0.5) * this.radio, this.y + Math.sin(this.direccion - Math.PI / 2 * 0.5) * this.radio, 3, 0, Math.PI * 2, true);
        contexto.fill();

        //3
        contexto.fillStyle = "black";
        contexto.beginPath();
        contexto.arc(this.x + Math.cos(this.direccion + Math.PI / 2 * 1.5) * this.radio, this.y + Math.sin(this.direccion + Math.PI / 2 * 1.5) * this.radio, 3, 0, Math.PI * 2, true);
        contexto.fill();

        //4
        contexto.fillStyle = "black";
        contexto.beginPath();
        contexto.arc(this.x + Math.cos(this.direccion - Math.PI / 2 * 1.5) * this.radio, this.y + Math.sin(this.direccion - Math.PI / 2 * 1.5) * this.radio, 3, 0, Math.PI * 2, true);
        contexto.fill();

        // cabeza
        contexto.fillStyle = "black";
        contexto.beginPath();
        contexto.arc(this.x + Math.cos(this.direccion) * this.radio, this.y + Math.sin(this.direccion) * this.radio, 5, 0, Math.PI * 2, true);
        contexto.fill();

        //linea
        contexto.beginPath();
        contexto.moveTo(this.x, this.y);
        contexto.lineTo(this.x + Math.cos(this.direccion) * this.radio * 3, this.y + Math.sin(this.direccion) * this.radio * 3)
        contexto.stroke();

        //lomo robot
        contexto.fillStyle = "rgb(0,0,0)";
        contexto.beginPath();
        contexto.arc(this.x, this.y, this.radio, 0, Math.PI * 2, true);
        contexto.fill();


        //cuerpo robot
        contexto.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        contexto.beginPath();
        contexto.arc(this.x, this.y, this.radio * 0.9, 0, Math.PI * 2, true);
        contexto.fill();

        //cuerpo robot
        contexto.fillStyle = "rgb(0,0,0)";
        contexto.beginPath();
        contexto.arc(this.x, this.y, this.radio * 0.7, 0, Math.PI * 2, true);
        contexto.fill();

        //cuerpo robot
        contexto.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        contexto.beginPath();
        contexto.arc(this.x, this.y, this.radio * 0.5, 0, Math.PI * 2, true);
        contexto.fill();

        //cuerpo robot
        contexto.fillStyle = "rgb(0,0,0)";
        contexto.beginPath();
        contexto.arc(this.x, this.y, this.radio * 0.3, 0, Math.PI * 2, true);
        contexto.fill();

        //dibujar perceptores
        contexto.fillStyle = "rgb(0,0,0)";
        contexto.beginPath()
        contexto.arc(this.x + Math.cos(this.direccion) * this.radio * 2, this.y + Math.sin(this.direccion) * this.radio * 2, this.radio * 0.3, 0, Math.PI * 2, true);
        contexto.fill();

        contexto.fillStyle = "rgb(0,0,0)";
        contexto.beginPath()
        contexto.arc(this.x + Math.cos(this.direccion - 0.5) * this.radio * 2, this.y + Math.sin(this.direccion - 0.5) * this.radio * 2, this.radio * 0.3, 0, Math.PI * 2, true);
        contexto.fill();

        contexto.fillStyle = "rgb(0,0,0)";
        contexto.beginPath()
        contexto.arc(this.x + Math.cos(this.direccion - 1) * this.radio * 2, this.y + Math.sin(this.direccion - 1) * this.radio * 2, this.radio * 0.3, 0, Math.PI * 2, true);
        contexto.fill();

        contexto.fillStyle = "rgb(0,0,0)";
        contexto.beginPath()
        contexto.arc(this.x + Math.cos(this.direccion + 0.5) * this.radio * 2, this.y + Math.sin(this.direccion + 0.5) * this.radio * 2, this.radio * 0.3, 0, Math.PI * 2, true);
        contexto.fill();

        contexto.fillStyle = "rgb(0,0,0)";
        contexto.beginPath()
        contexto.arc(this.x + Math.cos(this.direccion + 1) * this.radio * 2, this.y + Math.sin(this.direccion + 1) * this.radio * 2, this.radio * 0.3, 0, Math.PI * 2, true);
        contexto.fill();


    }

    mueverobot() {
        this.direccion += (Math.random() - 0.5) * 0.01;
        this.x += Math.cos(this.direccion) * this.velocidad;
        this.y += Math.sin(this.direccion) * this.velocidad;

        // chocar pared y rebotar
        if (this.x < -1) {
            this.x = 0;
            this.direccion += Math.PI;
        }
        if (this.x > 501) {
            this.x = 500;
            this.direccion += Math.PI;
        }
        if (this.y < -1) {
            this.y = 0;
            this.direccion += Math.PI;
        }
        if (this.y > 501) {
            this.y = 500;
            this.direccion += Math.PI;
        }

    }
};