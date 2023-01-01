import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { ArrowRight } from 'react-bootstrap-icons';

function About(props) {
  
  const [about, setAbout] = useState(null);

  useEffect(() => {

  const getAboutData = async () => {
    
    const response = await fetch(props.URL + "about");
    
    const data = await response.json();
    
    setAbout(data);
  };

   getAboutData()
  }, [props.URL]);

  const loaded = () => (
    <div>
      <h1 className="title"><span className='plumber'>Plumber</span> <ArrowRight></ArrowRight> <strong>Coder</strong></h1>
      <p className="about-info-top">
      <img className= 'about-img' src={about.imageOne} alt='' height='500px' width='450px' />
      <div className="p-1">
        {about.bioOne}
        <br />
        <p className='biotwo'>{about.bioTwo}</p>
        
        <p className='biotwo'>{about.bioThree}</p>
      </div>
      </p>
      <a href="https://pdfhost.io/v/XBWXd59ET_JoeyCaltabellottaResume2022" target="_blank" rel="noreferrer" type="application/pdf" media="print">
      <Button className= 'about-button' variant= "outline-success">My resume</Button>
      </a>
    </div>
  );

  return about ? loaded() : <Spinner className='spinner' animation="grow" />;
}

export default About;