import React from 'react';
import {GeoAltFill, PhoneFill, EnvelopeCheckFill} from 'react-bootstrap-icons';

function Contact(props) {
    return (
      <>
        <h1>Let's connect and build cool stuff!</h1>
        <h5>I am currently available to work</h5>
        <div className='info'>
        <GeoAltFill className='contact' /> Great River, NY
        <br />
        <PhoneFill className='contact' /> 631-889-4226
        <br />
        <EnvelopeCheckFill className='contact' /> caltabellottajoey@gmail.com
        </div>
      </>
    )
  }
  
  export default Contact;