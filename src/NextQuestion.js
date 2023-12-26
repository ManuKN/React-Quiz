import React from 'react'

function NextQuestion({dispatch , answer}) {
    if(answer === null) return null;
  return (
        <button className='btn btn-next' onClick={()=>dispatch({type:"NextQuestion"})}>Next</button>
  )
}

export default NextQuestion