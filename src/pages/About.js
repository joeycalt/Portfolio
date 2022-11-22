import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';

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
      <h1 className="title">P̶l̶u̶m̶b̶e̶r̶ Coder</h1>
      <p className="about-info-top">
      <img className= 'golf-img' src={about.imageOne} alt='' />
      <div className="p-1">
        {about.bioOne}
        {about.bioTwo}
      </div>
      <div className="about-info-bottom">
      {about.bioThree}
      </div>
      <img className= 'ravioli-img' src={about.imageTwo} alt='' />
      </p>
      <a href="Joey-Caltabellotta-Resume-2022.pdf" target="_blank" rel="noreferrer" type="application/pdf" media="print">Resume</a>
    </div>
  );

  return about ? loaded() : <Spinner className='spinner' animation="grow" />;
}

export default About;