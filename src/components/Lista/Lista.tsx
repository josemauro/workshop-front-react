import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

const Lista = () => {
    return (
         <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/josemauro.png"></Foto>
                <Informacoes>
                    <Nome>José Mauro</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button>Marcar aula</Button>
                </Informacoes>
            </ItemLista>

            <ItemLista>
                <Foto src="https://github.com/josemauro.png"></Foto>
                <Informacoes>
                    <Nome>José Mauro</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button>Marcar aula</Button>
                </Informacoes>
            </ItemLista>
            
            <ItemLista>
                <Foto src="https://github.com/josemauro.png"></Foto>
                <Informacoes>
                    <Nome>José Mauro</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button>Marcar aula</Button>
                </Informacoes>
            </ItemLista>

            <ItemLista>
                <Foto src="https://github.com/josemauro.png"></Foto>
                <Informacoes>
                    <Nome>José Mauro</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button>Marcar aula</Button>
                </Informacoes>
            </ItemLista>
         </ListaStyled>
    )
}

export default Lista;