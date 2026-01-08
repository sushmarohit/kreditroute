'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Smartphone, TrendingUp, Shield } from 'lucide-react'
import { useState } from 'react'

export function HomeHero() {
  const [mobileNumber, setMobileNumber] = useState('')
  const [showOTP, setShowOTP] = useState(false)
  const [otp, setOtp] = useState('')

  const handleGetOTP = () => {
    if (mobileNumber.length === 10) {
      setShowOTP(true)
    }
  }

  const handleVerifyOTP = () => {
    // Handle OTP verification
    if (otp.length === 6) {
      // Redirect to offers page
      window.location.href = '/apply'
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              India's Best Platform for
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Loans, Cards & Investments
              </span>
            </h1>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-bold">%</span>
                </div>
                <span className="text-sm font-medium">One Stop for all Financial Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
                  <span className="text-accent-600">⚡</span>
                </div>
                <span className="text-sm font-medium">Quick, easy & hassle free</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - OTP Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Check Your Pre-approved Offers</h2>
            <p className="text-gray-600 mb-6">Enter your mobile number to see exclusive offers</p>

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
                <motion.button
                  onClick={handleGetOTP}
                  disabled={mobileNumber.length !== 10}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Get OTP</span>
                </motion.button>
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
                <motion.button
                  onClick={handleVerifyOTP}
                  disabled={otp.length !== 6}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(29, 78, 216, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Verify OTP</span>
                </motion.button>
                <motion.button
                  onClick={() => setShowOTP(false)}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Change Mobile Number
                </motion.button>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                By continuing, you agree to our Terms & Conditions and Privacy Policy
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ 
              y: -8,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              default: { duration: 0.5, delay: 0.1 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
                repeatType: "reverse"
              }
            }}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:border-primary-300 transition-all cursor-pointer"
          >
            <motion.div 
              className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4"
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: 1.15,
                transition: { duration: 0.5 }
              }}
            >
              <Smartphone className="w-6 h-6 text-primary-600" />
            </motion.div>
            <h3 className="font-semibold text-gray-900 mb-2">Get The App</h3>
            <p className="text-sm text-gray-600">Download the KreditRoute App Today! Get instant access to loans, credit cards, and financial tools.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              y: -8,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              default: { duration: 0.5, delay: 0.2 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
                repeatType: "reverse"
              }
            }}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:border-accent-300 transition-all cursor-pointer"
          >
            <motion.div 
              className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4"
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: 1.15,
                transition: { duration: 0.5 }
              }}
            >
              <TrendingUp className="w-6 h-6 text-accent-600" />
            </motion.div>
            <h3 className="font-semibold text-gray-900 mb-2">Quick Approval</h3>
            <p className="text-sm text-gray-600">Fast-track loan approvals with minimal documentation. Get funds in your account quickly.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ 
              y: -8,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              default: { duration: 0.5, delay: 0.3 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
                repeatType: "reverse"
              }
            }}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:border-primary-300 transition-all cursor-pointer"
          >
            <motion.div 
              className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4"
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: 1.15,
                transition: { duration: 0.5 }
              }}
            >
              <Shield className="w-6 h-6 text-primary-600" />
            </motion.div>
            <h3 className="font-semibold text-gray-900 mb-2">Secure & Trusted</h3>
            <p className="text-sm text-gray-600">Your financial data is protected with bank-level security. Trusted by millions of users.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

