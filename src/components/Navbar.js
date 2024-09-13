import React from 'react'
import { Link } from 'react-router-dom'
function Navbar (props) {
  function setThemeMode () {
    if (props.mode === 'light') {
      props.setMode('dark')
      document.body.style.backgroundColor = '#061138'
      localStorage.setItem('darkMode', 'dark mode enabled')
    } else {
      props.setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <nav className={`navbar bg-${props.mode}`}>
      <div className='nav-heading w-auto text-center mx-2'>
        <h3
          className={`heading text-${
            props.mode === 'light' ? 'dark' : 'light'
          } align-item-center`}
        >
          {props.title}
        </h3>
      </div>
      <div className='nav-items'>
        <ul className='d-flex mx-2 my-auto nav-menu'>
          <li className='mx-2 fs-5'>
            <Link to={`/`}>Home</Link>
          </li>
          <li className='mx-2 fs-5'>
            <Link to={`/manipulate`}>Text Manipulate</Link>
          </li>
          <li className='mx-2 fs-5'>
            <Link to={`/about`}>About</Link>
          </li>
        </ul>
      </div>
      <div className='change-mode mx-3'>
        <div className='form-check form-switch'>
          <input
            className='form-check-input'
            type='checkbox'
            id='flexSwitchCheckDefault'
            onClick={setThemeMode}
          />
          <label
            className='form-check-label'
            htmlFor='flexSwitchCheckDefault'
            style={{ color: props.mode === 'light' ? 'black' : 'white' }}
          >
            {props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </label>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
