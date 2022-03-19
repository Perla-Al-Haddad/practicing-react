import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts'
import ReactECharts from 'echarts-for-react';
import theme from '../../../assets/resources/echartsTheme';

const formatData = (APIResponse) => {
    let data = ["Years", "Total_CO2_Emissions"]
    for (let i = 0; i < APIResponse.length; i++) {
        data.push([APIResponse[i].Year, APIResponse[i].Total_CO2_Emissions])        
    }
    return data;
}

const getOption = (formattedData) => {
    return ({
        tooltip: {
            backgroundColor: '#FFF',
            borderColor: '#777',
            borderWidth: 1,
        },
        dataset: {
            source: formattedData
        },
        grid: { containLabel: true, width: '70%' },
        xAxis: { type: 'category', name: 'Year' },
        yAxis: { name: 'Total CO2 Emissions' },
        series: [
            {
                type: 'bar',
                encode: {
                    x: 'Years',
                    y: 'Total CO2 Emissions'
                },
                inactiveOpacity: 0.05,
                activeOpacity: 0.05,
                progressive: 500,
                smooth: true,
            },
        ]
    })
};

const BarChart = props => {
    const [option, setOption] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://climate-flask-api.herokuapp.com/GetCountryCO2Emissions/Total/LBN');
            const responseData = await response.json();
            var formattedData = formatData(responseData['data']);
            console.log(formattedData)
            setOption(getOption(formattedData));
        };
        fetchData();
    }, []);

    return (
        <ReactECharts className="chart" theme={'walden'} option={option} style={{ height: props.height }} />
    )
}

export default BarChart