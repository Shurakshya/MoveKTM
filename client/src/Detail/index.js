import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSingleApartment, addComment} from "./action";

import './detail.css'
import DetailHeader from "./components/DetailHeader";
import EachApartment from './components/EachApartment';
import AddComment from "./components/AddComment";

class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
      updated : false
    }
  }
  componentDidMount() {
    const id = this.props.match.params.apartmentId;
    this.props.fetchSingleApartment(id);
  }
  submitComment=(data)=>{
    const id = this.props.match.params.apartmentId;
    this.props.addComment(id, data);
  }
  componentWillReceiveProps(newProps){
    const { commentSuccess } = newProps.detail;
    if(commentSuccess!==this.props.commentSuccess && commentSuccess === true){
      this.setState({
        updated : true
      })
    }
  }

  render() {
    const {apartment, comment , commentError,commentSuccess} = this.props.detail;
    return (
      <div>
        <DetailHeader/>
        <div className={"container-fluid detail-container-fluid"}>
          <div className={"detail-wrapper"}>
            <EachApartment singleApartment={apartment}/>
            <p>{commentError ? 'error' : null}</p>
            <AddComment onSubmit={this.submitComment} comment={comment} commentError={commentError} />
            <h1>{this.state.updated ? 'success' : null}</h1>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({detail}) => {
  return {
    detail
  }

}

export default connect(mapStateToProps, {fetchSingleApartment, addComment})(Detail);