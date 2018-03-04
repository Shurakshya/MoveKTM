import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Categories extends Component{
  render(){
    return(
      <div className={"container-fluid categories-list"}>
        <div className={"row categories-list-row"}>
          <div className="col-sm-5">
            <div className={"category-name"}>
              <h1>Categories </h1>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row categories-text-row">
              <div className={"col-sm-6 col-xs-6 type-categories"}>
                <Link to={"/apartments/category/studio"}>
                <img src={this.props.img1} className={"img-wrap"} />
                <p>Studio apartment</p>
                </Link>
              </div>
              <div className={"col-sm-6 col-xs-6 type-categories"}>
                <Link to={"/apartments/category/friend"}>
                <img src={this.props.img2} className={"img-wrap"} />
                <p>Friend apartment</p>
                </Link>
              </div>
              <div className={"col-sm-6 col-xs-6 type-categories"}>
                <Link to={"/apartments/category/shared"}>
                <img src={this.props.img3} className={"img-wrap"} />
                <p>Shared apartment</p>
                </Link>
              </div>
              <div className={"col-sm-6 col-xs-6 type-categories"}>
                <Link to={"/apartments/category/family"}>
                <img src={this.props.img4} className={"img-wrap"} />
                <p>Family apartment</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={"search-input-row"}>
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