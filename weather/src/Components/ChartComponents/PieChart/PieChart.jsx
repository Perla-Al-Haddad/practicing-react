import React from 'react';
import ReactECharts from 'echarts-for-react';

const data = {
    countries: ["Algeria", "Bahrain", "Egypt", "Iraq", "Jordan", "Kuwait", "Lebanon", "Libya", "Morocco", "Mauritania", "Oman", "Palestine", "Qatar", "Saudi Arabia", "Somalia", "Sudan", "Syrian", "Tunisia", "UAE", "Yemen"],
    jobs: [
        { value: 58212, name: 'Algeria' },
        { value: 78254, name: 'Bahrain' },
        { value: 41032, name: 'Egypt' },
        { value: 82755, name: 'Iraq' },
        { value: 20145, name: 'Jordan' },
        { value: 79146, name: 'Kuwait' },
        { value: 91852, name: 'Lebanon' },
        { value: 50000, name: 'Libya' },
        { value: 150621, name: 'Morocco' },
        { value: 164852, name: 'Mauritania' },
        { value: 123852, name: 'Oman' },
        { value: 20112, name: 'Palestine' },
        { value: 254821, name: 'Qatar' },
        { value: 246852, name: 'Saudi Arabia' },
        { value: 123457, name: 'Somalia' },
        { value: 56812, name: 'Sudan' },
        { value: 54756, name: 'Syrian' },
        { value: 21345, name: 'Tunisia' },
        { value: 284562, name: 'UAE' },
        { value: 213546, name: 'Yemen' }
    ]
}
const option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 50,
        data: data.countries
    },
    series: [
        {
            name: 'Jobs',
            type: 'pie',
            center: ['45%', '45%'],
            radius: ['30%', '60%'],
            itemStyle: {
              borderRadius: 5,
              borderColor: '#fff',
              borderWidth: 2
            },
            data: data.jobs,
            emphasis: {
                radius: '40%',
            }
        }
    ]
};

const PieChart = props => {
    return (
        <div>
            <ReactECharts className="chart" theme={'walden'} option={option} style={{ height: props.height, width: '100%' }} />
        </div>
    )
}

export default PieChart