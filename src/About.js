import React, { useState } from 'react';
import {useEffect} from 'react'
import './Product.css';

function About(){
    const [repoD, setRepoD] = useState([{}]);
    const [im1, setImg1]= useState("");
 useEffect(()=>{

 async function getRepo() {
     const repo = await fetch ("https://api.github.com/users/Rameezkhan-11/repos")
     const data = await repo.json();   
     setRepoD(data);
     
     setImg1(data[0].owner.avatar_url)
 } 
getRepo()
 },[])
    return(
        <>
        <h1 style={{textAlign: 'center'}}>About Us</h1>
        <h1 style={{textAlign: 'center'}}>My Git Hub Repos</h1>
        
        {repoD.map((data,ind)=>{
            const url1 = data.clone_url;
            const repoUrl = "https://github.com/Rameezkhan-11";
            
            
                
            return(

                    <div key={ind}>
            <ul key={ind}>
              <li key={ind}> <img key={ind + 1} src={im1} alt="Rameez" className="avatar">
                      
                  
            </img>
            <br />
            <br />

            <p>RepoOwner:<a href={repoUrl} target='_target'> Rameez khan </a></p>
            <p>{data.name}</p>
                <br />
    
            <a href={url1} target='_target' key={ind  + 2} >{url1}</a>
            
            </li>
                
                </ul>
                </div>
            )



        


        })}
       
</>



    )





}
export default About;