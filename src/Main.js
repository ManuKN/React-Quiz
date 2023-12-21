import React from 'react'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen'

function Main({status , NumQuestions}) {
  return (
    <div>
        {status === "loading" && <Loader/>}
        {status === "Error" && <Error />}
        {status === "ready" && <StartScreen NumQuestions={NumQuestions} />}
    </div>
  )
}

export default Main