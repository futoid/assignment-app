import { useCallback, useState } from "react";
import useBasicDetails from "../../hooks/useBasicDetails";
import {AiOutlineClose} from 'react-icons/ai'
import Input from "../reuseable-components/Input";
import useSocialDetails from "../../hooks/useSocialDetails";
import useUser from "../../hooks/useUser";

const BasicDetails = () => {
    const basicDetails = useBasicDetails();
    const socialDetails = useSocialDetails();
    const user = useUser();

    const [name , setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");

    const onClose = useCallback(()=> {
        basicDetails.onClose();
        setName('');
        setMail('');
        setPhone('');
    }, [basicDetails,setMail,setName,setPhone]);

    const onToggle = useCallback(() => {

        user.updateName(name as string);
        user.updateEmail(mail as string);
        user.updatePhone(phone as string);        

        basicDetails.onClose();
        socialDetails.onOpen();
    }, [basicDetails, socialDetails,user,name,mail,phone])

    if(basicDetails.isOpen === false){
        return null
    }

    return ( 
        <div className="flex fixed w-full h-full bg-black bg-opacity-50 items-center justify-center z-20">
            <div className=" w-full lg:w-[35rem] h-fit bg-white rounded-2xl pb-5 m-5">
                <div className=" flex flex-col border-b-[1px]">
                    <div className=" flex flex-row my-4 mx-4 font-montserrat text-lg font-semibold justify-between items-center">
                        <div>Add New Profile</div>
                        <div className=" hover:cursor-pointer" onClick={onClose}>
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>
                <div className=" flex flex-row justify-evenly gap-10 items-center p-2  font-semibold text-base">
                    <div className=" border-b-4 px-10 lg:px-20 pb-2 border-[#3F84F8] hover:cursor-pointer">
                        Basic
                    </div>
                    <div className=" border-b-4 px-10 lg:px-20 pb-2 border-[#D9D9D9] hover:cursor-pointer" onClick={onToggle} >
                        Social
                    </div>
                </div>
                <div className=" flex flex-col px-6">
                    <Input header="Enter Name*" placeholder="Eg. Aliek Mandal" onChange={(event) => {setName(event.target.value)}} value={name}/>
                    <Input header="Enter Email*" placeholder="Eg. aliek@duck.com" onChange={(event) => {setMail(event.target.value)}} value={mail}/>
                    <Input header="Enter Phone*" placeholder="Eg. 999999999" onChange={(event) => {setPhone(event.target.value)}} value={phone} type="tel"/>
                    <div className="flex justify-end">
                        <button 
                            className=" font-montserrat font-normal text-white bg-[#3E84F8] py-2 px-4 rounded-lg"
                            onClick={onToggle}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BasicDetails;