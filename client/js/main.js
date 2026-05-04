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
async function handleRegistration(event) {
    event.preventDefault(); // Stops the page from refreshing
    
    // This tells the "Brain" (Server) to start the payment
    const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value
        })
    });

    const data = await response.json();
    if (data.success) {
        // This opens the Razorpay window
        var options = {
            "key": "rzp_test_Sl0zhZsoQEx1C7", 
            "amount": "15000", 
            "order_id": data.orderId,
            "handler": function (response) {
                alert("Payment Success!");
            }
        };
        var rzp = new Razorpay(options);
        rzp.open();
    }
}