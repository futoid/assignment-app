import SideBar from "./SideBar";
import BarSection from "../Charts/BarSection";
import DashboardHeader from "./HeaderDashboard";
import ProductDataCard from "./ProductDataCard";
import TopCardSection from "./TopCardSection";
import UserCard from "./UserCard";

const Dashboard = () => {
    return (
        <div className=" grid grid-cols-9">
            <div className=" col-span-2">
                <SideBar />
            </div>
            <div>
                <DashboardHeader />
                <TopCardSection />
                <BarSection />
                <div className=" flex flex-row w-full grid-cols-2">
                    <div className=" col-span-1">
                        <ProductDataCard />
                    </div>
                    <div className=" col-span-1">
                        <UserCard />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;