import React from 'react'

const Colours = (WrappedComponent) => {

  const colourList = ['red', 'pink', 'orange', 'blue', 'green', 'purple']
  const randomColour = colourList[Math.floor(Math.random() * 5)]
  const className = randomColour + '-text'

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Colours
