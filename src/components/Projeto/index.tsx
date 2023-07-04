import styled from 'styled-components'

import Paragraph from '../Paragraph'
import { Titulo } from '../Title/styles'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragraph tipo="secundario">Lista de tarefas</Paragraph>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
