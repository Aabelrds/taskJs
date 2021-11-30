

// 1
while (condition) {
  //...
}

// 2
do {
  //...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  //...
}


var myArray = ['Alberto', 'Mario', 'Jose', 'Juan'];

myArray.forEach(
  function (element) {
    console.log(element);
  }
);

var justiceLeague = ['Batman', 'Aquaman', 'Superman'];
for (var justice of justiceLeague) {
  console.log(justice);
}

// Definimos un objeto con los datos de una spiderman
var spiderman = {
  nombre: "Peter",
  apellidos: "Parker", 
  pais: "USA",
  profesion: "Student"
}
  
for (var key in spiderman) {
  console.log("Spiderman tiene " + key + " con valor: " + spiderman[key]);
}