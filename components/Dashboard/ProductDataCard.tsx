import DoughNutChart from "../Charts/DoughnutCharts";
import { FaCircle } from "react-icons/fa";

const ProductDataCard = () => {
    return (
        <div className=" my-10 mr-2">
            <div className=" bg-white border-[3px] border-[#E0E0E0] py-6 px-6 rounded-3xl shadow-lg">
                <div className=" flex flex-row justify-between items-center">
                    <h1 className=" font-montserrat font-bold text-lg mb-5">Top Products</h1>
                    <h1 className=" font-montserrat font-normal text-sm text-[#858585] mb-6">May - June 2021</h1>
                </div>
                <div className=" flex justify-between items-center ">
                    
                    <DoughNutChart  />
                    
                    <div className=" flex flex-col gap-4 justify-between ml-10">  
                        <div className=" flex felx-row gap-4">
                            <FaCircle size={20} color="#98D89E" />
                            <div className="flex flex-col">
                                <h1 className=" text-black text-xs lg:text-sm font-bold font-montserrat">Basic Tees</h1>
                                <h1 className=" font-lato text-xs text-[#858585] font-normal">55%</h1>
                            </div>
                        </div>
                        <div className=" flex felx-row gap-4">
                            <FaCircle size={20} color="#F6DC7D" />
                            <div className="flex flex-col">
                                <h1 className=" text-black text-xs lg:text-sm font-bold font-montserrat">Custom Short Pants</h1>
                                <h1 className=" font-lato text-xs text-[#858585] font-normal">23%</h1>
                            </div>
                        </div>
                        <div className=" flex felx-row gap-4">
                            <FaCircle size={20} color="#EE8484" />
                            <div className="flex flex-col">
                                <h1 className=" text-black text-xs lg:text-sm font-bold font-montserrat">Super Hoodies</h1>
                                <h1 className=" font-lato text-xs text-[#858585] font-normal">43%</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}
export default ProductDataCard;
