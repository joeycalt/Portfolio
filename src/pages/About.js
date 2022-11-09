import { useState, useEffect } from "react";

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
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bioOne}</p>
      <br />
      <p>{about.bioTwo}</p>
      <br />
      <p>{about.bioThree}</p>
      <div>
        <img src={about.imageOne} alt='' />
      </div>
      <div>
        <img src={about.imageTwo} alt='' />
      </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;