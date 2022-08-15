import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Products/Products";
import "./components/Style.css";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route index path="/" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
