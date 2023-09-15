import { Bar } from "react-chartjs-2";
const BarSection = () => {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'User',
            data: [12, 19, 3, 5],
            backgroundColor: [
                '#98D89E',
            ],
        },
        {
            label: 'Guest',
            data: [2, 15, 7, 12],
            backgroundColor: [
                '#EE8484',
            ],
        }
        ]
    };

    return (
        <div className="mt-8">
            <div className=" bg-white border-[3px] border-[#E0E0E0] rounded-3xl shadow-lg h-96 w-[72rem] p-10 pb-20">
                <h1 className=" font-montserrat font-bold text-lg">Activities</h1>
                <h1 className=" font-montserrat font-normal text-sm text-[#858585] mb-6">May - June 2021</h1>
                <Bar
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                }
                            }
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
    );
}

export default BarSection;