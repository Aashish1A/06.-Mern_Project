import { Route, Routes } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";
import HomePage from "./Pages/HomePage";
import Navbar from "../../Frontend/src/components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
