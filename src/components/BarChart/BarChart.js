import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

import React, {useState} from 'react';

function BarChart() {
    const[state, setState] = useState(null);
    const initialState = {
        series: [{
            data: [44, 55, 64, 22, 43,44, 55, 41, 64, 22, 43, 21]
          }, {
            data: [53, 32,  52, 13, 44,53, 32, 33, 52, 13, 44, 32]
          }],

          options: {
            chart: {
              type: 'bar',
              height: 300,
             
            },

            grid: {
                
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: false
                    }
                },  
              
            },

            plotOptions: {
              bar: {
                horizontal: false,
                dataLabels: {
                  position: 'top',
                },
              }
            },
            dataLabels: {
              enabled: true,
              offsetX: 1,
              style: {
                fontSize: '9px',
                textAlign:'center',
                colors: ['#fff']
              }
            },
            
            stroke: {
              show: true,
              width: 1,
              colors: ['#fff',]
            },
            fill: {
                colors: ['#ff6767', '#50b5ff']
              },
            
            xaxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
             
            },
          },
          
        
        };
      
    
    

    return (
        <div id="chart">
            <ReactApexChart 
            options={initialState.options} 
            series={initialState.series} 
            type="bar" height={300} />
        </div>
    )
}

export default BarChart;
