import React from "react";
import "./team.css" ;
import image1 from "../../assets/team1.webp" ;
import image2 from "../../assets/team2.webp" ;
import image3 from "../../assets/team3.webp" ;
import image4 from "../../assets/image4.jpg"  ;
function Team(){
    return(
        <>
    <div className="team" id="team">
     <h3>Behind the people</h3>
    <span className="line"></span>
    <p style={{width:"100%"}}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no</p>
</div>
        <div className="team-content">
            <div className="container">
                <div className="row gap-5 center">
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 team-item">
                        <img src={image1} alt="image1" />
                        <h5>Frank Johnson</h5>
                        <span>CEO</span>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 team-item">
                    <img src={image2} alt="image2" />
                    <h5>Elaine Stclair</h5>
                        <span>Designer</span>

                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 team-item">
                    <img src={image4} alt="image4" />
                    <h5>John doe</h5>
                        <span>Developer</span>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 team-item">
                    <img src={image3} alt="image3" />
                    <h5>Wanda Arthur</h5>
                        <span>Manager</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="works">
            <div className="team">
        <h3>Work Process</h3>
    <span className="line"></span>
    <p style={{width:"100%"}}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no</p>

        </div>
        <div className="container text-center">
        <div className="row center">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 work-item">
            <i className="fa-solid fa-pencil fa-2x"></i>
            <h5>Tell us what you need</h5>
            <span>The Big Oxmox advised her not to do so</span>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 work-2">
                <span className="icon-line"> <i className="fa-solid fa-arrow-right"></i></span>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 work-item">
            <i className="fa-solid fa-calendar-days fa-2x"></i>
            <h5>Get free qoutes</h5>
            <span>little blind text did not listen</span>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 work-2">
                <span className="icon-line"> <i className="fa-solid fa-arrow-right"></i></span>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 work-item">
            <i className="fa-solid fa-square-rss fa-2x"></i>
            <h5>Deliver high quality product</h5>
            <span>when she reached the first hills</span>
            </div>
        </div>
        <button style={{margin:"30px 0"}}>Get started<i className="fa-solid fa-arrow-right"></i></button>
        </div>

        </div>
        <div className="work">
            <div className="team">
        <h3>What they have said</h3>
    <span className="line"></span>
    <p style={{width:"100%"}}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no</p>
</div>
<div className="container">
<div className="row items-parent">
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
        <div className="image-para"><img src={image1} alt="image1" />
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
        </p>
        </div>
        <h5>RUBEN-<span>Charieston</span></h5>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
        <div className="image-para">
        <img src={image2} alt="image2" />
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
        </p>
        </div>
        <h5>MICHAEL P .HOWLETT-<span>Worcester</span></h5>
      
    </div>
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
        <div className="image-para"><img src={image3} alt="image3" />
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
        </p>
        </div>
        <h5>THERESA D SINCLAIR-<span>Lynchburg</span></h5>
     
    </div>
</div>
</div>
</div>
<div className="section-3-team">
    <div className="header-overlay">
    <div className="row services-row">
        <div className="col-12 text-center">
            <h1 className="text-light">Lets get start</h1>
            <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <button className="services-btn">View plan</button>

        </div>
    </div>
</div>
</div>
        
        </>
    )
}
export default Team ;