import React, { useState, useEffect } from 'react';
import './App.css';
import { questionsBank } from './questionsData';

function App() {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [testFinished, setTestFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [testMode, setTestMode] = useState(null); // '50', 'all', 'timed'
  const [timeLeft, setTimeLeft] = useState(null); // Qolgan vaqt (soniyalarda)
  const [startTime, setStartTime] = useState(null); // Test boshlangan vaqt

  // LocalStorage dan ma'lumotlarni yuklash
  useEffect(() => {
    const savedTest = localStorage.getItem('currentTest');
    if (savedTest) {
      const testData = JSON.parse(savedTest);
      setTestStarted(testData.testStarted);
      setCurrentQuestionIndex(testData.currentQuestionIndex);
      setSelectedQuestions(testData.selectedQuestions);
      setUserAnswers(testData.userAnswers);
      setTestFinished(testData.testFinished);
      setScore(testData.score);
      setTestMode(testData.testMode);
      setTimeLeft(testData.timeLeft);
      setStartTime(testData.startTime);
    }
  }, []);

  // Ma'lumotlarni localStorage ga saqlash
  useEffect(() => {
    if (testStarted) {
      const testData = {
        testStarted,
        currentQuestionIndex,
        selectedQuestions,
        userAnswers,
        testFinished,
        score,
        testMode,
        timeLeft,
        startTime
      };
      localStorage.setItem('currentTest', JSON.stringify(testData));
    }
  }, [testStarted, currentQuestionIndex, selectedQuestions, userAnswers, testFinished, score, testMode, timeLeft, startTime]);

  // Taymer
  useEffect(() => {
    if (testMode === 'timed' && testStarted && !testFinished && timeLeft !== null) {
      if (timeLeft <= 0) {
        // Vaqt tugadi - testni avtomatik tugatish
        finishTest();
        return;
      }

      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            finishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testMode, testStarted, testFinished, timeLeft]);

  // Test boshlanganda savol tanlash
  const startTest = (mode) => {
    // Fisher-Yates shuffle algoritmi
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    let selected;
    let questionCount;

    if (mode === '50') {
      // 50 ta random savol
      const shuffled = shuffleArray(questionsBank);
      selected = shuffled.slice(0, 50);
      questionCount = 50;
    } else if (mode === 'timed') {
      // 30 minutlik test - 50 ta savol
      const shuffled = shuffleArray(questionsBank);
      selected = shuffled.slice(0, 50);
      questionCount = 50;
      setTimeLeft(30 * 60); // 30 minut = 1800 soniya
      setStartTime(Date.now());
    } else {
      // Barcha savollar (random tartibda)
      selected = shuffleArray(questionsBank);
      questionCount = questionsBank.length;
    }

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
    setUserAnswers(new Array(questionCount).fill(null));
    setTestStarted(true);
    setCurrentQuestionIndex(0);
    setTestFinished(false);
    setScore(0);
    setTestMode(mode);
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

  // Testni qaytadan boshlash
  const restartTest = () => {
    localStorage.removeItem('currentTest');
    setTestStarted(false);
    setTestFinished(false);
    setTestMode(null);
    setSelectedQuestions([]);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(null);
    setStartTime(null);
  };

  // Bosh sahifa
  if (!testStarted) {
    return (
      <div className="App">
        <div className="welcome-container">
          <h1>Test Platformasi</h1>
          <p>Test rejimini tanlang</p>
          <div className="mode-buttons">
            <button className="mode-button" onClick={() => startTest('50')}>
              <span className="mode-title">50 ta savol</span>
              <span className="mode-desc">Tasodifiy 50 ta savol</span>
            </button>
            <button className="mode-button" onClick={() => startTest('timed')}>
              <span className="mode-title">30 minutlik test</span>
              <span className="mode-desc">50 ta savol, 30 minut</span>
            </button>
            <button className="mode-button" onClick={() => startTest('all')}>
              <span className="mode-title">Barcha savollar</span>
              <span className="mode-desc">{questionsBank.length} ta savol</span>
            </button>
          </div>
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
          <div className="result-header">
            <h1>Test Natijalari</h1>
            <button className="home-button" onClick={restartTest}>
              🏠 Bosh sahifa
            </button>
          </div>
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
          <button className="restart-button" onClick={restartTest}>
            Qaytadan Boshlash
          </button>
        </div>
      </div>
    );
  }

  // Test sahifasi
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const answeredCount = userAnswers.filter(answer => answer !== null).length;

  // Vaqtni formatlash (mm:ss)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="App">
      <div className="test-container">
        <div className="test-header">
          <h2>Test</h2>
          <button className="home-button-small" onClick={restartTest}>
            🏠 Bosh sahifa
          </button>
          <div className="progress">
            {testMode === 'timed' && timeLeft !== null && (
              <p className={`timer ${timeLeft < 300 ? 'timer-warning' : ''}`}>
                ⏱️ Qolgan vaqt: {formatTime(timeLeft)}
              </p>
            )}
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
