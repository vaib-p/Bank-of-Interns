import React from 'react'

import logoImage from './logo.png';


export default function Navbar(props) {
    const myStyle={
        height:'50px',
        width: '100px',
       
    };
    const backStyle={
        backgroundColor: 'lightblue', 
        
       
        
        
        backgroundRepeat: 'no-repeat',
    };

  return (
    <div style={backStyle}>
    <nav  className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div >
      <img style={myStyle} className="navbar-brand" src={logoImage} href="/" alt="Logo" />
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/bank">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
</div>
  )
}