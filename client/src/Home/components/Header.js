import React from 'react';

const Header = (props) => {
  return (
    <div id="header">
      <div className ="header-row">
        <p>
          THE BEST WAY<br/>TO FIND YOUR <br/>
          <span style={{color:"#ED6F1A"}}>HOME
          </span>
        </p>
        <p>
          With Our Best To Offer.
        </p>
        <button type="button" className="btn-lg header-button" >FIND YOUR HOME</button>
      </div>
    </div>
  )

}

export default Header;