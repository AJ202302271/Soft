document.getElementById("shopBtn").addEventListener("click", function() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  const scrub1 = document.getElementById("Scrub1");
  scrub1.addEventListener("click", () => {
    alert("Available!");
  });
});

document.getElementById("regForm").addEventListener("submit", function(e) {
e.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;


alert(`Thank you, ${name}! Your message has been received.`);
this.reset();
});
}
