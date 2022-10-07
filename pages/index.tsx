import { Box } from '@mui/material';
import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista';

function Botao(props){
  return <a href="#"> {props.titulo} </a>;
}

const Home: NextPage = () => {
  const professores: Professores[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://github.com/josemauro.png",
      descricao: "Descricao do professor",
      valor_hora: 100
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "https://github.com/josemauro.png",
      descricao: "Descricao do professor",
      valor_hora: 100
    },
    {
      id: 3,
      nome: "Professor 3",
      foto: "https://github.com/josemauro.png",
      descricao: "Descricao do professor",
      valor_hora: 100
    },
    {
      id: 4,
      nome: "Professor 4",
      foto: "https://github.com/josemauro.png",
      descricao: "Descricao do professor",
      valor_hora: 100
    }
  ]
  return (
    <>
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}></Lista>s
    </Box>
    </>
  )
}

export default Home
