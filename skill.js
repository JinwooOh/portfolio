$(function () {
  Highcharts.chart('container', {
      chart: {
          type: 'column'
      },
      title: {
          text: ''
      },
      credits: {
        enabled: false
      },
      colors: ['gray'],

      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              enabled: false,
              text: ''
          }
      },
      legend: {
          enabled: false
      },
      tooltip: {
          pointFormat: '{point.y}'
      },
      series: [{
          name: 'Language',
          data: [
              ['<b>Java</b>', 90],
              ['<b>JavaScript</b>', 60],
              ['<b>CSS/HTML</b>', 40],
              ['<b>Python</b>', 40],
              ['<b>C</b>', 40],
          ],
          dataLabels: {
              enabled: true,

              color: '#FFFFFF',
              align: 'right',
              format: '', // one decimal
              x: -10,
              y: 30, // 10 pixels down from the top
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      }]
  })
});
