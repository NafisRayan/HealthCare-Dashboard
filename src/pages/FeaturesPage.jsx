import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faUserMd, 
  faCalendarAlt, 
  faFileAlt,
  faBell,
  faShieldAlt,
  faMobile,
  faCloud,
  faRobot,
  faHeartbeat,
  faSearch,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const FeaturesPage = () => {
  const features = [
    {
      icon: faChartLine,
      title: 'Advanced Analytics',
      description: 'Comprehensive health analytics and reporting with real-time insights into patient data and hospital performance.',
      color: 'bg-blue-100 text-blue-600',
      status: 'Active'
    },
    {
      icon: faUserMd,
      title: 'Doctor Management',
      description: 'Complete doctor profile management with scheduling, availability tracking, and performance metrics.',
      color: 'bg-green-100 text-green-600',
      status: 'Active'
    },
    {
      icon: faCalendarAlt,
      title: 'Smart Scheduling',
      description: 'AI-powered appointment scheduling with conflict detection and automatic optimization.',
      color: 'bg-purple-100 text-purple-600',
      status: 'Active'
    },
    {
      icon: faFileAlt,
      title: 'Electronic Health Records',
      description: 'Secure, comprehensive patient records with easy access and sharing capabilities.',
      color: 'bg-orange-100 text-orange-600',
      status: 'Active'
    },
    {
      icon: faBell,
      title: 'Real-time Notifications',
      description: 'Instant alerts for appointments, emergencies, and important patient updates.',
      color: 'bg-red-100 text-red-600',
      status: 'Active'
    },
    {
      icon: faShieldAlt,
      title: 'HIPAA Compliance',
      description: 'Full HIPAA compliance with advanced security measures and audit trails.',
      color: 'bg-indigo-100 text-indigo-600',
      status: 'Active'
    },
    {
      icon: faMobile,
      title: 'Mobile App',
      description: 'Native mobile applications for doctors and patients with offline capabilities.',
      color: 'bg-pink-100 text-pink-600',
      status: 'Coming Soon'
    },
    {
      icon: faCloud,
      title: 'Cloud Integration',
      description: 'Seamless cloud storage and backup with multi-location access.',
      color: 'bg-cyan-100 text-cyan-600',
      status: 'Active'
    },
    {
      icon: faRobot,
      title: 'AI Assistant',
      description: 'Intelligent AI assistant for diagnosis support and treatment recommendations.',
      color: 'bg-yellow-100 text-yellow-600',
      status: 'Beta'
    },
    {
      icon: faHeartbeat,
      title: 'Vital Signs Monitoring',
      description: 'Real-time vital signs monitoring with IoT device integration.',
      color: 'bg-red-100 text-red-600',
      status: 'Active'
    },
    {
      icon: faSearch,
      title: 'Advanced Search',
      description: 'Powerful search capabilities across all patient records and medical data.',
      color: 'bg-gray-100 text-gray-600',
      status: 'Active'
    },
    {
      icon: faUsers,
      title: 'Multi-user Support',
      description: 'Role-based access control with support for multiple user types and permissions.',
      color: 'bg-teal-100 text-teal-600',
      status: 'Active'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800';
      case 'Coming Soon':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Platform Features</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the comprehensive features that make our Health Dashboard the most advanced
          healthcare management platform available today.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <FontAwesomeIcon icon={faChartLine} className="text-blue-600 text-xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">50+</h3>
          <p className="text-gray-600 text-sm">Total Features</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <FontAwesomeIcon icon={faShieldAlt} className="text-green-600 text-xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">100%</h3>
          <p className="text-gray-600 text-sm">HIPAA Compliant</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <FontAwesomeIcon icon={faCloud} className="text-purple-600 text-xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">99.9%</h3>
          <p className="text-gray-600 text-sm">Uptime</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <FontAwesomeIcon icon={faUsers} className="text-orange-600 text-xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
          <p className="text-gray-600 text-sm">Active Users</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${feature.color}`}>
                <FontAwesomeIcon icon={feature.icon} className="text-lg sm:text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(feature.status)} self-start`}>
                    {feature.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Categories */}
      <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Feature Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faUserMd} className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinical Management</h3>
            <p className="text-gray-600 text-sm">Patient records, diagnosis tracking, treatment plans</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduling</h3>
            <p className="text-gray-600 text-sm">Appointment booking, resource management, calendar sync</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faChartLine} className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
            <p className="text-gray-600 text-sm">Performance metrics, reporting, data visualization</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faShieldAlt} className="text-orange-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
            <p className="text-gray-600 text-sm">Data protection, access control, compliance</p>
          </div>
        </div>
      </div>

      {/* Coming Soon Features */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-blue-100">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
          <p className="text-gray-600 text-sm sm:text-base">Exciting new features in development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faMobile} className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile App</h3>
            <p className="text-gray-600 text-sm">Native iOS and Android applications for on-the-go access</p>
            <div className="mt-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">75% Complete</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faRobot} className="text-green-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Diagnostics</h3>
            <p className="text-gray-600 text-sm">Machine learning powered diagnostic assistance</p>
            <div className="mt-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">60% Complete</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faHeartbeat} className="text-purple-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT Integration</h3>
            <p className="text-gray-600 text-sm">Connect with medical devices and wearables</p>
            <div className="mt-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '40%'}}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">40% Complete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
