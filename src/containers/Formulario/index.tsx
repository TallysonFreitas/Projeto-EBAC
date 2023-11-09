import { useDispatch } from 'react-redux'
import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form, Opcoes, Opcao } from './style'
import { useState, FormEvent } from 'react'
import * as enums from '../../utils/enums/Tarefa'
import TarefaClass from '../../models/Tarefa'
import { adicionar } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.prioridade.NORMAL)

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      adicionar({
        titulo,
        descricao,
        status: enums.status.PENDENTE,
        prioridade
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>

      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          as="textarea"
          placeholder="Descricao da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.prioridade).map((each) => (
            <Opcao key={each}>
              <input
                name="prioridade"
                type="radio"
                id={each}
                value={each}
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.prioridade)
                }
                defaultChecked={each === enums.prioridade.NORMAL}
              />
              <label htmlFor={each}>{each}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
