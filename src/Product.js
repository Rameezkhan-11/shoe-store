
import React from 'react';
import './Product.css';
import ShoesData from './ShoesData.json';
import  {Link } from 'react-router-dom';

function Product() {

  return(

    <>
    <div>
    {Object.keys(ShoesData).map(keyName =>{
      const data = ShoesData[keyName]
      return(
        <div style={{padding: '2em'}} key={keyName}>
        
        <div className="card" >
        <img src={data.img} alt="Denim Jeans" style={{width:'100%', height: 'auto'}}></img>
      
        <h1>{data.name}</h1>
        
        

        <p className="price">{data.rate}</p>

        

          <p>Best Shoes</p>
            

      <Link to={`/product/${keyName}`}><button> Show Details </button></Link>
      </div>
    
      </div>
        

    

      )


    })}


</div>
    </>



  )
  
}
export default Product;