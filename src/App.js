import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
//import Loader from './Loader';
import Error from './Error';

const initialState = {
  question:[],
  status:"loading",
  index:0,
  answer:null ,
  points :0
}

function reducer(state , action){
    switch(action.type){
      case "dataReceived":
        return{...state , status:"ready" , question : action.payload}
      case "dataFailed":
        return{...state , status:"Error"}
      case "start":
        return{...state ,status: "active"}
      case "NewAnswer":
      
        const question = state.question.at(state.index)
        return{...state , answer : action.payload , points:action.payload === question.correctOption ? state.points + question.points : state.points }  
        default :  
        throw new Error("Unknown Action")
    }
}

function App() {

const[{question , status, index ,answer} , dispatch] = useReducer(reducer , initialState)
const Numquestions = question.length
useEffect(function(){
  fetch("http://localhost:8000/questions")
  .then(res => res.json())
  .then(data => dispatch({type:"dataReceived", payload : data}))
  .catch(err => dispatch({type:"dataFailed"}))
},[])

  return (
    <div className="App">
    <Header />
    <Main  status={status} NumQuestions={Numquestions} dispatch={dispatch} question={question[index]} answer={answer}/>
      {/* {status === "loading" && <Loader />}
      {status === "Error" && <Error />} */}
    </div>
  );
}

export default App;
