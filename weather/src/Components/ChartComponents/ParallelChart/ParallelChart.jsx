import { React, useState, useEffect } from "react";
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import originData from "../../../assets/resources/paralle_jobs_data.json";

var indices = {
    name: 0,
    group: 1,
    id: 16
};

var schema = [
    { 'name': 'name', 'index': 0 },
    { 'name': 'group', 'index': 1 },
    { 'name': 'Accounting', 'index': 2 },
    { 'name': 'Key Performance Indicators (KPIs)', 'index': 3 },
    { 'name': 'Business Development', 'index': 4 },
    { 'name': 'Project Management', 'index': 5 },
    { 'name': 'Selling Techniques', 'index': 6 },
    { 'name': 'Auditing', 'index': 7 },
    { 'name': 'Quality Control', 'index': 8 },
    { 'name': 'Strategic Planning', 'index': 9 },
    { 'name': 'Procurement', 'index': 10 },
    { 'name': 'Customer Satisfaction', 'index': 11 },
    { 'name': 'Forecasting', 'index': 12 },
    { 'name': 'Corrective And Preventive Action (CAPA)', 'index': 13 },
    { 'name': 'Budgeting', 'index': 14 },
    { 'name': 'Purchasing', 'index': 15 },
    { 'name': 'id', 'index': 16 }
];

var groupCategories = [];
var groupColors = [];

function normalizeData(originData = originData) {
    var groupMap = {};

    originData.forEach(function (row) {
        var groupName = row[indices.group];
        if (!groupMap.hasOwnProperty(groupName)) {
            groupMap[groupName] = 0;
        }
    });

    originData.forEach(function (row) {
        row.forEach(function (item, index) {
            if (index !== indices.name
                && index !== indices.group
                && index !== indices.id
            ) {
                // Convert null to zero, as all of them under unit "g".
                row[index] = parseFloat(item) || 0;
            }
        });
    });

    for (var groupName in groupMap) {
        if (groupMap.hasOwnProperty(groupName)) {
            groupCategories.push(groupName);
        }
    }
    groupCategories = groupCategories.sort((a, b) => a[0] - b[0])
    var hStep = Math.round(300 / (groupCategories.length - 1));
    for (var i = 0; i < groupCategories.length; i++) {
        groupColors.push(echarts.color.modifyHSL('#5A94DF', hStep * i));
    }
}
function getOption(formattedData) {

    var lineStyle = {
        normal: {
            width: 1.2,
            opacity: 0.05
        }
    };

    return {
        width: "100%",
        tooltip: {
            padding: 50,
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj['data'];
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                    + '<b>' + schema[1].name + '</b>' + ': ' + value[1] + '<br>'
                    + '<b>' + 'Title: ' + '</b>' + ': ' + value[0] + '<br><br>'
                    + 'Skill Composition (%): <br>'
                    + schema[3].name + ': ' + Number(value[3]).toFixed(1) + '%<br>'
                    + schema[4].name + ': ' + Number(value[4]).toFixed(1) + '%<br>'
                    + schema[5].name + ': ' + Number(value[5]).toFixed(1) + '%<br>'
                    + schema[6].name + ': ' + Number(value[6]).toFixed(1) + '%<br>'
                    + schema[7].name + ': ' + Number(value[7]).toFixed(1) + '%<br>'
                    + schema[8].name + ': ' + Number(value[8]).toFixed(1) + '%<br>'
                    + schema[9].name + ': ' + Number(value[9]).toFixed(1) + '%<br>'
                    + schema[10].name + ': ' + Number(value[10]).toFixed(1) + '%<br>'
                    + schema[11].name + ': ' + Number(value[11]).toFixed(1) + '%<br>'
                    + schema[12].name + ': ' + Number(value[12]).toFixed(1) + '%<br>'
                    + schema[13].name + ': ' + Number(value[13]).toFixed(1) + '%<br>'
                    + schema[14].name + ': ' + Number(value[14]).toFixed(1) + '%<br>';
            }
        },
        title: [
            {
                text: 'ISCO Job Families Clusters',
                top: 20,
                left: 20,
                textStyle: {
                    color: '#000'
                }
            }
        ],
        visualMap: {
            show: true,
            type: 'piecewise',
            top: 60,
            left: 30,
            categories: groupCategories.sort((a, b) => a[0] - b[0]),
            dimension: indices.group,
            inRange: {
                color: groupColors.reverse() //['#d94e5d','#eac736','#50a3ba']
            },
            outOfRange: {
                color: ['#ccc'] //['#d94e5d','#eac736','#50a3ba']
            },
            textStyle: {
                color: '#000'
            },
            realtime: false
        },
        parallelAxis: [
            { dim: 16, name: schema[16].name },
            { dim: 2, name: schema[2].name },
            { dim: 4, name: schema[4].name },
            { dim: 3, name: schema[3].name },
            { dim: 5, name: schema[5].name },
            { dim: 6, name: schema[6].name },
            { dim: 7, name: schema[7].name },
            { dim: 8, name: schema[8].name },
            { dim: 9, name: schema[9].name },
            { dim: 10, name: schema[10].name },
            { dim: 11, name: schema[11].name },
            { dim: 12, name: schema[12].name },
            { dim: 13, name: schema[13].name },
            { dim: 14, name: schema[14].name },
            { dim: 15, name: schema[15].name },
        ],
        parallel: {
            left: 400,
            top: 20,
            width: "50%",
            layout: 'vertical',
            parallelAxisDefault: {
                type: 'value',
                name: 'skills',
                nameGap: 20,
                nameTextStyle: {
                    color: '#000',
                    fontSize: 14,
                    width: 20,
                    overflow: 'breakAll'
                },
                axisLine: {
                    lineStyle: {
                        color: '#aaa'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#aaa'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    color: 'grey',
                    width: 10,
                },
                realtime: false
            }
        },
        animation: true,
        series: [
            {
                name: 'nutrients',
                type: 'parallel',
                lineStyle: lineStyle,
                inactiveOpacity: 0.05,
                activeOpacity: 0.05,
                progressive: 500,
                smooth: true,
                data: formattedData.sort((a, b) => a[0] - b[0])
            }
        ]
    };
}

const ParalleChart = () => {
    const [filter, setFilter] = useState('')
    const [option, setOption] = useState({});
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        var data = normalizeData(originData);
        setOption(getOption(originData))
    }, [])

    return (
        <ReactECharts className="chart" theme={'walden'} option={option} style={{ height: 680 }} />
    )

}

export default ParalleChart
