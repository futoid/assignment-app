import { signOut } from "next-auth/react";
import {AiOutlinePieChart, AiOutlineSetting} from 'react-icons/ai'
import SideBarElement from "../reuseable-components/sideBarElements";
import { BsTags } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";


const SideBar = () => {

    const sideBarItems = [
        {
            label : "Dashboard",
            icon : AiOutlinePieChart,
            bold : true
        },
        {
            label : "Transaction",
            icon : BsTags,
        },
        {
            label : "Schedules",
            icon : AiOutlinePieChart,
        },
        {
            label : "Users",
            icon : BiUserCircle,
        },
        {
            label : "Settings",
            icon : AiOutlineSetting,
        },

    ]

    return ( 
        <div>
            <div className=" bg-gradient-to-r from-[#4285F4] to-[#3C83F9] h-[64rem] m-8 rounded-xl pl-10">
                <div className=" text-4xl font-bold text-white font-montserrat pt-10">
                    Board.
                </div>

                <div className=" flex flex-col gap-8 mt-16">
                    {sideBarItems.map((item) => (
                        <SideBarElement label={item.label} icon={item.icon} bold={item?.bold}/>
                    ))}
                </div>

                {/* <Button secondary label="Log Out" onClick={signOut}/> */}
                <div className=" mt-[30rem] flex flex-col gap-4">
                    <div className=" font-montserrat text-sm text-white">Help</div>
                    <div className=" font-montserrat text-sm text-white">Contect Us</div>
                    <div className=" font-montserrat text-sm text-white hover:cursor-pointer" onClick={() => signOut()}>Log Out</div>
                </div>
            </div>
        </div>
     );
}
 
export default SideBar;