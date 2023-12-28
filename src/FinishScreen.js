import React from 'react'
 
function FinishScreen({points , Maxpoints , highscore , dispatch}) {
    const Percentage = points/Maxpoints
let emoji;
if(Percentage > 100) emoji="🎗️🎊"
if(Percentage > 80 && Percentage < 100) emoji="🥳"
if(Percentage < 80 && Percentage >60) emoji="🙂"
if(Percentage < 60 && Percentage > 40) emoji="☹️"
if(Percentage < 40) emoji="🫡🫡"

  return (
    <>
    <p className='result'>
        <span>{emoji}</span>You scored <strong>{points} Points</strong> Out of {Math.round(Maxpoints)} Points
    </p>
    <p className='highscore'>(HighScore: {highscore} Points)</p>
    <button className='btn btn-next' onClick={()=>dispatch({type:"Restart"})}>Restart Quiz😁</button>
    </>
  )
}

export default FinishScreen