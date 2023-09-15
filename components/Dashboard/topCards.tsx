import { BsCashStack, BsTags } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import {LuUsers2} from 'react-icons/lu'
const TopCards = () => {

    return (
        <div className=" flex lg:flex-row gap-5">
            <div className=" flex flex-col py-4 px-5 border-[3px] border-[#E0E0E0] bg-white rounded-3xl shadow-lg">
                <div className="p-2 w-fit bg-[#7FCD93] rounded-full">
                    <BsCashStack size={22} color="white" />
                </div>

                <div className=" mt-2">
                    <h1 className=" font-lato text-black text-sm font-normal">Total Revenues</h1>
                </div>
                <div className=" flex flex-row gap-16 mt-2 justify-center items-center">
                    <div>
                            <h1 className=" font-sans font-bold text-2xl">$1,29,430</h1>
                    </div>
                    <div className=" bg-[#E9F9EB] text-xs px-2 py-1 text-[#3CC952] rounded-2xl ">
                        +4.23%
                    </div>
                </div>
            </div>
            {/* ---------------------------------- */}
            <div className=" flex flex-col py-4 px-5 border-[3px] border-[#E0E0E0] rounded-3xl shadow-lg">
                <div className="p-2 w-fit bg-[#DEBF85] rounded-full">
                    <BsTags size={22} color="white" />
                </div>

                <div className=" mt-2">
                    <h1 className=" font-lato text-black text-sm font-normal">Total Transactions</h1>
                </div>
                <div className=" flex flex-row gap-16 mt-2 justify-center items-center">
                    <div>
                            <h1 className=" font-sans font-bold text-2xl">21,11,521</h1>
                    </div>
                    <div className=" bg-[#E9F9EB] text-xs px-2 py-1 text-[#3CC952] rounded-2xl ">
                        +2.23%
                    </div>
                </div>
            </div>
            {/* ---------------------------------- */}
            <div className=" flex flex-col py-4 px-5 border-[3px] border-[#E0E0E0] rounded-3xl shadow-lg">
                <div className="p-2 w-fit bg-[#ECA4A4] rounded-full">
                    <AiOutlineLike size={22} color="white" />
                </div>

                <div className=" mt-2">
                    <h1 className=" font-lato text-black text-sm font-normal">Total Likes</h1>
                </div>
                <div className=" flex flex-row gap-16 mt-2 justify-center items-center">
                    <div>
                            <h1 className=" font-sans font-bold text-2xl">30,89,415</h1>
                    </div>
                    <div className=" bg-[#E9F9EB] text-xs px-2 py-1 text-[#3CC952] rounded-2xl ">
                        +1.12%
                    </div>
                </div>
            </div>
            {/* ---------------------------------- */}
            <div className=" flex flex-col py-4 px-5 border-[3px] border-[#E0E0E0] rounded-3xl shadow-lg">
                <div className="p-2 w-fit bg-[#A9B0E5] rounded-full">
                    <LuUsers2 size={22} color="white" />
                </div>

                <div className=" mt-2">
                    <h1 className=" font-lato text-black text-sm font-normal">Total Users</h1>
                </div>
                <div className=" flex flex-row gap-16 mt-2 justify-center items-center">
                    <div>
                            <h1 className=" font-sans font-bold text-2xl">1,21,324</h1>
                    </div>
                    <div className=" bg-[#E9F9EB] text-xs px-2 py-1 text-[#3CC952] rounded-2xl ">
                        +5.19%
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopCards;