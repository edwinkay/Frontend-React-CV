import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) =>{
   const [products, setData] = useState([]);

   useEffect(() => {
     const callAsync = async () => {
       const result = await axios(API);

       setData(result.data);
     };
     callAsync();
   }, []);
   return products;
}

export default useGetProducts;