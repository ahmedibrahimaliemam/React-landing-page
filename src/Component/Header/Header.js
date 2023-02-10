import React from "react";
import "./Header.css" ;
import Navbar from "../Nvabar/Nav";
function Header(){
    return(
        <header>
            <div className="header-overlay">
            <Navbar/>
        <div className="container center">
            <div className="row">
                <div className="col-lg-12">
            <h1 className="title">We Help Startups Lanuch Thier<br></br> products</h1>
            <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <form>
            <input type="text" placeholder="Email" />
            <button style={{borderRadius:"50px",textTransform:"uppercase"}} type="submit">Subscribe</button>
            </form>
            </div>
            </div>
            </div>
            </div>
        </header>
    )
}
export default Header ;