import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Container customClass={'min_height'}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
    </>
  );
}

export default App;
