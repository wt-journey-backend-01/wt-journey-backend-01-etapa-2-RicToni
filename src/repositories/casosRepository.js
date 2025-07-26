
const casos = [
    {
        "id": "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
        "titulo": "homicidio",
        "descricao": "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        "status": "aberto",
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
  casos[index] = { ...casos[index], ...updatedFields };
  return casos[index];
}

export function deleteCaso(id) {
  const index = casos.findIndex(caso => caso.id === id);
  if (index === -1) return false;
  casos.splice(index, 1);
  return true;
}