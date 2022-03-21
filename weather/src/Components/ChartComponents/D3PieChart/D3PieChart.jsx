import React from "react";
import { Donut } from "d3plus-react";

// import "./D3PieChart.css"

const D3PieChart = () => {

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
                "hex": "#ffcd73"
            },
            {
                "value": 1.2,
                "name": "Comoros",
                "hex": "#4cd9ad"
            },
            {
                "value": 3.41,
                "name": "Djibouti",
                "hex": "#06b27d"
            },
            {
                "value": 147.32,
                "name": "Algeria",
                "hex": "#9da4f2"
            },
            {
                "value": 361.88,
                "name": "Egypt",
                "hex": "#d9dcff"
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
        groupBy: 'name',
        color: 'hex',
        xSort: (a, b) => a["value"] - b["value"],
        xConfig: {
            labelRotation: '90',
        },
        yConfig: {
            title: 'Population'
        }
    };

    return (
        <Donut 
            config={methods}
        />
    )
}

export default D3PieChart;