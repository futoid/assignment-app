import { useCallback, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'
import Input from "../reuseable-components/Input";
import useSocialDetails from "../../hooks/useSocialDetails";
import useBasicDetails from "../../hooks/useBasicDetails";
import useUser from "../../hooks/useUser";

const BasicDetails = () => {
    const socialDetails = useSocialDetails();
    const basicDetails = useBasicDetails();
    const user = useUser();

    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");

    const onClose = useCallback(() => {
        socialDetails.onClose();
        setInstagram('');
        setYoutube('');
    }, [socialDetails, setInstagram, setYoutube])

    const onToggle = useCallback(() => {
        user.updateInstagram(instagram);
        user.updateYoutube(youtube);

        socialDetails.onClose();
        basicDetails.onOpen();
    }, [basicDetails, socialDetails,user])

    const onSubmit = useCallback(() => {

        user.updateInstagram(instagram);
        user.updateYoutube(youtube);

        user.onOpen();
        socialDetails.onClose();
    }, [user,socialDetails,instagram,youtube])


    if (socialDetails.isOpen === false) {
        return null
    }

    return (
        <div className="flex fixed w-full h-full bg-black bg-opacity-50 items-center justify-center z-20">
            <div className="w-full lg:w-[35rem] h-fit bg-white rounded-2xl pb-5 m-5">
                <div className=" flex flex-col border-b-[1px]">
                    <div className=" flex flex-row my-4 mx-4 font-montserrat text-lg font-semibold justify-between items-center">
                        <div>Add New Profile</div>
                        <div className=" hover:cursor-pointer" onClick={onClose}>
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly gap-10 items-center p-2  font-semibold text-base">
                    <div className="border-b-4 px-10 lg:px-20 pb-2 border-[#D9D9D9] hover:cursor-pointer" onClick={onToggle}>
                        Basic
                    </div>
                    <div className=" border-b-4 px-10 lg:px-20 pb-2 border-[#3F84F8] hover:cursor-pointer" >
                        Social
                    </div>
                </div>
                <div className=" flex flex-col px-6">
                    <Input header="Instagram Link" placeholder="Eg. aliekmandal" optional onChange={(event) => {setInstagram(event.target.value)}} value={instagram}/>
                    <Input header="Youtube Link" placeholder="Eg. aliekmandal" optional onChange={(event) => {setYoutube(event.target.value)}} value={youtube}/>
                    <div className="flex flex-row gap-4 justify-end">
                        <button
                            className=" font-montserrat font-normal text-black bg-white py-2 px-4 border-2 border-[#999CA0] rounded-lg "
                            onClick={onToggle}
                        >
                            Back
                        </button>

                        <button
                            className=" font-montserrat font-normal text-white bg-[#3E84F8] py-2 px-4 rounded-lg "
                            onClick={onSubmit}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasicDetails;