import FiltroCard from '../../components/FiltroCard'
import * as S from './style'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
