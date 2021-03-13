import React from "react";
//import { capitalizeFirstLetter } from "../../utils/helpers";

const Header = (props) => {

  const { currentPage, handlePageChange } = props;


  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand">Riley Beach</span>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li className={currentPage === "About" ? "nav-link navActive" : "nav-link mx-2"}>
              <span onClick={() => handlePageChange("About")}>About Me</span>
            </li>
            <li className={currentPage === "Portfolio" ? "nav-link navActive" : "nav-link mx-2"}>
              <span onClick={() => handlePageChange("Portfolio")}>Portfolio</span>
            </li>
            <li className={currentPage === "Contact" ? "nav-link navActive" : "nav-link mx-2"}>
              <span onClick={() => handlePageChange("Contact")}>Contact Me</span>
            </li>
            <li className={currentPage === "Resume" ? "nav-link navActive" : "nav-link mx-2"}>
              <span onClick={() => handlePageChange("Resume")}>Resume</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;

