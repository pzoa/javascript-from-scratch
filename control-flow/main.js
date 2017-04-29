
/*if else
var studio = 'carña';

if (typeof studio === 'string'){
	console.log('studio en un string !!!');
}else {
	console.log('studio es un estring!!!');
}
*/ 

/*switch
var studentName = "Edmundo";


switch (typeof studentName) {
	case "number":
	console.log("Es un numero");
	break;
	case "booleano":
	console.log("Es un booleano");
	break;
	case "string":
	console.log("String");
	break;
	default: 
	console.log("Uf men no C");
}
*/
/*while
var nota = 19;

while (nota > 12) {
	if(nota == 12) {
		console.log('estas desaprobado');
	}

	nota = nota - 1; 
}
*/

/*for
var students = [
    { name: 'Edmundo', lastName: 'Acosta' },
    { name: 'Eli', lastName: 'Manrique' },
    { name: 'Bruno', lastName: 'Liu' },
    { name: 'Paolo', lastName: 'Zita'},
];

var student;

for (var i = 0; i < students.length; i++) {
    student = students[i];
    console.log(student.name);
}

*/
/*catch
try {
	var num1 = 10;

	console.log(numb1/numb2)
}catch (e){
	console.log("la computadora ecplortooooo!!!!")
}finally {
	console.log("pero tranquiloo, estamos arreglandolo")
}
*/

function suma(a, b){
	console.log(a + b);
}
function ejecutar(a, b, callback){

}

ejecutar(1, 3, sumar);
