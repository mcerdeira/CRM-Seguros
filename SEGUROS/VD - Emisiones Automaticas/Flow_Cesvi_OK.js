var varbody = `Buenos díasSe ha recibido una solicitud de emisión a través del cotizador de clientefinal, que requiere verificación para completar la operación. Los datos son:Los datos de la propuesta son:>>Nombre: [Gonzalo]>>Apellido: [Casco]>>DNI: [41077289]>>Mail: [cascogonzalo12@hotmail.com]>>Telefono: [11 - 64240559]>>Celular: [11 - 64240559]>>Cotizacion: [74051870]>>Ramo: [4][AUTOMOTORES]>>Proceso de control: [14620665]>>Fecha: [18/08/2021 11:28:00]>>Marca: [VWV VOLKSWAGEN]>>Modelo: [046458 GOL 1.6 3 P LOOK]>>Ano de fabricacion: [2008]>>0KM: [N]>>Patente: [HED093]>>Codigo postal: [1655]>>Plan seleccionado: [8]: [RC, INCENDIO Y ROBO TOTAL Y PARCIAL]>>Estado de la interface: [CON ERRORES]Saludos`;

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
var cp = trim(replace(first(split(last(split(variables('varBody'),'>>Codigo postal:')), ']')), '[', ''));
var FechaHora =trim(first(skip(split(first(split(variables('varBody'),']>>Marca:')),'>>Fecha: ['),1)));
var Fecha = first(split(outputs('FechaHora'),' '));
var Patente = trim(replace(first(split(last(split(variables('varBody'),'>>Patente:')), ']')), '[', ''));

var Estado = trim(replace(first(split(last(split(variables('varBody'),'>>Estado de la interface:')), ']')), '[', ''));

var Modelo = trim(replace(first(split(last(split(variables('varBody'),'>>Modelo:')), ']')), '[', ''));

var OKM = first(skip(split(first(split(variables('varBody'),']>>Patente:')),'>>0KM: ['),1))

console.log("OKM: " + OKM);
console.log("Modelo: " + Modelo);
console.log("Ramo: " + ramo);
console.log("cp: " + cp);
console.log("FechaHora: " + FechaHora);
console.log("apellido: " + apellido);
console.log("nombre: " + nombre);
console.log("Fecha: " + Fecha);
console.log("Patente: " + Patente);
console.log("Estado: " + Estado);
console.log("Modelo: " + Modelo);
console.log("------------------");


