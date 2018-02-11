import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
    <div className={'navigation'}>
      <nav className="navbar navbar-default navbar-fixed-top topnav" id="navigation">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">TEAM</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
            <li>
              <a href="">PAGES</a>
            </li>
            <li className="dropdown last_nav_list">
              <a href="" className="dropdown-toggle" data-toggle="dropdown">
                Login &nbsp;<span className="caret" />
              </a>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <a href="">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;