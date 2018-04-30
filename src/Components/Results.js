import React from 'react';
import Button from './Button';
import DoughnutChart from './DoughnutChart';
import PropTypes from 'prop-types';

const style = {
    h1: {
        color: '#9A9B9C',
    },
    h2: {
        marginBottom: 0,
    },
    p: {
        padding: 0,
        margin: 0,
    },
    resultsContainer: {
        marginTop: 60,
    },
    totalResults: {
        marginTop: 50,
    },
    chartFlex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    yourResults: {
    },
    correct: {
        color: '#572C82',
        margin: 0,
        padding: 0,
    },
};

const Results = ({ correct, totals, exitClick }) => {
    return (
        <div>
            <h1 style={style.h1}>Science or Fiction?</h1>
            <p style={style.p}>
                How did your science knowledge compare?
            </p>
            <div style={style.resultsContainer}>
                <div style={style.yourResults}>
                    <h2 style={style.h2}>YOUR RESULTS</h2>
                    <p style={style.correct}>{correct} OF 6 CORRECT</p>
                </div>
                <div style={style.totalResults}>
                    <h2 style={style.h2}>TOTAL RESULTS</h2>
                    <div style={style.chartFlex}>
                        <DoughnutChart title="The Great Wall" trueNo={totals[0].trueNo} falseNo={totals[0].falseNo} />
                        <DoughnutChart title="Lightning" trueNo={totals[1].trueNo} falseNo={totals[1].falseNo} />
                        <DoughnutChart title="Earthworm" trueNo={totals[2].trueNo} falseNo={totals[2].falseNo} />
                        <DoughnutChart title="Brain at Birth" trueNo={totals[3].trueNo} falseNo={totals[3].falseNo} />
                        <DoughnutChart title="Mammoths" trueNo={totals[4].trueNo} falseNo={totals[4].falseNo} />
                        <DoughnutChart title="10% of Brain" trueNo={totals[5].trueNo} falseNo={totals[5].falseNo} />
                    </div>
                    <div style={style.chartFlex}>

                    </div>
                </div>
                <Button title="EXIT >" onClick={exitClick}/>
            </div>
        </div>
    );
};

Results.propTypes = {
    correct: PropTypes.number.isRequired,
    totals: PropTypes.arrayOf(PropTypes.shape({
        trueNo: PropTypes.number.isRequired,
        falseNo: PropTypes.number.isRequired,
    })),
    exitClick: PropTypes.func.isRequired,
};

export default Results;
