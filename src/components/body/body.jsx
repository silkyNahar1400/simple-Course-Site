import React, {useState, useEffect} from 'react';
import CourseCard from '../card/colum/courseCard';
import CheckoutCard from '../card/colum/checkoutCard';
import courseData from '../data/courseData';


const Body = ()=>{
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const handleAddCart = (evetData)=>{
       setCart([...cart, evetData]);
  }
  useEffect(() => {
      setData(courseData);
   }, [])
  
    return (
      <div className="container">
      <div className="row gx-3 p-2">
      <CheckoutCard cart = {cart} />
      {data.map((d)=> {return( <CourseCard data = {d} handleAddCart = {handleAddCart} />)})};
      </div> 
      </div>
  
    )
}

export default Body;