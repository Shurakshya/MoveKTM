import React  from 'react';

const Comment =({ apartmentProps})=>{
  return (
      <div className="well comment-well">
        { apartmentProps.comments.map(each=>{
          return(
            <div className="row" key={each._id}>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <img className="img-responsive" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                </div>
              </div>
              <div className="col-sm-10">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>{each.author}</strong>
                    <span className="text-muted pull-right">{each.commentedOn}</span>
                  </div>
                  <div className="panel-body">
                    {each.commentText}
                  </div>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    )
};

export default Comment;

