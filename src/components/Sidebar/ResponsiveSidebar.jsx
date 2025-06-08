import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faCalendar,
  faMessage,
  faCreditCard,
  faChartBar,
  faCog,
  faEllipsisH,
  faHeartbeat,
  faExclamationTriangle,
  faBars,
  faTimes,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';
import { useState, useEffect } from 'react';

// Mobile Sidebar Content Component
const MobileSidebarContent = ({ menuItems, currentPage, handleNavigation, setIsMobileMenuOpen }) => (
  <div className="flex flex-col h-full">
    {/* Mobile Header */}
    <div className="flex items-center justify-between p-4 border-b border-gray-100">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faHeartbeat} className="text-white text-lg" />
        </div>
        <span className="text-lg font-bold text-gray-800">Health Dashboard</span>
      </div>
      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <FontAwesomeIcon icon={faTimes} className="text-lg" />
      </button>
    </div>

    {/* Emergency Help */}
    <div className="p-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-3">
        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-white text-sm" />
        </div>
        <div>
          <p className="text-sm font-medium text-red-800">Emergency</p>
          <p className="text-xs text-red-600">help</p>
        </div>
      </div>
    </div>

    {/* Mobile Navigation */}
    <nav className="flex-1 px-4 pb-4 overflow-y-auto">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleNavigation(item.name)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                currentPage === item.name
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-base flex-shrink-0" />
              <span className="text-base font-medium">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>

    {/* Mobile Bottom Section */}
    <div className="p-4 border-t border-gray-100">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="w-6 h-6 bg-white bg-opacity-30 rounded mb-1"></div>
            <div className="w-8 h-3 bg-white bg-opacity-20 rounded"></div>
          </div>
          <FontAwesomeIcon icon={faMessage} className="text-white text-lg" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium mb-1">Make an Appointment</p>
          <p className="text-xs opacity-90">Best Health Care here →</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-3 text-center">Health Dashboard</p>
    </div>
  </div>
);

const ResponsiveSidebar = ({
  isMobileMenuOpen = false,
  setIsMobileMenuOpen = () => {},
  sidebarCollapsed = false,
  setSidebarCollapsed = () => {}
}) => {
  const { currentPage, navigateTo } = useApp();
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 1024;
      setIsMobile(isMobileView);
      if (isMobileView) {
        setSidebarCollapsed(false); // Always expanded on mobile when open
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { name: 'Dashboard', icon: faHome },
    { name: 'Appointments', icon: faCalendar },
    { name: 'Patients', icon: faUser },
    { name: 'Doctors', icon: faHeartbeat },
    { name: 'Features', icon: faChartBar },
    { name: 'Forms, Tables & Charts', icon: faCreditCard },
    { name: 'Apps & Widgets', icon: faMessage },
    { name: 'Authentication', icon: faCog },
    { name: 'Miscellaneous', icon: faEllipsisH },
  ];

  const handleNavigation = (pageName) => {
    navigateTo(pageName);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleCollapse = () => {
    if (!isMobile) {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  // Mobile overlay sidebar
  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        {/* Mobile Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <MobileSidebarContent 
            menuItems={menuItems}
            currentPage={currentPage}
            handleNavigation={handleNavigation}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </>
    );
  }

  // Desktop sidebar
  return (
    <div className={`hidden lg:flex flex-col bg-white shadow-lg h-screen fixed top-0 left-0 z-30 transition-all duration-300 ${
      sidebarCollapsed ? 'w-20' : 'w-64'
    }`}>
      {/* Logo Section */}
      <div className={`border-b border-gray-100 transition-all duration-300 ${
        sidebarCollapsed ? 'p-4' : 'p-4 lg:p-6'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faHeartbeat} className="text-white text-lg" />
          </div>
          {!sidebarCollapsed && (
            <span className="text-lg lg:text-xl font-bold text-gray-800 truncate">
              Health Dashboard
            </span>
          )}
        </div>
      </div>

      {/* Collapse Toggle Button */}
      <div className="px-4 py-2">
        <button
          onClick={toggleCollapse}
          className="w-full flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <FontAwesomeIcon
            icon={sidebarCollapsed ? faChevronRight : faChevronLeft}
            className="text-sm"
          />
        </button>
      </div>

      {/* Emergency Help - Hidden when collapsed */}
      {!sidebarCollapsed && (
        <div className="px-4 pb-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-white text-sm" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-red-800">Emergency</p>
              <p className="text-xs text-red-600">help</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 lg:px-4 pb-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(item.name)}
                className={`w-full flex items-center rounded-lg text-left transition-colors group ${
                  sidebarCollapsed ? 'px-3 py-3 justify-center' : 'px-3 py-2.5 space-x-3'
                } ${
                  currentPage === item.name
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                title={sidebarCollapsed ? item.name : ''}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-sm flex-shrink-0 ${sidebarCollapsed ? 'text-base' : ''}`}
                />
                {!sidebarCollapsed && (
                  <span className="text-sm font-medium truncate">{item.name}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section - Hidden when collapsed */}
      {!sidebarCollapsed && (
        <div className="p-4 border-t border-gray-100">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="w-6 h-6 bg-white bg-opacity-30 rounded mb-1"></div>
                <div className="w-8 h-3 bg-white bg-opacity-20 rounded"></div>
              </div>
              <FontAwesomeIcon icon={faMessage} className="text-white text-lg" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium mb-1">Make an Appointment</p>
              <p className="text-xs opacity-90">Best Health Care here →</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Health Dashboard</p>
        </div>
      )}
    </div>
  );
};



export default ResponsiveSidebar;
