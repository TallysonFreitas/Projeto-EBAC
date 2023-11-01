import FiltroCard from '../../components/FiltroCard'
import * as S from './style'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCard contador={3} legenda={'pendentes'} />
          <FiltroCard contador={4} legenda={'concluidas'} />
          <FiltroCard contador={2} legenda={'urgentes'} />
          <FiltroCard contador={2} legenda={'importantes'} />
          <FiltroCard contador={3} legenda={'normal'} />
          <FiltroCard ativo contador={7} legenda={'todas'} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
