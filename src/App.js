import React, { useState } from 'react';
import './App.css';
import { questionsBank } from './questionsData';

function App() {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [testFinished, setTestFinished] = useState(false);
  const [score, setScore] = useState(0);

  // Test boshlanganda 50 ta random savol tanlash
  const startTest = () => {
    // Fisher-Yates shuffle algoritmi
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const shuffled = shuffleArray(questionsBank);
    const selected = shuffled.slice(0, 50);

    // Har bir savol uchun javoblarni ham random qilish
    const questionsWithShuffledOptions = selected.map(question => {
      const options = [...question.options];
      const correctAnswerText = options[question.correctAnswer];

      // Javoblarni Fisher-Yates algoritmi bilan aralashtirish
      const shuffledOptions = shuffleArray(options);

      // Yangi to'g'ri javob indeksini topish
      const newCorrectAnswer = shuffledOptions.indexOf(correctAnswerText);

      return {
        ...question,
        options: shuffledOptions,
        correctAnswer: newCorrectAnswer
      };
    });

    setSelectedQuestions(questionsWithShuffledOptions);
    setUserAnswers(new Array(50).fill(null));
    setTestStarted(true);
    setCurrentQuestionIndex(0);
    setTestFinished(false);
    setScore(0);
  };

  // Javobni tanlash
  const handleAnswerSelect = (answerIndex) => {
    // Agar javob allaqachon berilgan bo'lsa, o'zgartirishga ruxsat bermaymiz
    if (userAnswers[currentQuestionIndex] !== null) {
      return;
    }
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  // Keyingi savolga o'tish
  const handleNext = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Oldingi savolga qaytish
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Testni tugatish
  const finishTest = () => {
    let correctCount = 0;
    selectedQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setTestFinished(true);
  };

  // Bosh sahifa
  if (!testStarted) {
    return (
      <div className="App">
        <div className="welcome-container">
          <h1>Test Platformasi</h1>
          <p>50 ta savoldan iborat test</p>
          <button className="start-button" onClick={startTest}>
            Testni Boshlash
          </button>
        </div>
      </div>
    );
  }

  // Natijalar sahifasi
  if (testFinished) {
    const percentage = ((score / selectedQuestions.length) * 100).toFixed(1);
    return (
      <div className="App">
        <div className="result-container">
          <h1>Test Natijalari</h1>
          <div className="score-display">
            <h2>{score} / {selectedQuestions.length}</h2>
            <p className="percentage">{percentage}%</p>
          </div>
          <div className="result-details">
            <p className="correct">To'g'ri javoblar: {score}</p>
            <p className="incorrect">Noto'g'ri javoblar: {selectedQuestions.length - score}</p>
          </div>
          <div className="answers-review">
            <h3>Javoblar ko'rib chiqish:</h3>
            {selectedQuestions.map((question, index) => {
              const isCorrect = userAnswers[index] === question.correctAnswer;
              return (
                <div key={index} className={`review-item ${isCorrect ? 'correct-answer' : 'wrong-answer'}`}>
                  <p className="question-number">Savol {index + 1}:</p>
                  <p className="question-text">{question.question}</p>
                  <p className="user-answer">
                    Sizning javobingiz: {userAnswers[index] !== null ? question.options[userAnswers[index]] : 'Javob berilmagan'}
                  </p>
                  {!isCorrect && (
                    <p className="correct-answer-text">
                      To'g'ri javob: {question.options[question.correctAnswer]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <button className="restart-button" onClick={() => {
            setTestStarted(false);
            setTestFinished(false);
          }}>
            Qaytadan Boshlash
          </button>
        </div>
      </div>
    );
  }

  // Test sahifasi
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const answeredCount = userAnswers.filter(answer => answer !== null).length;

  return (
    <div className="App">
      <div className="test-container">
        <div className="test-header">
          <h2>Test</h2>
          <div className="progress">
            <p>Savol {currentQuestionIndex + 1} / {selectedQuestions.length}</p>
            <p>Javob berilgan: {answeredCount} / {selectedQuestions.length}</p>
          </div>
        </div>

        <div className="question-container">
          <p className="category">{currentQuestion.category}</p>
          <h3 className="question">{currentQuestion.question}</h3>

          <div className="options">
            {currentQuestion.options.map((option, index) => {
              const isAnswered = userAnswers[currentQuestionIndex] !== null;
              const isSelected = userAnswers[currentQuestionIndex] === index;
              const isCorrect = index === currentQuestion.correctAnswer;

              let optionClass = 'option';
              if (isAnswered) {
                if (isSelected) {
                  optionClass += isCorrect ? ' correct' : ' incorrect';
                } else if (isCorrect) {
                  optionClass += ' show-correct';
                }
              } else if (isSelected) {
                optionClass += ' selected';
              }

              return (
                <div
                  key={index}
                  className={optionClass}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                  {isAnswered && isSelected && (
                    <span className="result-icon">
                      {isCorrect ? '✓' : '✗'}
                    </span>
                  )}
                  {isAnswered && !isSelected && isCorrect && (
                    <span className="result-icon">✓</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="navigation">
          <button
            className="nav-button"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            ← Oldingi
          </button>

          {currentQuestionIndex === selectedQuestions.length - 1 ? (
            <button
              className="finish-button"
              onClick={finishTest}
            >
              Testni Tugatish
            </button>
          ) : (
            <button
              className="nav-button"
              onClick={handleNext}
            >
              Keyingi →
            </button>
          )}
        </div>

        <div className="question-grid">
          {selectedQuestions.map((question, index) => {
            const isAnswered = userAnswers[index] !== null;
            const isCorrect = isAnswered && userAnswers[index] === question.correctAnswer;
            const isIncorrect = isAnswered && userAnswers[index] !== question.correctAnswer;

            return (
              <div
                key={index}
                className={`question-number-box ${
                  index === currentQuestionIndex ? 'active' : ''
                } ${isCorrect ? 'answered' : ''} ${isIncorrect ? 'incorrect' : ''}`}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
