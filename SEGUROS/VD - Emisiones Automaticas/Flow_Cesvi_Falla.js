var varbody = `Buenas tardesSe ha recibido una solicitud de emisión a través del cotizador de cliente final,que requiere verificación para completar la operación. Los datos son:Los datos de la propuesta son:>>Nombre: [ Ezequiel Ivan ]>>Apellido: [ Bustamante Alarcon ]>>fechaNacimiento: [ 21/06/1991 ]>>codPostal: [ 1854 ]>>localidad: [ LONGCHAMPS,LONGCHAMPS ]>>provincia: [ BUENOS AIRES ]>>calle: [ Manuel Belgrano ]>>depto: [ ]>>nroCalle: [ 647 ]>>piso: [ ]>>nacionalidad: [ 2 ]>>sexo: [ M ]>>profesion: [ 420 ]>>estadoCivil: [ S ]>>medioDelPago: [ 2 ]>>origenDelPago: [ ]>>cbuOTarjeta: [ 4540730044424498 ]>>tipoTarjeta: [ VISO ]>>tipoDoc: [ ]>>cuit: [ ]>>DNI: [ 36397318 ]>>Mail: [ bustamante.alarcon@hotmail.com ]>>Telefono: [ 011 31057162 ]>>Celular: [ 011 31057162 ]>>Cotizacion: [ 73947219 ]>>Ramo: [ 4 ] [AUTOMOTORES]>>Proceso de control: }}>>Fecha: [ 12/08/2021 02:57:08 ]>>Marca: [ VWV VOLKSWAGEN ]>>Modelo: [ 046834 ]>>Año de fabricacion: [ 2017 ]>>0KM: [ N ]>>Patente: [ Ac051kq ]>>Motor: [ Cfzs73848 ]>>Chasis: [ 9bwab45u8jt028104 ]>>Codigo Postal: [ 1854 ]>>Plan seleccionado: [ 50 ]: [TODO RIESGO GARANTIZADO]`;

function variables(){
  return varbody;
}

function outputs(varname){
    return this[varname];
}

function split(str, sep){
  return str.split(sep);
}

function first(arr){
    return arr[0];
}

function last(arr){
  return arr[arr.length-1];
}

function skip(arr, n){
  for(var i = 0; i< n; i++){
    arr.shift();
  }
  return arr;
}

function replace(str, oldstr, newstr){
   return str.replace(oldstr, newstr);
}

function trim(str){
  return str.trim();
}

var nombre = trim(first(skip(split(first(split(variables('varBody'),']')),'>>Nombre: ['),1)));
var apellido =  trim(replace(first(split(last(split(variables('varBody'),'>>Apellido:')), ']')), '[', ''));
var ramo =  trim(replace(first(split(last(split(variables('varBody'),'>>Ramo:')), ']')), '[', ''));
var cp = trim(replace(first(split(last(split(variables('varBody'),'>>Codigo Postal:')), ']')), '[', ''));
var FechaHora =trim(first(skip(split(first(split(variables('varBody'),']>>Marca:')),'>>Fecha: ['),1)));
var Fecha = first(split(outputs('FechaHora'),' '));
var Patente = trim(replace(first(split(last(split(variables('varBody'),'>>Patente:')), ']')), '[', ''));
var Modelo = trim(replace(first(split(last(split(variables('varBody'),'>>Modelo:')), ']')), '[', ''));
var Motor = trim(replace(first(split(last(split(variables('varBody'),'>>Motor:')), ']')), '[', ''));
var Chasis = trim(replace(first(split(last(split(variables('varBody'),'>>Chasis:')), ']')), '[', ''));
var tipoTarjeta = trim(replace(first(split(last(split(variables('varBody'),'>>tipoTarjeta:')), ']')), '[', ''));
var cbuOTarjeta = trim(replace(first(split(last(split(variables('varBody'),'>>cbuOTarjeta:')), ']')), '[', ''));

var PlanSe = trim(replace(first(split(last(split(variables('varBody'),'>>Plan seleccionado:')), ']')), '[', ''));

console.log("Ramo: " + ramo);
console.log("cp: " + cp);
console.log("FechaHora: " + FechaHora);
console.log("apellido: " + apellido);
console.log("nombre: " + nombre);
console.log("Fecha: " + Fecha);
console.log("Patente: " + Patente);
console.log("Modelo: " + Modelo);
console.log("Motor: " + Motor);
console.log("Chasis: " + Chasis);
console.log("tipoTarjeta: " + tipoTarjeta);
console.log("cbuOTarjeta: " + cbuOTarjeta);
console.log("PlanSe: " + PlanSe);
console.log("------------------");


