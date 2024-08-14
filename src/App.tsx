import { BrowserRouter } from 'react-router-dom'

import { GLobalCss } from './styles'
import LocalRoutes from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GLobalCss />
        <LocalRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
