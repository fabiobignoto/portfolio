import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import Projetos from './containers/Projetos'
import Sidebar from './containers/SideBar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [usingDarkTheme, setUsingDarkTheme] = useState(false)

  const toogleTheme = () => setUsingDarkTheme(!usingDarkTheme)

  return (
    <ThemeProvider theme={usingDarkTheme ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={toogleTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
