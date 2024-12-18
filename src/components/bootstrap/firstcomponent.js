import Profilecard from "./card";

import React from "react";

const BootstrapLayout = () => {
    const members=[
        {
            name:"pravallika",
            color:"red",
            designation:"java developer",
            salary:"1Lpa"
        },{
            name:"mallika",
            color:"yellow",
            designation:"Doctor",
            salary:"80k"

        },
        {
            name:"divya",
            color:"green",
            designation:"Teacher",
            salary:"50k"

        },



        
    ]
  return (
    <>
      <div>
        <div className="container-fluid p-5 bg-primary text-white text-center">
          <h1>My First Bootstrap Page</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>

        <div className="container mt-5">
        <div class="row">
        <div class="col-sm-4">

          
                <Profilecard  profile={members[0]}/>
              
            </div>

            <div className="col-sm-4">
             <Profilecard profile={members[1]}/>
            </div>
            <div className="col-sm-4">
             <Profilecard profile={members[2]}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootstrapLayout;
