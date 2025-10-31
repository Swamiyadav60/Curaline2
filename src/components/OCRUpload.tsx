import React, { useState, useRef } from 'react';
import { Upload, Camera, FileText, Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Medication {
  name: string;
  dose?: string;
  frequency?: string;
  duration?: string;
}

interface OCRResult {
  medications: Medication[];
  notes?: string;
}

interface OCRUploadProps {
  onUpload: (file: File) => Promise<OCRResult>;
}

const OCRUpload: React.FC<OCRUploadProps> = ({ onUpload }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<OCRResult | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    setIsUploading(true);
    setResult(null);

    try {
      const ocrResult = await onUpload(file);
      setResult(ocrResult);
    } catch (error) {
      console.error('OCR upload failed:', error);
      alert('Failed to process the image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const addToProfile = (medication: Medication) => {
    // This would integrate with the profile system
    console.log('Adding to profile:', medication);
    alert(`Added ${medication.name} to your profile`);
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? 'border-green-400 bg-green-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileInput}
          className="hidden"
        />

        {isUploading ? (
          <div className="flex flex-col items-center">
            <Loader2 className="w-12 h-12 text-green-500 animate-spin mb-4" />
            <p className="text-lg font-medium text-gray-900">Processing prescription...</p>
            <p className="text-sm text-gray-500">This may take a few moments</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <FileText className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Upload Prescription Image
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Drag and drop your prescription image here, or click to browse
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Upload className="w-4 h-4 mr-2" />
                Browse Files
              </button>
              <button
                onClick={() => cameraInputRef.current?.click()}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-md shadow-sm text-sm font-medium hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Camera className="w-4 h-4 mr-2" />
                Use Camera
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg border border-gray-200 p-6"
          >
            <div className="flex items-center mb-4">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                Prescription Analysis Complete
              </h3>
            </div>

            {result.medications.length > 0 ? (
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Detected Medications:</h4>
                <div className="grid gap-3">
                  {result.medications.map((med, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{med.name}</h5>
                        <div className="text-sm text-gray-600 space-x-4">
                          {med.dose && <span>Dose: {med.dose}</span>}
                          {med.frequency && <span>Frequency: {med.frequency}</span>}
                          {med.duration && <span>Duration: {med.duration}</span>}
                        </div>
                      </div>
                      <button
                        onClick={() => addToProfile(med)}
                        className="ml-4 px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        Add to Profile
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-600">
                No medications were detected in this image. Please ensure the prescription is clear and try again.
              </p>
            )}

            {result.notes && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-1">Additional Notes:</h5>
                <p className="text-sm text-blue-800">{result.notes}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OCRUpload;