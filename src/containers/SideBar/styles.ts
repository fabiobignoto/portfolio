import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ButtonTheme = styled.button`
  font-size: 10px;
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SideBarContainer = styled.div`
  position: sticky;
  left: 0;
  top: 80px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
