const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const order = [];
const status = document.getElementById("order-status");

document.querySelectorAll(".add-button").forEach(button => {
  button.addEventListener("click", () => {
    order.push(button.dataset.product);
    status.textContent = `¡Añadido! Tu pedido tiene ${order.length} producto(s): ${order.join(", ")}.`;
    button.textContent = "✓ Añadido";
    setTimeout(() => button.textContent = "＋ Añadir al pedido", 1200);
  });
});

document.getElementById("newsletter-form").addEventListener("submit", event => {
  event.preventDefault();
  const email = event.currentTarget.querySelector("input").value;
  alert(`¡Gracias por suscribirte, ${email}! Pronto tendrás noticias dulces de Santa Migajas.`);
  event.currentTarget.reset();
});
