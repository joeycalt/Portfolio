import React from 'react';
import {GeoAltFill, PhoneFill, EnvelopeCheckFill} from 'react-bootstrap-icons';

function Contact(props) {
    return (
      <>
        <h1 className='contact-title-top'>Let's connect and build cool stuff!</h1>
        <h5 className='contact-title-bottom'>I am currently available to work</h5>
        <div className='info'>
        <span className='contact-words' >
        <GeoAltFill className='contact' /> Great River, NY</span>
        <br />
        <a className='intouch contact-words' href='tel:631-889-4226'>
        <PhoneFill className='contact' /> 631-889-4226</a>
        <br />
        <a className='intouch contact-words' href= 'mailto: caltabellottajoey@gmail.com'>
        <EnvelopeCheckFill className='contact' /> caltabellottajoey@gmail.com</a>
        </div>
      </>
    )
  }
  
  export default Contact;