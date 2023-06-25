import React from 'react'

const Caro = () => {
    return (<section className='slider_section' style={{width:'100%',zIndex:'9'}} >
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel"  >
      
      <div className="carousel-inner" style={{height:'600px',width:'100%'}}>
        <div className="carousel-item active " data-bs-interval="5000" style={{backgroundColor:'#fcf1ed',width:'100%',height:'645px',marginTop:'-10px'}} >
        <div className='aimagea' style={{margin:'100px 0px 0px 100px'}}></div>
          <img src="/images/2.png" alt='/' style={{position:'absolute',height:'700px',marginTop:'30px',marginLeft:'100px'}}/>
          <h5 style={{fontSize: '70px',width:'500px',fontFamily: 'Playfair Display',fontWeight: 'bold',color:'#002c3e',margin:'150px 0px 0px 800px'}}><span style={{color:'rgb(247, 68, 78)'}}>Sale 20% Off</span> On Everything</h5>
            <p style={{fontFamily:"Montserrat",width:'500px',marginLeft:'800px'}}>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
            <a href='./'  className='shopp' style={{position:'absolute',marginLeft:'800px',textAlign:'center',height:'50px',backgroundColor:'rgb(247, 68, 78)',paddingTop:'11.5px',marginTop:'-8px',width:'160px',textDecoration:'none',fontFamily:'Montserrat',fontWeight:'bold',border:'1px solid rgb(247, 68, 78)',color:'white'}}>Shop Now</a>
            
        </div>
        <div className="carousel-item" data-bs-interval="5000" style={{backgroundColor:'#f5fafd',width:'100%',height:'645px',marginTop:'-10px'}}>
        <div className='bimageb' style={{margin:'100px 0px 0px 100px'}}></div>
        <img src="/images/3.png" alt='/' style={{position:'absolute',marginLeft:'100px',marginTop:'0px',height:'700px'}}/>
        <h5 style={{fontSize: '70px',width:'100px',fontFamily: 'Playfair Display',fontWeight: 'bold',color:'#002c3e',margin:'150px 0px 0px 800px'}}><span style={{color:'rgb(247, 68, 78)'}}>AUTUMN</span> COLLECTION</h5>
            <p style={{fontFamily:"Montserrat",width:'500px',marginLeft:'800px',marginTop:'50px'}}>  DON'T COMPROMISE ON STYLE! GET  FLAT 30% OFF FOR NEW ARRIVALS. </p>
            <a href='./'  className='shopp' style={{position:'absolute',marginLeft:'800px',textAlign:'center',height:'50px',backgroundColor:'rgb(247, 68, 78)',paddingTop:'11.5px',marginTop:'-8px',width:'160px',textDecoration:'none',fontFamily:'Montserrat',fontWeight:'bold',border:'1px solid rgb(247, 68, 78)',color:'white'}}>Shop Now</a>
  
        </div>
        <div className="carousel-item" data-bs-interval="5000" style={{backgroundColor:'#fbf0f4',width:'100%',height:'645px',marginTop:'-10px'}}>
        <div className='cimagec' style={{margin:'100px 0px 0px 40px'}}></div>
        <img src="/images/5.png" alt='/' style={{position:'absolute',marginLeft:'0px',height:'650px'}}/>
        <h5 style={{fontSize: '70px',width:'500px',fontFamily: 'Playfair Display',fontWeight: 'bold',color:'#002c3e',margin:'150px 0px 0px 800px'}}><span style={{color:'rgb(247, 68, 78)'}}>Sale 20% Off</span> On Everything</h5>
            <p style={{fontFamily:"Montserrat",width:'500px',marginLeft:'800px'}}>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
            <a href='./'  className='shopp' style={{position:'absolute',marginLeft:'800px',textAlign:'center',height:'50px',backgroundColor:'rgb(247, 68, 78)',paddingTop:'11.5px',marginTop:'-8px',width:'160px',textDecoration:'none',fontFamily:'Montserrat',fontWeight:'bold',border:'1px solid rgb(247, 68, 78)',color:'white'}}>Shop Now</a>
  
        </div>
        
      <ol className="carousel-indicators" >
                          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1" className="active" ></li>
                          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" ></li>
                          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" ></li>
                      </ol>
      </div>
      
    
      
    </div></section>
  )
}


export default Caro