function showMax() {
    const x = parseInt(document.getElementById("x").value);
    const y = parseInt(document.getElementById("y").value);
    const max = Math.max(x, y);
    document.getElementById("max").innerHTML = `Maximul dintre ${x} și ${y} este ${max}.`;
}