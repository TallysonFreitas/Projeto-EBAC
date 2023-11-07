import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './style'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => {
            dispatch(alteraTermo(e.target.value))
          }}
        />
        <S.Filtros>
          <FiltroCard
            criterio="status"
            valor={enums.status.PENDENTE}
            legenda={'pendentes'}
          />
          <FiltroCard
            valor={enums.status.CONCLUIDA}
            criterio="status"
            legenda={'concluidas'}
          />
          <FiltroCard
            valor={enums.prioridade.URGENTE}
            criterio="prioridade"
            legenda={'urgentes'}
          />
          <FiltroCard
            valor={enums.prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda={'importantes'}
          />
          <FiltroCard
            valor={enums.prioridade.NORMAL}
            criterio="prioridade"
            legenda={'normal'}
          />
          <FiltroCard criterio="todas" legenda={'todas'} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
