////escribí una función calcularAñosPerro()
///que tome dos parametros (nombre y añoDeNacimiento)
///y muestre por consola un mensaje 'nombre tiene X años en años de humano, y X años en años de perro'
//se dice que un año humano equivale a 7 años de perro
//si los parámetros no son correctos, la función debe cortar
//su ejecución y devolver un mensaje de error

const calcularAñosPerro = (nombre, añoDeNacimiento) => {
    if (typeof nombre !== 'string' || typeof añoDeNacimiento !== 'number') {
      console.log('Error: los parámetros no son válidos');
      return;
    }
  
    const edadHumano = new Date().getFullYear() - añoDeNacimiento;
    const edadPerro = edadHumano * 7;
  
    console.log(`${nombre} tiene ${edadHumano} años en años de humano, y ${edadPerro} años en años de perro`);
  }
  


///escribir una función getSquare()
//que guarde en una variable el cuadrado de un número que reciba 
//por parametro
const getSquare = (numero) => {
  let cuadrado = numero ** 2;
  return cuadrado;
}

const calcularCuadrado = () => {
  let numero = prompt("Introduce un número");
  while (isNaN(numero)) {
    numero = prompt("Debes introducir un número. Inténtalo de nuevo.");
  }
  const resultado = `El cuadrado de ${numero} es ${getSquare(numero)}`;
  alert(resultado);
}

calcularCuadrado();


///escribir una función que tome como parámetro
//un array, una clave y un valor
//y devuelva a una variable el primer elemento del array
//donde clave === valor






//escribi una función returnLongest() que tome como parametros dos string
//y retorne el string más largo
//si ambas string son igualmente largas, devuelve un mensaje 'They're the same'
//si una de las string no es válida. devuelve un mensaje 'One of the values is not a string'
//si ambos valores son inválidos, devuelve 'None of the values is a string'



const returnLongest = (string1, string2) => {
  if (typeof string1 !== 'string' && typeof string2 !== 'string') {
    return "None of the values is a string";
  } else if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return "One of the values is not a string";
  } else {
    return string1.length === string2.length ? "They're the same" : string1.length > string2.length ? string1 : string2;
  }
};


let result = returnLongest("Hello", "World");
console.log(result);

result = returnLongest("Hello", "Javascript");
console.log(result); 

result = returnLongest("Hello", "Hi");
console.log(result); 

result = returnLongest("Hello", 123);
console.log(result); 

result = returnLongest(123, true);
console.log(result); 


//escribí una función countVowels() que reciba un string
//y devuelva ( decidí vos como mostrar el resultado )
//la cantidad de vocales en la palabra

function countVowels(palabra) {
  const vocales = "aeiouAEIOU";
  let cantidad = 0;

  [...palabra].forEach(letra => {
    if (vocales.includes(letra)) {
      cantidad++;
    }
  });

  return cantidad;
}

const palabraUsuario = prompt("Ingrese una palabra:");
const resultado = countVowels(palabraUsuario);
alert(`La palabra "${palabraUsuario}" tiene ${resultado} vocales`);
