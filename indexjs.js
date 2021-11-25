var pares = prompt("Ingrese secuencia de letras");

var caracteresRepetidos = function(str) {
    for (var i=0; i<str.length; i++) {
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
        return false; // hay repetecion
      }
    }
  return true; // no hay repeticion
}

console.log( caracteresRepetidos(pares) );





// class persona{
//   datos(nombre,apellido,edad,dni){
//     this.nombre = nombre;
//     this.apellido=apellido;
//     this.edad=edad;
//     this.dni=dni;
//     this.info=`mi nombre es${this.nombre} y mi apellido es${this.apellido}, mi edad es${this.edad}, mi numero de dni es${this.dni}`;
//   }
//   ver(){
//     document.write(this.info+"<br>")
//   }
// }
// let persona1= new persona("Luis","Gomez",18,1234);
// let persona2= new persona("matias","sanches","8","4561");
// let persona3= new persona("thomas","wais","santillan","24","4321");
// let persona4= new persona("german","santillan","56","9875");
// let persona5= new persona("sofia","gonzales","30","5555");
//
// persona1.ver();
// persona2.ver();
// persona3.ver();
// persona4.ver();
// persona5.ver();
