import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Calendar, FileText, User, Activity, Shield, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OfflineBanner from '../components/OfflineBanner';

const Home: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Health Chat',
      description: 'Get instant health guidance with voice and camera support',
      href: '/chat',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Health Dashboard',
      description: 'Track streaks, reminders, and daily health metrics',
      href: '/',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Video Consultation',
      description: 'Connect with doctors and get prescriptions delivered',
      href: '/consultation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: User,
      title: 'Health Profile',
      description: 'Manage medical records, allergies, and health history',
      href: '/profile',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'Health Streak', value: '7 days', icon: Activity },
    { label: 'Consultations', value: '12', icon: MessageCircle },
    { label: 'Medications', value: '3 active', icon: Shield },
    { label: 'Health Score', value: '85%', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <OfflineBanner />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6"
              >
                Your AI-Powered
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Health Companion
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              >
                Get instant symptom analysis, prescription insights, and personalized health guidance 
                with advanced AI technology - available online and offline.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/chat"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Health Chat
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-green-500 hover:text-green-600 transition-all"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100"
                  >
                    <Icon className="w-8 h-8 text-green-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need for Better Health
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive health tools powered by AI to help you make informed decisions about your wellbeing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      to={feature.href}
                      className="block p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all transform hover:scale-105 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500 to-blue-500">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Take Control of Your Health?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Join thousands of users who trust CURALINE for their health needs.
              </p>
              <Link
                to="/chat"
                className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Now
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;