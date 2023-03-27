import React, { useEffect, useState } from "react";
import { Router, useLocation } from "react-router-dom";
import './App.css';
import AppRoutes from './AppRoutes';
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import Footer from "./components/Layout/Footer";
import { useTranslation } from "react-i18next";
import Login from "./pages/Auth/Login";

function App() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);


// const history = useHistory()
const url =location.pathname;
console.log(url)

  useEffect(() => {
    // onRouteChanged();
  }, [location]);

  
  if (url !== "/login") {
    return (
       <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes />
            </div>
            {isFullPageLayout ? null : <Footer />}
          </div>
        </div>
      </div>
    );
  } else {
    return <>
      <Login/>
    </>
  }
 
}

export default App;
