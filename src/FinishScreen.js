import React from 'react'
 
function FinishScreen({points , Maxpoints}) {
    const Percentage = points/Maxpoints
  return (
    <p className='result'>
        You scored <strong>{points}</strong> Out of {Maxpoints} {Math.round(Percentage)}
    </p>
  )
}

export default FinishScreen