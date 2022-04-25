import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarpage from "./components/home/Navbarpage";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbarpage />} />
          <Route path="About" element={<About />} />
          <Route path="Products" element={<Products />} />
          <Route Path ="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

