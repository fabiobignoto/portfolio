import { type } from 'os'
import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};

  padding: 10px;
  border-radius: 5px;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;
  span {
    text-decoration: line-through;
  }
`

function Test() {
  return (
    <>
      <Botao principal fontSize="22px">
        Clique aqui
      </Botao>
      <Botao principal={false} fontSize="10px">
        Clique aqui
      </Botao>

      <BotaoPerigo as="a" principal>
        <span>Não clique</span>
      </BotaoPerigo>
    </>
  )
}

export default Test
