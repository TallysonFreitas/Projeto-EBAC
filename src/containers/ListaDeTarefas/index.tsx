import Tarefa from '../../components/Tarefa'
import { Container } from './style'
import * as enums from '../../utils/enums/Tarefa'

const ListaDeTarefas = () => {
  const tarefas = [
    {
      titulo: 'estudar JavaScript',
      descricao: 'ver aula do curso',
      prioridade: enums.prioridade.IMPORTANTE,
      status: enums.status.PENDENTE
    },
    {
      titulo: 'estudar JavaScript',
      descricao: 'ver aula do curso',
      prioridade: enums.prioridade.NORMAL,
      status: enums.status.PENDENTE
    },
    {
      titulo: 'estudar JavaScript',
      descricao: 'ver aula do curso',
      prioridade: enums.prioridade.URGENTE,
      status: enums.status.CONCLUIDA
    }
  ]

  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {tarefas.map((each) => (
          <li key={each.titulo}>
            <Tarefa
              descricao={each.descricao}
              titulo={each.titulo}
              status={each.status}
              prioridade={each.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
