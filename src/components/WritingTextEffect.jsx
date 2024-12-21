/* eslint-disable */

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import MyLogo from './MyLogo'



const WritingTextEffect = ({words}) => {

//   const handleType = (count: number) => {
//     // access word count number
//     console.log(count)}
//   }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className="text-white flex">
      <h1>
        I'm A{' '}
        <span style={{ color: '#915eff'}}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            // words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            words={words}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
    </div>
  )
}

export default WritingTextEffect;