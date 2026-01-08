'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Shield, FileText, CheckCircle, ArrowRight, BarChart, AlertCircle, Target } from 'lucide-react'
import { useState } from 'react'

export default function CreditScorePage() {
  const [mobileNumber, setMobileNumber] = useState('')
  const [showOTP, setShowOTP] = useState(false)
  const [otp, setOtp] = useState('')

  const services = [
    {
      icon: TrendingUp,
      title: 'Free Credit Score',
      description: 'Check your credit score for free and understand your credit health instantly.',
      features: ['Free credit score', 'Credit report access', 'Score insights', 'Monthly updates'],
      href: '/credit-score/check',
      badge: 'Free'
    },
    {
      icon: Shield,
      title: 'Credit Health Pro',
      description: 'Advanced credit monitoring with detailed insights and personalized recommendations.',
      features: ['Advanced monitoring', 'Detailed insights', 'Personalized tips', 'Score improvement plan'],
      href: '/credit-score/pro',
      badge: 'Pro'
    },
    {
      icon: CheckCircle,
      title: 'Fix your Credit Score',
      description: 'Get expert guidance to improve your credit score with actionable steps.',
      features: ['Expert consultation', 'Action plan', 'Score tracking', 'Improvement tips'],
      href: '/credit-score/fix'
    },
    {
      icon: FileText,
      title: 'Video Credit Report',
      description: 'Understand your credit report easily with video explanations and insights.',
      features: ['Video explanations', 'Easy to understand', 'Detailed analysis', 'Action items'],
      href: '/credit-score/report'
    }
  ]

  const scoreRanges = [
    { range: '750-900', label: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' },
    { range: '700-749', label: 'Good', color: 'text-blue-600', bg: 'bg-blue-100' },
    { range: '650-699', label: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { range: '300-649', label: 'Poor', color: 'text-red-600', bg: 'bg-red-100' },
  ]

  const handleGetOTP = () => {
    if (mobileNumber.length === 10) {
      setShowOTP(true)
    }
  }

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Credit Score & Credit Health
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check your credit score for free, monitor your credit health, and get expert guidance to improve your credit profile.
          </p>
        </motion.div>

        {/* Credit Score Check Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Your Credit Score</h2>
              <p className="text-gray-600 mb-6">
                Get your free credit score instantly. No credit card required. Check your score and understand your credit health.
              </p>
              
              {!showOTP ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="Enter 10-digit mobile number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-black placeholder:text-gray-400"
                      maxLength={10}
                    />
                  </div>
                  <button
                    onClick={handleGetOTP}
                    disabled={mobileNumber.length !== 10}
                    className="w-full py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Check Credit Score
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter OTP sent to {mobileNumber.slice(0, 2)}XXXXXX{mobileNumber.slice(-2)}
                    </label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="Enter 6-digit OTP"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-black placeholder:text-gray-400 text-center text-2xl tracking-widest"
                      maxLength={6}
                    />
                  </div>
                  <button
                    onClick={() => {/* Handle OTP verification */}}
                    disabled={otp.length !== 6}
                    className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Verify OTP
                  </button>
                  <button
                    onClick={() => setShowOTP(false)}
                    className="w-full py-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Change Mobile Number
                  </button>
                </div>
              )}
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">770</h3>
                <p className="text-lg text-gray-600 mb-4">Excellent</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Payment History</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Credit Utilization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Credit Score Ranges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Understanding Credit Score Ranges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scoreRanges.map((range, index) => (
              <div key={index} className={`${range.bg} rounded-xl p-6 text-center`}>
                <div className={`text-3xl font-bold ${range.color} mb-2`}>{range.range}</div>
                <div className={`text-lg font-semibold ${range.color}`}>{range.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    {service.badge && (
                      <span className="text-xs font-semibold bg-accent-100 text-accent-700 px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-primary-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-primary-600 font-semibold group">
                    <span>Explore</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Tips to Improve Your Credit Score</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pay on Time</h3>
              <p className="text-sm opacity-90">Always pay your bills and EMIs on time to maintain a good payment history</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Keep Utilization Low</h3>
              <p className="text-sm opacity-90">Maintain credit utilization below 30% of your total credit limit</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Monitor Regularly</h3>
              <p className="text-sm opacity-90">Check your credit report regularly and dispute any errors immediately</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

