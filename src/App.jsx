
import './App.css'
import { AppProvider, useApp } from "./context/AppContext";
import ResponsiveSidebar from "./components/Sidebar/ResponsiveSidebar";
import Header from "./components/Header/NewHeader";
import ErrorBoundary from "./components/ErrorBoundary";
import { useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
    <div className="min-h-screen bg-[#F8F9FA] font-[Inter]">
      {/* Responsive Sidebar */}
      <ResponsiveSidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />

      {/* Main Content - with responsive margin for fixed sidebar */}
      <div className={`flex flex-col min-h-screen transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'
      }`}>
        {/* Header */}
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

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
    <ErrorBoundary>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App
