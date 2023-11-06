import Tarefa from '../../components/Tarefa'
import { Container } from './style'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (each) =>
        each.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&quot; e &quot;{termo}&quot;
      </p>
      <ul>
        {filtraTarefas().map((each) => (
          <li key={each.titulo}>
            <Tarefa
              descricao={each.descricao}
              titulo={each.titulo}
              status={each.status}
              prioridade={each.prioridade}
              id={each.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
