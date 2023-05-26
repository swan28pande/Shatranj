
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Chessboard from './components/chessboard'
import SideCanvas from './components/sidecanvas' 


// import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    
        <Route path="/" element={<Chessboard />} />
        {/* <Route path="/" element={<SideCanvas />} /> */}
        <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
</BrowserRouter>
  )
}

export default App
