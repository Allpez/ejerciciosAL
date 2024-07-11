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


/* Ejercicio #7: Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.*/

let nombre = prompt("ingresa tu nombre")
let pase = prompt("¿posee pase VIP o Normal?")
let entrada = prompt("¿posee entrada? Responda si o no")

if ((nombre === "alexander" || nombre === "Alexander") || (pase === "VIP" || pase === "vip")) {
    alert("FELICIDADES, Tienes el ingreso libre")
} else if ((entrada === "si" || entrada === "SI") || (entrada === "s" || entrada === "S") || (entrada === "true" || entrada === "TRUE")) {
    let usarEntrada = prompt("¿Desea utilizar su entrada?")

    if ((usarEntrada === "si") || (usarEntrada === "SI")) {
        alert("FELICIDADES, Tienes el ingreso libre")
    } else {
        alert("DISCULPE, usted no tiene el ingreso permitido")
    }
} else if ((entrada === "no") || (entrada === "NO")) {
    let comprarEntrada = prompt("¿Desea comprar una entrada?")

    if ((comprarEntrada === "si") || (comprarEntrada == "SI")) {
        let = dineroDisponible = parseInt(prompt("¿Cuanto dinero tiene disponible?"))

        if (dineroDisponible >= 1000) {
            let saldo = dineroDisponible - 1000
            alert("FELICIDADES, Usted ya puede ingresar. Su cambio es de " + saldo + " Dolares")
        } else {
            alert("DISCULPE, No es suficiente para adquirir una entrada y la venta sera rechazada")
        }
    } else {
        alert("DISCULPE, usted no tiene el ingreso permitido")
    }
} else {
    alert("DISCULPE, usted no tiene el ingreso permitido")
}


/* Ejercicio #8: Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera más eficiente.*/

alert("Hola...! juguemos un poco, puedes adivinar el numero que estoy pensando? Tienes tres oportunidades ;)")

let numeroIncognita = 6
let numeroIngresado = prompt("ingrese un número del 1 al 10")

if (numeroIngresado > numeroIncognita) {
    alert("el numero ingresado es mayor, vuelve a intentarlo. Te quedan 2 turnos")

} else if (numeroIngresado < numeroIncognita) {
    alert("el numero ingresado es menor, vuelve a intentarlo. Te quedan 2 turnos")

} else {
    alert("Ganaste, haz adivinado el número.")
}

numeroIngresado = prompt("ingrese un número del 1 al 10")


if (numeroIngresado > numeroIncognita) {
    alert("el numero ingresado es mayor, vuelve a intentarlo. Te queda 1 turno")

} else if (numeroIngresado < numeroIncognita) {
    alert("el numero ingresado es menor, vuelve a intentarlo. Te queda 1 turno")

} else {
    alert("Ganaste, haz adivinado el número.")
}

numeroIngresado = prompt("ingrese un número del 1 al 10")

if (numeroIngresado > numeroIncognita) {
    alert("el numero ingresado es mayor, Lo siento, haz perdido :(")

} else if (numeroIngresado < numeroIncognita) {
    alert("el numero ingresado es menor, Lo siento, haz perdido :(")

} else {
    alert("Ganaste, haz adivinado el número.")
}


/* Ejercicio #9: Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.*/

let tuEdad = parseInt(prompt("Ingresa tu edad"))

if ((tuEdad >= 0) && (tuEdad <= 12)) {
    alert("Eres un infante")
}else if ((tuEdad >= 13) && (tuEdad <= 18)){
    alert("Eres un adolecente")
}else if ((tuEdad >= 19) && (tuEdad <= 45)){
    alert("Eres un mayor joven")
}else if ((tuEdad > 45) && (tuEdad <= 100)) {
    alert("Eres un anciano")
}else {
    alert("¿Tu en realidad tienes esa edad?")
}


/* Ejercicio #10: Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.
 */

alert("Juguemos piedra, papel o tijeras. El Jugador #1 inicia, luego le toca al jugador #2")

let jugador1  = prompt("Jugador #1, escoge tu arma")
let jugador2  = prompt("Jugador #2, escoge tu arma")

if ((jugador1 == "piedra" || jugador1 == "PIEDRA") && (jugador2 == "tijeras" || jugador2 == "TIJERAS"))
    alert("El jugador #1 ha ganado la partida")
else if ((jugador1 == "tijeras" || jugador1 == "TIJERAS") && (jugador2 == "papel" || jugador2 == "PAPEL"))
    alert("El jugador #1 ha ganado la partida")
else if ((jugador1 == "papel" || jugador1 == "PAPEL") && (jugador2 == "piedra" || jugador2 == "PIEDRA"))
    alert("El jugador #1 ha ganado la partida")
if ((jugador1 == "piedra" || jugador1 == "PIEDRA") && (jugador2 == "papel" || jugador2 == "PAPEL"))
    alert("El jugador #2 ha ganado la partida")
else if ((jugador1 == "tijeras" || jugador1 == "TIJERAS") && (jugador2 == "piedra" || jugador2 == "PIEDRA"))
    alert("El jugador #2 ha ganado la partida")
else if ((jugador1 == "papel" || jugador1 == "PAPEL") && (jugador2 == "tijeras" || jugador2 == "TIJERAS"))
    alert("El jugador #2 ha ganado la partida")
else if (jugador1 == jugador2)
    alert("El jugado queda empatado")
else {
    alert("Uno de los jugadores ha hecho trampa.")
}


/* Ejercicio #11: Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.
 */

let color = prompt("Ingrese un color")

switch (color) {
    case "blanco":
        alert("Falta de color");
        break;
    case "negro":
        alert("Falta de color");
        break;
    case "verde":
        alert("El color de la naturaleza");
        break;
    case "azul":
        alert("El color del agua");
        break;
    case "amarillo":
        alert("El color del sol");
        break;
    case "rojo":
        alert("El color del fuego");
        break;
    case "marron":
        alert("El color de la tierra");
        break;
    default:
        alert("Excelente elección, no lo teníamos pensado");
        break;
    }


/* Ejercicio #12: Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.
 */

let valor1 = parseInt(prompt("Ingrese un valor numérico"))
let valor2 = parseInt(prompt("Ingrese otro valor numérico"))
let operacion = prompt("Ingrese la operación que desea realizar (suma, resta, multiplicación, división)")

if (operacion == "suma") {
    let suma = valor1 + valor2
    alert("el resultado de la operacion " +operacion+ " es: " +suma)
}else if (operacion == "resta") {
    let resta = valor1 - valor2
    alert("el resultado de la operacion " +operacion+ " es: " +resta)
}else if (operacion == "multiplicacion") {
    let multiplicacion = valor1 * valor2
    alert("el resultado de la operacion " +operacion+ " es: " +multiplicacion)
}else if (operacion == "division") {
    let division = valor1 / valor2

    if ((valor1 === 0) || (valor2 ===0)){
        alert("ERROR")
    }else{
        alert("el resultado de la operacion " +operacion+ " es: " +division)
    }
}else{
    alert("La operacion que desea realizar no se encuentra disponible")
}


/* Ejercicio #13: Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.
 */


alert("A continuación se le pediran algunos datos para la creacion de su documento de identidad. Presione aceptar")

let nombres = prompt("Ingrese sus dos nombres")
let apellidos = prompt("Ingrese sus dos nombres")
let sexo = prompt("Ingrese su sexo")
let nacimiento = prompt("Ingrese su lugar de nacimiento")
let fecha = prompt("Ingrese su fecha de nacimiento")
let estatura = prompt("Ingrese su estatura")
let sangre = prompt("Ingrese su tipo de sangre")


if (nombres )
    let dato1 = prompt('¿Los datos de sus nombres: ' + nombres + ' son correctos? responda = "si"')


