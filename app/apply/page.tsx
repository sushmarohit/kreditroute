'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Smartphone, CreditCard, TrendingUp } from 'lucide-react'

export default function ApplyPage() {
  const [mobileNumber, setMobileNumber] = useState('')
  const [showOTP, setShowOTP] = useState(false)
  const [otp, setOtp] = useState('')

  const handleGetOTP = () => {
    if (mobileNumber.length === 10) {
      setShowOTP(true)
    }
  }

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      // Redirect to offers or loan application
      window.location.href = '/instant-loan'
    }
  }

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Check Your Pre-approved Offers
            </h1>
            <p className="text-xl text-gray-600">
              Enter your mobile number to see exclusive loan, credit card, and investment offers
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
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
              <p className="text-xs text-gray-500 text-center mb-4">
                By continuing, you agree to our Terms & Conditions and Privacy Policy
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.05
                  }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.1 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.1,
                      repeatType: "reverse"
                    }
                  }}
                >
                  <Link
                    href="/loans"
                    className="flex flex-col items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors hover:shadow-lg group"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                    >
                      <CreditCard className="w-8 h-8 text-primary-600 mb-2" />
                    </motion.div>
                    <span className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">Loans</span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.05
                  }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.2 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                      repeatType: "reverse"
                    }
                  }}
                >
                  <Link
                    href="/credit-cards"
                    className="flex flex-col items-center p-4 bg-accent-50 rounded-lg hover:bg-accent-100 transition-colors hover:shadow-lg group"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                    >
                      <Smartphone className="w-8 h-8 text-accent-600 mb-2" />
                    </motion.div>
                    <span className="text-sm font-medium text-gray-900 group-hover:text-accent-600 transition-colors">Credit Cards</span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.05
                  }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.3 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                      repeatType: "reverse"
                    }
                  }}
                >
                  <Link
                    href="/investments"
                    className="flex flex-col items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors hover:shadow-lg group"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                    >
                      <TrendingUp className="w-8 h-8 text-primary-600 mb-2" />
                    </motion.div>
                    <span className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">Investments</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, x: 4 }}
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                x: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }
              }}
            >
              <Link
                href="/instant-loan"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
              >
                Apply for Instant Personal Loan
                <motion.div
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

