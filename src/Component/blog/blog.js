import React from "react";
import "./blog.css" ;
import blog1 from "../../assets/blog1.webp" ;
import blog2 from "../../assets/blog2.webp" ;
import blog3 from "../../assets/blog3.webp" ;
function Blog(){
    return(
        <>
        <div className="blog-page">
            <div className="team">
     <h3>Blog</h3>
    <span className="line"></span>
    <p style={{width:"100%"}}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no</p>
</div>
<div className="container">
<div className="row">
<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 blog-item">
<img src={blog1} alt="blog1" />
<span>UI & UX Design</span>
<h5>Doing a cross country road trip</h5>
<span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no</span>
</div>
<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 blog-item">
<img src={blog2} alt="blog2" />
<span>Digita marketing</span>
<h5>New exhabitation at our museum</h5>
<span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no</span>
</div>
<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 blog-item">
<img src={blog3} alt="blog3" />
<span>Travelling</span>
<h5>Why are so many people</h5>
<span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no</span>
</div>
</div>
</div>
</div>
        </>
    )
}
export default Blog ;