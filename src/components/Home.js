import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/back.jpg)`,
    height: '120vh',
    marginTop: '-70px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const divstyle = {
    paddingTop: '550px',
    paddingLeft: '600px',
  };

  const btnstyle = {
    width: '200px',
  };

  return (
    <div className="container-fluid" style={myStyle}>
      <div className="container" style={divstyle}>
        <h1>Welcome to Bank of Interns</h1>
        <Link to="/bank">
          <button type="button" style={btnstyle} className="btn btn-light">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
