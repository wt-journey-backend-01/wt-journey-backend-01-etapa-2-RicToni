
const agents = [
    {
        "id": "401bccf5-cf9e-489d-8412-446cd169a0f1",
        "nome": "Rommel Carneiro",
        "dataDeIncorporacao": "1992/10/04",
        "cargo": "delegado"
      
    },
    {
        "id": "6f4b2a3d-7e8a-4f92-9d88-1e8f4c3b7a22",
        "nome": "Ana Beatriz Silva",
        "dataDeIncorporacao": "2015/07/21",
        "cargo": "investigadora"
      },
      {
        "id": "b12c3f67-0a59-4d9b-95c5-8f1a9d35c4ef",
        "nome": "Carlos Eduardo",
        "dataDeIncorporacao": "2018/03/15",
        "cargo": "perito"
      },
      {
        "id": "e7c90d48-3b5f-4c1f-9f8a-5d6e7a4f92bc",
        "nome": "Juliana Martins",
        "dataDeIncorporacao": "2020/11/10",
        "cargo": "inspetora"
      },
      {
        "id": "d54a7e9f-2b1c-4f35-8a9e-7e4f3c2d1b6a",
        "nome": "Fernando Lopes",
        "dataDeIncorporacao": "2012/06/30",
        "cargo": "investigador"
      }

];

export function createAgente({id, nome, dataDeIncorporacao, cargo}) {
    const agente = {
        id,
        nome, 
        dataDeIncorporacao, 
        cargo
    };
    agents.push(agente);
    return agente;
}

export function getAgentes(){
    return agents;
}

export function getAgenteById(id){
    return agents.find((agente) => agente.id === id);
}

export function updateAgente(id, updatedFields) {
  const index = agents.findIndex(agente => agente.id === id);
  if (index === -1) return null;

  const { id: _, ...fieldsToUpdate } = updatedFields;

  agents[index] = { ...agents[index], ...fieldsToUpdate };
  return agents[index];
}

export function deleteAgente(id) {
    const index = agents.findIndex(a => a.id === id);
    if (index === -1) return false;
  
    agents.splice(index, 1);
    return true;
  }

export function getAgentesByCargo(cargo) {
  return agents.filter((agente) => agente.cargo === cargo);
}

export function getAgentesOrdenadosPorData(sort) {
  const sorted = [...agents].sort((a, b) => {
    const dateA = new Date(a.dataDeIncorporacao);
    const dateB = new Date(b.dataDeIncorporacao);
    return sort === 'dataDeIncorporacao' ? dateA - dateB : dateB - dateA;
  });

  return sorted;
}