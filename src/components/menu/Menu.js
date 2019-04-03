import React from "react";

const Menu = props => {
  return (
    <div id="snav" className="en">
      <ul>
        <li>
          <a href="#home">
            <i className="fa fa-home" />
            <span>HOME</span>
          </a>
        </li>

        <li>
          <a href="#section-1">
            <i className="fa fa-list-ol" />
            <span>TODO App</span>
          </a>
        </li>

        <li>
          <a href="#section-2">
            <i className="fa fa-th" />
            <span>TIC-TAC-TOE</span>
          </a>
        </li>

        <li>
          <a href="#section-3">
            <i className="fa fa-star-half-o" />
            <span>STAR WARS</span>
          </a>
        </li>
        <li>
          <a href="#section-4">
            <i className="fa fa-cloud" />
            <span>FORECAST</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fa fa-mobile"  />
            <span>CONTACT</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
