import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/back4.jpg)`,
    height: '120vh',
    marginTop: '-70px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const divstyle = {
    paddingTop: '10%',
    align: 'center',
  };

  const btnstyle = {
    width: '200px',
  };
  const bankimgStyle = {

    width: '200px',
    height: '200px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop:'100px',
    margin:'100px',
    
    
  };
  return (
    <div className="container-fluid" style={myStyle}>
      
      <div className="container" style={divstyle}>
      <img src={`${process.env.PUBLIC_URL}/bnk2.png`} style={bankimgStyle} alt='bank'/>
        <div className="container text-center">

        <h1>Welcome to Bank of Interns</h1>
        <Link to="/bank">
          <button type="button" style={btnstyle} className="btn btn-light">
            Get Started
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
