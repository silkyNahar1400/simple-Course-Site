import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle , faUserCircle} from '@fortawesome/free-solid-svg-icons'
const CourseCard = (props)=>{
   const {course, description, price, image} = props.data;
    return(
        <div className="col-md-3 rounded">
       <div className=''>  
       <div className="card">
          <img src={image} alt="" className="card-top-image" />
          <div className="card-body">
            <h4 className="card-title text-center">{course}</h4>
            <p className="card-text text-center">{description}</p>
            <p className="lead"> <strong> ${price} </strong></p>
            <h6> <small> <FontAwesomeIcon icon={faPlayCircle} /> 200 Lessons <span className='ms-3'> <FontAwesomeIcon icon={faUserCircle} /> 5000+ Enrolled</span></small> </h6> 
            <button onClick={()=> {props.handleAddCart(props.data)}} className="btn btn-primary btn-sm mt-4"> Enroll Now</button>
          </div>
        </div> 
      </div>
      </div> 
    )
}

export default CourseCard;