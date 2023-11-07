import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.prioridade | enums.status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const estaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contaTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((each) => each.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((each) => each.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio: criterio,
        valor: valor
      })
    )
  }

  const ativo = estaAtivo()
  const contador = contaTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
