import React from 'react';
import { generateEnglishPresentSimple } from "./FraiseGenerator";

export class Main extends React.Component {
  state = {
    fraises: [],
    currentFraise: {},
    semiStep: false,
    firstLanguage: "Russian",
    secondLanguage: "English",
  }

  componentDidMount() {
    // const fraises = [{
    //   id: 0,
    //   English: "I love you.",
    //   Russian: "Я тебя люблю"
    // }, {
    //   id: 1,
    //   English: "Do you love me?",
    //   Russian: "Ты меня любишь?"
    // }]
    const fraises = generateEnglishPresentSimple();
    fraises.forEach(fraise => console.log("fraise=", fraise.English));
    const currentFraise = fraises[0];
    this.setState({fraises, currentFraise});
  }
  render() {
    const {
      semiStep,
      currentFraise,
      firstLanguage,
      secondLanguage,
     } = this.state;
    return (
      <React.Fragment>
        <div className="card">
          <div className="fraise">{currentFraise[firstLanguage]}</div>
          {semiStep && <div className="fraise">{currentFraise[secondLanguage]}</div>}         
        </div>
        <div className="navigation">
          <button onClick={this.handleBack}>back</button>
          <button onClick={this.handleForward}>forward</button>
        </div>
      </React.Fragment>
    )
  }

  handleForward = () => {
    const { semiStep } = this.state;
    const updatedSemiStep = !semiStep;
    if (updatedSemiStep) {
      this.setState({semiStep: updatedSemiStep});
    } else {
      this.nextQuestion();
    }
  }

  nextQuestion = () => {
    const { fraises, currentFraise } = this.state;
    const currentIndex = fraises.findIndex(fraise => fraise.id === currentFraise.id);
    if (currentIndex === fraises.length -1) {
      return;
    }

    this.setState({
      currentFraise: fraises[currentIndex + 1],
      semiStep: false,
    })
  }

  prevQuestion = () => {
    const {fraises, currentFraise} = this.state;
    const currentIndex = fraises.findIndex(fraise => fraise.id === currentFraise.id);
    if (currentIndex === 0) {
      return;
    }
    this.setState({
      currentFraise: fraises[currentIndex - 1],
      semiStep: true,
    })    
  }

  handleBack = () => {
    const { semiStep } = this.state;
    const updatedSemiStep = !semiStep;
    if (!updatedSemiStep) {
      this.setState({semiStep: updatedSemiStep});
    } else {
      this.prevQuestion();
    }    
  }  
}
