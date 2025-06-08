import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserInjured,
  faStethoscope,
  faUserMd,
  faHospital
} from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const StatsCards = () => {
  const { patients, doctors, appointments } = useApp();

  const stats = [
    {
      title: 'Total Patients',
      value: patients.length.toString(),
      icon: faUserInjured,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Consultation',
      value: appointments.length.toString(),
      icon: faStethoscope,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Staff',
      value: doctors.length.toString(),
      icon: faUserMd,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Total Rooms',
      value: '12',
      icon: faHospital,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
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
