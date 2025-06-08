import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMobile, 
  faDesktop, 
  faCloud, 
  faRobot,
  faCalendar,
  faComments,
  faFileAlt,
  faChartLine,
  faDownload,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

const AppsPage = () => {
  const apps = [
    {
      name: 'Health Dashboard Mobile',
      description: 'Native mobile app for iOS and Android with offline capabilities',
      icon: faMobile,
      color: 'bg-blue-100 text-blue-600',
      status: 'Available',
      downloads: '10K+',
      rating: 4.8
    },
    {
      name: 'Desktop Client',
      description: 'Full-featured desktop application for Windows, Mac, and Linux',
      icon: faDesktop,
      color: 'bg-green-100 text-green-600',
      status: 'Available',
      downloads: '5K+',
      rating: 4.9
    },
    {
      name: 'Cloud Sync',
      description: 'Real-time data synchronization across all devices',
      icon: faCloud,
      color: 'bg-purple-100 text-purple-600',
      status: 'Active',
      downloads: 'Built-in',
      rating: 4.7
    },
    {
      name: 'AI Assistant',
      description: 'Intelligent assistant for diagnosis and treatment recommendations',
      icon: faRobot,
      color: 'bg-orange-100 text-orange-600',
      status: 'Beta',
      downloads: '2K+',
      rating: 4.5
    },
    {
      name: 'Smart Calendar',
      description: 'Advanced scheduling with conflict detection and optimization',
      icon: faCalendar,
      color: 'bg-red-100 text-red-600',
      status: 'Available',
      downloads: '8K+',
      rating: 4.6
    },
    {
      name: 'Secure Messaging',
      description: 'HIPAA-compliant messaging between doctors and patients',
      icon: faComments,
      color: 'bg-indigo-100 text-indigo-600',
      status: 'Available',
      downloads: '12K+',
      rating: 4.8
    }
  ];

  const widgets = [
    {
      name: 'Patient Vitals Widget',
      description: 'Real-time vital signs monitoring dashboard',
      type: 'Dashboard Widget',
      size: 'Large'
    },
    {
      name: 'Appointment Counter',
      description: 'Quick view of today\'s appointments',
      type: 'Counter Widget',
      size: 'Small'
    },
    {
      name: 'Revenue Chart',
      description: 'Monthly revenue visualization',
      type: 'Chart Widget',
      size: 'Medium'
    },
    {
      name: 'Doctor Availability',
      description: 'Current doctor availability status',
      type: 'Status Widget',
      size: 'Medium'
    },
    {
      name: 'Emergency Alerts',
      description: 'Critical patient alerts and notifications',
      type: 'Alert Widget',
      size: 'Large'
    },
    {
      name: 'Quick Actions',
      description: 'Frequently used action buttons',
      type: 'Action Widget',
      size: 'Small'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800';
      case 'Active':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Apps & Widgets</h1>
        <p className="text-gray-600 text-sm sm:text-base">Extend your dashboard with powerful applications and customizable widgets</p>
      </div>

      {/* Apps Section */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {apps.map((app, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${app.color}`}>
                  <FontAwesomeIcon icon={app.icon} className="text-lg sm:text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{app.name}</h3>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(app.status)}`}>
                    {app.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{app.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{app.downloads} downloads</span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{app.rating}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-sm flex items-center justify-center space-x-1">
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Install</span>
                </button>
                <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Widgets Section */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Dashboard Widgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {widgets.map((widget, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{widget.name}</h3>
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                  {widget.size}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-3">{widget.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{widget.type}</span>
                <button className="bg-green-500 text-white py-1 px-3 rounded text-sm hover:bg-green-600">
                  Add Widget
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-blue-100">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Third-Party Integrations</h2>
          <p className="text-gray-600 text-sm sm:text-base">Connect with popular healthcare and business tools</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faFileAlt} className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">Epic EMR</h3>
            <p className="text-xs text-gray-500">Electronic Medical Records</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faChartLine} className="text-green-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">Tableau</h3>
            <p className="text-xs text-gray-500">Data Visualization</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faCloud} className="text-purple-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">AWS Health</h3>
            <p className="text-xs text-gray-500">Cloud Services</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faComments} className="text-orange-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">Slack</h3>
            <p className="text-xs text-gray-500">Team Communication</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsPage;
