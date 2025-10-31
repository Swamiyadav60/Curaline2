import React, { useState } from 'react';
import { Video, Calendar, Clock, MapPin, Star, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OCRUpload from '../components/OCRUpload';
import OfflineBanner from '../components/OfflineBanner';

const Consultation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'book' | 'ocr'>('book');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'General Practice',
      rating: 4.9,
      experience: '15 years',
      location: 'Downtown Medical Center',
      availability: 'Available today',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      rating: 4.8,
      experience: '12 years',
      location: 'Heart Care Clinic',
      availability: 'Next available: Tomorrow',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      rating: 4.9,
      experience: '10 years',
      location: 'Skin Health Institute',
      availability: 'Available today',
      image: 'https://images.unsplash.com/photo-1594824475317-d8b0b4b5b8b5?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const handleOCRUpload = async (file: File) => {
    // Simulate OCR processing
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve({
          medications: [
            {
              name: 'Amoxicillin',
              dose: '500mg',
              frequency: '3 times daily',
              duration: '7 days'
            },
            {
              name: 'Ibuprofen',
              dose: '400mg',
              frequency: 'As needed',
              duration: 'For pain relief'
            }
          ],
          notes: 'Prescription processed successfully. Please verify the extracted information.'
        });
      }, 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <OfflineBanner />
      <Header />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Consultation</h1>
            <p className="text-gray-600">
              Connect with healthcare professionals and manage your prescriptions
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('book')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'book'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Book Consultation
                </button>
                <button
                  onClick={() => setActiveTab('ocr')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'ocr'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Prescription Analysis
                </button>
              </nav>
            </div>
          </div>

          {activeTab === 'book' ? (
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                  <Video className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Available Consultations</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">15 min</div>
                  <div className="text-sm text-gray-600">Average Wait Time</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>

              {/* Available Doctors */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Available Doctors</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {doctors.map((doctor) => (
                    <div key={doctor.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                              <p className="text-sm text-gray-600">{doctor.specialty}</p>
                              <div className="flex items-center mt-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-600 ml-1">{doctor.rating}</span>
                                <span className="text-sm text-gray-400 ml-2">• {doctor.experience}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-green-600 font-medium">{doctor.availability}</div>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <MapPin className="w-3 h-3 mr-1" />
                                {doctor.location}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-3 mt-4">
                            <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all">
                              <Video className="w-4 h-4 mr-2" />
                              Video Call
                            </button>
                            <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                              <Phone className="w-4 h-4 mr-2" />
                              Voice Call
                            </button>
                            <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                              <Calendar className="w-4 h-4 mr-2" />
                              Schedule
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pharmacy Delivery Info */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prescription Delivery</h3>
                <p className="text-gray-700 mb-4">
                  Get your prescribed medications delivered directly to your door within 2-4 hours.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>✓ Free delivery over $25</span>
                  <span>✓ Insurance accepted</span>
                  <span>✓ Same-day delivery available</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Prescription Analysis</h2>
                <p className="text-gray-600 mb-8">
                  Upload a photo of your prescription and our AI will extract medication information, 
                  dosages, and instructions for easy management.
                </p>
                <OCRUpload onUpload={handleOCRUpload} />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consultation;