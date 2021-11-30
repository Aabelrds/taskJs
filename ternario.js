// condicionales


let marvelQuestion = "Tony Stark";

if (marvelQuestion == 'Tony Stark'){ 
	console.log('¡Woh, eres un marvelita!' );
} else {
	console.log('ohhh, ¿sigues leyendo DC?')
}


let marvelQuestion = "Tony Stark";

if (marvelQuestion == 'Tony Stark'){ 
	alert('¡Woh, eres un marvelita!' );
} else if(marvelQuestion == 'tony stark') {
	alert('¡Woh, eres un marvelita!' );
}	else if(marvelQuestion == 'TONY STARK') {
	alert('¡Woh, eres un marvelita!' );
}	else {
	alert('ohhh, ¿sigues leyendo DC?')
}
// si nombre existe devuelve nombre1 si no
//retornará no existe
console.log(nombre ? nombre1: "no existe")


let age =19;
let accessAllowed = (age > 18) ? true : false;

console.log(accessAllowed);

// operadores lógicos

//  &&  ||   !

// operador nullish coalescing

/* El operador `??` brinda una forma 
de elegir el primer valor “definido” 
de una lista de variables. 
El resultado de `a ?? b` 
es `a` salvo que esta sea 
`null/undefined`, en cuyo caso será `b`.
*/

//Comparadores

/*
<
>
>=
<=
!=
== 
=== operador de igualdad estricta,
comparan tanto valor como el tipo de dato
*/