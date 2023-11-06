import { configureStore } from '@reduxjs/toolkit'
import tarefasSlice from './reducers/tarefas'
import filtroSlice from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasSlice,
    filtro: filtroSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
