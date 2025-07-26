
const casos = [
    {
        "id": "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
        "titulo": "homicidio",
        "descricao": "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        "status": "aberto",
        "agente_id": "401bccf5-cf9e-489d-8412-446cd169a0f1" 
    },
    {
      "id": "7527d2f8-5e80-45c6-a868-b9f7578b941e",
      "titulo": "roubo",
      "descricao": "roubo de celular de uma senhora",
      "status": "solucionado",
      "agente_id": "401bccf5-cf9e-489d-8412-446cd169a0f1"
    }
];

export function createCaso(caso) {
  casos.push(caso);
  return caso;
}

export function getAllCasos() {
  return casos;
}

export function getCasoById(id) {
  return casos.find(caso => caso.id === id);
}

export function updateCaso(id, updatedFields) {
  const index = casos.findIndex(caso => caso.id === id);
  if (index === -1) return null;

  const { id: _, ...fieldsToUpdate } = updatedFields;

  casos[index] = { ...casos[index], ...fieldsToUpdate };
  return casos[index];
}

export function deleteCaso(id) {
  const index = casos.findIndex(caso => caso.id === id);
  if (index === -1) return false;
  casos.splice(index, 1);
  return true;
}

export function getCasosByAgenteId(agenteId) {
  return casos.filter(caso => caso.agente_id === agenteId);
}

export function getCasosByStatus(status) {
  return casos.filter(caso => caso.status.toLowerCase() === status.toLowerCase());
}

export function searchCasos(termo) {
  return casos.filter(caso =>
    caso.titulo.toLowerCase().includes(termo.toLowerCase()) ||
    caso.descricao.toLowerCase().includes(termo.toLowerCase())
  );
}