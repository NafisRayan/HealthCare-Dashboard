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
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const NewSidebar = () => {
  const { currentPage, navigateTo } = useApp();

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

  return (
    <div className="w-64 bg-white shadow-lg h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4 lg:p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon={faHeartbeat} className="text-white text-lg" />
          </div>
          <span className="text-lg lg:text-xl font-bold text-gray-800">Health Dashboard</span>
        </div>
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

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 lg:px-4 pb-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => navigateTo(item.name)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                  currentPage === item.name
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-sm flex-shrink-0" />
                <span className="text-sm font-medium truncate">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
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
            <p className="text-sm font-medium mb-1">Make an Appointments</p>
            <p className="text-xs opacity-90">Best Health Care here →</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">Rhythm Admin Dashboard</p>
      </div>
    </div>
  );
};

export default NewSidebar;
