// switch

let age = prompt('¿age?', 18);

switch (age) {
  case 18:

    console.log("Not work"); // el resultado de la petición es un string, no un número

  case "18":
    console.log("¡works!");
    break;

  default:
    console.log("Todo valor que no sea igual a uno de arriba");
}

