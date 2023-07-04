
import { BrowserRouter , Routes , Route } from "react-router-dom";
// import Chessboard from './components/chessboard'
// import SideCanvas from './components/sidecanvas' 
import CreateGame from './components/creategame.jsx'
import JoinGame from './components/joingame.jsx'

// import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/create-game" element={<CreateGame/>} />
        <Route path="/join-game" element={<JoinGame/>} />
        {/* <Route path="/" element={<Chessboard />} /> */}
        {/* <Route path="/" element={<SideCanvas />} /> */}
        <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
</BrowserRouter>
  )
}

export default App
