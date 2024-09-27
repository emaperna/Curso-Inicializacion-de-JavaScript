// ¿Qué es una variable?

// Una variable es un espacio en memoria en el que se almacena un valor que podemos utilizar a futuro.

// Utilizamos palabras reservadas para nombrar variables como "var" o "let" o "const". 

// La palabra reservada "var" se utiliza para declarar variables que se van a modificar.

// Ejemplo 1: Declaración de una variable

var telefonoNuevo = "123456789"

// La palabra reservada "let" se utiliza para declarar variables que no se van a modificar.
// Es una variable que pertenece a un bloque de ejecución (todo aquel codigo que está dentro de un par de llaves {}).

// Ejemplo 2: Declaración de una variable utilizando let

let telefonoNuevo = "123456789"

// Ejemplo de 2 bloques de ejecucion para JavaScript (variables que se llaman igual y nunca se van a sobre escribir)

// Bloque de ejecución 1:
if (true) {
    let saludo = "hola"
    console.log(saludo)//hola
}

// Bloque de ejecución 2:
if (true) {
    let saludo = "chau"
    console.log(saludo)//chau
}

// Ejemplo que generaria error de sintaxis:
// (una variable definida con let No puede ser redefinida dentro del mismo bloque de ejecución, aunque si puede cambiar de valor)

//if (true) {
//    let saludo = "hola"
//    let saludo = "chau"
//    console.log(saludo)//chau
//}

// Estandar de lenguaje: manera correcta de escribir el codigo, puede ser formato camelCase (contiene letra mayuscula al comenzar nueva palabra), Kebab Case (utiliza guion medio - entre cada palabra nueva ), snake_case (utiliza guion bajo _ entre cada palabra nueva ),

