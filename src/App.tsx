import React, { useEffect, useState } from 'react';
import { 
  Heart, 
  Brain, 
  FileText, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  Stethoscope,
  Eye,
  Clock,
  Lock
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(10); // Change this to desired seconds

  useEffect(() => {
    setIsVisible(true);

    // Countdown timer for redirect
    const timer = setInterval(() => {
      setRedirectTimer((prev) => {
        if (prev <= 1) {
          // Perform the redirect
          window.location.href = 'https://medical-bot-frontend.vercel.app';
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI reads and interprets your medical documents, providing clear summaries in plain English."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Image Recognition",
      description: "Upload photos of medical images, prescriptions, or symptoms for instant AI analysis and insights."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Level Security",
      description: "Your health data is encrypted and stored with enterprise-grade security protocols."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Summaries",
      description: "Get immediate, easy-to-understand explanations of complex medical information."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300 rounded-full opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              HealthBridge
            </h1>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Redirecting in</span>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-600">
              {redirectTimer}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-20 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-8">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-medium">Your Personal AI Health Assistant</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Medical Records Into
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Clear Insights
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Upload your medical documents and let our advanced AI provide you with 
              easy-to-understand summaries. No more medical jargon—just clear, 
              actionable health information.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <div className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transform hover:scale-105 transition-all duration-300 cursor-pointer flex items-center space-x-2">
                <span>Enter HealthBridge</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Lock className="w-5 h-5" />
                <span>HIPAA Compliant & Secure</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600 group-hover:text-teal-600 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* How It Works Section */}
          <div className={`bg-white/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-xl transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How HealthBridge Works</h2>
              <p className="text-xl text-gray-600">Simple, secure, and powerful</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">1. Upload</h3>
                <p className="text-gray-600">Securely upload your medical documents, prescriptions, or lab results</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">2. Analyze</h3>
                <p className="text-gray-600">Our AI analyzes and interprets your medical information</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">3. Understand</h3>
                <p className="text-gray-600">Get clear, actionable insights about your health in plain English</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-20 text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-gray-500 mb-8">Trusted by thousands of patients and healthcare professionals</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-6 h-6 text-blue-600" />
                <span className="font-medium">End-to-End Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-red-500" />
                <span className="font-medium">Healthcare Grade</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-gray-200 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 HealthBridge. Your health, simplified by AI.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
