import { P as PEstilo } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragraph = ({ children, tipo = 'principal' }: Props) => (
  <PEstilo tipo={tipo}>{children}</PEstilo>
)

export default Paragraph
