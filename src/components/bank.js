import React from 'react'
import Navbar from './Navbar';
import Main from './Login';
import DepositPage from './DepositPage';
import Login from './Login';





export default function bank(props) {
    const backStyle={
        backgroundImage: `url(${process.env.PUBLIC_URL}/back1.jpg)`,
        height:'120vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <>
    
   
   <div>
     <Login/>
     
  </div>
</>
  );
}