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
    },
    editar: (state, action: PayloadAction<TarefaClass>) => {
      const indexDaTarefa = state.itens.findIndex(
        (each) => each.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Omit<TarefaClass, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (each) =>
          each.titulo.toLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )
      if (tarefaJaExiste) {
        alert('ja existe uma tarefa com esse nome')
      } else {
        const ultimaTarefaId = state.itens[state.itens.length - 1].id
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefaId ? ultimaTarefaId + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (each) => each.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.status.CONCLUIDA
          : enums.status.PENDENTE
      }
    }
  }
})

export const { remover, editar, adicionar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
