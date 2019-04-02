const fs = require('fs');
listaUsuarios = [];

const crear = (usuario) => {	
	listar();
	let usu = {
		nombre: usuario.nombre,
		documento: usuario.documento,
		correo: usuario.correo,
		telefono: usuario.telefono	
	};
	let duplicado = listaUsuarios.find(doc => doc.documento == usuario.documento)
	if((!duplicado) && (duplicado != 1234567890)){		
		listaUsuarios.push(usu);
		console.log(listaUsuarios);
		guardar();
		console.log('este usuario es una aspirante.')
	}
	else
		console.log('ya existe un usuario con ese numero de documento.');
	
}

const listar = () => {
	try {
	listaUsuarios = require('./listado.json');
	} catch(error){
		listaUsuarios = [];
	}
}

const guardar = () => {
	let datos = JSON.stringify(listaUsuarios);
	fs.writeFile('listado.json', datos, (error)=>{
		if (error) throw (error);
		console.log('Archivo creado ');
	})
}

const mostrar = () =>{
	listar()
	listaUsuarios.forEach(usuario => {
		console.log(usuario.nombre);
		console.log('documento:' + usuario.documento)
		console.log('correo:' + usuario.correo)
		console.log('telefono:' + usuario.telefono + '\n')
	});
}

const login = (usuario) =>{
	listar();
	let est = {		
		documento: usuario.documento	
	};
	let encontrado = listaUsuarios.find(doc => doc.documento == usuario.documento)
	if((!encontrado) && (encontrado != 1234567890)){		
		console.log(usuario.nombre);
		console.log(usuario.documento)
		console.log('este usuario es una aspirante.' + '\n')		
	
	console.log('ID: 1' + '\n', 
				'Nombre: programacion POO.'+ '\n', 
				'Duracion: 48 horas.'+ '\n',
				'Costo: 0 pesos.'+ '\n')

	console.log('ID: 2'+ '\n', 
				'Nombre: Calculo diferencial.'+ '\n', 
				'Duracion: 48 horas.'+ '\n',
				'Costo: 100.000 pesos.'+ '\n')

	console.log('ID: 3'+ '\n', 
				'Nombre: Ingles.'+ '\n', 
				'Duracion: 36 horas.'+ '\n',
				'Costo: 250.000 pesos.'+ '\n')


	}
	else{
		console.log('el usuario no existe');
	}  
	}
	
	
/*
const mostrarus = (usuario) => {
	listar()
	var band = 0;

	let usu = listaUsuarios.find(mos => mos.documento == usuario.documento)
	if((!usu) && (usu != 1234567890)){		
		band = 1;
		console.log('este usuario es una aspirante.')
	}else if(usu == 1234567890){
		band = 2;
	}
	return band;	
}*/

module.exports = {
	crear,
	mostrar,
	login	
}