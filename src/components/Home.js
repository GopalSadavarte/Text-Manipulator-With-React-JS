import { Link } from 'react-router-dom'

export default function Home (props) {
  return (
    <div className='container my-4' style={props.style}>
      <div className='heading'>
        <h2 className='heading text-center mx-auto'>Welcome to Text utils!</h2>
        <h4 className='heading text-center mx-auto'>
          Manipulate your content according to you using text utils!!
        </h4>
      </div>
      <div className='explore-more'>
        <button className='btn btn-warning mx-auto explore-btn'>
          <Link to={'/manipulate'}>Explore</Link>
        </button>
      </div>
    </div>
  )
}
