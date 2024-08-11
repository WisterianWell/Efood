import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GLobalCss } from './styles'
import LocalRoutes from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GLobalCss />
        <div>
          <Header page="home" />
        </div>
        <LocalRoutes></LocalRoutes>
      </BrowserRouter>
    </div>
  )
}

export default App
