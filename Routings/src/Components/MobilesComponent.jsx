import axios from 'axios'
import Card from './Card';
import './card/Card.css'
import { useState } from 'react';

function MobilesComponents(){

   let [allProducts,setAllProducts] = useState([]);
   
        const products = () => {
          let PromiseObject =  axios.get("https://fakestoreapi.in/api/products");
          PromiseObject.then((response)=>{
            console.log("then")
            console.log(response);
            setAllProducts(response.data.products);
          }).catch((errorres)=>{
            console.log(errorres);
          })
      };
    
    return (
        <div>
            <h3 style={{textAlign:"center", color:'red'}}>All Products</h3>
            <div style={{textAlign:"center", backgroundColor:"grey", alignItems:"center"}}> <button onClick={products} style={{marginTop:"10px",color:"green",fontSize:"20px", marginBottom:"10px"}}>GetALLProduct</button></div>
            <div className='mulcards'>
                {
                  allProducts.map(function(element,index){
                      return  <Card image={element.image} price={element.price} color={element.color} />
                  })
}
            </div>
        </div>
    )
}
export default MobilesComponents