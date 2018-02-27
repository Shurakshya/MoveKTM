const mongoose = require('mongoose');
const Apartment = mongoose.model('Apartment');


const getOneComment = (req, res)=>{
  const { apartmentId , commentId } = req.params;
  if (!req.params && !apartmentId && commentId) {
    res.status(404).json({
      message: 'Id not found',
    });
    return;
  }
  Apartment
    .findById(apartmentId)
    .exec((err, apartment) => {
      if(err){
        res.status(400).json({
          message : "Bad Request"
        })
      }else if(!apartment){
        res.status(404).json({
          message : "Apartment not found with that id"
        })
      }
      if(apartment.comments && apartment.comments.length > 0){
        const comment = apartment.comments.id(commentId);
        if(!comment){
          res.status(404).json({
            message : "Comment id not found"
          })
      } else{
          const response= {
            apartment : {
              name : apartment.name,
              address : apartment.address,
              id : apartmentId
            },
            comment : comment
          }
          res.status(200).json({
            response
          })
        }
      } else{
        res.status(404).json({
          message : "No Comments Found"
        })
      }
    })
}

const createComment = (req, res) => {
  const {apartmentId} = req.params;
  if(!apartmentId){
    res.status(404).json({
      message : "Id not found"
    });
  } else {
    Apartment
      .findById(apartmentId)
      .select('comments')
      .exec((err , apartment) =>{
        if(err){
          res.status(400).json({
            message : err
          })
        } else {
          doAddComment(req,res, apartment);
        }
      })
  }
}

const doAddComment = function (req, res, apartment){
  const {author , commentText} = req.body;
  if(!apartment){
    res.status(404).json({
      message : "Apartment not found"
    })
  } else {
    apartment.comments.push({
      author ,
      commentText
    });
    apartment.save(( err,apartment ) => {
      let thisComment;
      if(err){
        res.status(400).json({
          message : err
        })
      }else {
        thisComment = apartment.comments[ apartment.comments.length - 1 ];
        res.status(201).json({
          data : thisComment
        })
      }
    })
  }

}

module.exports = {
  getOneComment,
  createComment
};