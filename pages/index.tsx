import type { NextPage } from 'next'
import Cabecalho from '../src/components/Cabecalho/Cabecalho';

function Botao(props){
  return <a href="#"> {props.titulo} </a>;
}

const Home: NextPage = () => {
  return (
    <div>
      <Cabecalho></Cabecalho>
    </div>
  )
}

export default Home
