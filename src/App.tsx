import BarraLateral from './containers/Barralateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import store from './store'
import EstiloGlobal, { Container } from './styles'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
