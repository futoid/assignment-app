import { IconType } from "react-icons/lib";


interface SideBarElementProps {
    label: string,
    icon: IconType,
    bold?: boolean
}

const SideBarElement: React.FC<SideBarElementProps> = ({ label, icon: Icon, bold }) => {
    return (
        <div className=" flex flex-row gap-5 items-center">
            <Icon size={22} color="white" />
            <h1 className={`
            font-montserrat
            ${bold ? " font-bold" : "font-normal"}
            text-lg
          text-white
            hover:font-medium
            transition
            cursor-pointer
            items-center
            `}>
                {label}
            </h1>
        </div>
    );
}

export default SideBarElement;