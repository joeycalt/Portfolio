import React from 'react';
import {GeoAltFill, PhoneFill, EnvelopeCheckFill} from 'react-bootstrap-icons';

function Contact(props) {
    return (
      <>
        <h1 className='contact-title-top'>Let's connect and build cool stuff!</h1>
        <h5 className='contact-title-bottom'>I am currently available to work</h5>
        <div className='info'>
        <GeoAltFill className='contact' /> Great River, NY
        <br />
        <PhoneFill className='contact' /> <a className='intouch' href='tel:631-889-4226'>631-889-4226</a>
        <br />
        <EnvelopeCheckFill className='contact' /> <a className='intouch' href= 'mailto: caltabellottajoey@gmail.com'>caltabellottajoey@gmail.com</a>
        </div>
      </>
    )
  }
  
  export default Contact;