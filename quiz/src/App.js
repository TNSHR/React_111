import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./components/questions";
import qBank from "./components/questionsbank";
import Score from "./components/score";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    };
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
  };

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption } = this.state;

    // Check if the answer is correct and update the score
    if (selectedOption === questionBank[currentQuestion].correct) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
      }));
    }

    // Move to the next question or end the quiz
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render() {
    const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
      this.state;

    return (
      <div className="App d-flex flex-column align-items-center justify-content-center">
        <h1 className="app-title">QUIZ APP</h1>
        {!quizEnd ? (
          <Question
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={this.handleOptionChange}
            onSubmit={this.handleFormSubmit}
          />
        ) : (
          <Score score={score} className="score" />
        )}
      </div>
    );
  }
}

export default App;
