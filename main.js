window.addEventListener("load",mensaje);
function mensaje() {
let x = document.getElementById("alerta");
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}