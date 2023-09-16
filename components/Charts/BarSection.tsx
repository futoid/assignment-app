import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { FaCircle } from "react-icons/fa";
const BarSection = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'User',
            data: [30, 24, 27, 21],
            backgroundColor: [
                '#98D89E',
            ],
        },
        {
            label: 'Guest',
            data: [15, 20, 25, 40],
            backgroundColor: [
                '#EE8484',
            ],
        }
        ]
    };

    return (
        <div className="mt-8">
            <div className=" bg-white border-[3px] border-[#E0E0E0] rounded-3xl shadow-lg p-10 pb-10">
                <div className=" flex items-center justify-between">
                    <h1 className=" font-montserrat font-bold text-lg">Activities</h1>
                    <div className=" flex gap-5" >
                        <div className=" flex items-center gap-3">
                            <FaCircle size={15} color="#E9A0A0" />
                            <h1 className="font-lato text-sm">Guest</h1>
                        </div>
                        <div className=" flex items-center gap-3">
                            <FaCircle size={15} color="#9BDD7C" />
                            <h1 className="font-lato text-sm">User</h1>
                        </div>
                    </div>
                </div>
                <h1 className=" font-montserrat font-normal text-sm text-[#858585] mb-6">May - June 2021</h1>
                <div className="  h-[10rem] lg:h-[16rem]">
                    <Bar
                        height={100}
                        width={100}
                        data={data}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            scales: {
                                x: {
                                    grid: {
                                        display: false
                                    }
                                },
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        stepSize: 10,
                                    },
                                },
                            },
                            plugins: {
                                legend: {
                                    display: false
                                }
                            },


                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default BarSection;