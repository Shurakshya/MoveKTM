import React, { Component } from 'react';
import {Link , withRouter} from 'react-router-dom';
import img1 from '../../images/prop_icon1.png';
import img2 from '../../images/prop_icon2.png';
import img3 from '../../images/prop_icon3.png';
import img4 from '../../images/prop_icon4.png';

class Categories extends Component{
  sendSearchQuery=(e)=>{
    e.preventDefault();
    const searchQuery = this.search.value;
    if(!searchQuery){
      this.props.sendError();
    } else{
      this.props.history.push(`/apartments?search=${searchQuery}`);
    }
  };
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
                <img src={img1} className={"img-wrap"} />
                <p>Studio apartment</p>
                </Link>
              </div>
              <div className={"col-sm-6 col-xs-6 type-categories"}>
                <Link to={"/apartments/category/friend"}>
                <img src={img2} className={"img-wrap"} />
                <p>Friend apartment</p>
                </Link>
              </div>
              <div className={"col-sm-6 col-xs-6 type-categories"}>
                <Link to={"/apartments/category/shared"}>
                <img src={img3} className={"img-wrap"} />
                <p>Shared apartment</p>
                </Link>
              </div>
              <div className={"col-sm-6 col-xs-6 type-categories"}>
                <Link to={"/apartments/category/family"}>
                <img src={img4} className={"img-wrap"} />
                <p>Family apartment</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={"search-input-row"}>
          <form method="get" action="/apartments" className="form-horizontal" onSubmit={this.sendSearchQuery}>
              <div className="form-group search-form">
                <label>Apartment Finder</label>
                  <input
                    type={"text"}
                    id={"search"}
                    name={"search"}
                    ref={search => (this.search = search)}/>
                  <button type="submit" className="btn-lg search-button">
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
export default withRouter(Categories);