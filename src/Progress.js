import React from 'react'

function Progress({NumQuestions, index , points , Maxpoints}) {
  return (
   <header className='progress'>
    <progress max={NumQuestions} value={index}></progress>
     <p>Question <strong>{index+1}</strong>/{NumQuestions}</p>
     <p> <strong>{points}</strong>/{Maxpoints} </p>
   </header>
  )
}

export default Progress