












var mq = window.matchMedia('(min-width : 0) and (max-width : 768px)');










Chart.defaults.global.defaultFontFamily = 'pt mono';
Chart.defaults.global.defaultFontSize = 16;




var mq = window.matchMedia('(min-width : 0) and (max-width : 768px)');


Chart.Tooltip.positioners.custom2 = function(elements, position) {

    if (!elements.length) return false;

    // var offset = 0;

    return { x: 112, y: -10 }
}



var colorArray = [
    "#0074D9", 
    "#3D9970", 
    "#AAAAAA", 
    "#FFDC00", 
    "#FF4136", 
    "#85144b",
    "#F012BE",
    "#B10DC9",
];



function spliceRate(data) {
    if (mq.matches) {
        var i = data.length;

        while (i--) {
           (i + 1) % 2 === 0 && data.splice(i, 1);
           (i + 1) % 3 === 0 && data.splice(i, 1);
        }

    }
    return data;
}


function rigFirstHashrate(data) {

    // console.log(data);

    // rigExpand();

    var ctx = document.getElementById('chart-first').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 50, 100, 300);
    var gradientBG = ctx.createLinearGradient(0, 50, 100, 300);



    // gradient.addColorStop(0, 'rgba(35, 155, 145, .9)');   
    // gradient.addColorStop(1, 'rgba(45, 185, 165, .8)');
    gradient.addColorStop(0, 'rgba(60, 170, 255, .8)');   
    gradient.addColorStop(1, 'rgba(50, 50, 100, .7)');

    gradientBG.addColorStop(0, 'rgba(60, 160, 240, .3)');   
    gradientBG.addColorStop(1, 'rgba(80, 100, 190, .3)');

    var config = {

        type: 'line',
        data: {
            datasets: [
                {
                    label: 'GPU0',
                    data: spliceRate(data.rate0),
                    borderWidth: 2,
                    pointBorderWidth: 0,
                    borderColor: colorArray[0] + 'AA',
                    pointHoverBorderWidth: 0,
                    pointBorderColor: 'transparent',
                    pointHoverBorderColor: 'transparent',
                    pointHoverBackgroundColor: colorArray[0],
                    backgroundColor: 'transparent',
                    pointRadius: 7,
                    pointHoverRadius: 7,
                    borderJoinStyle: 'round',
                },
                {
                    label: 'GPU1',
                    data: spliceRate(data.rate1),
                    borderWidth: 2,
                    pointBorderWidth: 0,
                    borderColor: colorArray[1],
                    pointHoverBorderWidth: 0,
                    pointBorderColor: 'transparent',
                    pointHoverBorderColor: 'transparent',
                    pointHoverBackgroundColor: colorArray[1],
                    backgroundColor: 'transparent',
                    pointRadius: 7,
                    pointHoverRadius: 7,
                    borderJoinStyle: 'round',
                },
                {
                    label: 'GPU2',
                    data: spliceRate(data.rate2),
                    borderWidth: 2,
                    pointBorderWidth: 0,
                    borderColor: colorArray[2],
                    pointHoverBorderWidth: 0,
                    pointBorderColor: 'transparent',
                    pointHoverBorderColor: 'transparent',
                    pointHoverBackgroundColor: colorArray[2],
                    backgroundColor: 'transparent',
                    pointRadius: 7,
                    pointHoverRadius: 7,
                    borderJoinStyle: 'round',
                },
                {
                    label: 'GPU3',
                    data: spliceRate(data.rate3),
                    borderWidth: 2,
                    pointBorderWidth: 0,
                    borderColor: colorArray[3],
                    pointHoverBorderWidth: 0,
                    pointBorderColor: 'transparent',
                    pointHoverBorderColor: 'transparent',
                    pointHoverBackgroundColor: colorArray[3],
                    backgroundColor: 'transparent',
                    pointRadius: 7,
                    pointHoverRadius: 7,
                    borderJoinStyle: 'round',
                },
                {
                    label: 'GPU4',
                    data: spliceRate(data.rate4),
                    borderWidth: 2,
                    pointBorderWidth: 0,
                    borderColor: colorArray[4],
                    pointHoverBorderWidth: 0,
                    pointBorderColor: 'transparent',
                    pointHoverBorderColor: 'transparent',
                    pointHoverBackgroundColor: colorArray[4],
                    backgroundColor: 'transparent',
                    pointRadius: 7,
                    pointHoverRadius: 7,
                    borderJoinStyle: 'round',
                },
                {
                    label: 'GPU5',
                    data: spliceRate(data.rate5),
                    borderWidth: 2,
                    pointBorderWidth: 0,
                    borderColor: colorArray[5],
                    pointHoverBorderWidth: 0,
                    pointBorderColor: 'transparent',
                    pointHoverBorderColor: 'transparent',
                    pointHoverBackgroundColor: colorArray[5],
                    backgroundColor: 'transparent',
                    pointRadius: 7,
                    pointHoverRadius: 7,
                    borderJoinStyle: 'round',
                },
                {
                    label: 'GPU6',
                    data: spliceRate(data.rate6),
                    borderWidth: 2,
                    pointBorderWidth: 0,
                    borderColor: colorArray[6],
                    pointHoverBorderWidth: 0,
                    pointBorderColor: 'transparent',
                    pointHoverBorderColor: 'transparent',
                    pointHoverBackgroundColor: colorArray[6],
                    backgroundColor: 'transparent',
                    pointRadius: 7,
                    pointHoverRadius: 7,
                    borderJoinStyle: 'round',
                },
                {
                    label: 'GPU7',
                    data: spliceRate(data.rate7),
                    borderWidth: 2,
                    pointBorderWidth: 0,
                    borderColor: colorArray[7],
                    pointHoverBorderWidth: 0,
                    pointBorderColor: 'transparent',
                    pointHoverBorderColor: 'transparent',
                    pointHoverBackgroundColor: colorArray[7],
                    backgroundColor: 'transparent',
                    pointRadius: 7,
                    pointHoverRadius: 7,
                    borderJoinStyle: 'round',
                },
                // {
                //     label: 'GPU8',
                //     data: data.rate8,
                //     borderWidth: 0,
                //     pointBorderWidth: 0,
                //     borderColor: colorArray[8] + 'AA',
                //     pointHoverBorderWidth: 0,
                //     pointBorderColor: 'transparent',
                //     pointHoverBorderColor: 'transparent',
                //     pointHoverBackgroundColor: colorArray[6] + 'AA',
                //     backgroundColor: 'transparent',
                //     pointRadius: 7,
                //     pointHoverRadius: 7,
                //     borderJoinStyle: 'round',
                // },
                // {
                //     label: 'Reported',
                //     // yAxisID: 'B',
                //     data: [],
                //     // data: data.reportedHashrate ? data.reportedHashrate.slice(data.reportedHashrate.length - 40, data.reportedHashrate.length) : [],
                //     // data: data.reportedHashrate,

                //     // backgroundColor: 'rgba(255, 99, 132, .8)',
                //     backgroundColor: 'transparent',
                //     borderWidth: 3,
                //     borderColor: '#777',
                //     pointBorderWidth: 1.3,
                //     pointBackgroundColor: '#777',
                //     pointRadius: 1.3,
                //     pointHoverRadius: 7,
                // },
                // {
                //     label: 'Average',
                //     // yAxisID: 'B',
                //     data: [],
                //     // data: data.averageHashrate ? data.averageHashrate.slice(data.averageHashrate.length - 40, data.averageHashrate.length) : [],
                //     // data: data.averageHashrate,

                //     backgroundColor: 'transparent',
                //     borderWidth: 3,
                //     borderColor: '#777',
                //     // pointBackgroundColor: '#3cba9f',
                //     pointBackgroundColor: 'rgba(60, 200, 180, 1)',
                //     pointBorderWidth: 0,
                //     pointRadius: 0,
                //     pointHoverRadius: 0,
                //     // borderDash: [2, 3],
                //     borderCapStyle: 'round'
                // },

            ],
            // labels: data.time ? (mq.matches ? data.time.slice(data.time.length - 50, data.time.length) : data.time.slice(data.time.length / 2, data.time.length)) : [],
            labels: spliceRate(data.time),
            // labels: data.time.slice(data.time.length - 40, data.time.length),
        },
        options: optionsHashrate,
    };


    var mixedChart = new Chart(ctx, config);

    $('.count-hashrate').html(mixedChart.data.labels.length);
    $('.count-hashrate').parent().fadeIn();

}


















var optionsHashrate = {


    legend: {
        display: false,
        position: 'bottom',
    },
    animation: {
        duration: 0.1
    },
    maintainAspectRatio: false,
    plugins: {
        filler: {
            propagate: true,
        }
    },
    elements: {
        line: {
            tension: .4,
        }
    },
    layout: {
        padding: {
            // left: 22,
            // right: 22,
            // bottom: 50,
            // top: 20,
        }
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    // display: mq.matches ? false : true,
                    fontSize: 12,
                    suggestedMax: 29.8,
                    fontColor: '#ccc',
                    userCallback: function(item, index, all) {
                        if (!(index == 0) && ((index + 1) < all.length) && !mq.matches) return item.toFixed(1);
                    },
                    // min: 0,
                    // callback: function(label, index, labels) {
                    //     return label / 1000000;
                    // }
                },
                afterFit: function(scaleInstance, data) {

                    if (mq.matches) {
                        scaleInstance.width = 0;
                    } else {
                        scaleInstance.width = 40;
                    }
                },
                // display: false,
                gridLines: {
                    // display: false,
                    color: '#3f3f3f',
                    // drawBorder: mq.matches ? false : true,
                    drawBorder: false,
                    borderDash: [18, 8],
                    zeroLineColor: 'transparent',
                    display: false,
                },
            }
        ],
        xAxes: [
            {
                // display: false,
                gridLines: {
                    color: 'rgba(255,255,255,0.04)',
                    zeroLineColor: 'transparent',
                    borderDash: [8, 4],
                    drawBorder: false,
                },

                ticks: {
                    userCallback: function(item, index, all) {
                        if (!(index == 0) && !(index % 8) && ((index + 1) < all.length)) return item;
                    },
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    fontSize: 12,
                    // display: false
                }
            }
        ]
    },
    tooltips: {
        callbacks: {
            labelColor: function(tooltipItem, chart) {
                return {
                    borderColor: 'rgb(255, 0, 0)',
                    backgroundColor: 'rgb(255, 0, 0)'
                }
            },
            title: function(tooltipItem, data) {
                // return;
                return data['labels'][tooltipItem[0]['index']];
            },
            labelTextColor: function(tooltipItem, chart){
                return colorArray[tooltipItem.datasetIndex];
            },
            // label: function(tooltipItem, data) {
            //     // var multiLine = [(datasetCurrent['data'][tooltipItem['index']] / 1000000).toFixed(2) + ' MH/s'];
            //     // multiLine.push((datasetAverage['data'][tooltipItem['index']] / 1000000).toFixed(2) + ' MH/s (Avg.)');
            //     // multiLine.push((datasetReported['data'][tooltipItem['index']] / 1000000).toFixed(2) + ' MH/s (Reported)');

            //     // var multiLine = [];
            //     // var oneLine1 = '';
            //     // var oneLine2 = '';
            //     // var oneLine3 = '';

            //     for (i = 0; i < 8; i++) {
            //         var dataset = data['datasets'][i];
            //         // if ((dataset.data).length) multiLine.push((dataset['data'][tooltipItem['index']] / 1).toFixed(2) + ' MH/s');
            //         // if ((dataset.data).length) {
            //         //     if (i < 3) {
            //         //         oneLine1 = oneLine1 + 'GPU' + i + ': ' + (dataset['data'][tooltipItem['index']] / 1).toFixed(2) + ' MH/s - ';
            //         //     }
            //         //     if (i > 2 && i < 6) {
            //         //         oneLine2 = oneLine2 + (dataset['data'][tooltipItem['index']] / 1).toFixed(2) + ' MH/s - ';
            //         //     }
            //         //     else {
            //         //         oneLine3 = oneLine3 + (dataset['data'][tooltipItem['index']] / 1).toFixed(2) + ' MH/s - ';
            //         //     }
            //         // } 
            //     }

            //     // bodyLines.forEach(function(body, i) {
            //     //     var colors = tooltip.labelColors[i];
            //     //     var style = 'background:' + colors.backgroundColor;
            //     //     style += '; border-color:' + colors.borderColor;
            //     //     style += '; border-width: 2px';
            //     //     var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
            //     //     innerHtml += '<div><span>' + span + body + '</span></div>';
            //     // });

            //     // multiLine.push(oneLine1, oneLine2, oneLine3);
            //     // multiLine.push((dataset['data'][tooltipItem['index']] / 1).toFixed(2) + ' MH/s');

            //     // var label = data.datasets[tooltipItem.datasetIndex].label;
            //     // return multiLine;
            //     // return oneLine;

            //     var label = (dataset['data'][tooltipItem['index']] / 1).toFixed(2) + ' MH/s';
            //     return label;
            // },
        },
        mode: 'x-axis',
        xPadding: 15,
        yPadding: 15,
        cornerRadius: 0,
        // multiKeyBackground: '#000',
        titleFontStyle: 'normal',
        // borderWidth: 5,
        // borderColor: 'rgba(0,0,0,.1)',
        // backgroundColor: '#FFF',
        // backgroundColor: 'rgba(255,255,255,.9)',
        backgroundColor: 'rgba(60,60,60,.85)',
        titleFontSize: 13,
        // titleFontColor: 'rgba(80, 130, 200, 1)',
        titleFontColor: '#fff',
        // bodyFontColor: '#000',
        bodyFontColor: '#444',
        bodyFontSize: 13,
        displayColors: false,
        position: 'custom2',
        // yAlign: 'center',
        xAlign: 'right',
    }
};

























