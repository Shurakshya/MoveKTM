import React, {Component} from 'react';

class AddComment extends Component {
  constructor(props){
    super(props);
  }
  submitCommentData=(e)=>{
    e.preventDefault();
    const name = localStorage.getItem('name');
    const data = {
      author : name,
      commentText : this.comment.value
    }
    if(!name){
      alert('Please login to comment');
    }
    else if(!data.commentText){
      alert("Empty comment cannot be submitted!!!");
    }else{
      this.props.onSubmit(data);
    }
  }
  render(){
    return (
      <div className={"form-container"}>
        <h1>Leave A Comment</h1>
        <form className="form-horizontal" onSubmit={this.submitCommentData}>
          <div className="form-group">
          <textarea
            className="form-control"
            rows="5"
            id="comment"
            name={"comment"}
            ref={comment => (this.comment = comment)}>
          </textarea>
          </div>
          <button type="submit" className="btn btn-default">Add Comment</button>
        </form>
      </div>
    )
  }
}
export default AddComment;