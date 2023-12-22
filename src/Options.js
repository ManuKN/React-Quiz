import React from 'react';

function Options({ questions, answer, dispatch }) {
    const HasAnswered = answer !== null;

    const handleOptionClick = (index) => {
        dispatch({ type: "NewAnswer", payload: index });
    };

    return (
        <div className='options'>
            {questions.options.map((option, index) => (
                <button
                    className={`btn btn-option ${index === answer ? "answer" : ""} ${HasAnswered ? (index === questions.correctOption ? "correct" : "wrong") : ""}`}
                    key={option}
                    disabled={HasAnswered} // Update the disabled condition
                    onClick={() => handleOptionClick(index)} // Call the handler function
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Options;
