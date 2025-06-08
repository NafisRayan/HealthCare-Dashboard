import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const PaymentsHistory = () => {
  const { appointments, doctors } = useApp();

  // Create payment history from appointments
  const payments = appointments.slice(0, 3).map(appointment => {
    const doctor = doctors.find(d => d.id === appointment.doctorId);
    return {
      doctor: doctor?.name || 'Unknown Doctor',
      service: appointment.type,
      amount: `$${appointment.cost}`,
      date: appointment.date,
      avatar: '👨‍⚕️'
    };
  });

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Payments History</h3>
      </div>

      <div className="space-y-4">
        {payments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No payment history available</p>
          </div>
        ) : (
          payments.map((payment, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">{payment.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{payment.doctor}</p>
                  <p className="text-xs text-gray-500">{payment.service}</p>
                  <p className="text-xs text-gray-400 flex items-center space-x-1">
                    <span>🕐</span>
                    <span>{payment.date}</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-900">{payment.amount}</span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <FontAwesomeIcon icon={faEllipsisH} className="text-gray-400 text-xs" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PaymentsHistory;
