import React, { useState } from 'react'
import Bot from '../components/Bot'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
const Contact = () => {
  const [userData, setUserData] = useState({
    name:"",
    email: "",
    subject:"",
    message:"",
  });
  let name, value;
    const postUserData=(event)=>{
      name=event.target.name;
      value =event.target.value;

      setUserData({...userData,[name]:value})

    };
    const submitData= async (event)=>{
      event.preventDefault();
      const { name,email,subject,message} =userData;
      const res = await fetch("https://ecommerce-website-9fa69-default-rtdb.firebaseio.com/ContactUs.json",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      }
      );
      if (res) {
        alert("You Have Subscribe Successfully!!")
      } else {
        alert("plz filled the data");
      }

    };
  return (
    <div>
      <Nav/><br/>
      <section class="ftco-section" >
<div class="container">
<div class="row justify-content-center">
<div class="col-lg-10" style={{width:'100%'}} >
<div class="wrapper img" style={{backgroundImage:'url(/images/contactback.webp)',backgroundSize: 'cover',backgroundPosition:'center',width:'100%',height:'100%'}}>
<div class="row">
<div class="col-md-9 col-lg-7">
<div class="contact-wrap w-100 p-md-5 p-4">
<h3 class="mb-4" style={{lineHeight:'1.5',fontWeight:'400',fontFamily:'Montserrat',color:'black',fontSize:'1.7rem'}}>Get in touch with us</h3>
<div id="form-message-warning" class="mb-4"></div>
<form method="POST" id="contactForm" name="contactForm" class="contactForm">
<div class="row">
<div class="col-md-6">
<div class="form-group">
<label class="label contactlabel" for="name">Full Name</label>
<input type="text" class="form-control contactus  " name="name" id="name" placeholder="Name" value={userData.name} onChange={postUserData} />
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<label class="label contactlabel" for="email">Email Address</label>
<input type="email" class="form-control contactus " id="email" placeholder="Email" name="email" value={userData.email} onChange={postUserData}/>
</div>
</div>
<div class="col-md-12">
<div class="form-group">
<label class="label contactlabel" for="subject">Subject</label>
<input type="text" class="form-control contactus  " name="subject" id="subject" placeholder="Subject" value={userData.subject} onChange={postUserData}/>
</div>
</div>
<div class="col-md-12">
<div class="form-group">
<label class="label contactlabel" for="#">Message</label>
<textarea name="message" class="form-control  " id="message" cols="30" rows="4" placeholder="Message" style={{border:'none'}} value={userData.message} onChange={postUserData}></textarea>
</div>
</div>
<div class="col-md-12">
<div class="form-group"><br/><br/>
<input type="submit"  onClick={submitData} value="Send Message" class="btn btn-primary contactSubmit" style={{backgroundColor:'rgb(82, 132, 50)',fontSize:'15px',height:'50px',width:'150px',color:'white',border:'none'}}/>
<div class="submitting"></div>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
      <Bot/> <br/>
      <Footer/>     
    </div>
  )
}

export default Contact
