import { Injectable } from '@angular/core';

interface Cliente {
  nome: string
  sobrenome: string
  telefone: string
  id: number
  email: string
  cpf: string
}

/**
 * C -> Create
 * R -> Read
 * U -> Update
 * D -> Delete
 */

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[] = [
    {
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '123123123-12',
      telefone: '40024444',
      id: 1,
      email: 'fredalves@gmail.com'
    },
    {
      nome: 'Maria',
      sobrenome: 'Almeida',
      telefone: '9898989898',
      cpf: '234234234-23',
      id: 2,
      email: 'marialmeida@gmail.com'
    },
    {
      nome: 'Joao',
      sobrenome: 'Silva',
      telefone: '34563456',
      cpf: '345345345-34',
      email: 'joaosilva@gmail.com',
      id: 3,
    }
  ]

  constructor() { }
 
  listarClientes(): Cliente[] { // lógica para acessar a api e pegar os dados
    return this.clientes
  }

  listarClientePeloId(id: number): Cliente | undefined {
    /** O método find() dos arrays serve para procurar algum valor dentro do array
     * 
     * É necessário que se passe como parâmetro do método find() uma função.
     * 
     * Essa função será utilizada dentro do método para procurar um valor.
     * 
     * A função que será passada deve retornar sempre um boolean 
     * 
     * SELECT * FROM cliente WHERE id = 2
    */ 
    const clienteEncontrado = this.clientes.find((c) => {
      return c.id == id
    })

    return clienteEncontrado
  }

}
