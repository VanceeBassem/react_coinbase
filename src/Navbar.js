import React from 'react';
import logo from './logo.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png





const Navbar = () => {
  const handleClick = () =>{
    console.log('Hello');
    }
    return ( 
     <div className='Navbar'>
        <nav className="navbar navbar-expand-lg ">
         <div className="container-fluid">
            {/* <h1 className="navbar-brand" href="#">Coinbase</h1> */}
            <img src={logo} alt="Logo" className='logo'/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Price</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Learn</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Indivisuak</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Developer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Company</a>
                </li>
              </ul>
              <form className="d-flex">
                <a className="nav-link" href="#">sign-in</a>
                <button className="btn btn-primary" onClick={handleClick}>Get Started</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
}
 
export default Navbar;