import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function Home(props) {

    const myStyle={
        backgroundImage: `url(${process.env.PUBLIC_URL}/back.jpg)`,
        height:'120vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
   

  const divstyle = {
    
    paddingTop: '550px', 
    paddingLeft: '600px',// Add spacing between the logo and text
  };
  const btnstyle={
    width:'200px',
  }
    return (
      <div style={myStyle}>
        <div style={divstyle}>
        <h1>Welcome to bank of Interns </h1>
        <Link to='/bank'>
        <button type="button"  style={btnstyle} class="btn btn-light">Get Started</button>
        </Link>
       
        
      </div>
      </div>
    );
  }
