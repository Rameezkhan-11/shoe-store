import React from 'react';
import './Product.css';
import ShoesData from './ShoesData.json';
function Product() {

  return(

    <>
    {Object.keys(ShoesData).map(keyName =>{
      const data = ShoesData[keyName]
      return(
        <div style={{padding: '2em'}} key={keyName}>
        
        <div className="card" >
        <img src={data.img} alt="Denim Jeans" style={{width:'100%', height: 'auto'}}></img>

        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>Some text about the jeans..</p>
        <p><button>Add to Cart</button></p>
      </div>
    
      </div>
        

      

      )


    })}



    </>



  )
  
}
export default Product;