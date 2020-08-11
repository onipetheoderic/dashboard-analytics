import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

import React, {useState} from 'react';

function BarChart() {
    const[state, setState] = useState(null);
    const initialState = {
        series: [20, 40, 40],
      
          
        
        options: {
            labels: ['Local', 'Domestic', 'International'],
            colors: ['#ff9ad5', '#50b5ff', '#303896', '#5A2A27', '#C4BBAF'],
            chart: {
              width: 380,
              type: 'donut',
            },
            stroke: {
                width: 6//gap between each donut slice
              },
            dataLabels: {
              enabled: false
            },
            fill: {
              type: 'gradient',
            },
            legend: {
              formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
              }
            },
            
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        }
    
    

    return (
        <div id="chart">
            <ReactApexChart options={initialState.options} series={initialState.series} 
            type="donut" width={380} />
        </div>
    )
}

export default BarChart;
