import * as enums from '../utils/enums/Tarefa'
class TarefaClass {
  titulo: string
  descricao: string
  status: enums.status
  prioridade: enums.prioridade
  id: number

  constructor(
    titulo: string,
    descricao: string,
    status: enums.status,
    prioridade: enums.prioridade,
    id: number
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.status = status
    this.prioridade = prioridade
    this.id = id
  }
}

export default TarefaClass
