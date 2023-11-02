import Tarefa from '../../components/Tarefa'
import { Container } from './style'

const ListaDeTarefas = () => {
  const tarefas = [
    {
      titulo: 'estudar JavaScript',
      descricao: 'ver aula do curso',
      prioridade: 'importante',
      status: 'pendente'
    },
    {
      titulo: 'estudar JavaScript',
      descricao: 'ver aula do curso',
      prioridade: 'importante',
      status: 'pendente'
    },
    {
      titulo: 'estudar JavaScript',
      descricao: 'ver aula do curso',
      prioridade: 'importante',
      status: 'pendente'
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
