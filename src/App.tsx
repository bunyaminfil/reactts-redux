import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import CheckoutPage from "./containers/CheckoutPage";
import AllProductsPage from "./containers/AllProductsPage";
import { ROUTE } from "./constants/route";
import { HeaderNavigation } from "./components/HeaderNavigation";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store/rootReducer";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
