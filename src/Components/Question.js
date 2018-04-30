import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const style = {
    buttonContainer: {
        marginTop: 150,
        paddingRight: 40,
        justifyContent: 'space-between',
        display: 'flex',
    },
    source: {
        fontSize: 23,
        marginTop: 30,
        display: 'block',
    },
};

const initialState = {
    displayAnswer: false,
    answerValue: null,
};

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };

    answerClick = (value) => {
        this.setState({
            displayAnswer: true,
            answerValue: value,
        });
        this.props.recordAnswer(value);
    };

    nextClick = () => {
        this.setState(initialState);
        this.props.nextAction();
    };

    Answer = (question) => (
            <div>
                <h1>{this.state.answerValue ? question.TrustIt : question.BustIt}</h1>
                <p>
                    {question.Fact}
                    <span style={style.source}>{question.Source}</span>
                </p>

                <Button title="NEXT >" onClick={this.nextClick}/>
            </div>
    );

    Statement = (question) => (
        <div>
            <h1>{question.Question}</h1>
            <div style={style.buttonContainer}>
                <Button title="SCIENCE" primary onClick={() => this.answerClick(true)} />
                <Button title="FICTION" onClick={() => this.answerClick(false)} />
            </div>
        </div>
    );

    render() {
        const { question } = this.props;
        return (
            this.state.displayAnswer ? this.Answer(question) : this.Statement(question)
        );
    };

};

Question.propTypes = {
    question: PropTypes.object.isRequired,
    recordAnswer: PropTypes.func.isRequired,
    nextAction: PropTypes.func.isRequired,
};

export default Question;
