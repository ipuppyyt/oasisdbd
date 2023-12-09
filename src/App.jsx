import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import Dashboard from "./components/pages/Dashboard"
import Teams from "./components/pages/Teams"
import Players from "./components/pages/Players"
import Misc from "./components/pages/Misc"
import Tournament from "./components/pages/Tournament"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/dashboard/teams" element={<Teams />} />
        <Route path="/dashboard/players" element={<Players />} />
        <Route path="/dashboard/tournaments" element={<Tournament />} />

        <Route path="/dashboard/misc" element={<Misc />} />
        <Route path="/dashboard/misc/playerswap" element={<Misc />} />
        <Route path="/dashboard/misc/matchresult" element={<Misc />} />
        <Route path="/dashboard/misc/sponsorships" element={<Misc />} />
        <Route path="/dashboard/misc/playerstats" element={<Misc />} />
        <Route path="/dashboard/misc/teamstats" element={<Misc />} />
        <Route path="/dashboard/misc/*" element={<Misc />} />
        
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
