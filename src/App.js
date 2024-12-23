import Parentcomponent from "./components/props/parent";
import Counter from "./components/counter/counter";
import ChildButton from "./components/counter/childButton";
import Mouting from "./components/lifecycle/mounting/mounting";
import Loader from "./components/loaders/loaders";
import UseStateExample2 from "./components/hooks/useState/useStateEx2";

function App() {
  const greencolor="Green"
  return (
    <div>
      <Parentcomponent/>
      <Counter/>
      <Mouting color={greencolor}/>

<Loader/>
<UseStateExample2/>


     {/*<BootstrapLayout/>
     <Mapmethod/>*/}
      
</div>
  );
}

export default App;