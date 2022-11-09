import { useState, useEffect } from "react";

function About(props) {
  
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    
    const response = await fetch(props.URL + "about");
    
    const data = await response.json();
    
    setAbout(data);
  };

  useEffect(() => getAboutData(), []);

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
        <img src={about.imageOne} />
      </div>
      <div>
        <img src={about.imageTwo} />
      </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;