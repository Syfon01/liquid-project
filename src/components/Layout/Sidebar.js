import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Trans } from "react-i18next";
import dashboardIcon from "../../assets/images/my-img/home.svg";

function Sidebar() {
  const location = useLocation();

  const [menuState, setMenuState] = useState({});
  const toggleMenuState = (name) => {
    setMenuState((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const onRouteChanged = () => {
    document.querySelector("#sidebar").classList.remove("active");
    setMenuState({});
    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
    ];
    dropdownPaths.forEach((obj) => {
      if (isPathActive(obj.path)) {
        setMenuState((prev) => ({ ...prev, [obj.state]: true }));
      }
    });
  };

  const isPathActive = (path) => {
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    onRouteChanged();
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }, [location]);

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a
            href="!#"
            className="nav-link"
            onClick={(evt) => evt.preventDefault()}
          >
            <div className="d-flex align-items-center">
              <div className="nav-profile-image">
                <img
                  src={require("../../assets/images/faces/face1.jpg")}
                  alt="profile"
                />
                <span className="login-status online"></span>{" "}
                {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <p className="fw-bold mb-0">
                  <Trans>Emerson Joseph</Trans>
                </p>
                <p className="text-secondary text-small mb-0">
                  <Trans>Project Manager</Trans>
                </p>
              </div>
            </div>

            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        <li
          className={
            isPathActive("/dashboard") ? "nav-item active" : "nav-item"
          }
        >
          <Link className="nav-link" to="/dashboard">
            <span className="menu-title">
              <Trans>Dashboard</Trans>
            </span>
            <img src={dashboardIcon} className="menu-icon" alt="home" />
          </Link>
        </li>
        <li className={isPathActive("/loans") ? "nav-item active" : "nav-item"}>
          <div
            className={
              menuState.basicUiMenuOpen ? "nav-link menu-expanded" : "nav-link"
            }
            onClick={() => toggleMenuState("basicUiMenuOpen")}
            data-toggle="collapse"
          >
            <span className="menu-title">
              <Trans>Loans</Trans>
            </span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-crosshairs-gps menu-icon"></i>
          </div>
          <Collapse in={menuState.basicUiMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link
                  className={
                    isPathActive("/loans/applicants")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/loans/applicants"
                >
                  Applicants
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    isPathActive("/loans/history")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/loans/history"
                >
                  History
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/documents">
            <span className="menu-title">
              Documents
            </span>
            <img src={dashboardIcon} className="menu-icon" alt="home" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
