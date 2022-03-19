import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts'
import ReactECharts from 'echarts-for-react';
import theme from '../../../assets/resources/echartsTheme';
import geoJSON from '../../../assets/resources/countries-land-10km.geo.json';
import {geoGilbert} from "d3-geo-projection";

const formatData = (APIResponse) => {

}

const getOption = (formattedData) => {
  const projection = geoGilbert();
  echarts.registerMap('global', geoJSON);
  return ({
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2
    },
    projection: {
      project: function (point) {
        return projection(point);
      },
      unproject: function (point) {
        return projection.invert(point);
      }
    },
    series: [
      {
        name: 'USA PopEstimates',
        type: 'map',
        roam: false,
        map: 'global',
        emphasis: {
          label: {
            show: true
          }
        },
        zoom: 1.25,
        aspectScale: 1,
      }
    ]
  })
};

const MapChart = props => {
  const [option, setOption] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('https://climate-flask-api.herokuapp.com/GetCountryCO2Emissions/Total/LBN');
      // const responseData = await response.json();
      // var formattedData = formatData(responseData['data']);
      // console.log(formattedData)
      let formattedData = [];
      setOption(getOption(formattedData));
    };
    fetchData();
  }, []);

  return (
    <ReactECharts className="chart" theme={'walden'} option={option} style={{ height: props.height }} />
  )
}

export default MapChart