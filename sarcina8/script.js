const buton = document.getElementById("buton-contor");

let contor = 1;

buton.addEventListener("click", () => {
    contor += 2;
    buton.textContent = `Contor = ${contor}`;
});