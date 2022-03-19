import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const formatData = (APIResponse) => {
    let data = { "Years": [], "Total_CO2_Emissions": [] }
    let years = new Set();
    for (let i = 0; i < APIResponse.length; i++) {
        data.Total_CO2_Emissions.push({ value: APIResponse[i].Total_CO2_Emissions, name: APIResponse[i].Year })
        years.add(APIResponse[i].Year);
    }
    data.years = [...years];
    return data;
}

const getOption = (formattedData) => {
    return ({
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 50,
            align: 'right',
            data: formattedData.years
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
                data: formattedData.Total_CO2_Emissions,
                emphasis: {
                    radius: '40%',
                }
            }
        ]
    })
};

const PieChart = props => {
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
        <div>
            <ReactECharts className="chart" theme={'walden'} option={option} style={{ height: props.height, width: '100%' }} />
        </div>
    )
}

export default PieChart