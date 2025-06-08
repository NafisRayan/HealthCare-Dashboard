import StatsCards from "./StatsCards";
import RevenueChart from "./RevenueChart";
import PaymentsHistory from "./PaymentsHistory";
import UpcomingAppointments from "./UpcomingAppointments";
import DoctorList from "./DoctorList";
import Balance from "./Balance";
import AppointmentsOverview from "./AppointmentsOverview";

const Dashboard = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Stats Cards */}
      <StatsCards />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Revenue Chart */}
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        {/* Right Column - Payments History */}
        <div>
          <PaymentsHistory />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Doctor List */}
        <div className="md:col-span-1">
          <DoctorList />
        </div>

        {/* Balance */}
        <div className="md:col-span-1">
          <Balance />
        </div>

        {/* Appointments Overview */}
        <div className="md:col-span-2 xl:col-span-1">
          <AppointmentsOverview />
        </div>
      </div>

      {/* Third Row - Upcoming Appointments */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div>
          <UpcomingAppointments />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
