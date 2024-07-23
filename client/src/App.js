import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import HomePage from "./container/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./container/Layout";
import Signin from "./components/login/Signin";
import Register from "./components/login/Register";
import ProductContainer from "./container/ProductContainer";
import Products from "./components/product/Products";
import AdminLayout from "./container/AdminLayout";
import Dashboard from "./components/admin/DashBoard/Dashboard";
import Users from "./components/admin/Users/Users";
import Orders from "./components/admin/Orders/Orders";
import AllProducts from "./components/admin/Products/AllProducts";
import ProductPage from "./container/ProductPage";
import CartPage from "./container/CartPage";
import AddProduct from "./components/admin/Products/AddProduct";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="browse" element={<ProductContainer />}>
              <Route path=":param" element={<Products />} />
            </Route>
            <Route path="product/:param" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/login" element={<Signin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Users" element={<Users />} />
            <Route path="Products" element={<AllProducts />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="addproduct" element={<AddProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
