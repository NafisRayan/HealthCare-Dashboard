import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faEdit, 
  faTrash, 
  faEye, 
  faSearch,
  faTimes,
  faUserMd,
  faPhone,
  faEnvelope,
  faStar,
  faUsers,
  faCalendar
} from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../context/AppContext';

const DoctorsPage = () => {
  const { doctors, addDoctor, updateDoctor, searchQuery } = useApp();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    department: '',
    phone: '',
    email: '',
    experience: '',
    education: '',
    availability: ''
  });

  // Filter doctors based on search query
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddDoctor = (e) => {
    e.preventDefault();
    addDoctor({
      ...formData,
      profilePicture: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      rating: 4.5,
      patientsCount: 0,
      status: 'Available'
    });
    setFormData({
      name: '',
      specialty: '',
      department: '',
      phone: '',
      email: '',
      experience: '',
      education: '',
      availability: ''
    });
    setShowAddModal(false);
  };

  const handleEditDoctor = (e) => {
    e.preventDefault();
    updateDoctor(currentDoctor.id, formData);
    setShowEditModal(false);
    setCurrentDoctor(null);
  };

  const openEditModal = (doctor) => {
    setCurrentDoctor(doctor);
    setFormData({
      name: doctor.name,
      specialty: doctor.specialty,
      department: doctor.department,
      phone: doctor.phone,
      email: doctor.email,
      experience: doctor.experience,
      education: doctor.education,
      availability: doctor.availability
    });
    setShowEditModal(true);
  };

  const openViewModal = (doctor) => {
    setCurrentDoctor(doctor);
    setShowViewModal(true);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Doctors</h1>
          <p className="text-gray-600 text-sm sm:text-base">Manage medical staff and their information</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors text-sm sm:text-base"
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className="hidden sm:inline">Add Doctor</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Doctors</p>
              <p className="text-2xl font-bold text-gray-900">{doctors.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faUserMd} className="text-blue-500" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Available</p>
              <p className="text-2xl font-bold text-gray-900">{doctors.filter(d => d.status === 'Available').length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faUserMd} className="text-green-500" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">On Duty</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faCalendar} className="text-purple-500" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Departments</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faUsers} className="text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
              <img
                src={doctor.profilePicture}
                alt={doctor.name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{doctor.name}</h3>
                <p className="text-blue-600 font-medium text-sm sm:text-base truncate">{doctor.specialty}</p>
                <p className="text-gray-500 text-xs sm:text-sm truncate">{doctor.department}</p>
              </div>
              <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                doctor.status === 'Available' ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
                {doctor.phone}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2" />
                {doctor.email}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FontAwesomeIcon icon={faStar} className="w-4 h-4 mr-2 text-yellow-500" />
                {doctor.rating} ({doctor.patientsCount} patients)
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => openViewModal(doctor)}
                className="flex-1 px-2 sm:px-3 py-2 text-xs sm:text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <FontAwesomeIcon icon={faEye} className="mr-1" />
                <span className="hidden sm:inline">View</span>
              </button>
              <button
                onClick={() => openEditModal(doctor)}
                className="flex-1 px-2 sm:px-3 py-2 text-xs sm:text-sm bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
              >
                <FontAwesomeIcon icon={faEdit} className="mr-1" />
                <span className="hidden sm:inline">Edit</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Doctor Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Add New Doctor</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <form onSubmit={handleAddDoctor} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                  <input
                    type="text"
                    required
                    value={formData.specialty}
                    onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <input
                    type="text"
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                <input
                  type="text"
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 5 years"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Doctor Modal */}
      {showViewModal && currentDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Doctor Details</h3>
              <button
                onClick={() => setShowViewModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <div className="text-center mb-6">
              <img
                src={currentDoctor.profilePicture}
                alt={currentDoctor.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h2 className="text-xl font-bold text-gray-900">{currentDoctor.name}</h2>
              <p className="text-blue-600 font-medium">{currentDoctor.specialty}</p>
              <p className="text-gray-500">{currentDoctor.department}</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <p className="text-gray-900">{currentDoctor.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="text-gray-900">{currentDoctor.email}</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Experience</label>
                <p className="text-gray-900">{currentDoctor.experience}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Education</label>
                <p className="text-gray-900">{currentDoctor.education}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Availability</label>
                <p className="text-gray-900">{currentDoctor.availability}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rating</label>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                    <span className="text-gray-900">{currentDoctor.rating}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Patients</label>
                  <p className="text-gray-900">{currentDoctor.patientsCount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorsPage;
