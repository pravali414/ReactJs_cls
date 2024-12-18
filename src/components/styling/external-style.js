import { Component } from "react";
import "./styles.css"
import Inlinestyle from "./inline-style";

class  Externalstyles extends Component{
    render(){
        return(

            <>
            <h4 className={"geeting"}>Good morning</h4>
            <Inlinestyle/>
            </>
        );
    }


    

    }


export default Externalstyles;