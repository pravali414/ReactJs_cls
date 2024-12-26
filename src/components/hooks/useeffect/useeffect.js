import axios from "axios";
import { useEffect } from "react";

const UseEffectEx1 = () => {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Check the console for logs!</div>;
};

export default UseEffectEx1;
