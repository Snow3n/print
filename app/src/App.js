import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
// import { useRoutes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import 'materialize-css'

import { MainPage } from "./pages/main";
import { ProductList } from "./pages/productList";
import { ProductAdd } from "./pages/productAdd";
import { Cups } from "./pages/cups";
import { Shirts } from "./pages/t-shirts";
import { Order } from "./pages/order";
import { OrderList } from "./pages/orderList";
import { About } from "./pages/About";
import { PaymentAndDeliver } from "./pages/PaymentAndDeliver";

function App() {
  // const routes = useRoutes();
  return (
    <div>
      {/* <Router> */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cups" element={<Cups />} />
          <Route path="/t-shirts" element={<Shirts />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/new" element={<ProductAdd />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/about" element={<About />} />
          <Route path="/ship&pay" element={<PaymentAndDeliver />} />
        </Routes>
      </div>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
