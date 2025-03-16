document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".boton-jugada");
    const resultados = document.getElementById("resultados");
    const contadorUsuario = document.getElementById("contador-usuario");
    const contadorOrdenador = document.getElementById("contador-ordenador");
    const botonReiniciar = document.createElement("button")
    let puntosUsuario = 0;
    let puntosOrdenador = 0;

    botonReiniciar.textContent = "Reiniciar";
    botonReiniciar.id = "boton-reiniciar";
    document.body.appendChild(botonReiniciar);

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const eleccionUsuario = boton.getAttribute("data-jugada");
            const eleccionOrdenador = obtenerJugadaOrdenador();
            const resultado = determinarGanador(eleccionUsuario, eleccionOrdenador);
            
            resultados.innerHTML = `Sacas: <strong>${eleccionUsuario}</strong> - La máquina saca: <strong>${eleccionOrdenador}</strong><br>${resultado}`;
            
            if (resultado.includes("Has ganado")) {
                puntosUsuario++;
            } else if (resultado.includes("Has perdido")) {
                puntosOrdenador++;
            }
            
            contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
            contadorOrdenador.textContent = `Puntos de la máquina 🖥️: ${puntosOrdenador}`;
        });
    });

    botonReiniciar.addEventListener("click", () => {
        resultados.innerHTML = "";
        puntosUsuario = 0;
        puntosOrdenador = 0;
        contadorUsuario.textContent = "Tus puntos: 0"
        contadorOrdenador.textContent = "Puntos de la maquina: 0"
    });

    function obtenerJugadaOrdenador() {
        const opciones = ["piedra", "papel", "tijera"];
        return opciones[Math.floor(Math.random() * opciones.length)];
    }

    function determinarGanador(usuario, ordenador) {
        if (usuario === ordenador) {
            return "Empate";
        }
        if (
            (usuario === "piedra" && ordenador === "tijera") ||
            (usuario === "papel" && ordenador === "piedra") ||
            (usuario === "tijera" && ordenador === "papel")
        ) {
            return "Has ganado";
        } else {
            return "Has perdido";
        }
    }
});