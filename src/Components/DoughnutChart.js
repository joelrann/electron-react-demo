import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const options = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
};

const DoughnutChart = ({ trueNo, falseNo, title }) => {

    const style = {
        container: {
            width: '30%',
            paddingBottom: '10%'
        },
        chart: {
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            width: 200,
            height: 200,
            padding: 5,
            margin: '0 auto',
        },
        title: {
            fontSize: 28,
            textAlign: 'center',
            color: '#999A9B',
            fontFamily: 'Verdana',
            paddingTop: 10,
        },
        percent: {
            fontSize: 20,
            textAlign: 'center',
            color: '#582D82',
            fontFamily: 'Verdana',
        },
    };

    const data = {
        labels: ['Incorrect', 'Correct'],
        datasets: [{
            backgroundColor: ['#9A9B9C','#582D82'],
            borderWidth: 2,
            borderColor: '#ffffff',
            data: [falseNo, trueNo],
        }]
    };

    const percent = Math.round(trueNo/(trueNo + falseNo)*100);

    return (
        <div style={style.container}>
            <div style={style.chart}>
                <Doughnut data={data} options={options} />
            </div>
            <div style={style.title}>{title}</div>
            <div style={style.percent}>{percent || 0}% correct</div>
        </div>
    );
};

DoughnutChart.propTypes = {
    trueNo: PropTypes.number.isRequired,
    falseNo: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    titleFontSize: PropTypes.number,
};

DoughnutChart.defaultTypes = {
    titleFontSize: 28,
};

export default DoughnutChart;
