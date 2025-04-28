import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CreatePage from "./Pages/CreatePage"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  )
}

export default App
