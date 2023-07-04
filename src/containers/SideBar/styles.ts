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
  color: #eee;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`

export const SideBarContainer = styled.div`
  position: sticky;
  left: 0;
  top: 80px;
`
