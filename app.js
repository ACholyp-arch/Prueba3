// Lista de invitados con pases e imagen personalizada
const invitados = {
  "Ana Pérez": { pases: 2, imagen: "img/vale_ana.png" },
  "Luis Gómez": { pases: 3, imagen: "img/vale_luis.png" },
  "María López": { pases: 1, imagen: "img/vale_maria.png" },
  "Carlos Ramírez": { pases: 4, imagen: "img/vale_carlos.png" }
};

function verificarInvitado() {
  const nombre = document.getElementById("nombreInvitado").value.trim();
  const resultado = document.getElementById("resultado");
  const imagenVale = document.getElementById("imagenVale");

  if (invitados[nombre]) {
    resultado.textContent = `✅ ${nombre}, tienes ${invitados[nombre].pases} pases incluidos.`;
    imagenVale.src = invitados[nombre].imagen;
    imagenVale.style.display = "block";

    lanzarConfetti(); // Confetti cuando se encuentra el invitado
  } else {
    resultado.textContent = "❌ Nombre no encontrado en la lista.";
    imagenVale.style.display = "none";
  }
}

function descargarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const nombre = document.getElementById("nombreInvitado").value.trim();
  let texto = "Vale de Invitación\n\n";

  if (invitados[nombre]) {
    texto += `${nombre}, tienes ${invitados[nombre].pases} pases incluidos.`;
  } else {
    texto += "Nombre no encontrado en la lista.";
  }

  doc.text(texto, 20, 30);
  doc.save("vale_invitacion.pdf");
}

// Confetti
function lanzarConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}
