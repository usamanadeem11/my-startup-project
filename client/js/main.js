// INIT AOS
AOS.init({
  duration: 1000,
  once: true
});

// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
  } else {
    nav.style.boxShadow = "none";
  }
});

function sendWhatsApp() {
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let type = document.getElementById("type").value;

let message = `Name: ${name}%0ANumber: ${phone}%0AType: ${type}`;

let url = `https://wa.me/91YOURNUMBER?text=${message}`;

window.open(url, "_blank");
}