const funcion = require('./funcion');

const nombre = {
	demand:true,
	alias: 'n'
}
const documento = {
	demand:true,
	alias: 'd'
}
const correo = {
	demand:true,
	alias: 'c'
}
const telefono = {
	demand:true,
	alias: 't'
}


const creacion = {
    nombre,
    documento,
    correo,
    telefono
}

const argv = require('yargs')
.command ('crear', 'crear un usuario', creacion)
.command ('mostrar', 'muestra la lista de aspirantes')
.argv;

let comando = argv._[0];


switch (comando){

	case 'crear':
	funcion.crear(argv);
	break
		
	case 'mostrar':
	funcion.mostrar();
	break

	case 'login':
	funcion.login(argv);
	break
	
	default:
	console.log('No ingreso una funcion existente.')

}

