import { P as Paragrafo } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragraph = ({ children, tipo = 'principal', fontSize }: Props) => (
  <Paragrafo fontSize={fontSize} tipo={tipo}>
    {children}
  </Paragrafo>
)

export default Paragraph
