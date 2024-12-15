import{components} from "react"
import ButtonComponent from "./components/button-component";
import Listcomponent from "./components/list/list";
import Orderlist from "./components/list/ordered-list";
import ListItems from "./components/list/listitems/listitems";
import Headingcomponent,{Headingcomponent3,Headingcomponent2} from "./components/heading/heading";
import { Greeting } from "./components/greeting/greeting";

function App() {
  return (
    <div>


      <h1>app.js</h1>
      <ButtonComponent/>
 <Listcomponent/>

 <Headingcomponent/>
 <Headingcomponent3/>
 <Headingcomponent2/>
 <Greeting/>



      <Orderlist/>

      

      <h3>End of ButtonComponent</h3>
      
     
      
   
     
    </div>
  );
}

export default App;
