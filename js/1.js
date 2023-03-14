   //FUNCIÓN PARA LAS ALERTAS
   function alertaDeElecciones( quienElije , eleccion ) {
    if ( eleccion == 1 ) {
        alert( "El " + quienElije + " eligió 🥌" );
    } else if ( eleccion == 2 ) {
        alert( "El " + quienElije + " eligió 📄" );
    } else if ( eleccion == 3 ) {
        alert( "El " + quienElije + " eligió ✂️" );
    } else {
        alert( "Hubo un error con la elección del " + quienElije + " 🙃" );
    }
}

//FUNCIÓN PARA GENERAR NÚMEROS ALEATORIOS
function numeroAleatorio( min , max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

//FUNCIÓN PARA DECIDIR EL GANADOR
function quienGanaEntre ( eleccionJugador , eleccionOponente ) {
    if ( eleccionJugador == eleccionOponente ) {
        alert( "¡EMPATE! 🤼" );
        empates = empates + 1;
    } else if ( eleccionJugador == 1 && eleccionOponente == 3 ) {
        alert( "¡GANASTE! 🥳" );
        victorias = victorias + 1;
    } else if ( eleccionJugador == 2 && eleccionOponente == 1 ) {
        alert( "¡GANASTE! 🥳" );
        victorias = victorias + 1;
    } else if ( eleccionJugador == 3 && eleccionOponente == 2 ) {
        alert( "¡GANASTE! 🥳" );
        victorias = victorias + 1;
    } else {
        alert( "PERDISTE... 😢" );
        derrotas = derrotas + 1;
    }
}

//FUNCIÓN PARA NOMBRAR AL GANADOR FINAL
function mostrarResultados() {
    alert("Has acumulado " + 
        victorias + " victorias, " + 
        derrotas + " derrotas y " + 
        empates + " empates.");

    if ( victorias == 2 ) {
        alert( "TÚ eres el GANADOR" );
        resetearVariables();
    } else if ( derrotas == 2 ) {
        alert( "EL COMPUTADOR es el GANADOR" );
        resetearVariables();
    } else {
        alert( "Hubo un error... 🙃");
        resetearVariables();
    }
}

//FUNCIÓN PARA RESETEAR VARIABLES DE VICTORIAS
function resetearVariables() {
    victorias = 0;
    derrotas  = 0;
    empates   = 0;
}

//ELECCIÓN DEL JUGADOR
let eleccionDelJugador = 0;

//ELECCIÓN DEL COMPUTADOR
let eleccionDelComputador = 0;

//DECIDIENDO EL GANADOR
let victorias = 0;
let derrotas  = 0;
let empates   = 0;

while ( victorias < 2 && derrotas < 2 ) {
    eleccionDelJugador    = prompt( "Elige: 1 para 🥌, 2 para 📄, 3 para ✂️" );
    eleccionDelComputador = numeroAleatorio( 1 , 3 );

    alertaDeElecciones( "jugador"    , eleccionDelJugador    );
    alertaDeElecciones( "computador" , eleccionDelComputador );

    quienGanaEntre ( eleccionDelJugador , eleccionDelComputador );
}

mostrarResultados(); 