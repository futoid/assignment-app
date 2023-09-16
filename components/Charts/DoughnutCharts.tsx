import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
const DoughNutChart = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
        datasets: [
          {
            label: '# of Votes',
            data: [55, 23, 43],
            backgroundColor: [
              '#98D89E',
              '#F6DC7D',
              '#EE8484',
            ],
          },
        ],
      };
    return (
        <div className=" h-28 w-28 lg:h-52 lg:w-52">
            <Doughnut 
                data={data}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                }}
            />
        </div>
    );
}

export default DoughNutChart;