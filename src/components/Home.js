import { Link } from 'react-router-dom'
import logo from '../img/home-bg.png'
export default function Home (props) {
  return (
    <div className='container my-4' style={props.style}>
      <div className='heading'>
        <h2 className='heading text-center mx-auto'>Welcome to Text utils!</h2>
        <h4 className='heading text-center mx-auto'>
          Manipulate your content according to you using text utils!!
        </h4>
      </div>
      <div className='container my-5 mx-auto' id='data-container'>
        <img className='img img-fluid' src={logo} alt='hello' />
        <div className='content'>
          <p className='mx-5'>
            Welcome to our Text Conversion Tool! Our easy-to-use platform offers
            a variety of text formatting features to make your workflow
            smoother. You can instantly convert your text to **uppercase** or
            **lowercase**, copy text with just a click, and remove unwanted
            extra spaces for clean, professional results. Whether you’re
            prepping content for a document or optimizing code snippets, our
            tool simplifies text transformation, saving you time and effort. Try
            it now for a faster, more efficient text-editing experience!
          </p>
          <Link to={'/manipulate'} className='btn btn-warning mx-5'>
            Explore
          </Link>
        </div>
      </div>
      <div className='footer my-2 container text-center'>
        <p className='fs-6'>
          &copy;created by <strong>Gopal Sadavarte</strong>
        </p>
      </div>
    </div>
  )
}
