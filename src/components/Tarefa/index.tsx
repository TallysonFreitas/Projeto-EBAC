import * as S from './style'

const Tarefa = () => {
  return (
    <S.Card>
      <S.Titulo>Nome da tarefa</S.Titulo>
      <S.Tag>Importante</S.Tag>
      <S.Tag>Pendente</S.Tag>
      <S.Descricao />
      <S.BarraAcoes>
        <S.Botao>Editar</S.Botao>
        <S.Botao>Remover</S.Botao>
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa