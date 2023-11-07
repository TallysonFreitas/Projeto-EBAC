import Tarefa from '../../components/Tarefa'
import { Container, Resultado } from './style'
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

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ``

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como:  "${`${criterio}=${valor}`} ${complementacao}"`
    }
    return mensagem
  }

  const tarefas = filtraTarefas()

  return (
    <Container>
      <Resultado>{exibeResultadoFiltragem(filtraTarefas().length)}</Resultado>
      <ul>
        {tarefas.map((each) => (
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
