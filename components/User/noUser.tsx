import { useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import useBasicDetails from "../../hooks/useBasicDetails";
import useUser from "../../hooks/useUser";

const NoUser = () => {

    const basicDetails = useBasicDetails();
    const user = useUser();

    const addUser = useCallback(() => {
        basicDetails.onOpen();
    }, [basicDetails]);

    return ( 
        <div className=" mb-6 lg:mt-10">
            <div className="flex flex-col items-center justify-center bg-white border-[3px] border-[#E0E0E0] rounded-3xl shadow-lg h-[15rem] lg:h-[19.3rem] ">
                <div className=" flex justify-center bg-[#F5F5F5] rounded-full p-6 hover:cursor-pointer" onClick={addUser}>
                    <AiOutlinePlus size={40} color="#999CA0"/>
                </div>
                <div className=" flex justify-center font-semibold text-base text-[#858585] font-lato mt-4">
                    Add Profile
                </div>
            </div>
        </div>
     );
}
 
export default NoUser;