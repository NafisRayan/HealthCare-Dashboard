import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBell,
  faCog,
  faExpand,
  faUser,
  faTimes,
  faHeartbeat,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const NewHeader = ({ isMobileMenuOpen = false, setIsMobileMenuOpen = () => {} }) => {
  const { searchQuery, setSearchQuery, notifications, removeNotification } = useApp();
  const [showNotifications, setShowNotifications] = useState(false);



  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-3 sm:px-4 md:px-6 py-3 md:py-4 sticky top-0 z-20">
      <div className="flex items-center justify-between">
        {/* Left side - Menu toggle and Search */}
        <div className="flex items-center space-x-2 sm:space-x-4 flex-1">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className="text-gray-600 text-lg"
            />
          </button>

          {/* Logo for mobile */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faHeartbeat} className="text-white text-sm" />
            </div>
            <span className="text-lg font-bold text-gray-800">Health Dashboard</span>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md w-full hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-sm" />
            </div>
            <input
              type="text"
              placeholder="Search patients, doctors, appointments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Right side - Icons and User */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search Icon for mobile */}
          <button className="sm:hidden p-2 hover:bg-gray-100 rounded-lg">
            <FontAwesomeIcon icon={faSearch} className="text-gray-600 text-lg" />
          </button>

          {/* Expand Icon - Hidden on mobile */}
          <button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg">
            <FontAwesomeIcon icon={faExpand} className="text-gray-600 text-lg" />
          </button>

          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-gray-100 rounded-lg relative"
            >
              <FontAwesomeIcon icon={faBell} className="text-gray-600 text-lg" />
              {notifications.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-3 sm:p-4 border-b border-gray-200">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      No new notifications
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                          <button
                            onClick={() => removeNotification(notification.id)}
                            className="ml-2 text-gray-400 hover:text-gray-600"
                          >
                            <FontAwesomeIcon icon={faTimes} className="text-xs" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Settings - Hidden on mobile */}
          <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-lg">
            <FontAwesomeIcon icon={faCog} className="text-gray-600 text-lg" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2 sm:space-x-3 pl-2 sm:pl-4 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Nafis Rayan</p>
              <p className="text-xs text-gray-500">ADMIN</p>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-gray-600 text-sm" />
            </div>
          </div>
        </div>
      </div>



      {/* Mobile Search Bar */}
      <div className="sm:hidden px-3 py-2 border-b border-gray-200">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
