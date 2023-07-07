
import { BrowserRouter , Routes , Route } from "react-router-dom";
// import ChessboardInverse from './components/chessboard-inverse'
import Chessboard from './components/chessboard'
import Chessboard_2 from './components/chessboard-2'

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
        {/* <Route path="/" element={<ChessboardInverse />} /> */}
        <Route path="/room/:game_id/:member" element={<Chessboard />} />
        <Route path="/room2/:game_id" element={<Chessboard_2 />} />

        {/* <Route path="/" element={<SideCanvas />} /> */}
        <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
</BrowserRouter>
  )
}

export default App
