import React from 'react'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen'
import Question from './Question'
import Options from './Options'

function Main({status , NumQuestions , dispatch , question ,answer}) {
  return (
    <div>
        {status === "loading" && <Loader/>}
        {status === "Error" && <Error />}
        {status === "ready" && <StartScreen NumQuestions={NumQuestions} dispatch={dispatch} />}
        {status === "active" && <Question questions={question} answer={answer} dispatch={dispatch}/>}
        
    </div>
  )
}

export default Main