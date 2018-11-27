Chart.defaults.global.defaultFontFamily = 'pt mono';
Chart.defaults.global.defaultFontSize = 16;

var csrfToken = $('meta[name="csrf-token"]').attr("content");
$.ajax({
    url: 'index.php?r=rigs/mutual',
    method: 'post',
    data: {'type': 'json', '_csrf-backend': csrfToken},
    dataType: 'json',
    cache: false,
    success: function(data) {
        console.log(data);
    },
    error: function (errormessage) {
        console.log(errormessage);
    }
});


var mq = window.matchMedia('(min-width : 0) and (max-width : 768px)');


Chart.Tooltip.positioners.custom = function(elements, position) {

    if (!elements.length) return false;

    // var offset = 0;

    return { x: 200, y: -15 }
}



var colorArray = [
    "#3D9970", 
    "#0074D9", 
    "AAAAAA", 
    "#FFDC00", 
    "#FF4136", 
    "#85144b",
    "#F012BE",
    "#B10DC9",
];






function mutualHashrate(data) {

    console.log(data);

    var ctx = document.getElementById('chart-mutual').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 50, 100, 300);
    var gradientBG = ctx.createLinearGradient(0, 50, 100, 300);



    gradient.addColorStop(0, 'rgba(60, 170, 255, .8)');   
    gradient.addColorStop(1, 'rgba(50, 50, 100, .7)');

    gradientBG.addColorStop(0, 'rgba(60, 160, 240, .3)');   
    gradientBG.addColorStop(1, 'rgba(80, 100, 190, .3)');

    var config = {

        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Total Rate',
                    data: data.rate,
                    borderWidth: 1,
                    pointBorderWidth: 0,
                    borderColor: '#f0ad4e',
                    // borderColor: colorArray[0] + 'AA',
                    pointHoverBorderWidth: 0,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    pointHoverBorderColor: 'transparent',
                    pointHoverBackgroundColor: colorArray[0] + 'AA',
                    // backgroundColor: 'transparent',
                    backgroundColor: '#f0ad4e33',
                    pointRadius: 7,
                    pointHoverRadius: 7,
                    borderJoinStyle: 'round',
                },

            ],
            labels: data.time,
        },
        options: optionsMutual,
    };


    var mixedChart = new Chart(ctx, config);

    // $('.count-hashrate').html(mixedChart.data.labels.length);
    // $('.count-hashrate').parent().fadeIn();

}



var optionsMutual = {


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
            tension: 0.0,
        }
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
        }
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    // display: mq.matches ? false : true,
                    fontSize: 12,
                    fontColor: 'rgba(0,100,50, .2)',
                    // min: 0,
                    // callback: function(label, index, labels) {
                    //     return label / 1000000;
                    // }
                },

                // afterFit: function(scaleInstance, data) {

                //     if (mq.matches) {
                //         scaleInstance.width = 0;
                //     } else {
                //         scaleInstance.width = 30;
                //     }
                // },
                // display: false,
                gridLines: {
                    display: false,
                    color: 'rgba(0,100,50, .3)',
                    // drawBorder: mq.matches ? false : true,
                    drawBorder: false,
                    // borderDash: [6, 68.3],
                    zeroLineColor: 'transparent',
                },
            }
        ],
        xAxes: [
            {
                // display: false,
                gridLines: {
                    color: 'rgba(0,120,50, .3)',
                    zeroLineColor: 'transparent',
                    // borderDash: [3, 30],
                    drawBorder: false,
                    zeroLineColor: 'transparent',
                    // display: false,
                },

                position: 'top',

                ticks: {
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
                return data['labels'][tooltipItem[0]['index']];
            },
            labelTextColor: function(tooltipItem, chart){
                return colorArray[tooltipItem.datasetIndex];
            },
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
        backgroundColor: 'rgba(255,255,255,.9)',
        titleFontSize: 13,
        // titleFontColor: 'rgba(80, 130, 200, 1)',
        titleFontColor: '#444',
        // bodyFontColor: '#000',
        bodyFontColor: '#444',
        bodyFontSize: 13,
        displayColors: false,
        position: 'custom',
        // yAlign: 'center',
        xAlign: 'right',
    }
};
