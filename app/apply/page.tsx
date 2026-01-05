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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-900"
                    maxLength={10}
                  />
                </div>
                <button
                  onClick={handleGetOTP}
                  disabled={mobileNumber.length !== 10}
                  className="w-full py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Get OTP
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-900 text-center text-2xl tracking-widest"
                    maxLength={6}
                  />
                </div>
                <button
                  onClick={handleVerifyOTP}
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

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center mb-4">
                By continuing, you agree to our Terms & Conditions and Privacy Policy
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Link
                  href="/loans"
                  className="flex flex-col items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                >
                  <CreditCard className="w-8 h-8 text-primary-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Loans</span>
                </Link>
                <Link
                  href="/credit-cards"
                  className="flex flex-col items-center p-4 bg-accent-50 rounded-lg hover:bg-accent-100 transition-colors"
                >
                  <Smartphone className="w-8 h-8 text-accent-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Credit Cards</span>
                </Link>
                <Link
                  href="/investments"
                  className="flex flex-col items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                >
                  <TrendingUp className="w-8 h-8 text-primary-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Investments</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/instant-loan"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              Apply for Instant Personal Loan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

