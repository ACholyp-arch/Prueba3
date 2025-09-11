// Lista de invitados con pases e imagen personalizada
const invitados = {
  "Ana Pérez": { pases: 2, imagen: "Vale3.png" },
  "Luis Gómez": { pases: 3, imagen: "Vale4.png" },
  "María López": { pases: 1, imagen: "Vale2.png" },
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

// 👉 Descargar la imagen mostrada (ya no PDF)
function descargarVale() {
  const img = document.getElementById("imagenVale");

  if (!img.src || img.style.display === "none") {
    alert("Primero verifica tu nombre para mostrar el vale.");
    return;
  }

  const a = document.createElement("a");
  a.href = img.src;
  a.download = "vale_invitacion.png"; // Nombre del archivo descargado
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// Confetti
function lanzarConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}
