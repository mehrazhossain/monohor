import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/api/products/:id" element={<ProductScreen />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
