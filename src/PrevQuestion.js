import React from 'react'

function PrevQuestion({dispatch , answer , questions}) {
    const ninja = questions.question === questions.question[0]
    if(ninja)
    return null;
  return (
        <button className='btn btn-prev' onClick={()=> dispatch({type:"Previous"})}>Previous</button>
  )
}

export default PrevQuestion