setTimeout(() => {
    const lista = document.createElement("ol");

    for (let i = 1; i <= 10; i++) {
        const element = document.createElement("li");
        element.textContent = `Element Nr ${i}`;
        lista.appendChild(element);
    }

    document.body.appendChild(lista);
}, 5000);