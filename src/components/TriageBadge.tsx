import React from 'react';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';

interface TriageResult {
  risk: 'Low' | 'Medium' | 'High';
  specialty: string;
  advice: string;
}

interface TriageBadgeProps {
  result: TriageResult;
}

const TriageBadge: React.FC<TriageBadgeProps> = ({ result }) => {
  const getRiskConfig = (risk: string) => {
    switch (risk) {
      case 'High':
        return {
          icon: AlertTriangle,
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          borderColor: 'border-red-200',
          iconColor: 'text-red-600'
        };
      case 'Medium':
        return {
          icon: Clock,
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          borderColor: 'border-yellow-200',
          iconColor: 'text-yellow-600'
        };
      case 'Low':
        return {
          icon: CheckCircle,
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          borderColor: 'border-green-200',
          iconColor: 'text-green-600'
        };
      default:
        return {
          icon: Clock,
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          borderColor: 'border-gray-200',
          iconColor: 'text-gray-600'
        };
    }
  };

  const config = getRiskConfig(result.risk);
  const Icon = config.icon;

  return (
    <div className={`p-4 rounded-lg border ${config.bgColor} ${config.borderColor}`}>
      <div className="flex items-start space-x-3">
        <Icon className={`w-5 h-5 mt-0.5 ${config.iconColor}`} />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`text-sm font-semibold ${config.textColor}`}>
              {result.risk} Risk
            </span>
            <span className="text-sm text-gray-600">•</span>
            <span className="text-sm text-gray-700">{result.specialty}</span>
          </div>
          <p className="text-sm text-gray-700">{result.advice}</p>
        </div>
      </div>
    </div>
  );
};

export default TriageBadge;