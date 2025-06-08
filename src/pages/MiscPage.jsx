import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCog, 
  faQuestionCircle, 
  faFileAlt, 
  faDownload,
  faBug,
  faLightbulb,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

const MiscPage = () => {
  const helpTopics = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of using the Health Dashboard',
      icon: faLightbulb,
      color: 'bg-yellow-100 text-yellow-600',
      articles: 12
    },
    {
      title: 'Patient Management',
      description: 'How to add, edit, and manage patient records',
      icon: faFileAlt,
      color: 'bg-green-100 text-green-600',
      articles: 8
    },
    {
      title: 'Appointments',
      description: 'Scheduling and managing appointments',
      icon: faCog,
      color: 'bg-purple-100 text-purple-600',
      articles: 6
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: faBug,
      color: 'bg-red-100 text-red-600',
      articles: 15
    }
  ];

  const downloads = [
    {
      name: 'User Manual',
      description: 'Complete guide to using the Health Dashboard',
      size: '2.5 MB',
      format: 'PDF'
    },
    {
      name: 'API Documentation',
      description: 'Technical documentation for developers',
      size: '1.8 MB',
      format: 'PDF'
    },
    {
      name: 'Quick Reference Guide',
      description: 'Handy reference for common tasks',
      size: '0.8 MB',
      format: 'PDF'
    },
    {
      name: 'Training Materials',
      description: 'Presentation slides and training resources',
      size: '5.2 MB',
      format: 'ZIP'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Miscellaneous</h1>
        <p className="text-gray-600 text-sm sm:text-base">Additional resources, help, and support materials</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-600 text-lg sm:text-xl" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Help Center</h3>
          <p className="text-gray-600 text-xs sm:text-sm">Get help and support</p>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <FontAwesomeIcon icon={faDownload} className="text-green-600 text-lg sm:text-xl" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Downloads</h3>
          <p className="text-gray-600 text-xs sm:text-sm">Manuals and resources</p>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <FontAwesomeIcon icon={faBug} className="text-purple-600 text-lg sm:text-xl" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Report Bug</h3>
          <p className="text-gray-600 text-xs sm:text-sm">Report issues</p>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-orange-600 text-lg sm:text-xl" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Contact</h3>
          <p className="text-gray-600 text-xs sm:text-sm">Get in touch</p>
        </div>
      </div>

      {/* Help Topics */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Help Topics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {helpTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${topic.color}`}>
                  <FontAwesomeIcon icon={topic.icon} className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{topic.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{topic.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{topic.articles} articles</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Downloads */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Downloads</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Available Downloads</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {downloads.map((download, index) => (
              <div key={index} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faFileAlt} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{download.name}</h4>
                      <p className="text-sm text-gray-500">{download.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-400">{download.size}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">{download.format}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm flex items-center space-x-2">
                    <FontAwesomeIcon icon={faDownload} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Email Support</p>
                <p className="text-sm text-gray-500">support@healthdashboard.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Phone Support</p>
                <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Office Address</p>
                <p className="text-sm text-gray-500">123 Healthcare Ave, Medical City, MC 12345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Version</span>
              <span className="text-sm font-medium text-gray-900">2.1.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Last Updated</span>
              <span className="text-sm font-medium text-gray-900">January 15, 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">License</span>
              <span className="text-sm font-medium text-gray-900">Enterprise</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Support Level</span>
              <span className="text-sm font-medium text-gray-900">Premium</span>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 text-sm">
              Check for Updates
            </button>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-blue-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">We Value Your Feedback</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Help us improve the Health Dashboard by sharing your thoughts and suggestions</p>

          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you think..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 font-medium"
              >
                Send Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscPage;
