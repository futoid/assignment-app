import BarSection from "./BarSection";
import DashboardHeader from "./HeaderDashboard";
import SideBar from "./SideBar";
import TopCardSection from "./TopCardSection";

const Dashboard = () => {
    return (
        <div className=" grid grid-cols-9">
            <div className=" col-span-2">
                <SideBar />
            </div>
            <div>
                <DashboardHeader />
                <TopCardSection />
                <BarSection/>
            </div>
        </div>
    );
}

export default Dashboard;