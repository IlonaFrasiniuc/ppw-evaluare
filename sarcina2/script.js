let a = parseInt(prompt("Introduceți primul număr:"));
let b = parseInt(prompt("Introduceți al doilea număr:"));

let sum = 0;
for (let i = a; i <= b; i++) {
    if (i % 2 === 0) { 
        sum += i;
    }
}

alert(`Suma numerelor pare din intervalul [${a}, ${b}] este ${sum}.`);