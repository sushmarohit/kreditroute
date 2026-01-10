'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { PersonalLoanIcon, DigitalProcessIcon, CreditCardIcon, SecureIcon, InstantFundsIcon } from '@/components/icons/IconLibrary'

export default function NotFound() {
  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl p-3 shadow-lg flex items-center justify-center">
              <PersonalLoanIcon />
            </div>
          </motion.div>

          {/* Coming Soon Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            This page is under development. We're working hard to bring you amazing features!
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 transition-all">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto overflow-hidden relative">
                <DigitalProcessIcon />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">New Features</h3>
              <p className="text-sm text-gray-600">Exciting updates are on the way</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 transition-all">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4 mx-auto overflow-hidden relative">
                <CreditCardIcon />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Better Experience</h3>
              <p className="text-sm text-gray-600">Improved user interface and functionality</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 transition-all">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto overflow-hidden relative">
                <SecureIcon />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Enhanced Security</h3>
              <p className="text-sm text-gray-600">Your data protection is our priority</p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-colors shadow-lg"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-600 mb-4">Or explore our available services:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/loans"
                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors text-sm font-medium"
              >
                Loans
              </Link>
              <Link
                href="/credit-cards"
                className="px-4 py-2 bg-accent-50 text-accent-700 rounded-lg hover:bg-accent-100 transition-colors text-sm font-medium"
              >
                Credit Cards
              </Link>
              <Link
                href="/credit-score"
                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors text-sm font-medium"
              >
                Credit Score
              </Link>
              <Link
                href="/investments"
                className="px-4 py-2 bg-accent-50 text-accent-700 rounded-lg hover:bg-accent-100 transition-colors text-sm font-medium"
              >
                Investments
              </Link>
              <Link
                href="/insurance"
                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors text-sm font-medium"
              >
                Insurance
              </Link>
              <Link
                href="/bill-payments"
                className="px-4 py-2 bg-accent-50 text-accent-700 rounded-lg hover:bg-accent-100 transition-colors text-sm font-medium"
              >
                Bill Payments
              </Link>
            </div>
          </motion.div>

          {/* Countdown/Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-6 relative flex items-center justify-center brightness-0 invert">
                <InstantFundsIcon />
              </div>
              <h3 className="text-xl font-bold">We're Working on It!</h3>
            </div>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Our team is working tirelessly to bring you the best financial solutions. 
              Stay tuned for updates and new features. In the meantime, explore our existing services above.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

