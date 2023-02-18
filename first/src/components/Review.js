import React from 'react'

const Review = () => {
  return (<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{margin:'0px 50% 0px 16%',width:'1000px'}}>
  <div className="carousel-inner" style={{marginTop:'70px'}}>
    <div className="carousel-item active">
      <img src="/images/sachin.jpeg"  alt="..." style={{width:'150px',height:'150px',borderRadius:'100%'}}/>
      <h3 style={{fontFamily: 'Montserrat',fontWeight:'600',fontSize:'22px',marginTop:'30px'}}>Sachin</h3>
      <h6 style={{color:'rgba(0,0,0,0.5)',fontFamily: 'Montserrat'}}>Customer</h6>
      <p style={{fontFamily: 'Montserrat', textAlign:'center',width:'900px',marginLeft:'80px'}}>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.</p>
    </div>
    <div className="carousel-item">
      <img src="/images/nikhil.png"  alt="..." style={{width:'140px',height:'150px',borderRadius:'100%'}}/>
      <h3 style={{fontFamily: 'Montserrat',fontWeight:'600',fontSize:'22px',marginTop:'30px'}}>Nikhil Rana</h3>
      <h6 style={{color:'rgba(0,0,0,0.5)',fontFamily: 'Montserrat'}}>Customer</h6>
      <p style={{fontFamily: 'Montserrat', textAlign:'center',width:'900px',marginLeft:'80px'}}>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.</p>
   
    </div>
    <div className="carousel-item">
      <img src="/images/pawansir.jpeg"  alt="..." style={{width:'150px',height:'150px',borderRadius:'100%'}}/>
      <h3 style={{fontFamily: 'Montserrat',fontWeight:'600',fontSize:'22px',marginTop:'30px'}}>Dr.Pawan Thakur</h3>
      <h6 style={{color:'rgba(0,0,0,0.5)',fontFamily: 'Montserrat'}}>Customer</h6>
      <p style={{fontFamily: 'Montserrat', textAlign:'center',width:'900px',marginLeft:'80px'}}>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.</p>
   
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
    <span className="carousel-control-prev-icon" aria-hidden="true" style={{height:'25px',marginLeft:'-5px'}}></span>
    
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" style={{height:'25px',marginLeft:'5px'}}></span>
   
  </button>
</div>
  )
}


export default Review