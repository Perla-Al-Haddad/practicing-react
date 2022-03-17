import React from "react";
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import graph from '../../../assets/resources/les-miserables.json';

graph.nodes.forEach(function (node) {
    node.label = {
        show: node.symbolSize > 0
    };
});

const option = {
    title: {
    },
    tooltip: {},
    legend: [
        {
            data: graph.categories.map(function (a) {
                return a.name;
            })
        }
    ],
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            name: 'Les Miserables',
            type: 'graph',
            circular: {
                rotateLabel: true
            },
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            label: {
                position: 'right',
                formatter: '{b}'
            },
            lineStyle: {
                color: 'source',
                curveness: 0.3
            }
        }
    ]
}

const ForceChart = () => {
    return <ReactECharts className="chart" theme={'walden'} option={option} style={{ height: 680 }} />
}

export default ForceChart;