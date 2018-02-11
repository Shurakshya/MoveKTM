import React from 'react';

const Navigation = (props) => {
  return (
    <div id="navbar">
      <nav className="navbar navbar-default navbar-fixed-top topnav" id="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar">
            </span>
            <span className="icon-bar">
            </span>
            <span className="icon-bar">
            </span>
          </button>
        </div>
        <div className="collapse navbar-collapse"  id="bs-example-navbar-collapse-1" >
          <ul className="nav navbar-nav navbar-right">
            <li >
              <a href="">HOME</a>
            </li>
            <li >
              <a href="">TEAM</a>
            </li>
            <li ><a href="">CONTACT</a></li>
            <li ><a href="">PAGES</a></li>
            <li ><a href="">Login</a></li>
            <li className="dropdown">
              <a href="" className="dropdown-toggle" data-toggle="dropdown">
                <span className="caret">
                </span>
              </a>
              <ul className="dropdown-menu" role="menu">
                <li><a href="">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <div className ="row nav-row">
        <p className="text-uppercase row-text-uppercase">
          THE BEST WAY<br/>TO FIND YOUR <br/>
          <span style={{color:"#F1780C"}}>HOME
          </span>
        </p>
        <p style={{fontFamily:"Arial" , fontSize:"200%" ,  fontWeight:"400"}}>
          With Our Best To Offer.
        </p>
        <button type="button" className="btn-lg">FIND YOUR HOME</button>
      </div>
    </div>
  )

}

export default Navigation;