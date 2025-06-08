import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWheelchair, 
  faUserMd, 
  faUsers, 
  faBed 
} from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const StatsCards = () => {
  const { patients, doctors, appointments } = useApp();
  
  const stats = [
    {
      title: 'Total Patients',
      value: patients.length.toString(),
      icon: faWheelchair,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      illustration: '👨‍🦽'
    },
    {
      title: 'Consultation',
      value: appointments.length.toString(),
      icon: faUserMd,
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-500',
      illustration: '👩‍⚕️👨‍💼'
    },
    {
      title: 'Staff',
      value: doctors.length.toString(),
      icon: faUsers,
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-500',
      illustration: '👨‍💼👩‍💼'
    },
    {
      title: 'Total Rooms',
      value: '12',
      icon: faBed,
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-500',
      illustration: '🏥'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
              <span className="text-2xl">{stat.illustration}</span>
            </div>
          </div>
          
          <div>
            <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
