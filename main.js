const ism = prompt("Ism kiriting");
let rang = prompt("Orqa fon rangini kiriting");
const textRang = prompt("Textning rangini kiriting");


const newName = document.querySelector(".name");
newName.textContent = ism;

document.body.style.backgroundColor = rang;
document.body.style.color = textRang;

// newName.style.display = "flex"
// newName.style.justifyContent = "center";
// newName.style.marginTop = "300px"

document.body.appendChild(newName);



