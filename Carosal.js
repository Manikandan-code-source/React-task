import React from 'react'
function Carosal(props) {
   const[flag,flagger]=React.useState(false)
    return (
       <>
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={props.img} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={props.img} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={props.img} alt="Third slide"/>
    </div>
  </div>
  {!flag && <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>}
  {flag && < a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </a>}
</div>
<button onClick={flagger(true)}>next</button>
<button onClick={flagger(false)}>previous</button>
<div style={{alignText : "center"}}>{props.name}</div>
       </>
    );
}
export default Carosal