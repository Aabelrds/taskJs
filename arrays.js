var avengers = ["Hulk", "SpiderMan", "AntMan"];

var avenger = avengers[0]; // Probad a cambiar este numero ;)
console.log(avenger) // Devuelve "Hulk"

var moderatIII = new Array();
            moderatIII[0] = "Eating hooks";
            moderatIII[1] = "Running";
            moderatIII[2] = "Finder";
            moderatIII[3] = "Ghostmother";
            moderatIII[4] = "Reminder";
            moderatIII[5] = "Intruder";
            moderatIII[6] = "Animal trails";    

console.log(moderatIII);

// pop() no admite parámetros. Elimina el último elemento del array.
moderatIII.pop();

console.log(moderatIII);

//push
moderatIII.push('Ethereal');

console.log(moderatIII);

//invierte el orden 
moderatIII.reverse();

console.log(moderatIII);


//elimina el primer el elemento
moderatIII.shift();



moderatIII.short();

console.log(moderatIII);

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true