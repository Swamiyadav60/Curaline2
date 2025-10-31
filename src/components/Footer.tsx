import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                CURALINE
              </span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              Your AI-powered health companion providing intelligent symptom checking, 
              prescription analysis, and personalized health insights.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Symptom Checker</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">AI Triage</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Prescription Analysis</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Health Tracking</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Medical Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 CURALINE. Built with ❤️ by{' '}
              <a 
                rel="nofollow" 
                target="_blank" 
                href="https://meku.dev"
                className="text-green-600 hover:text-green-700"
              >
                Meku.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;