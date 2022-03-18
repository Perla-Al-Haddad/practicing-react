import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const formatData = (APIResponse) => {
    let data = { "countries": [], "GDP": [] }
    let countries = new Set();
    for (let i = 0; i < APIResponse.length; i++) {
        data.GDP.push({ value: APIResponse[i].gdp_billion, name: APIResponse[i].Name })
        countries.add(APIResponse[i].Name);
    }
    data.countries = [...countries];
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
            data: formattedData.countries
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
                data: formattedData.GDP,
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
            const response = await fetch('https://visor.unescwa.org/dbs/COVID19/CountryProfile');
            const responseData = await response.json();
            var formattedData = formatData(responseData['response']);
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