/* Ejercicio #7: Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip,
mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.*/

let nombre = prompt("ingresa tu nombre")
let pase = prompt("¿posee pase VIP o Normal?")
let entrada = prompt("¿posee entrada? Responda si o no")

if ((nombre == "alexander" || nombre == "Alexander") || (pase == "VIP" || pase == "vip")) {
    alert("FELICIDADES, Tienes el ingreso libre")
} else if ((entrada == "si" || entrada == "SI") || (entrada == "s" || entrada == "S") || (entrada == "true" || entrada == "TRUE")) {
    let usarEntrada = prompt("¿Desea utilizar su entrada?")

    if ((usarEntrada == "si") || (usarEntrada == "SI")) {
        alert("FELICIDADES, Tienes el ingreso libre")
    } else {
        alert("DISCULPE, usted no tiene el ingreso permitido")
    }
} else if ((entrada = "no") || (entrada = "NO")) {
    let comprarEntrada = prompt("¿Desea comprar una entrada?")
    
        if(comprarEntrada == "si"){
            
        }

    if (dineroDisponible >= 1000) {
        alert("FELICIDADES, Usted ya puede ingresar")
    } else {
        alert("DISCULPE, usted no tiene el ingreso permitido")
    }

} else {
    alert("DISCULPE, usted no tiene el ingreso permitido")
}





//Primer número
let number1 = 45

//Segundo número
let number2 = 24

/* Ejercicio #1: Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.*/
if (number1 > number2) {
    console.log("El numero 1 es mayor que el numero 2")
}

/* Ejercicio #2: Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.*/
if (number1 == number2) {
    console.log("Los números son iguales")
} else {
    console.log("Los numeros son diferentes")
}

/* Ejercicio #3: Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.*/
if (number1 > number2) {
    console.log("El numero 1 es mayor que el numero 2")
} else if (number1 < number2) {
    console.log("El numero 2 es mayor que el numero 1")
} else {
    console.log("Los dos números son iguales.")
}

//tercér número
let number3 = 83

/* Ejercicio #4: Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más chico.*/
if (number1 < number2 && number1 < number3) {
    alert("El numero 1 es el mas chico.")
} else if (number2 < number1 && number2 < number3) {
    alert("El numero 2 es el mas chico.")
} else {
    alert("El numero 3 es el mas chico.")
}

//Persona #1
let persona1 = {
    nombrer: "pedro",
    edad: 29,
    altura: 1.68
}

//Persona #2
let persona2 = {
    nombrer: "josé",
    edad: 27,
    altura: 1.82
}

/* jercicio #5: Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad. */
if (persona1.altura > persona2.altura && persona1.edad > persona2.edad) {
    alert("La persona 1 es mas alta y de mayor edad que la persona 2");
} else if (persona1.altura > persona2.altura && persona1.edad < persona2.edad) {
    alert("La persona 1 es mas alta pero de menor edad que la persona 2");
} else if (persona1.altura < persona2.altura && persona1.edad > persona2.edad) {
    alert("La persona 2 es mas alta pero de menor edad que la persona 1");
} else {
    alert("La persona 2 es mas alta y de mayor edad que la persona 1");
}

/* Ejercicio #6: Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo. */
//Datos personales
let suNombre = prompt("ingresa tu nombre")
let edad = prompt("ingresa tu edad")
let altura = prompt("ingresa tu altura en cm")
let vision = prompt("ingresa su nivel agudeza Visual en una escala de 1 a 10")

if ((edad >= 18 && altura >= 150) && (vision >= 8 && vision <= 10)) {
    console.log("La persona: " + nombre + " esta capacitada para conducir. FELICIDADES!")
} else {
    console.log("La persona " + suNombre + " no esta capacitada para conducir")
}



