import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header id="home" className="cd-header" data-type="slider-item">
        <div className="content">
          <div className="content__container">
            <p className="content__container__text">Hello</p>

            <ul className="content__container__list">
              <li className="content__container__list__item">world !</li>
              <li className="content__container__list__item">employer !</li>
              <li className="content__container__list__item">users !</li>
              <li className="content__container__list__item">everybody !</li>
            </ul>
          </div>
        </div>
        <div className="container-title">
            <h1 className="header-title">
              I'am junior frontend developer.<br/>
            </h1>
            <h2 className="header-subtitle">
              Welcome to my portfolio site.
            </h2>
        </div>
        <div className="sprite">

        </div>
      </header>
    );
  }
}

export default Header;
