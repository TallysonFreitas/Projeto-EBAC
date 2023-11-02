import { configureStore } from '@reduxjs/toolkit'
import tarefasSlice from './reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefas: tarefasSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
