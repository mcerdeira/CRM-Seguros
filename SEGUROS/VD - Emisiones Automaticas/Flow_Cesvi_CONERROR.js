var varbody = `{
ATENCIÓN: Este correo es de origen externo a Provincia Seguros.
Si conocés el origen, tené cuidado con los enlaces y/o archivos que puedan estar adjuntos.
Si no contiene lo esperado, no conocés su origen o tenés dudas, comunicate con Seguridad Informatica.
Buenos días

  Se ha recibido una solicitud de emisión  a través del cotizador de OMNICANALIDAD - FACEBOOK, que requiere verificación para completar la operación.

  Los datos de la propuesta son:

  >>Nombre: [PREUBA]
  >>Apellido: [PRUEBA]
  >>DNI: [29307017]
  >>Mail: [carokoval@hotmail.com]
  >>Telefono: [2215541940]
  >>Celular: [2215541940]
  >>Cotizacion: [85024491]
  >>Ramo: [4][Automotores]
  >>Proceso de control: [ ]
  >>Fecha: [13/12/2021 19:6:27]
  >>Marca: [FORD]
  >>Modelo: [018640 FOCUS L/16 1.6 4 P S]
  >>Ano de fabricacion: [2015]
  >>0KM: [N]
  >>Patente: [RFG852]
  >>Codigo postal: [1425]
  >>Plan seleccionado: [22]
  : [TERCEROS COMPLETOS FULL]
  >>Estado de la interface: [CON ERRORES]
  >>Detalle: [500] [error al emitir. 46210 - por las condiciones de los bienes incluidos en la propuesta, la misma deberá ser  procesada por un operador de pcia seguros. la cotizacion queda con una inspeccion generada: 2536652]

  Gracias

}`;

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

function concat(v1, v2){
    return v1 + v2;
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



var nombre = trim(replace(first(split(last(split(variables('varBody'),'>>Nombre:')), ']')), '[', ''));

var apellido =  trim(replace(first(split(last(split(variables('varBody'),'>>Apellido:')), ']')), '[', ''));
var ramo =  trim(replace(first(split(last(split(variables('varBody'),'>>Ramo:')), ']')), '[', ''));
var cp = trim(replace(first(split(last(split(variables('varBody'),'>>Codigo postal:')), ']')), '[', ''));
var FechaHora =trim(replace(first(split(last(split(variables('varBody'),'>>Fecha:')), ']')), '[', ''));
var Fecha = first(split(outputs('FechaHora'),' '));
var Dia = first(split(outputs('Fecha'),'/'));

var Hora = last(split(outputs('FechaHora'),' '));

var DNI = trim(replace(first(split(last(split(variables('varBody'),'>>DNI:')), ']')), '[', ''));

var HH = concat('00', first(split(outputs('Hora'),':')));
var MM = concat('00',first(skip(split(outputs('Hora'),':'),1)));
var SS = concat('00',first(skip(split(outputs('Hora'),':'),2)));

var OKM = trim(replace(first(split(last(split(variables('varBody'),'>>0KM:')), ']')), '[', ''));
var Patente = trim(replace(first(split(last(split(variables('varBody'),'>>Patente:')), ']')), '[', ''));
var Ano = trim(replace(first(split(last(split(variables('varBody'),'>>Ano de fabricacion:')), ']')), '[', ''));
var Celular = trim(replace(first(split(last(split(variables('varBody'),'>>Celular:')), ']')), '[', ''));

var Estado = trim(replace(first(split(last(split(variables('varBody'),'>>Estado de la interface:')), ']')), '[', ''));

var Modelo = trim(replace(first(split(last(split(variables('varBody'),'>>Modelo:')), ']')), '[', ''));

var plan = first(skip(split(first(split(variables('varBody'),']>>Estado de')),'>>Plan seleccionado: ['),1));

var idPersonaEncontrada = ["2f35cb95-8ce5-ea11-a817-000d3ac1703e","a532ba45-94e5-ea11-a817-000d3ac17e18"];

console.log(first(skip(split(first(split(outputs('idPersonaEncontrada'),'"]')),'["'),1)))

console.log("DNI: " + DNI);
console.log("Ramo: " + ramo);
console.log("cp: " + cp);
console.log("FechaHora: " + FechaHora);
console.log("Dia: " + Dia);
console.log("Hora: " + Hora);
console.log("HH: " + HH);
console.log("MM: " + MM);
console.log("SS: " + SS);
console.log("------------------------------");
console.log("apellido: " + apellido);
console.log("nombre: " + nombre);
console.log("Fecha: " + Fecha);
console.log("0KM:" + OKM);
console.log("Año: " + Ano);
console.log("Celular: " + Celular);
console.log("Patente: " + Patente);
console.log("Estado: " + Estado);
console.log("Modelo: " + Modelo);
console.log("Modelo: " + Modelo);
console.log("------------------");




