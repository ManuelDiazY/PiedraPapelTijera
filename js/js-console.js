function jugar(){
	let eleccion = prompt("¿Cual es tu eleccion, piedra, papel o tijera?");
	eleccion = eleccion.toLowerCase();

	if (eleccion.length > 0){
		tiradaOrdenador=aleatorio();
		obteneResultado(eleccion,tiradaOrdenador);
	}
	

}

//generar tirada aleatoria del ordenador
function aleatorio() {
		let aleatorio = Math.floor(Math.random() * (4 - 1)) + 1;
		if(aleatorio==1)
			return "piedra";
		if(aleatorio==2)
			return "papel";
		if(aleatorio==3)
			return "tijera";
}

//obtener reultado del juego 
function obteneResultado(eleccion,tiradaOrdenador){
	console.log("TU: "+ eleccion + " VS " + "ORDENADOR: " + tiradaOrdenador);
	//eleccion -> mano del jugador
	if(eleccion==tiradaOrdenador)
		console.log("EMPATE");
	if(eleccion=="piedra" && tiradaOrdenador=="tijera")
		console.log("TU GANAS :-)");
	if(eleccion=="tijera" && tiradaOrdenador=="papel")
		console.log("TU GANAS :-)");
	//eleccion->mano onrdenador
	if(tiradaOrdenador=="piedra" && eleccion=="tijera")
		console.log("ORDENADOR GANO :-(");
	if(tiradaOrdenador=="tijera" && eleccion=="papel")
		console.log("ORDENADOR GANO :-(");
}