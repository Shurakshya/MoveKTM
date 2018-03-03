import React from 'react';
import {connect} from 'react-redux';
import jwt_decode from 'jwt-decode';
import {withRouter} from 'react-router';
import Navigation from './Navigation';
import logo from '../images/movektmlogo.png';

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      login:false,
      userData : {}
    }
  }
  componentWillMount(){
    this.storeUserData();
  }
  componentWillReceiveProps(newProps){
    const {token} = newProps.login;
    this.storeUserData(token);
  }
  storeUserData=(tokenData="")=>{
    const token = localStorage.getItem('token') || tokenData;
    if(token){
      const userData = jwt_decode(token);
      this.setState({
        userData
      })
      localStorage.setItem('email',userData.email);
      localStorage.setItem('name',userData.firstname);
    }
  }
  logout=()=>{
    localStorage.clear();
    this.setState({
      userData :{}
    })
    window.location.assign('/');
  }
  render(){
    return(
      <div>
        <Navigation userData={this.state.userData} logout={this.logout} logo={logo} />
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    login : state.login
  }
}
export default connect(mapStateToProps,null)(withRouter(Nav));