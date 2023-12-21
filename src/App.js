import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';

const initialState = {
  question:[],
  status:"loading" //loading , error , ready , active , finished
}

function reducer(state , action){
    switch(action.type){
      case "dataReceived":
        return{...state , question : action.payload , status:"ready"}
      case "dataFailed":
        return{...state , status:"Error"}

        default :
        throw new Error("Unknown Action")
    }
}

function App() {

const[{question , status} , dispatch] = useReducer(reducer , initialState)
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
    <Main  status={status} NumQuestions={Numquestions}/>
      {/* {status === "loading" && <Loader />}
      {status === "Error" && <Error />} */}
    </div>
  );
}

export default App;
