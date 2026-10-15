js
export const TAVOLOZZA = Object.freeze([
  // Lilla
  { nome: "Glicine", colore: "#d9c8f0" },
  { nome: "Lilla", colore: "#c9a9e6" },
  { nome: "Orchidea", colore: "#b08ad8" },
  { nome: "Ametista", colore: "#9468c4" },
  { nome: "Prugna", colore: "#6f4a9e" },
  // Verde oliva
  { nome: "Oliva tenue", colore: "#b5bd7a" },
  { nome: "Oliva chiaro", colore: "#9aa64a" },
  { nome: "Oliva", colore: "#7d8a2e" },
  { nome: "Oliva scuro", colore: "#5f6b23" },
  { nome: "Muschio", colore: "#444d1c" },
]);

export function coloreValido(valore) {
  if (typeof valore !== "string") return null;
  const pulito = valore.trim().toLowerCase();
  return /^#[0-9a-f]{6}$/.test(pulito) ? pulito : null;
}