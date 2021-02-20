import React from 'react';
import ShoesData from './ShoesData.json';

function Home(){
console.log(ShoesData.Shoe1.img)

    return(

        <>
    
        {/* <div style={{backgroundColor: 'black'}}>         */}


        <img src={ShoesData.Shoe1.img} height='100%' width='100%'></img>
        
        
        </>





    )



}
export default Home;