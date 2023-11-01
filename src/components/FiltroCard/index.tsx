import * as S from './style'

export type Props = {
  ativo?: boolean
}

const FiltroCard = (Props: Props) => {
  return (
    <S.Card ativo={Props.ativo}>
      <S.Contador>3</S.Contador>
      <S.Label>pendentes</S.Label>
    </S.Card>
  )
}

export default FiltroCard
