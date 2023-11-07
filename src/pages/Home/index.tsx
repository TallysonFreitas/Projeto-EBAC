import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/Barralateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
