//Primer número
let number1 = parseInt(prompt("digite un número"))

//Segundo número
let number2 = parseInt(prompt("digite un segundo número"))

//Ejercicio #1
if (number1 > number2) {
    console.log("El numero 1 es mayor que el numero 2")    
}

//Ejercicio #2
if (number1 == number2) {
    console.log("Los números son iguales")
}else{
    console.log("Los numeros son diferentes")
}

//Ejercicio #3
if (number1 > number2) {
    console.log("El numero 1 es mayor que el numero 2")
}else if (number1 < number2) {
    console.log("El numero 2 es mayor que el numero 1")    
}else{
    console.log("Los dos números son iguales.")    
}

//tercér número
let number3 = parseInt(prompt("Digite un tercer número"))

//Ejercicio #4
if (number1 < number2 && number1 < number3) {
    console.log("El numero 1 es el mas chico.")
}else if (number2 < number1 && number2 < number3) {
    console.log("El numero 2 es el mas chico.")
}else{
    console.log("El numero 3 es el mas chico.")
}


