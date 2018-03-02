import React from 'react';

const AddComment =()=>{
  return (
    <div className={"form-container"}>
      <h1>Leave A Comment</h1>
      <form className="form-horizontal">
        <div className="form-group">
          <textarea className="form-control" rows="5" id="comment">
          </textarea>
        </div>
        <button type="submit" className="btn btn-default">Add Comment</button>
      </form>
    </div>
  )
}

export default AddComment;