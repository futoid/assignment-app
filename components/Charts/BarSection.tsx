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
import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
const BarSection = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const [data, setData] = useState(null);

    useEffect(() => {
        try {
            axios.get("/api/data")
                .then(
                    (res) => {
                        setData(res.data);
                    }
                )
        }
        catch (error) {
            console.log(error);
        }
    })


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
                    {data ?
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
                        :
                        <div className=" h-full flex justify-center">
                            <ClipLoader size={20} color="blue"/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default BarSection;