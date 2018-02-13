import React, { Component } from 'react';

class Categories extends Component{
  render(){
    return(
      <div className={"categories-list"}>
        <div className={"row categories-list-row"}>
          <div className={"col-sm-4"}>
            <div className={"categories-list-each"}>
              <img src={"http://www.forallworld.com/data_images/wallpapers/5/15188-home.jpg"} />
            </div>
          </div>
          <div className={"col-sm-6"}>
            <div className={"categories-list-each"}>
              <h2> Categories </h2>

            </div>
          </div>
        </div>
        <div className={"row search-input-row"}>
          <form className="form-horizontal">
              <div className="form-group search-form">
                <label>Apartment Finder</label>
                  <input type={"text"} />
                  <button type="button" className="btn-lg search-button">
                    <span className={"glyphicon glyphicon-search"}>
                    </span>
                    Search</button>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Categories;