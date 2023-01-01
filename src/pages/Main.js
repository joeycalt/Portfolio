import Button from 'react-bootstrap/Button';

function Main(props) {
    return (
      <>
      <div className="wrapper-title">
        </div>
        <p className='main-about'>I’m <strong className='joey'>Joey</strong> a <strong>frontend developer</strong> based in <strong>Long Island, NY.</strong> Previously a <strong>plumber</strong> (<em>new year, new me</em>). I specialize in <strong>React, Javascript, Node.js and more.</strong> </p>
        <br />
        <h4 className="second-title">Check out what I've made!</h4>
        <a href='/projects'>
        <Button className= 'main-button' variant= "outline-success">My projects</Button>
        </a>
      </>
    )
  }
  
  export default Main;