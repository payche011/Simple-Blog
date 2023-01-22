import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import Create from "./components/create/Create";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
