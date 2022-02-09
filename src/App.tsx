import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import CheckoutPage from "./containers/CheckoutPage";
import AllProductsPage from "./containers/AllProductsPage";
import { ROUTE } from "./constants/route";
import "./App.css";
import { HeaderNavigation } from "./components/HeaderNavigation";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
      <HeaderNavigation />
      <Routes>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.CHECKOUT} element={<CheckoutPage />} />
        <Route path={ROUTE.ALL_PRODUCTS} element={<AllProductsPage />} />
        {/* <Navigate to={ROUTE.HOME} /> */}
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
