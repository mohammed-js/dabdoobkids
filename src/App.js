import React, { useState } from "react";
import { createContext, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./Redux/store";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Login from "./pages/Login";
import News from "./pages/News";
import Otp from "./pages/Otp";
import About from "./pages/About";
import Search from "./pages/Search";
import Summary from "./pages/Summary";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Categories from "./pages/Categories";
import Plans from "./components/Plans";
// --
import Sidebar from "./components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  persistor.purge();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Header setOpen={setOpen} />
            <Routes>
              {!open && (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/404" element={<Error />} />
                  <Route path="/details/:id" element={<Details />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/otp" element={<Otp />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/news" element={<News />} />
                  {/* <Route
                    path="/search/:categoryId?/:brandId?"
                    element={<Search />}
                  /> */}
                  <Route path="/summary" element={<Summary />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/plans" element={<Plans />} />
                  <Route path="/categories" element={<Categories />} />
                </>
              )}
            </Routes>
            {!open && <Footer />}
            {open && <Sidebar />}
          </div>
        </PersistGate>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
