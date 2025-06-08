
import './App.css'
import { AppProvider, useApp } from "./context/AppContext";
import Sidebar from "./components/Sidebar/NewSidebar";
import Header from "./components/Header/NewHeader";
import Dashboard from "./components/dashboard";
import PatientsPage from "./pages/PatientsPage";
import DoctorsPage from "./pages/DoctorsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import FeaturesPage from "./pages/FeaturesPage";
import FormsPage from "./pages/FormsPage";
import AppsPage from "./pages/AppsPage";
import AuthPage from "./pages/AuthPage";
import MiscPage from "./pages/MiscPage";

const AppContent = () => {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Patients':
        return <PatientsPage />;
      case 'Doctors':
        return <DoctorsPage />;
      case 'Appointments':
        return <AppointmentsPage />;
      case 'Features':
        return <FeaturesPage />;
      case 'Forms, Tables & Charts':
        return <FormsPage />;
      case 'Apps & Widgets':
        return <AppsPage />;
      case 'Authentication':
        return <AuthPage />;
      case 'Miscellaneous':
        return <MiscPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F8F9FA] font-[Inter]">
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F8F9FA] p-3 sm:p-4 md:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App
