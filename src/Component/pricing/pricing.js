import React from "react";
import "./pricing.css" ;
function Pricing(){
    return(
        <>
        <div className="pricing-content">
    <div className="pricing">
     <h3>Our pricing</h3>
    <span className="line"></span>
    <p style={{width:"100%"}}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no</p>
</div>


<div className="container">
<div className="row gap-5 center">
<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 item price-item" >
    <h5>Economy</h5>
    <h2>$9.90</h2>
    <p>Billing per month</p>
    <hr></hr>
    <p>Bandwidth:<span>1GB</span></p>
    <p>Onlinespace:<span>50MG</span></p>
    <p>Support:<span>No</span></p>
    <p>Domain:<span>1</span></p>
    <p>Hidden fees:<span>No</span></p>
    <button>Join Now</button>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 item price-item" >
    <h5>Deluxe</h5>
    <h2>$19.90</h2>
    <p>Billing per month</p>
    <hr></hr>
    <p>Bandwidth:<span>1GB</span></p>
    <p>Onlinespace:<span>500MG</span></p>
    <p>Support:<span>No</span></p>
    <p>Domain:<span>10</span></p>
    <p>Hidden fees:<span>No</span></p>
    <button>Join Now</button>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 item price-item" >
    <h5>Ultimate</h5>
    <h2>$29.90</h2>
    <p>Billing per month</p>
    <hr></hr>
    <p>Bandwidth:<span>100GB</span></p>
    <p>Onlinespace:<span>2MG</span></p>
    <p>Support:<span>Yes</span></p>
    <p>Domain:<span>unlimited</span></p>
    <p>Hidden fees:<span>No</span></p>
    <button>Join Now</button>
    </div>
</div>
</div>
</div>

        </>
    )
}
export default Pricing ;