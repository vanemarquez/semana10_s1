//for
//El bucle for es una estructura de control que se utiliza para repetir un bloque de código un número determinado de veces.
//Ejemplo:

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//forEach
//Se utiliza para iterar sobre cada elemento de un array y ejecutar una función de retorno de llamada proporcionada para cada elemento.
//Ejemplo:

const arrayNumbers = [1, 2, 3, 4, 5];
arrayNumbers.forEach(elemento => {
    console.log(elemento);
});

//Map
//Se utiliza para transformar cada elemento de un array y crear un nuevo array con los resultados de llamar a una función proporcionada en cada elemento.
//Ejemplo:

const array = [1, 2, 3, 4, 5];
const newArray = array.map(elemento => {
    return elemento * 2;
});
console.log(newArray);

//Array Methods
//FIND: Se utiliza en arrays para buscar el primer elemento que cumpla con una condición proporcionada y luego detiene la búsqueda.
//Ejemplo:

const dogs = [
    { nombre: 'Luna', raza: 'Schnauzer', edad: 5 },
    { nombre: 'Rocky', raza: 'Bulldog frances', edad: 3 },
    { nombre: 'Lady', raza: 'Labrador', edad: 4 }
];

// Buscar el primer perro que tenga una edad mayor o igual a 4 años
const perroMayorCuatro = dogs.find(perro => perro.edad >= 4);
console.log(perroMayorCuatro);

//SOME: Se utiliza en arrays para verificar si al menos un elemento cumple con cierta condición proporcionada.
//Ejemplo:

const dogs2 = [
    { nombre: 'Luna', raza: 'Schnauzer', edad: 5 },
    { nombre: 'Rocky', raza: 'Bulldog frances', edad: 3 },
    { nombre: 'Lady', raza: 'Labrador', edad: 4 }
];

// Verificar si al menos un perro es de la raza 'Schnauzer'
const algunoSchnauzer = dogs2.some(perro => perro.raza === 'Schnauzer');

console.log(algunoSchnauzer);


//EVERY: Se utiliza en arrays para verificar si todos los elementos cumplen con una condición proporcionada.
//Devuelve true si todos los elementos cumplen con la condición, y false si al menos uno no la cumple.
//Ejemplo:

const dogs3 = [
    { nombre: 'Luna', raza: 'Schnauzer', edad: 5 },
    { nombre: 'Rocky', raza: 'Bulldog frances', edad: 3 },
    { nombre: 'Lady', raza: 'Labrador', edad: 4 }
];

// Verificar si todos los perros tienen una edad mayor que 2
const todasMayoresQueDos = dogs3.every(perro => perro.edad > 2);

console.log(todasMayoresQueDos);

//MAP : Recorre cada objeto en la lista y devuelve un nuevo array.
//Ejemplo:

const dogs4 = [
    { nombre: 'Luna', edad: 5 },
    { nombre: 'Rocky', edad: 3 },
    { nombre: 'Lady', edad: 4 }
];

// Crear un nuevo array con los nombres de los perros
const dogNames = dogs4.map(perro => perro.nombre);

console.log(dogNames);

//FILTER: Se utiliza en arrays para crear un nuevo array con todos los elementos que cumplan con cierta condición proporcionada.
//Ejemplo:

const dogs5 = [
    { nombre: 'Luna', edad: 5 },
    { nombre: 'Rocky', edad: 3 },
    { nombre: 'Lady', edad: 4 }
];

// Filtrar los perros que tienen más de 4 años
const olderDogs = dogs5.filter(perro => perro.edad > 4);

console.log(olderDogs); 




