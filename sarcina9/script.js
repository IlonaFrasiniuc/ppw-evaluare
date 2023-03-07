function afiseazaNumerele(numere) {
    const lista = document.createElement('ul'); // creăm o listă nenumerotată

    for (let i = 0; i < numere.length; i++) {
      const element = document.createElement('li'); // creăm un element listă nou pentru fiecare număr
      const text = document.createTextNode(numere[i]); // creăm un nod text cu valoarea numărului

      element.appendChild(text); // adăugăm nodul text la elementul listă
      lista.appendChild(element); // adăugăm elementul listă la listă
    }

    document.body.appendChild(lista); // adăugăm lista la corpul documentului

    // afișăm numerele în ordine, cu o pauză de 1 secundă între ele
    for (let i = 0; i < numere.length; i++) {
        setTimeout(function() {
        lista.childNodes[i].style.display = 'list-item'; // afișăm elementul listă corespunzător numărului
      }, (i + 1) * 1000); // pauza între afișări crește cu 1 secundă pentru fiecare număr în plus
    }
}
