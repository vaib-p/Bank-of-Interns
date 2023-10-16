import React from 'react'
import Navbar from './Navbar';




export default function bank(props) {
    const backStyle={
        backgroundImage: `url(${process.env.PUBLIC_URL}/back.jpg)`,
        height:'120vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <>
    <div>
        <Navbar/>
   </div>
   <div style={backStyle}>

   </div>
   </>
  );
}