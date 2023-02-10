import React from "react";
import "./Nav.css"
function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg container" style={{ width:"100%", zIndex:"5"}}>
  <div className="container-fluid">
    <a className="navbar-brand text-light logo" href="#">DORSIN</a>
    <button className="navbar-toggler bg-light" style={{zIndex:"4"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#" >Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#" >Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#" >Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#" >Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#" >Contact</a>
        </li>
      </ul>
      <button style={{borderRadius:"50px",textTransform:"uppercase"}}>Try it free</button>
     
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar ;