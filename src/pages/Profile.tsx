import React, { useState } from 'react';
import { User, Heart, AlertTriangle, Pill, FileText, Edit3, Save, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OfflineBanner from '../components/OfflineBanner';

interface ProfileData {
  name: string;
  age: number;
  sex: string;
  email: string;
  phone: string;
  allergies: string[];
  conditions: string[];
  medications: Array<{
    name: string;
    dose: string;
    frequency: string;
    startDate: string;
  }>;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
}

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'John Doe',
    age: 32,
    sex: 'Male',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    allergies: ['Penicillin', 'Shellfish', 'Pollen'],
    conditions: ['Hypertension', 'Type 2 Diabetes'],
    medications: [
      {
        name: 'Metformin',
        dose: '500mg',
        frequency: 'Twice daily',
        startDate: '2024-01-15'
      },
      {
        name: 'Lisinopril',
        dose: '10mg',
        frequency: 'Once daily',
        startDate: '2024-02-01'
      }
    ],
    emergencyContact: {
      name: 'Jane Doe',
      phone: '+1 (555) 987-6543',
      relationship: 'Spouse'
    }
  });

  const [editData, setEditData] = useState<ProfileData>(profileData);

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const addAllergy = () => {
    setEditData({
      ...editData,
      allergies: [...editData.allergies, '']
    });
  };

  const removeAllergy = (index: number) => {
    setEditData({
      ...editData,
      allergies: editData.allergies.filter((_, i) => i !== index)
    });
  };

  const updateAllergy = (index: number, value: string) => {
    const newAllergies = [...editData.allergies];
    newAllergies[index] = value;
    setEditData({
      ...editData,
      allergies: newAllergies
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <OfflineBanner />
      <Header />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Profile</h1>
              <p className="text-gray-600">
                Manage your medical information, allergies, and health records
              </p>
            </div>
            <div className="flex space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Personal Information */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-6">
                  <User className="w-5 h-5 text-green-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    {isEditing ? (
                      <input
                        type="number"
                        value={editData.age}
                        onChange={(e) => setEditData({ ...editData, age: parseInt(e.target.value) })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.age} years</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sex</label>
                    {isEditing ? (
                      <select
                        value={editData.sex}
                        onChange={(e) => setEditData({ ...editData, sex: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <p className="text-gray-900">{profileData.sex}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.email}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Medical Conditions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-6">
                  <Heart className="w-5 h-5 text-red-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Medical Conditions</h2>
                </div>
                
                <div className="space-y-2">
                  {profileData.conditions.map((condition, index) => (
                    <div key={index} className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
                      <Heart className="w-4 h-4 text-red-500 mr-3" />
                      <span className="text-red-800">{condition}</span>
                    </div>
                  ))}
                  {profileData.conditions.length === 0 && (
                    <p className="text-gray-500 italic">No medical conditions recorded</p>
                  )}
                </div>
              </div>

              {/* Allergies */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                    <h2 className="text-xl font-semibold text-gray-900">Allergies</h2>
                  </div>
                  {isEditing && (
                    <button
                      onClick={addAllergy}
                      className="text-sm text-green-600 hover:text-green-700"
                    >
                      + Add Allergy
                    </button>
                  )}
                </div>
                
                <div className="space-y-2">
                  {(isEditing ? editData.allergies : profileData.allergies).map((allergy, index) => (
                    <div key={index} className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mr-3" />
                      {isEditing ? (
                        <div className="flex items-center flex-1">
                          <input
                            type="text"
                            value={allergy}
                            onChange={(e) => updateAllergy(index, e.target.value)}
                            className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                          />
                          <button
                            onClick={() => removeAllergy(index)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-yellow-800">{allergy}</span>
                      )}
                    </div>
                  ))}
                  {profileData.allergies.length === 0 && (
                    <p className="text-gray-500 italic">No allergies recorded</p>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Current Medications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <Pill className="w-5 h-5 text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Current Medications</h3>
                </div>
                
                <div className="space-y-3">
                  {profileData.medications.map((med, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="font-medium text-blue-900">{med.name}</div>
                      <div className="text-sm text-blue-700">{med.dose} - {med.frequency}</div>
                      <div className="text-xs text-blue-600">Since {med.startDate}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-5 h-5 text-purple-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Emergency Contact</h3>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Name</div>
                    <div className="text-gray-900">{profileData.emergencyContact.name}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Phone</div>
                    <div className="text-gray-900">{profileData.emergencyContact.phone}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Relationship</div>
                    <div className="text-gray-900">{profileData.emergencyContact.relationship}</div>
                  </div>
                </div>
              </div>

              {/* Health Summary */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Check-up:</span>
                    <span className="text-gray-900">Dec 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Health Score:</span>
                    <span className="text-green-600 font-medium">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Medications:</span>
                    <span className="text-gray-900">{profileData.medications.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;