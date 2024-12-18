import React from "react";
import reactImage from "./download.jpg"; // Ensure this path is correct

const Profilecard = (props) => {
    console.log(props)
  return (
    <>
     <div class="card" style={{width:200}}>
    <img class="card-img-top" src={reactImage} alt="Card image" style={{width:"100%"}}/>
    <div class="card-body">
      <h4 class="card-title" style={{color:props.profile.color}}>{props.profile.name}</h4>
    <p class="card-text">{props.profile.designation}</p>
    <p class="card-text">{props.profile.salary}</p>
      <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
      
        
    </>
  );
};

export default Profilecard;
//props : props is an object which is used  to pass the data from parent to child
//props are nothing but additional information given to components (user defined)
//props are immutable (we cannot change the data)
//attribute:additinal information given to element(attribute are fixed)