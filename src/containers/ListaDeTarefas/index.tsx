import Tarefa from '../../components/Tarefa'
import { Container } from './style'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (each) =>
          each.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (each) => each.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (each) => each.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&quot; e &quot;{termo}&quot;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
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
