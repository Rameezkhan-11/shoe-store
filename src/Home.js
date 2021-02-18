import React from 'react';
import ShoesData from './ShoesData.json';

function Home(){
console.log(ShoesData.Shoe1.img)

    return(

        <>
        <div style={{backgroundColor: 'black'}}>        <h1 style={{textAlign:'center', color: 'red', backgroundColor:'black'}}>Welcome to shoes Store</h1>


        <img src={ShoesData.Shoe1.img} height='100%' width='100%'></img>
        
        </div>
        </>





    )



}
export default Home;