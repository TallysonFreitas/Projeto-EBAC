import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'
import TarefaClass from '../../models/Tarefa'

type TarefaStateType = {
  itens: TarefaClass[]
}

const initialState: TarefaStateType = {
  itens: [
    {
      titulo: 'Estudar TypeScript',
      descricao: 'rever modulo 2 do curso',
      status: enums.status.CONCLUIDA,
      prioridade: enums.prioridade.IMPORTANTE,
      id: 1
    },
    {
      titulo: 'Estudar React',
      descricao: 'rever modulo 2 do curso',
      status: enums.status.PENDENTE,
      prioridade: enums.prioridade.URGENTE,
      id: 2
    },
    {
      titulo: 'Estudar Css In Js',
      descricao: 'rever modulo 2 do curso',
      status: enums.status.PENDENTE,
      prioridade: enums.prioridade.NORMAL,
      id: 3
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((each) => each.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
