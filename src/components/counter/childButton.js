


//class ChildButton extends Component{
//render(){
//return(
//<button></button>
//)
//}
//}

import React from "react";

const ChildButton = ({ handleIncrementMethod }) => {
  const incrementValue = 2; 

  return (
    <button onClick={() => handleIncrementMethod(incrementValue)}>
      Increment by {incrementValue}
    </button>
  );
};

export default ChildButton;
