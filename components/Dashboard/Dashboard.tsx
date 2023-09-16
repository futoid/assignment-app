import SideBar from "./SideBar";
import BarSection from "../Charts/BarSection";
import DashboardHeader from "./HeaderDashboard";
import ProductDataCard from "./ProductDataCard";
import TopCardSection from "./TopCardSection";
import UserCard from "./UserCard";

const Dashboard = () => {
    return (
            <div className="lg:flex gap-8">
                <div className=" fixed">
                    <SideBar />
                </div>
                <div className=" px-10 lg:ml-[20rem] w-screen">
                    <DashboardHeader />
                    <TopCardSection />
                    <BarSection />
                    <div className="lg:grid lg:grid-cols-2 gap-6 mb-8">
                        <div className=" lg:col-span-1" >
                            <ProductDataCard />
                        </div>
                        <div className=" lg:col-span-1" >
                            <UserCard />
                        </div>

                    </div>
                </div>
            </div>
    );
}

export default Dashboard;