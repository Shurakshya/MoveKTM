import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';
import {upperCase} from 'lodash';

const Navigation = (props) => {
  console.log(props.userData);
  const {firstname,lastname,email} = props.userData;
  const profile= firstname ? "MY PROFILE" : "LOGIN";
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
          <Link className="navbar-brand topnav" to={'/'}>
            <img src={props.logo} className="img-rounded navbar-fixed-top" />
          </Link>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to={'/'}>HOME</Link>
            </li>
            <li>
              <Link to={'/apartments'}>PROPERTIES</Link>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
            <li>
              <a href="">PAGES</a>
            </li>
            <li className="dropdown last_nav_list">
              <a href="" className="dropdown-toggle" data-toggle="dropdown">
                {profile}&nbsp;<span className="caret" />
              </a>
              <ul className="dropdown-menu" role="menu">
                {
                  firstname
                    ? ([
                      <li key={'1'}>
                        <a>{upperCase(firstname)}</a>
                      </li>,
                      <li key={'3'}>
                        <Link to="/addApartment">ADD POST</Link>
                      </li>,
                      <li onClick={()=>props.logout()}  key={'2'}>
                        <a>LOGOUT</a>
                      </li>,
                      <li key={'4'}>
                        <a href="">DEACTIVATE</a>
                      </li>
                    ])
                    : ([
                        <li key={'5'}>
                          <Link to={"/login"}>LOGIN</Link>
                        </li>,
                        <li key={'6'}>
                        <Link to={"/register"}>REGISTER</Link>
                        </li>
                    ])
                }


              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;