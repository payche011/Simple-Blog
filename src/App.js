import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import Create from "./components/create/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "./components/create/BlogDetails";
import NotFound from "./components/404/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/create" element={<Create />} />

            <Route path="/blogs/:id" element={<BlogDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
