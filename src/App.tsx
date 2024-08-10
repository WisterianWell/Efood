import Header from './components/Header'
import { GLobalCss } from './styles'

function App() {
  return (
    <div className="App">
      <>
        <GLobalCss />
        <div>
          <Header page="home" />
        </div>
      </>
    </div>
  )
}

export default App
