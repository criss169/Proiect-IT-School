import React from "react";

function Navbar() {
  return (
    <div className="container-principal">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid p-0">
          <a className="navbar-brand" href="/project-react/assets/index.html">
            <img src="/logo.jpg" alt="Logo" width="120px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link m-lg-4 p-0"
                  href="/pages//main page/breakfast.html"
                >
                  Breakfast
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link m-lg-4 p-0"
                  href="/pages//main page/appetizers.html"
                >
                  Appetizers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link m-lg-4 p-0"
                  href="/pages//main page/dinner.html"
                >
                  Dinner
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link m-lg-4 p-0"
                  href="/pages//main page/dessert.html"
                >
                  Dessert
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle m-lg-4 p-0"
                  href="/project-react/assets/pages/main page/magicbox.html"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Magic box
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/pages/main page/sauces.html"
                    >
                      Sauces
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/pages//main page/soups.html"
                    >
                      Soups
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/pages//main page/plan-de-mese.html"
                    >
                      Meal plan
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="style-form">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-3"
                  type="search"
                  placeholder="Something delicious.."
                  aria-label="Search"
                />
                <button className="btn btn-light me-5" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
