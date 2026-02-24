import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Js from "./pages/Js";
import ReactPage from "./pages/ReactPage";
import Node from "./pages/Node";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      
      {/* Navbar */}
      {/* <nav className="bg-black text-white p-4 flex flex-wrap gap-4 justify-center text-sm md:text-lg">
        <Link to="/">HTML</Link>
        <Link to="/css">CSS</Link>
        <Link to="/js">JS</Link>
        <Link to="/react">React</Link>
        <Link to="/node">Node</Link>
      </nav> */}
      <Navbar/>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/js" element={<Js />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/node" element={<Node />} />
      </Routes>

    </BrowserRouter>
  );
}