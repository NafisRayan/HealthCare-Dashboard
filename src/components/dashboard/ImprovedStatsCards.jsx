import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserInjured, 
  faStethoscope, 
  faUserMd, 
  faHospital
} from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const ImprovedStatsCards = () => {
  const { patients, doctors, appointments } = useApp();
  
  const stats = [
    {
      title: 'Total Patients',
      value: patients.length.toString(),
      icon: faUserInjured,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      description: 'Active patients in system'
    },
    {
      title: 'Consultations',
      value: appointments.length.toString(),
      icon: faStethoscope,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      description: 'Total appointments scheduled'
    },
    {
      title: 'Medical Staff',
      value: doctors.length.toString(),
      icon: faUserMd,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      description: 'Healthcare professionals'
    },
    {
      title: 'Hospital Rooms',
      value: '12',
      icon: faHospital,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      description: 'Available treatment rooms'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 ${stat.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <FontAwesomeIcon icon={stat.icon} className={`text-xl sm:text-2xl ${stat.iconColor}`} />
            </div>
            <div className="text-right">
              <div className={`w-2 h-2 rounded-full ${stat.iconColor.replace('text-', 'bg-')} opacity-60`}></div>
            </div>
          </div>
          
          <div>
            <p className="text-gray-600 text-xs sm:text-sm mb-1 font-medium">{stat.title}</p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImprovedStatsCards;
