import React from 'react'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen'
import Question from './Question'
import NextQuestion from './NextQuestion'
import PrevQuestion from './PrevQuestion'
import Progress  from './Progress'
import FinishScreen  from './FinishScreen'
import Restart from './Restart'


function Main({status , NumQuestions , dispatch , question ,answer , index ,points  , MaxPoints , highscore}) {
  return (
    <div>
        {status === "loading" && <Loader/>}
        {status === "Error" && <Error />}
        {status === "ready" && <StartScreen NumQuestions={NumQuestions} dispatch={dispatch} />}
        {status === "active" && 
        <>
        <Progress index={index} NumQuestions={NumQuestions} points={points} Maxpoints={MaxPoints}/>
        <Question questions={question} answer={answer} dispatch={dispatch}/> 
         <PrevQuestion dispatch={dispatch} answer={answer} questions={question} index={index}/>
         <NextQuestion dispatch={dispatch} answer={answer} index={index} NumQuestions={NumQuestions}/>
        </>}
        {status === "Finish" && <FinishScreen points={points} Maxpoints={MaxPoints} highscore={highscore} dispatch={dispatch}/>}
        {status === "Restart" && <StartScreen NumQuestions={NumQuestions} dispatch={dispatch} />}
    </div>
  )
}

export default Main