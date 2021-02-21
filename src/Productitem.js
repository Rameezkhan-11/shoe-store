import React from 'react';
import { useParams } from 'react-router-dom';
import ShoesData from './ShoesData.json';
function Productitem(){
const {id} = useParams();
const shoe = ShoesData[id]

    return(

        <>
    <h1 style={{color: 'black', textAlign:'center'}}>Product Items</h1>

        <h4 style={{textAlign: 'center'}}>{shoe.name}</h4>
        <img src={shoe.img} height='auto' width='100%'></img>


        </>







    )








}
export default Productitem;