// Un Operador es aquella porcion de codigo que nos permitira hacer operaciones aritmeticas,comparaciones, concatenaciones, asignaciones, etc.

// Operadores en JavaScript son:

// 1. Operadores de asignacion (aplicando el signo = al lado de una variable)

// Ejemplo:

let paisDeNacimiento = "Argentina";

//2. Operadores Aritmeticos (Realizamos operaciones matematicas tradicionales suma + ,resta - , multiplicacion * , división / y JavaScript brinda tambien el operador de modulo % (retorna el resto o residuo de una division)), podemos usar incremento (++) y decremento (--) para realizar operaciones aritmeticas.

// Ejemplo:

10 + 15 // Suma → 25
10 - 15 // Resta → -5
10 * 15 // Multiplicación → 150
15 / 10 // División → 1.5

15 % 5 // Módulo, el resto de dividir 15 entre 5 → 0
15 % 2 // Módulo, el resto de dividir 15 entre 2 → 1

15++ // Incremento, es igual a 15 + 1 → 16
15-- // Decremento, es igual a 15 - 1 → 14


//3. Operadores de comparacion , simple ( == si un valor es igual a otro, devuelve un boolean, si es verdadero o falso) y estrictro (hace lo mismo que la comparacion simple pero ademas de comparar el valor tambien pregunta si el tipo de dato es el mismo, para que sean verdaderos deben ser exactamente el mismo tipo de dato).

// Ejemplo de comparador simple: Comparan dos valores, devuelven verdadero o falso.

10 == 15 // Igualdad → false
10 != 15 // Desigualdad → true

// Ejemplo de comparador estricto: Comparan el valor y el tipo de dato también.

10 === "10" // Igualdad estricta → false
10 !== 15 // Desigualdad estricta → true

// Desigualdad simple (!= se pregunta si un dato es distinto de otro en su valor) y desigualdad extricta(!== Se pregunta por el valor como el tipo de dato):
//En el primer caso el valor es 10 en ambos casos, pero los tipos de datos son number y string. Como estamos comparando que ambos (valor y tipo de dato) sean iguales, el resultado es false.

// > , >= , < , <= (Menor y Mayor = que) ... Las Respuestas a dichas compraciones son booleanas, verdadero o falso. Siempre debemos escribir el signo <o> antes del igual = , ya que  javascript lee primero el operador de asignacion.

// Ejemplo: Comparan dos valores, devuelven verdadero o falso

15 > 15 // Mayor que → false
15 >= 15 // Mayor o igual que → true
10 < 15 // Menor que → true
10 <= 15 // Menor o igual que → true