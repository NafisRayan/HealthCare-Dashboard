import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { useApp } from '../../context/AppContext';

const AppointmentsOverview = () => {
  const { patients } = useApp();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Calculate demographics from patients
  const demographics = patients.reduce((acc, patient) => {
    if (patient.age < 18) {
      acc.Child++;
    } else if (patient.age > 65) {
      acc.Germatic++;
    } else if (patient.gender === 'Male') {
      acc.Male++;
    } else if (patient.gender === 'Female') {
      acc.Female++;
    }
    return acc;
  }, { Male: 0, Female: 0, Child: 0, Germatic: 0 });

  const total = Object.values(demographics).reduce((sum, count) => sum + count, 0);

  useEffect(() => {
    if (chartRef.current && total > 0) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Male', 'Female', 'Child', 'Germatic'],
          datasets: [{
            data: [demographics.Male, demographics.Female, demographics.Child, demographics.Germatic],
            backgroundColor: [
              '#3B82F6', // Blue for Male
              '#EC4899', // Pink for Female  
              '#F59E0B', // Orange for Child
              '#10B981'  // Green for Germatic
            ],
            borderWidth: 0,
            cutout: '70%'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [demographics, total]);

  const legendItems = [
    { label: 'Male', color: '#3B82F6', count: demographics.Male },
    { label: 'Female', color: '#EC4899', count: demographics.Female },
    { label: 'Child', color: '#F59E0B', count: demographics.Child },
    { label: 'Germatic', color: '#10B981', count: demographics.Germatic }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Patient Demographics</h3>
      </div>

      {total === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No patient data available</p>
        </div>
      ) : (
        <div className="flex items-center space-x-6">
          {/* Chart */}
          <div className="w-32 h-32 relative">
            <canvas ref={chartRef}></canvas>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{total}</p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 space-y-3">
            {legendItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-gray-900">{item.count}</span>
                  <span className="text-xs text-gray-500 ml-1">
                    ({total > 0 ? Math.round((item.count / total) * 100) : 0}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsOverview;
