/* eslint-disable */


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('walden', {
        "color": [
            "#6772e5",
            "#ffcd73",
            "#4cd9ad",
            "#06b27d",
            "#9da4f2",
            "#d9dcff"
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#23233a"
            },
            "subtextStyle": {
                "color": "#adb5bd"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": "2"
            },
            "lineStyle": {
                "width": "2"
            },
            "symbolSize": "6",
            "symbol": "circle",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "borderWidth": "2"
            },
            "lineStyle": {
                "width": "2"
            },
            "symbolSize": "6",
            "symbol": "circle",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "0",
                "barBorderColor": "#8898aa"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#8898aa"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#8898aa"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#8898aa"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#8898aa"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#8898aa"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#8898aa"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#8898aa"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#6772e5",
                "color0": "transparent",
                "borderColor": "#6772e5",
                "borderColor0": "#9da4f2",
                "borderWidth": "1"
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#8898aa"
            },
            "lineStyle": {
                "width": "1",
                "color": "#b9c3cf"
            },
            "symbolSize": "6",
            "symbol": "circle",
            "smooth": true,
            "color": [
                "#6772e5",
                "#ffcd73",
                "#4cd9ad",
                "#06b27d",
                "#9da4f2",
                "#d9dcff"
            ],
            "label": {
                "color": "#8898aa"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#f3f3f3",
                "borderColor": "#516b91",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "#a5e7f0",
                    "borderColor": "#516b91",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#516b91"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#f3f3f3",
                "borderColor": "#516b91",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "#a5e7f0",
                    "borderColor": "#516b91",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#516b91"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#8898aa"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#adb5bd"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#8898aa"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#adb5bd",
                        "#d9dcff"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#8898aa"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#adb5bd"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#8898aa"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#adb5bd",
                        "#d9dcff"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#8898aa"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#adb5bd"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#8898aa"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#adb5bd",
                        "#d9dcff"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#8898aa"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#adb5bd"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#8898aa"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#adb5bd",
                        "#d9dcff"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#b9c3cf"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#8898aa"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#8898aa"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#8898aa",
                    "width": "1"
                },
                "crossStyle": {
                    "color": "#8898aa",
                    "width": "1"
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#9da4f2",
                "width": 1
            },
            "itemStyle": {
                "color": "#9da4f2",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#9da4f2",
                "borderColor": "#9da4f2",
                "borderWidth": 0.5
            },
            "checkpointStyle": {
                "color": "#6772e5",
                "borderColor": "#6772e5"
            },
            "label": {
                "color": "#8898aa"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#6772e5"
                },
                "controlStyle": {
                    "color": "#9da4f2",
                    "borderColor": "#9da4f2",
                    "borderWidth": 0.5
                },
                "label": {
                    "color": "#8898aa"
                }
            }
        },
        "visualMap": {
            "color": [
                "#6772e5",
                "#9da4f2",
                "#d9dcff"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(0,0,0,0)",
            "dataBackgroundColor": "rgba(255,255,255,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333"
            }
        },
        "markPoint": {
            "label": {
                "color": "#8898aa"
            },
            "emphasis": {
                "label": {
                    "color": "#8898aa"
                }
            }
        }
    });
}));
