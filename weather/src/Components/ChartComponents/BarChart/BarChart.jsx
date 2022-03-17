import React from 'react';
import * as echarts from 'echarts'
import ReactECharts from 'echarts-for-react';
import theme from '../../../assets/resources/echartsTheme';

const option = {
    tooltip: {
        backgroundColor: '#FFF',
        borderColor: '#777',
        borderWidth: 1,
    },
    dataset: {
        source: [
            ['Number of Jobs', 'Countries'],
            [58212, 'Algeria'],
            [78254, 'Bahrain'],
            [41032, 'Egypt'],
            [82755, 'Iraq'],
            [20145, 'Jordan'],
            [79146, 'Kuwait'],
            [91852, 'Lebanon'],
            [50000, 'Libya'],
            [150621, 'Morocco'],
            [164852, 'Mauritania'],
            [123852, 'Oman'],
            [20112, 'Palestine'],
            [254821, 'Qatar'],
            [246852, 'Saudi Arabia'],
            [123457, 'Somalia'],
            [56812, 'Sudan'],
            [54756, 'Syrian'],
            [21345, 'Tunisia'],
            [284562, 'UAE'],
            [213546, 'Yemen'],
        ]
    },
    grid: { containLabel: true, width: '70%' },
    xAxis: { type: 'category', name: 'product' },
    yAxis: { name: 'amount' },
    series: [
        {
            type: 'bar',
            encode: {
                x: 'Countries',
                y: 'Number of Jobs'
            },
            inactiveOpacity: 0.05,
            activeOpacity: 0.05,
            progressive: 500,
            smooth: true,
        },
    ]
};

const BarChart = props => {
    return (
        <ReactECharts className="chart" theme={'walden'} option={option} style={{ height: props.height }} />
    )
}

export default BarChart