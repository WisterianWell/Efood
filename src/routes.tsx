import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
// import Perfil from './pages/Perfil'

const LocalRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/perfil" element={<Categorias />} /> */}
  </Routes>
)

export default LocalRoutes
