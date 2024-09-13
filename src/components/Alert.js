import React from 'react'

export default function Alert (props) {
  return (
    <div className='mx-2 my-2' style={{ height: '50px' }}>
      {props.alert.type && (
        <div
          className={`alert alert-${props.alert.type}`}
          style={{ height: '50px' }}
        >
          <p
            className='text-dark'
            dangerouslySetInnerHTML={{ __html: props.alert.message }}
          ></p>
        </div>
      )}
    </div>
  )
}
