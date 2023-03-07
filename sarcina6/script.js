const paragrafe = document.getElementsByTagName("p");

for (let i = 0; i < paragrafe.length; i++) {
    if (i % 2 === 0) {
    paragrafe[i].style.backgroundColor = "blue";
    } else {
    paragrafe[i].style.backgroundColor = "yellow";
    }
}