import React from 'react'

export default function About (props) {
  const info = [
    {
      heading: 'Text Field',
      description:
        'In the Manipulate text section you can analysis after typing the text on this text field.When your are trying to type in the text field after the below buttons are enabled other wise it was disabled!'
    },
    {
      heading: 'Buttons',
      description:
        'The Buttons which are given in below of the text field ,it is use to manipulate text according to given functionality.Each button have different task to perform on the text which are given in the text field!'
    },
    {
      heading: 'Counters (Word count And Character count)',
      description:
        'The text are given below in the buttons,that is a summery of the text field information.Such as how many characters(excluding spaces) in the text? and How many words(excluding spaces) in the text? That are mention in the summery!'
    },
    {
      heading: 'Preview',
      description:
        'The Preview section also given in manipulation .the preview section are display the text,which are typed in the text field!'
    }
  ]
  return (
    <div className='container w-100 my-3' style={props.style}>
      <div className='heading'>
        <h2 className='heading'>About And Docs</h2>
        <p>
          The Text Utils it is an small web app that can manipulate your text or
          paragraph and change it according to the given functionality.You can
          simply paste your text in the given text field which are given in text
          manipulate section and convert it by using given buttons and at the
          end copy text button which are given for coping the manipulated text.
        </p>
      </div>
      <div className='component-info my-2'>
        {info.map(ele => {
          return (
            <>
              <h4
                className={`heading text-${
                  props.mode === 'light' ? 'dark' : 'info'
                } mx-1`}
              >
                {ele.heading}
              </h4>
              <p>{ele.description}</p>
            </>
          )
        })}
      </div>
    </div>
  )
}
