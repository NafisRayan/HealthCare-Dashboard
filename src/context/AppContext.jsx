import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Demo Data
const demoPatients = [
  {
    id: 1,
    name: 'Emily Johnson',
    age: 28,
    gender: 'Female',
    phone: '+1 (555) 123-4567',
    email: 'emily.johnson@email.com',
    address: '123 Main St, New York, NY 10001',
    bloodType: 'A+',
    emergencyContact: 'John Johnson - +1 (555) 987-6543',
    profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    lastVisit: '2024-01-15',
    nextAppointment: '2024-02-01',
    status: 'Active',
    medicalHistory: ['Hypertension', 'Diabetes Type 2'],
    currentMedications: ['Metformin 500mg', 'Lisinopril 10mg'],
    allergies: ['Penicillin', 'Shellfish'],
    vitals: {
      bloodPressure: '120/80',
      heartRate: 72,
      temperature: 98.6,
      weight: 65,
      height: 165
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    age: 35,
    gender: 'Male',
    phone: '+1 (555) 234-5678',
    email: 'michael.chen@email.com',
    address: '456 Oak Ave, Los Angeles, CA 90210',
    bloodType: 'O-',
    emergencyContact: 'Sarah Chen - +1 (555) 876-5432',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    lastVisit: '2024-01-20',
    nextAppointment: '2024-02-05',
    status: 'Active',
    medicalHistory: ['Asthma', 'Seasonal Allergies'],
    currentMedications: ['Albuterol Inhaler', 'Claritin 10mg'],
    allergies: ['Pollen', 'Dust mites'],
    vitals: {
      bloodPressure: '118/75',
      heartRate: 68,
      temperature: 98.4,
      weight: 78,
      height: 180
    }
  },
  {
    id: 3,
    name: 'Sarah Williams',
    age: 42,
    gender: 'Female',
    phone: '+1 (555) 345-6789',
    email: 'sarah.williams@email.com',
    address: '789 Pine St, Chicago, IL 60601',
    bloodType: 'B+',
    emergencyContact: 'David Williams - +1 (555) 765-4321',
    profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    lastVisit: '2024-01-18',
    nextAppointment: '2024-02-03',
    status: 'Active',
    medicalHistory: ['Migraine', 'Anxiety'],
    currentMedications: ['Sumatriptan 50mg', 'Sertraline 25mg'],
    allergies: ['Latex'],
    vitals: {
      bloodPressure: '125/82',
      heartRate: 75,
      temperature: 98.7,
      weight: 62,
      height: 168
    }
  }
];

const demoDoctors = [
  {
    id: 1,
    name: 'Dr. Jaylon Stanton',
    specialty: 'Dentist',
    department: 'Dental',
    phone: '+1 (555) 111-2222',
    email: 'j.stanton@hospital.com',
    experience: '8 years',
    education: 'DDS from Harvard School of Dental Medicine',
    availability: 'Mon-Fri 9:00 AM - 5:00 PM',
    profilePicture: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
    rating: 4.8,
    patientsCount: 245,
    status: 'Available'
  },
  {
    id: 2,
    name: 'Dr. Carla Schleifer',
    specialty: 'Oculist',
    department: 'Ophthalmology',
    phone: '+1 (555) 222-3333',
    email: 'c.schleifer@hospital.com',
    experience: '12 years',
    education: 'MD from Johns Hopkins University',
    availability: 'Mon-Thu 8:00 AM - 6:00 PM',
    profilePicture: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    rating: 4.9,
    patientsCount: 189,
    status: 'Available'
  },
  {
    id: 3,
    name: 'Dr. Hanna Geidt',
    specialty: 'Surgeon',
    department: 'General Surgery',
    phone: '+1 (555) 333-4444',
    email: 'h.geidt@hospital.com',
    experience: '15 years',
    education: 'MD from Mayo Clinic College of Medicine',
    availability: 'Tue-Sat 7:00 AM - 4:00 PM',
    profilePicture: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
    rating: 4.7,
    patientsCount: 156,
    status: 'Busy'
  }
];

const demoAppointments = [
  {
    id: 1,
    patientId: 1,
    patientName: 'Emily Johnson',
    doctorId: 1,
    doctorName: 'Dr. Jaylon Stanton',
    date: '2024-02-01',
    time: '10:00',
    type: 'Regular Checkup',
    status: 'Scheduled',
    duration: 30,
    notes: 'Routine dental cleaning and examination',
    cost: 150
  },
  {
    id: 2,
    patientId: 2,
    patientName: 'Michael Chen',
    doctorId: 2,
    doctorName: 'Dr. Carla Schleifer',
    date: '2024-02-01',
    time: '14:30',
    type: 'Eye Examination',
    status: 'Scheduled',
    duration: 45,
    notes: 'Annual eye exam and vision test',
    cost: 200
  },
  {
    id: 3,
    patientId: 3,
    patientName: 'Sarah Williams',
    doctorId: 3,
    doctorName: 'Dr. Hanna Geidt',
    date: '2024-02-02',
    time: '09:15',
    type: 'Consultation',
    status: 'Scheduled',
    duration: 60,
    notes: 'Pre-surgery consultation',
    cost: 300
  }
];

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const [patients, setPatients] = useState(demoPatients);
  const [doctors, setDoctors] = useState(demoDoctors);
  const [appointments, setAppointments] = useState(demoAppointments);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New appointment scheduled', type: 'info', time: '5 min ago' },
    { id: 2, message: 'Patient Emily Johnson checked in', type: 'success', time: '10 min ago' },
    { id: 3, message: 'Dr. Stanton is running late', type: 'warning', time: '15 min ago' }
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  // Navigation function
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Patient management
  const addPatient = (patient) => {
    const newPatient = { ...patient, id: Date.now() };
    setPatients([...patients, newPatient]);
  };

  const updatePatient = (id, updatedData) => {
    setPatients(patients.map(patient => 
      patient.id === id ? { ...patient, ...updatedData } : patient
    ));
  };

  const deletePatient = (id) => {
    setPatients(patients.filter(patient => patient.id !== id));
  };

  // Doctor management
  const addDoctor = (doctor) => {
    const newDoctor = { ...doctor, id: Date.now() };
    setDoctors([...doctors, newDoctor]);
  };

  const updateDoctor = (id, updatedData) => {
    setDoctors(doctors.map(doctor => 
      doctor.id === id ? { ...doctor, ...updatedData } : doctor
    ));
  };

  // Appointment management
  const addAppointment = (appointment) => {
    const newAppointment = { ...appointment, id: Date.now() };
    setAppointments([...appointments, newAppointment]);
  };

  const updateAppointment = (id, updatedData) => {
    setAppointments(appointments.map(appointment => 
      appointment.id === id ? { ...appointment, ...updatedData } : appointment
    ));
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  // Notification management
  const addNotification = (notification) => {
    const newNotification = { ...notification, id: Date.now(), time: 'Just now' };
    setNotifications([newNotification, ...notifications]);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const value = {
    // State
    currentPage,
    patients,
    doctors,
    appointments,
    selectedPatient,
    selectedDoctor,
    notifications,
    searchQuery,
    
    // Actions
    navigateTo,
    setSelectedPatient,
    setSelectedDoctor,
    setSearchQuery,
    
    // Patient actions
    addPatient,
    updatePatient,
    deletePatient,
    
    // Doctor actions
    addDoctor,
    updateDoctor,
    
    // Appointment actions
    addAppointment,
    updateAppointment,
    deleteAppointment,
    
    // Notification actions
    addNotification,
    removeNotification
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
