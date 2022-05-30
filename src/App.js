import React from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
     

    useEffect(() => {
      const getTodo = async () =>{
        let r = await axios.get('http://localhost:3004/products')
        console.log(r.data)
      }
     
      getTodo();
        
    }, [])
    

  return <div>

    {/* TODO: Code here */}</div>;
};

export default App;
