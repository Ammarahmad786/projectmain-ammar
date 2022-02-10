import Navbar from "./components/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Medicinescreen from "./screens/Medicinescreen";
import Medicinedetail from "./screens/Medicinedetail";
function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Container>
          <Routes>
            <Route path="/medicine" element={<Medicinescreen />} />
            <Route path="/medicine/:id" element={<Medicinedetail />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
