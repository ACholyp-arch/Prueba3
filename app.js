// Función para normalizar texto: quita tildes y pone en minúsculas
function normalizarTexto(texto) {
  return texto
    .normalize("NFD") // separa letras y acentos
    .replace(/[\u0300-\u036f]/g, "") // elimina tildes
    .toLowerCase()
    .trim();
}

// Lista de invitados con pases e imagen personalizada
const invitados = {
  "ana perez": { pases: 2, imagen: "Vale3.png" },
  "luis gomez": { pases: 3, imagen: "Vale4.png" },
  "maria lopez": { pases: 1, imagen: "Vale2.png" }
};

function verificarInvitado() {
  const nombreInput = document.getElementById("nombreInvitado").value;
  const nombreNormalizado = normalizarTexto(nombreInput);

  const resultado = document.getElementById("resultado");
  const imagenVale = document.getElementById("imagenVale");

  if (invitados[nombreNormalizado]) {
    resultado.textContent = `✅ ${nombreInput}, tienes ${invitados[nombreNormalizado].pases} pases incluidos.`;
    imagenVale.src = invitados[nombreNormalizado].imagen;
    imagenVale.style.display = "block";

    lanzarConfetti(); // 🎉
  } else {
    resultado.textContent = "❌ Nombre no encontrado en la lista.";
    imagenVale.style.display = "none";
  }
}

// Descargar la imagen mostrada
function descargarVale() {
  const img = document.getElementById("imagenVale");

  if (!img.src || img.style.display === "none") {
    alert("Primero verifica tu nombre para mostrar el vale.");
    return;
  }

  // Crear enlace temporal para descarga
  const a = document.createElement("a");
  a.href = img.src;
  a.setAttribute("download", "vale_invitacion.png"); // nombre del archivo descargado
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// 🎉 Confetti
function lanzarConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}
