import React from "react";
import logo from "../assets/BioBiz.png";
const Header = () => {
  return (
    <div className="navbar  sticky  bg-green-100">
      <div className="flex-1">
        <a className="cursor-pointer hidden md:flex " href="https://biobiz.in/">
          <img className="w-32 " src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal ">
          <li>
            <a>Vision</a>
          </li>
          <li>
            <details>
              <summary className="pr-3">Updates</summary>
              <ul className="bg-base-100 rounded-t-none z-50">
                <li>
                  <a>India Updates</a>
                </li>
                <li>
                  <a>BioBiz Consulting</a>
                </li>
                <li>
                  <a>Opportunity</a>
                </li>
                <li>
                  <a>Bring</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="pl-3">Insights</summary>
              <ul className="bg-base-100 rounded-t-none  z-50 ">
                <li>
                  <a>Bioenergy</a>
                </li>
                <li>
                  <a>
                    Enviromental <br />
                    Solutions
                  </a>
                </li>
                <li>
                  <a>Bio Product</a>
                </li>
                <li>
                  <a>Bio-based Science</a>
                </li>
                <li>
                  <a>Regional Biomass Residue</a>
                </li>
                <li>
                  <a>India Biomass Residue</a>
                </li>
                <li>
                  <a>Indian Bioechonomy</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
