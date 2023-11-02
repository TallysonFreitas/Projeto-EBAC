import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'
import TarefaClass from '../../models/Tarefa'

const initialState = [
  new TarefaClass(
    'Estudar TypeScript',
    'rever modulo 2 do curso',
    enums.status.CONCLUIDA,
    enums.prioridade.IMPORTANTE,
    1
  ),
  new TarefaClass(
    'Estudar React',
    'rever modulo 2 do curso',
    enums.status.PENDENTE,
    enums.prioridade.NORMAL,
    2
  ),
  new TarefaClass(
    'Estudar CssInJs',
    'rever modulo 2 do curso',
    enums.status.PENDENTE,
    enums.prioridade.URGENTE,
    3
  )
]

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((each) => each.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
