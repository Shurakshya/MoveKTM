import React, { Component } from 'react';
import FormData from 'form-data';
import {withRouter} from 'react-router-dom';

import _ from 'lodash';

class AddApartmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      apartmentType: '',
      price: '',
      detail: '',
      facility: '',
      specialFeatures: '',
      constructionYear: '',
      error : {}
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  sendApartmentData = e => {
    e.preventDefault();
    let form = new FormData();
    const imagedata = document.querySelector('input[type="file"]').files[0];
    form.append('name', this.state.name);
    form.append('address', this.state.address);
    form.append('apartmentType', this.state.apartmentType);
    form.append('price', this.state.price);
    form.append('detail', this.state.detail);
    form.append('facility', this.state.facility);
    form.append('specialFeatures', this.state.specialFeatures);
    form.append('constructionYear', this.state.constructionYear);
    form.append('image', imagedata);
    for (let key of form.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
    this.validateForm(form);
    _.size(this.state.error) <= 0 ? this.props.onSubmit(form) : null;
    this.setState({
      name: '',
      address: '',
      apartmentType: '',
      price: '',
      detail: '',
      facility: '',
      specialFeatures: '',
      constructionYear: '',
      error:{}
    });
    this.image.value = "";
    this.props.history.push('/');

  }
  validateForm=(data)=>{
    const {name, address, apartmentType, price, detail , facility, specialFeatures, constructionYear} = this.state;
    if(!(name || address ||apartmentType || price ||detail || facility|| specialFeatures || constructionYear)){
      this.setState({
        error : `Please fill All the required fields!`
      })
    }
  }
  render() {
    return (
      <div className="container add_apartment_form">
        <h1>Add Aparment</h1>
        <br />
        {/*{error ? (*/}
        {/*<div className="alert alert-danger">*/}
        {/*<strong>Error!</strong> {error}*/}
        {/*</div>*/}
        {/*) : null}*/}
        <form
          className="form-horizontal"
          encType="multipart/form-data"
          onSubmit={this.sendApartmentData}
        >
          <div className="form-group">
            <label>Name<span className={"asterik"}>*</span></label>
            <input
              type="name"
              onChange={this.handleChange}
              value={this.state.name}
              className="form-control input-lg"
              id="name"
              placeholder="Enter name"
              name="name"
            />
            <span style={{ color: 'red' }}>{this.state.error.name || ''}</span>
          </div>
          <div className="form-group">
            <label>Address<span className={"asterik"}>*</span></label>
            <input
              type="address"
              onChange={this.handleChange}
              value={this.state.address}
              className="form-control input-lg"
              id="address"
              placeholder="Enter address"
              name="address"
            />
            {/*<span style={{ color: 'red' }}>{this.state.error.address || ''}</span>*/}
          </div>
          <div className="form-group">
            <label>Apartment Type<span className={"asterik"}>*</span></label>
            <input
              type="apartmentType"
              className="form-control input-lg"
              onChange={this.handleChange}
              value={this.state.apartmentType}
              id="apartmentType"
              placeholder="Enter apartmentType"
              name="apartmentType"
            />
            {/*<span style={{ color: 'red' }}>*/}
            {/*{this.state.error.apartmentType || ''}*/}
            {/*</span>*/}
          </div>
          <div className="form-group">
            <label>Price<span className={"asterik"}>*</span></label>
            <input
              type="price"
              className="form-control input-lg"
              id="price"
              onChange={this.handleChange}
              value={this.state.price}
              placeholder="Enter price"
              name="price"
            />
            {/*<span style={{ color: 'red' }}>{this.state.error.price || ''}</span>*/}
          </div>
          <div className="form-group">
            <label>Detail<span className={"asterik"}>*</span></label>
            <input
              type="detail"
              className="form-control input-lg"
              onChange={this.handleChange}
              value={this.state.detail}
              id="detail"
              placeholder="Enter detail"
              name="detail"
            />
            {/*<span style={{ color: 'red' }}>{this.state.error.detail || ''}</span>*/}
          </div>
          <div className="form-group">
            <label>Facility<span className={"asterik"}>*</span></label>
            <input
              type="facility"
              className="form-control input-lg"
              onChange={this.handleChange}
              value={this.state.facility}
              id="facility"
              placeholder="Enter facility"
              name="facility"
            />
            {/*<span style={{ color: 'red' }}>*/}
            {/*{this.state.error.facility || ''}*/}
            {/*</span>*/}
          </div>
          <div className="form-group">
            <label>Special Features<span className={"asterik"}>*</span></label>
            <input
              type="specialFeatures"
              onChange={this.handleChange}
              value={this.state.specialFeatures}
              className="form-control input-lg"
              id="specialFeatures"
              placeholder="Enter specialFeatures"
              name="specialFeatures"
            />
            {/*<span style={{ color: 'red' }}>*/}
            {/*{this.state.error.specialFeatures || ''}*/}
            {/*</span>*/}
          </div>
          <div className="form-group">
            <label>Construction Year<span className={"asterik"}>*</span></label>
            <input
              type="constructionYear"
              className="form-control input-lg"
              onChange={this.handleChange}
              value={this.state.constructionYear}
              id="constructionYear"
              placeholder="Enter constructionYear"
              name="constructionYear"
            />
            {/*<span style={{ color: 'red' }}>*/}
            {/*{this.state.error.constructionYear || ''}*/}
            {/*</span>*/}
          </div>
          <div className="form-group">
            <label>Image<span className={"asterik"}>*</span></label>
            <input
              type="file"
              className="form-control input-lg"
              id="image"
              ref={(image)=>this.image=image}
              defaultValue="image"
            />
            {/*<span style={{ color: 'red' }}>{this.state.error.phone || ''}</span>*/}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(AddApartmentForm);
