'use strict';

// EJERCICIO 1
// Vamos a crear un programita que haga cálculos geométricos sencillos. En el programa definiremos la clase Square, que tendrá al menos:
// - Un método para calcular el perímetro (perimeter()) del cuadrado (multiplica la longitud del lado por el número de lados)
// - Un método para calcular el área (area()) del cuadrado (elevar al cuadrado el lado)
// Los métodos recibirán la longitud del lado (side) como parámetro.
// Calcularemos y mostraremos el perímetro y el área de un cuadrado de 9 de lado.

/* class Square {
  perimeter(side) {
    console.log("Perímetro: ", side * 4);
  }
  area(side) {
    console.log("Superficie: ", side * side);
  }
}

const uncuadrado = new Square();

uncuadrado.perimeter(7);
uncuadrado.area(7); */

// EJERCICIO 2
// - atributo para la long del lado
// - metodo para perimeter
// - metodo para area
// - usar el this.
// - crear 3 instancias diferentes

class Square {
	constructor(valueSide) {
		this.side = valueSide;
	}
	perimeter() {
		console.log('Perímetro: ', this.side * 4);
	}
	area(side) {
		console.log('Superficie: ', this.side * this.side);
	}
}

const cuadrado1 = new Square(1);
cuadrado1.perimeter();
cuadrado1.area();

const cuadrado3 = new Square(3);
cuadrado3.perimeter();
cuadrado3.area();

const cuadrado7 = new Square(7);
cuadrado7.perimeter();
cuadrado7.area();

/* let miCuadrado = new Square(3);
miCuadrado.perimeter();
miCuadrado.area();

miCuadrado = new Square(7);
miCuadrado.perimeter();
miCuadrado.area(); */


