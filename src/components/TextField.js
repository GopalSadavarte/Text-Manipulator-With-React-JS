import { useState } from 'react'
import Alert from './Alert'

function TextField (props) {
  const [alert, setAlert] = useState('')
  function handleChange () {
    const textField = document.getElementById('text-field')
    let val = textField.value
    props.setText(val)
  }

  function handleCopyText () {
    navigator.clipboard.writeText(props.text.trim())
    setAlert({
      type: 'success',
      message: '<strong>Success!</strong> Message copied in the clipboard!'
    })
    setTimeout(() => {
      setAlert('')
    }, 2000)
  }

  function clearText () {
    props.setText('')
  }

  function convertToUpper () {
    props.setText(v => v.toUpperCase().trim())
    setAlert({
      type: 'success',
      message: '<strong>Success!</strong> Text Converted to uppercase!'
    })
    setTimeout(() => {
      setAlert('')
    }, 2000)
  }
  function convertToLower () {
    props.setText(v => v.toLowerCase().trim())
    setAlert({
      type: 'success',
      message: '<strong>Success!</strong> Text Converted to lowercase!'
    })
    setTimeout(() => {
      setAlert('')
    }, 2000)
  }

  function removeExtraSpaces () {
    let value = props.text.split(' ')
    let arr = value.map(ele => {
      if (ele !== '') return ele + ' '
    })
    props.setText(arr.join('').toString().trim())
    setAlert({
      type: 'success',
      message: '<strong>Success!</strong> Extra spaces are removed from text!'
    })
    setTimeout(() => {
      setAlert('')
    }, 2000)
  }

  function convertFirstCharToLower () {
    let v = props.text.split(' ')
    let arr = v.map(ele => {
      return ele.charAt(0).toLowerCase() + ele.slice(1) + ' '
    })
    props.setText(arr.join('').toString())
    setAlert({
      type: 'success',
      message:
        '<strong>Success!</strong> First character of each word of text converted to lowercase!'
    })
    setTimeout(() => {
      setAlert('')
    }, 2000)
  }

  function convertFirstCharToUp () {
    let v = props.text.split(' ')
    let arr = v.map(ele => {
      return ele.charAt(0).toUpperCase() + ele.slice(1) + ' '
    })
    props.setText(arr.join('').toString())
    setAlert({
      type: 'success',
      message:
        '<strong>Success!</strong> First character of each word of text converted to uppercase!'
    })
    setTimeout(() => {
      setAlert('')
    }, 2000)
  }

  return (
    <>
      <Alert alert={alert} />
      <div className='container' style={props.style}>
        <div className='heading my-2'>
          <h2
            className={`heading text-${
              props.mode === 'light' ? 'dark' : 'light'
            } mx-1`}
          >
            Manipulate Your Content..
          </h2>
        </div>
        <div className='content my-2 w-100'>
          <textarea
            name='text'
            id='text-field'
            value={props.text}
            className='form-control'
            rows={7}
            cols={12}
            style={{
              resize: 'none',
              color: props.mode === 'light' ? '#3f476e' : 'white',
              backgroundColor: props.mode === 'light' ? 'white' : '#3f476e'
            }}
            onChange={handleChange}
            placeholder='Enter some text here..'
          ></textarea>
        </div>
        <div className='event-handling-btn my-2'>
          <button
            disabled={props.text.trim().length > 0 ? false : true}
            className='btn btn-primary mx-2 my-2'
            onClick={convertToLower}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={props.text.trim().length > 0 ? false : true}
            className='btn btn-primary mx-2 my-2'
            onClick={convertToUpper}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={props.text.trim().length > 0 ? false : true}
            className='btn btn-primary mx-2 my-2'
            onClick={convertFirstCharToUp}
          >
            Convert first character to Uppercase
          </button>
          <button
            disabled={props.text.trim().length > 0 ? false : true}
            className='btn btn-primary mx-2 my-2'
            onClick={convertFirstCharToLower}
          >
            Convert first character to Lowercase
          </button>
          <button
            disabled={props.text.trim().length > 0 ? false : true}
            className='btn btn-primary mx-2 my-2'
            onClick={handleCopyText}
          >
            Copy Text
          </button>
          <button
            disabled={props.text.trim().length > 0 ? false : true}
            className='btn btn-primary mx-2 my-2 '
            onClick={clearText}
          >
            Clear Text
          </button>
          <button
            disabled={props.text.trim().length > 0 ? false : true}
            className='btn btn-primary mx-2 my-2'
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className='text-summery'>
          <strong>Total words:</strong>
          <span className='mx-2'>
            {
              props.text.split(' ').filter(ele => {
                return ele.length !== 0
              }).length
            }
          </span>
          <strong className='mx-3'>Total Characters:</strong>
          <span className='mx-1'>
            {
              props.text.split('').filter(ele => {
                return ele !== ' '
              }).length
            }
          </span>
          <h3
            className={`preview heading fs-3 mx-1 text-${
              props.mode === 'light' ? 'dark' : 'light'
            }`}
          >
            Preview
          </h3>
          <div className='content'>
            {props.text === '' ? 'Nothing to preview!' : props.text}
          </div>
        </div>
      </div>
    </>
  )
}

export default TextField
