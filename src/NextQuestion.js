import React from 'react'

function NextQuestion({dispatch , answer , index , NumQuestions}) {
    if(answer === null) return null;

    if(index === NumQuestions-1)
  return (
        <button className='btn btn-next' onClick={()=>dispatch({type:"Finish"})}>Finish</button>
  )
  if(index < NumQuestions-1)
  return (
    <button className='btn btn-next' onClick={()=>dispatch({type:"NextQuestion"})}>Next</button>
)
}

export default NextQuestion