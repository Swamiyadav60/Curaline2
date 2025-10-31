import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatBox from '../components/ChatBox';
import TriageBadge from '../components/TriageBadge';
import OfflineBanner from '../components/OfflineBanner';

const Chat: React.FC = () => {
  const handleSendMessage = async (message: string) => {
    // Simulate API call to backend
    try {
      // This would normally call your Flask backend
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      // Fallback response for demo
      return {
        answer: "I understand you're experiencing some symptoms. While I can provide general health information, I recommend consulting with a healthcare professional for proper diagnosis and treatment. Can you tell me more about what you're experiencing?",
        structured: {
          symptoms: [],
          red_flags: [],
          vitals_requested: []
        }
      };
    }
  };

  // Demo triage result
  const sampleTriageResult = {
    risk: 'Medium' as const,
    specialty: 'General Practice',
    advice: 'Consider scheduling an appointment with your primary care physician within the next few days.'
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <OfflineBanner />
      <Header />
      
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Health Assistant</h1>
            <p className="text-gray-600">
              Describe your symptoms and get personalized health guidance. Use voice input or camera for enhanced interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="h-[600px]">
                <ChatBox onSendMessage={handleSendMessage} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-gray-900">Symptom Checker</div>
                    <div className="text-sm text-gray-600">Get AI-powered symptom analysis</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-gray-900">Upload Prescription</div>
                    <div className="text-sm text-gray-600">Analyze prescription images</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-gray-900">Book Appointment</div>
                    <div className="text-sm text-gray-600">Schedule with specialists</div>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Triage</h3>
                <TriageBadge result={sampleTriageResult} />
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Tips</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>💡 Be specific about your symptoms for better analysis</p>
                  <p>🚨 Seek immediate care for severe symptoms</p>
                  <p>📱 Use voice input for hands-free interaction</p>
                  <p>📸 Upload images for visual symptom analysis</p>
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

export default Chat;