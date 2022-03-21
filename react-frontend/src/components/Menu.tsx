import React from "react";

const Menu = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Products
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
