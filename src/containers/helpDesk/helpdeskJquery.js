
import { df1, df2, df3} from './sampledata'


export default function(){
    'use strict'
    
    window.$.plot('#flotChart1', [{
      data: df2,
      color: '#65e0e0'
    },{
      data: df1,
      color: '#69b2f8'
    },{
      data: df3,
      color: '#0168fa',
      lines: {
        show: true,
        lineWidth: 1.5
      },
      bars: { show: false }
    }], {
      series: {
        shadowSize: 0,
        bars: {
          show: true,
          lineWidth: 0,
          barWidth: .5,
          fill: 1
        }
      },
      grid: {
        color: '#c0ccda',
        borderWidth: 0,
        labelMargin: 10
      },
            yaxis: {
        show: true,
        max: 90,
        tickSize: 15
      },
            xaxis: {
        color: 'transparent',
        show: true,
        max: 37,
        ticks: [[0,'Mar 10'],[5,'Mar 11'],[10,'Mar 12'],[15,'Mar 13'],[20,'Mar 14'],[25,'Mar 15'],[30,'Mar 16'],[35,'Mar 17']]
      }
        });

    // Donut chart
    // $('.peity-donut').peity('donut');


    // window.$.plot('#flotChart2', [{
    //   data: df3,
    //   color: '#0168fa',
    //   curvedLines: { apply: true }
    // }], {
    //   series: {
    //     shadowSize: 0,
    //     lines: {
    //       show: true,
    //       lineWidth: 1.5,
    //       fill: .05
    //     }
    //   },
    //   grid: {
    //     borderWidth: 0,
    //     labelMargin: 0
    //   },
    //   yaxis: {
    //     show: false,
    //     max: 55
    //   },
    //   xaxis: {
    //     show: true,
    //     color: 'rgba(131,146,165,.08)',
    //     min: 48,
    //     max: 102,
    //     tickSize: 5
    //   }
    // });

    // Horizontal bar chart
//   var ctx2 = document.getElementById('chartBar2').getContext('2d');
//   new Chart(ctx2, {
//     type: 'horizontalBar',
//     data: {
//       labels: ['Modification', 'Code Request', 'Feature Request', 'Bug Fix', 'Integration', 'Production'],
//       datasets: [{
//         data: [90, 60, 50, 95, 50, 60],
//         backgroundColor: ['#65e0e0', '#69b2f8','#6fd39b','#f77eb9','#fdb16d','#c693f9']
//       },{
//         data: [60, 50, 70, 45, 70, 30],
//         backgroundColor: '#e5e9f2'
//       }]
//     },
//     options: {
//       maintainAspectRatio: false,
//       responsive: true,
//       legend: {
//         display: false,
//         labels: {
//           display: false
//         }
//       },
//       layout: {
//         padding: {
//           left: 5
//         }
//       },
//       scales: {
//         yAxes: [{
//           gridLines: {
//             display: false
//           },
//           barPercentage: 0.5,
//           ticks: {
//             beginAtZero:true,
//             fontSize: 13,
//             fontColor: '#182b49',
//             fontFamily: 'IBM Plex Sans'
//           }
//         }],
//         xAxes: [{
//           gridLines: {
//             color: '#e5e9f2'
//           },
//           ticks: {
//             beginAtZero: true,
//             fontSize: 10,
//             fontColor: '#182b49',
//             max: 100
//           }
//         }]
//       }
//     }
//   })
  }

  