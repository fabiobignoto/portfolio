import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Titulo from '../../components/Title'
import { ButtonTheme, Description, SideBarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Fabio Bignoto</Titulo>
      <Paragraph tipo="secundario" fontSize={16}>
        fabiobignoto
      </Paragraph>
      <Description tipo="principal">Desenvolvedor Front-End</Description>
      <ButtonTheme onClick={props.trocaTema}>Trocar Tema</ButtonTheme>
    </SideBarContainer>
  </aside>
)

export default Sidebar
