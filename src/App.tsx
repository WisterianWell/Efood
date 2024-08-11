import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GLobalCss } from './styles'
import LocalRoutes from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GLobalCss />
        <div>
          <Header page="home" />
        </div>
        <LocalRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
