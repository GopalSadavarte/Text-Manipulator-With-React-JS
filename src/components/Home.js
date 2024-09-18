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
      <div className='container w-100 justify-content-center'>
        <Link
          to={'/manipulate'}
          className='btn btn-warning'
          style={{ margin: '0 45%' }}
        >
          Explore
        </Link>
      </div>
      <div className='container my-5 mx-auto'>
        <img className='img img-fluid' src={logo} alt='hello' />
      </div>
    </div>
  )
}
