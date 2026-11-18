interface ICliente {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
}

function createICliente() {
  return {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
  };
}

export { ICliente, createICliente };
