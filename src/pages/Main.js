import Button from 'react-bootstrap/Button';

function Main(props) {
    return (
      <>
        <h5 className="greeting">Hi, my name is</h5> <br />
        <h1 className="name">Joey Caltabellotta</h1> <br />
      <div className="wrapper-title">
        <h1 className="main-title">I'm a Frontend Developer by day... and night</h1>
        </div>
        <br />
        <h4 className="second-title">Check out what I've made!</h4>
        <a href='/projects'>
        <Button className= 'main-button' variant= "outline-success">Check out my work!</Button>
        </a>
      </>
    )
  }
  
  export default Main;