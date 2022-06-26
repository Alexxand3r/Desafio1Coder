'use strict';
const ingresarNombre = prompt('Hola!😀,cual es tu nombre❓');
alert(
  `😀 Bienvenido/a! ${ingresarNombre}, Ingresaremos 5 números e iremos determinando si son PAR o IMPAR 😁`
);

for (let i = 0; i < 5; i++) {
  let ingresarNumero = parseInt(prompt('Ingresa 1 número del 1 al 100'));
  if (ingresarNumero <= 100 && ingresarNumero >= 1) {
    if (ingresarNumero % 2 === 0) {
      console.log(`el número ${ingresarNumero} es PAR`);
      alert(`el número ${ingresarNumero} es PAR`);
    } else if (ingresarNumero % 2 === 1) {
      console.log(`el número ${ingresarNumero} es IMPAR`);
      alert(`el número ${ingresarNumero} es IMPAR`);
    } else {
      console.log(`😵 ${ingresarNombre}eso no es un numero! 🥴`);
      alert(`😵 ${ingresarNombre}eso no es un numero! 🥴`);
    }
  } else if (ingresarNumero > 100 || ingresarNumero < 0) {
    console.log(`el número ${ingresarNumero} No cumple la consigna! 🤪😵`);
    console.log('Por favor,ingresa números entre 1 y 100');
    alert(`el número ${ingresarNumero} No cumple la consigna!🤪😵`);
    alert('Por favor,ingresa números entre 1 y 100');
  } else {
    console.log(
      `😵 ${ingresarNombre},eso no es un numero! o  No ingresaste nada ⚠ 🥴`
    );
    alert(`😵 ${ingresarNombre} ,eso no es un numero! 🥴`);
  }
}

console.log(`😊 Gracias por participar! ${ingresarNombre}😋`);
alert(`😊 Gracias por participar! ${ingresarNombre}😋`);
