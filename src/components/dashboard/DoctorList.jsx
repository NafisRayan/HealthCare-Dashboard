import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const DoctorList = () => {
  const { doctors, navigateTo } = useApp();

  const handleViewAllDoctors = () => {
    navigateTo('Doctors');
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Doctor List</h3>
        <button 
          onClick={handleViewAllDoctors}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {doctors.slice(0, 3).map((doctor, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-lg">👨‍⚕️</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{doctor.name}</p>
                <p className="text-xs text-gray-500">{doctor.specialty}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${
                    doctor.status === 'Available' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-xs text-gray-400">{doctor.status}</span>
                </div>
              </div>
            </div>
            
            <button className="p-1 hover:bg-gray-100 rounded">
              <FontAwesomeIcon icon={faEllipsisH} className="text-gray-400 text-sm" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
