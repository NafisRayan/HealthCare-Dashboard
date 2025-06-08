import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const Balance = () => {
  const { appointments } = useApp();
  
  // Calculate income from appointments
  const totalIncome = appointments.reduce((sum, apt) => sum + (apt.cost || 0), 0);
  const totalOutcome = Math.round(totalIncome * 0.65); // Assume 65% outcome

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Balance</h3>
      </div>

      <div className="space-y-6">
        {/* Income */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowUp} className="text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Income</p>
              <p className="text-xl font-bold text-gray-900">${totalIncome.toLocaleString()}</p>
            </div>
          </div>
          <div className="w-20 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-60 rounded-lg transform rotate-12"></div>
          </div>
        </div>

        {/* Outcome */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowDown} className="text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Outcome</p>
              <p className="text-xl font-bold text-gray-900">${totalOutcome.toLocaleString()}</p>
            </div>
          </div>
          <div className="w-20 h-12 bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-60 rounded-lg transform -rotate-12"></div>
          </div>
        </div>

        {/* Net Profit */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Net Profit</p>
              <p className={`text-lg font-bold ${
                (totalIncome - totalOutcome) >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                ${(totalIncome - totalOutcome).toLocaleString()}
              </p>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              (totalIncome - totalOutcome) >= 0 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {((totalIncome - totalOutcome) / totalIncome * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
