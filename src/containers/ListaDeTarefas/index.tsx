import Tarefa from '../../components/Tarefa'
import { Container } from './style'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

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
