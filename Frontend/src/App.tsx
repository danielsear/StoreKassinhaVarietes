import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import FormLogin from './Componets/FormLogin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/login" element={<FormLogin />} />
      </Routes>
    </Router>
  )
}

export default App
