import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { useApp } from '../../context/AppContext';

const RevenueChart = () => {
  const { appointments } = useApp();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Calculate revenue from appointments
  const totalRevenue = appointments.reduce((sum, apt) => sum + (apt.cost || 0), 0);
  const estimatedExpenses = totalRevenue * 0.6; // Assume 60% expenses

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Income',
              data: [25, 30, 35, 40, 32, 38, 42, 35, 30, 45, 40, 38],
              backgroundColor: '#3B82F6',
              borderRadius: 4,
              barThickness: 20,
            },
            {
              label: 'Expense',
              data: [15, 20, 25, 30, 22, 28, 32, 25, 20, 35, 30, 28],
              backgroundColor: '#1E40AF',
              borderRadius: 4,
              barThickness: 20,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                usePointStyle: true,
                padding: window.innerWidth < 640 ? 10 : 20,
                font: {
                  size: window.innerWidth < 640 ? 10 : 12
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                font: {
                  size: window.innerWidth < 640 ? 9 : 11
                },
                maxRotation: window.innerWidth < 640 ? 45 : 0
              }
            },
            y: {
              grid: {
                color: '#F3F4F6'
              },
              ticks: {
                font: {
                  size: window.innerWidth < 640 ? 9 : 11
                }
              }
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
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Daily Revenue Report</h3>
      </div>
      
      <div className="mb-4">
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</span>
          <span className="text-sm text-gray-500">${estimatedExpenses.toLocaleString()}</span>
        </div>
        <p className="text-sm text-gray-600">Total Revenue vs Estimated Expenses</p>
      </div>

      <div className="h-64">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default RevenueChart;
