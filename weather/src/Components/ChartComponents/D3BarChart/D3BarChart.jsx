import React from "react";
import { BarChart } from "d3plus-react";

import "./D3BarChart.css"

const D3BarChart = () => {

    const methods = {
        data: [
            {
                "value": 353.9,
                "name": "United Arab Emirates",
                "hex": "#6772e5"
            },
            {
                "value": 34.62,
                "name": "Bahrain",
                "hex": "#6772e5"
            },
            {
                "value": 1.2,
                "name": "Comoros",
                "hex": "#6772e5"
            },
            {
                "value": 3.41,
                "name": "Djibouti",
                "hex": "#6772e5"
            },
            {
                "value": 147.32,
                "name": "Algeria",
                "hex": "#6772e5"
            },
            {
                "value": 361.88,
                "name": "Egypt",
                "hex": "#6772e5"
            },
            {
                "value": 178.11,
                "name": "Iraq",
                "hex": "#6772e5"
            },
            {
                "value": 42.61,
                "name": "Jordan",
                "hex": "#6772e5"
            },
            {
                "value": 108.66,
                "name": "Kuwait",
                "hex": "#6772e5"
            },
            {
                "value": 18.73,
                "name": "Lebanon",
                "hex": "#6772e5"
            },
            {
                "value": 21.81,
                "name": "Libya",
                "hex": "#6772e5"
            },
            {
                "value": 112.22,
                "name": "Morocco",
                "hex": "#6772e5"
            },
            {
                "value": 7.43,
                "name": "Mauritania",
                "hex": "#6772e5"
            },
            {
                "value": 62.31,
                "name": "Oman",
                "hex": "#6772e5"
            },
            {
                "value": 14.75,
                "name": "State of Palestine",
                "hex": "#6772e5"
            },
            {
                "value": 147.79,
                "name": "Qatar",
                "hex": "#6772e5"
            },
            {
                "value": 680.9,
                "name": "Saudi Arabia",
                "hex": "#6772e5"
            },
            {
                "value": 32.58,
                "name": "Sudan",
                "hex": "#6772e5"
            },
            {
                "value": 4.92,
                "name": "Somalia",
                "hex": "#6772e5"
            },
            {
                "value": 16.63,
                "name": "Syrian Arab Republic",
                "hex": "#6772e5"
            },
            {
                "value": 39.23,
                "name": "Tunisia",
                "hex": "#6772e5"
            },
            {
                "value": 18.91,
                "name": "Yemen",
                "hex": "#6772e5"
            }
        ],
        x: 'name',
        y: 'value',
        groupBy: 'value',
        color: 'hex',
        xSort: (a, b) => a["value"] - b["value"],
        xConfig: {
            labelRotation: '90',
            color: ''
        },
        yConfig: {
            title: 'Population'
        }
    };

    return (
        <BarChart
            config={methods}
        />
    )
}

export default D3BarChart;