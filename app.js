// Lista de invitados
const invitados = {
  "Ana Pérez": 2,
  "Luis Gómez": 3,
  "María López": 1,
  "Carlos Ramírez": 4,
  "Pedro Martínez": 2,
  "Sofía Hernández": 3,
  "Daniel Torres": 1,
  "Valeria Castillo": 2
};

function verificarInvitado() {
  const nombre = document.getElementById("nombreInvitado").value.trim();
  const resultado = document.getElementById("resultado");

  if (invitados[nombre]) {
    resultado.textContent = `✅ ${nombre}, tienes ${invitados[nombre]} pases incluidos.`;
  } else {
    resultado.textContent = "❌ Nombre no encontrado en la lista.";
  }
}

// Descargar vale en PDF
function descargarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const nombre = document.getElementById("nombreInvitado").value.trim();
  let texto = "Vale de Invitación\n\n";

  if (invitados[nombre]) {
    texto += `${nombre}, tienes ${invitados[nombre]} pases incluidos.`;
  } else {
    texto += "Nombre no encontrado en la lista.";
  }

  doc.text(texto, 20, 30);
  doc.save("vale_invitacion.pdf");
}