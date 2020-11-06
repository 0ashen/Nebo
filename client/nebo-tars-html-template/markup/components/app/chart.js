Highcharts.setOptions({
    lang: {
        loading: 'Загрузка...',
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        //weekdays: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        shortMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
        exportButtonTitle: "Экспорт",
        printButtonTitle: "Печать",
        rangeSelectorFrom: "С",
        rangeSelectorTo: "По",
        rangeSelectorZoom: "Период",
        downloadPNG: 'Скачать PNG',
        downloadJPEG: 'Скачать JPEG',
        downloadPDF: 'Скачать PDF',
        downloadSVG: 'Скачать SVG',
        printChart: 'Напечатать график'
    },

    time: {
        timezoneOffset: new Date().getTimezoneOffset()
    }
});

function showGraph(container, graph_type, graph_period) {
    if (document.querySelectorAll('#' + container).length < 1) {
        return;
    }
    // var graph_type = 'pm25';
    // var graph_period = 'month';
    var graph_min = graph_type === 'temp' ? null : 0;
    var graph_max = graph_type === 'temp' ? null : 200;
    var graph_view = graph_type === 'temp' ? 'area' : 'column';
    var zones = graph_type === 'pm25' ? [{
        value: 12,
        color: '#00a2f4'
    }, {
        value: 35,
        color: '#ffc400'
    }, {
        value: 55,
        color: '#ff9d00'
    }, {
        value: 160,
        color: '#ff4a39'
    }, {
        value: 160,
        color: '#262626'
    }, {
        color: '#262626'
    }] : []

    var pl_lines = graph_type === 'pm25' ? [{
        value: graph_period === 'day' ? 160 : 35,
        color: '#5C5E73',
        dashStyle: 'longdash',
        width: 2,
        zIndex: 10,
        label: {
            text: 'Предельно допустимая концентрация',
            align: 'right',
            color: '#5C5E73'
        }
    }, {
        value: graph_period === 'day' ? 25 : -35,
        color: '#5C5E73',
        dashStyle: 'longdash',
        width: 2,
        zIndex: 10,
        label: {
            text: 'Норма концентрации частиц PM2.5 (ВОЗ)',
            align: 'right',
            color: '#5C5E73'
        }
    }] : null;
    axios.get(window.location.href + '?type=' + graph_type + '&period=' + graph_period)
        .then(function (data) {

            var myset = [];
            Object.keys(data).forEach(function (key) {
                // console.log('Key : ' + key + ', Value : ' + data[key])
                var myitem = [parseInt(key) * 1000, Math.round(parseFloat(data[key]))];
                myset.push(myitem);
            });

            Highcharts.chart(container, {
                chart: {
                    backgroundColor: 'transparent',
                    style: {
                        fontFamily: '\'Unica One\', sans-serif'
                    },

                    // Edit chart spacing
                    spacingBottom: 15,
                    spacingTop: 15,
                    spacingLeft: 0,
                    spacingRight: 0,

                    // Explicitly tell the width and height of a chart
                    width: null,
                    height: 200
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        minute: '%H:%M',
                        day: '%d.%m',
                        year: '%Y'
                    }
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    min: graph_min,
                    // max: graph_max,
                    allowDecimals: false,
                    gridLineColor: 'transparent',
                    // plotLines: pl_lines,
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        groupPadding: 0.25,
                        pointPadding: 0.025,
                        borderWidth: 0,
                        // borderRadius: 10,
                        // borderRadiusTopLeft: 10,
                        // borderRadiusTopRight: 10,
                        zones: zones
                    },
                    area: {
                        zones: [{
                            value: 0,
                            color: '#00a2f4'
                        }, {
                            color: '#ff9d00'
                        }],
                        //fillColor: 'rgba(45, 60, 93, 1)',
                        marker: {
                            radius: 0
                        },
                        lineWidth: 0,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },

                series: [{
                    type: graph_view,
                    name: graph_type,
                    data: myset
                }]
            });
        });
};

showGraph('graphcontainer-pm25', 'pm25', 'month');
showGraph('graphcontainer-pm10', 'pm10', 'month');
showGraph('graphcontainer-pm01', 'pm01', 'month');
showGraph('graphcontainer-so2', 'so2', 'month');
showGraph('graphcontainer-humidity', 'humidity', 'month');

document.querySelector('#graficPollutionPopup').addEventListener('click', function () {
    this.querySelector('.popup__close').addEventListener('click', window.history.pushState({}, "", "/ru/krs"))
});

document.querySelector('#daily').addEventListener('click', function () {
    document.querySelector('#daily').classList.toggle('active');
    document.querySelector('#yearly').classList.toggle('active');
    showGraph('graphcontainer-pm25', 'pm25', 'month');
    showGraph('graphcontainer-pm10', 'pm10', 'month');
    showGraph('graphcontainer-pm01', 'pm01', 'month');
    showGraph('graphcontainer-so2', 'so2', 'month');
    showGraph('graphcontainer-humidity', 'humidity', 'month');
});

document.querySelector('#yearly').addEventListener('click', function () {
    document.querySelector('#daily').classList.toggle('active');
    document.querySelector('#yearly').classList.toggle('active');
    showGraph('graphcontainer-pm25', 'pm25', 'year');
    showGraph('graphcontainer-pm10', 'pm10', 'year');
    showGraph('graphcontainer-pm01', 'pm01', 'year');
    showGraph('graphcontainer-so2', 'so2', 'year');
    showGraph('graphcontainer-humidity', 'humidity', 'year');
});
//////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    // $('#sensorModal').modal('show');
    // $('[data-toggle="tooltip"]').tooltip();
    // showGraph();
});
