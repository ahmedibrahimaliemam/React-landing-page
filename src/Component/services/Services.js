import React from "react";
import "./Services.css" ;
import image from "../../assets/online-world.svg" ;
function Services(){
    return(
        <>
        <div className="services">
        
        <h3>Our Services</h3>
        <span className="line"></span>
        <p style={{width:"100%"}}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no</p>
</div>
<div className="container">
<div className="row gap-4 center">
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 item" >
    <i className="fa-regular fa-gem fa-2x icon"></i>
        <h3>digital design</h3>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 item" >
    <i className="fa-solid fa-palette fa-2x icon"></i>
        <h3>unlimited colors</h3>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 item" >
    <i className="fa-solid fa-wand-magic-sparkles fa-2x icon"></i>
        <h3>strategy solutions</h3>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 item" >
    <i className="fa-brands fa-react fa-2x icon"></i>
        <h3>Awesome support</h3>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 item" >
    <i className="fa-solid fa-layer-group fa-2x icon"></i>

        <h3>Truly multipurpose</h3>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span></div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 item" >
    <i className="fa-solid fa-magnifying-glass fa-2x icon"></i>
        <h3>Easy To Customize</h3>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
        </div>
</div>

</div>
<div className="section-2 pt-5 pb-5">
<div className="container">
<div className="row gap-5">
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12"><h2>A digital web design studio creating modern & engaging online experiences</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
    <ul className="list">
        <li>We put alot of effort in design</li>
        <li>The most important ingredient of successfull website</li>
        <li>sed ut perspiciatis unde omnis iste natus erros sit</li>
        <li>Submit your orgnization</li>
    </ul>
    <button>Learn More  <i className="fa-solid fa-arrow-right"></i></button>
    </div>
    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
        <img src={image} alt="image" />
    </div>
</div>
</div>
</div>

<div className="section-3">
    <div className="header-overlay">
    <div className="row services-row">
        <div className="col-12 text-center">
            <h1 className="text-light">Build your dream website today</h1>
            <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <button className="services-btn">View plan</button>

        </div>
    </div>
</div>
</div>
</>

    )
}
export default Services;