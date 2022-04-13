import React, { useState } from 'react';
import './App.css';

function App() {

  const questions = [
    {
      questionText: 'Столица США ?',
      answerOptions: [
        { answerText: 'Бостон', isCorrect: false },
        { answerText: 'Нью-Йорк', isCorrect: false },
        { answerText: 'Вашингтон', isCorrect: true },
        { answerText: 'Сан-Франциско', isCorrect: false },
      ]
    },
    {
      questionText: 'Какая компания разработала React ?',
      answerOptions: [
        { answerText: 'Facebook', isCorrect: true },
        { answerText: 'Yandex', isCorrect: false },
        { answerText: 'Amazon', isCorrect: true },
        { answerText: 'Google', isCorrect: false },
      ]
    },
    {
      questionText: 'В каком году провозглашена независимость Республики Конго',
      answerOptions: [
        { answerText: '1947', isCorrect: false },
        { answerText: '1988', isCorrect: false },
        { answerText: '1974', isCorrect: false },
        { answerText: '1960', isCorrect: true },
      ]
    },
    {
      questionText: 'Имя первого русского царя из династии Романовых?',
      answerOptions: [
        { answerText: 'Иван', isCorrect: false },
        { answerText: 'Михаил', isCorrect: true },
        { answerText: 'Василий', isCorrect: false },
        { answerText: 'Федор', isCorrect: false },
      ]
    },
  ]


  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)



  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score+1)
    }
    
    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
    
  }

  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }


  return (
    <div className="app">
      {
        showScore
          ? <div className="section__score">
            <div>Правильных ответов {score} из {questions.length}</div>
            <button
              className="refresh__btn"
              onClick={refresh}
            >Попробовать еще раз</button>
            
            </div>
          : (<div className="quiz">
              <div className="question__section">
                <div className="question__count">
                  <span>Вопрос {currentQuestion+1}</span> / {questions.length}
                </div>
                <div className="question__text">{questions[currentQuestion].questionText}</div>
              </div>
              <div className="answer__section">
                {questions[currentQuestion].answerOptions.map(item => 
                  <button
                    onClick={() => handleAnswerOptionClick(item.isCorrect)}
                  >{item.answerText}</button>
                )}
              </div>
          </div>)}
      
    </div>
    );
}

export default App;
