var fs = require('fs');
var parse = require('csv-parse');

var datos=[];
var cadena="";

fs.createReadStream('Alumnos.csv')
	.pipe(parse({delimiter:','}))
	.on('data', function(csvrow){
		datos.push(csvrow);
	}).on('end', function(){
		for (var i = 0; i < datos.length; i++) {
			cadena+="No: "+datos[i][0] + "\n"+"NC: "+datos[i][1] + "\n"+"Nombre: "+datos[i][2] + "\n"+"Calificación: "+datos[i][3] + "\n"+"______\n";
		}
		fs.writeFile("alumnos.txt",cadena,function(err){
			if(err){
				return console.log(err);
			}
			console.log("Guardado");
		});
	});