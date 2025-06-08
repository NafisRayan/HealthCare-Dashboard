import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPhone, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const UpcomingAppointments = () => {
  const { appointments, patients, navigateTo } = useApp();
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get today's appointments
  const today = new Date().toISOString().split('T')[0];
  const todayAppointments = appointments.filter(apt => apt.date === today);

  const handleViewAllAppointments = () => {
    navigateTo('Appointments');
  };

  const weekDays = ['Tue', 'Wed', 'Thursday', 'Fri'];
  const dates = ['29th', '30th', 'December 1st 2024', '2nd'];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h3>
        <button 
          onClick={handleViewAllAppointments}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          View All
        </button>
      </div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button className="p-1 hover:bg-gray-100 rounded">
          <FontAwesomeIcon icon={faChevronLeft} className="text-gray-400 text-sm" />
        </button>
        
        <div className="flex space-x-2">
          {weekDays.map((day, index) => (
            <div key={index} className={`px-3 py-2 rounded-lg text-center ${
              index === 2 ? 'bg-teal-500 text-white' : 'text-gray-600'
            }`}>
              <p className="text-xs">{day}</p>
              <p className="text-xs font-medium">{dates[index]}</p>
            </div>
          ))}
        </div>
        
        <button className="p-1 hover:bg-gray-100 rounded">
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-sm" />
        </button>
      </div>

      {/* Appointments List */}
      <div className="space-y-3">
        {todayAppointments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No appointments scheduled for today</p>
          </div>
        ) : (
          todayAppointments.slice(0, 4).map((appointment, index) => {
            const patient = patients.find(p => p.id === appointment.patientId);
            return (
              <div key={index} className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs sm:text-sm">👤</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{appointment.patientName}</p>
                    <p className="text-xs text-gray-500 truncate">{appointment.type}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 sm:space-x-3 flex-shrink-0">
                  <div className="text-right">
                    <p className="text-xs text-gray-400">🕐 {appointment.time}</p>
                    {appointment.cost && (
                      <p className="text-xs text-gray-600">${appointment.cost}</p>
                    )}
                  </div>
                  <button className="p-1 sm:p-2 text-teal-500 hover:bg-teal-50 rounded-lg">
                    <FontAwesomeIcon icon={faPhone} className="text-xs sm:text-sm" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <FontAwesomeIcon icon={faEllipsisH} className="text-gray-400 text-xs" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default UpcomingAppointments;
