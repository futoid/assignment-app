import SideBar from "./SideBar";
import BarSection from "../Charts/BarSection";
import DashboardHeader from "./HeaderDashboard";
import ProductDataCard from "./ProductDataCard";
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
                <ProductDataCard/>
            </div>
        </div>
    );
}

export default Dashboard;