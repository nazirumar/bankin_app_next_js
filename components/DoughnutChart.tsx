"use client"
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend);




const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data ={
       datasets:[
        {
           data: [1250, 2500, 3750],
           backgroundColor: ['#0747b6','#2265d8', '#2f91fa'],
           label: 'Banks'
       }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4', 'Bank 5', 'Bank 6']
    }
  return <Doughnut 
  data={data}
  options={
    {cutout:'60%',
        plugins: {
            legend:{
                display: false
            }
    
        }
    }
    
  }
  />
}

export default DoughnutChart