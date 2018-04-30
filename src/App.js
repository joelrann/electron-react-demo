import React from 'react';
import IdleTimer from 'react-idle-timer';
import Start from './Components/Start';
import Question from './Components/Question';
import Results from './Components/Results';
import ExitButton from './Components/ExitButton';
import questionAnswers from './questionAnswers';
import storage from './storage';

const electron = window.require('electron');

const initState = {
    questionIndex: -1,
    correctAnswers: 0,
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = initState;
        storage.init();
        this.addContextMenuEvents();
    }

    addContextMenuEvents() {
        const ipc = electron.ipcRenderer;
        ipc.on('show-results', () => this.viewResults());
        ipc.on('reset-totals', () => this.resetTotals());
        ipc.on('load-sample', () => this.loadSample());
    }

    answerClick = (value) => {
        const correct = questionAnswers[this.state.questionIndex].Correct === value;
        storage.addAnswer(this.state.questionIndex, correct);
        this.setState({
            correctAnswers: this.state.correctAnswers + Number(correct),
        });
    };

    nextQuestionClick = () => {
        this.setState({
            questionIndex: this.state.questionIndex + 1,
        });
    };

    exitClick = () => {
        this.setState(initState);
    };

    resetTotals = () => {
        if (window.confirm("Click OK to confirm you want to clear ALL responses in the app. All responses will be permanently deleted and charts will not display until new responses are added."))
        {
            storage.resetTotals();
            this.viewResults();
        }
    };

    loadSample = () => {
        if (window.confirm("Click OK to confirm you want to load sample responses in the app. All previous responses will be permanently deleted."))
        {
            storage.resetTotals(storage.testTotals);
            this.viewResults();
        }
    };

    viewResults = () => {
        this.setState({ questionIndex: 100 });
    };

    render() {
        const { questionIndex, correctAnswers } = this.state;

        const showStart = questionIndex < 0;
        const showResults = !(questionIndex < questionAnswers.length);
        const showQuestionAnswer = !showStart && !showResults;
        const totals = storage.getTotals();

        return (
            <div className="container">
                {showStart && <Start startClick={this.nextQuestionClick}/>}
                {showQuestionAnswer && <Question question={questionAnswers[questionIndex]} recordAnswer={this.answerClick} nextAction={this.nextQuestionClick} />}
                {showQuestionAnswer && <ExitButton onClick={this.exitClick}/>}
                {showResults && <Results correct={correctAnswers} exitClick={this.exitClick} totals={totals}/>}
                <IdleTimer idleAction={this.exitClick} timeout={120000} />
            </div>
        );
    }
}

export default App;
