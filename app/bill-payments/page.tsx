'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CreditCard, Receipt, Zap, Wallet, ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react'

export default function BillPaymentsPage() {
  const billTypes = [
    {
      icon: CreditCard,
      title: 'Credit Card Bill Payment',
      description: 'Pay your credit card bills instantly with zero convenience fees and earn rewards.',
      features: ['Zero fees', 'Instant payment', 'Reward points', 'Auto-pay option'],
      href: '/bill-payments/credit-card',
      badge: 'Zero Fees'
    },
    {
      icon: Wallet,
      title: 'Loan Repayment',
      description: 'Repay your loans easily with flexible payment options and instant confirmation.',
      features: ['Flexible payment', 'Instant confirmation', 'Multiple banks', 'Auto-debit'],
      href: '/bill-payments/loan',
      badge: 'Easy'
    },
    {
      icon: Zap,
      title: 'Electricity Bill',
      description: 'Pay electricity bills online instantly and get instant confirmation.',
      features: ['Instant payment', 'All providers', 'Bill history', 'Auto-pay'],
      href: '/bill-payments/electricity',
      badge: 'Instant'
    },
    {
      icon: Receipt,
      title: 'Gas Bill Payment',
      description: 'Pay your gas bills online with quick processing and confirmation.',
      features: ['Quick processing', 'All providers', 'Bill alerts', 'Payment history'],
      href: '/bill-payments/gas',
      badge: 'Quick'
    },
    {
      icon: Receipt,
      title: 'Water Bill Payment',
      description: 'Pay water bills online with ease and get instant confirmation.',
      features: ['Easy payment', 'All providers', 'Bill tracking', 'Auto-pay'],
      href: '/bill-payments/water',
      badge: 'Easy'
    },
    {
      icon: Receipt,
      title: 'Mobile & DTH Recharge',
      description: 'Recharge your mobile, DTH, and data cards instantly with exciting offers.',
      features: ['Instant recharge', 'Best offers', 'All operators', 'Auto-recharge'],
      href: '/bill-payments/recharge',
      badge: 'Best Offers'
    }
  ]

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
            Bill Payments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pay all your bills in one place. From credit cards to utilities, recharge to loan repayments - quick, easy, and hassle-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {billTypes.map((bill, index) => {
            const Icon = bill.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={bill.href}
                  className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    {bill.badge && (
                      <span className="text-xs font-semibold bg-accent-100 text-accent-700 px-3 py-1 rounded-full">
                        {bill.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{bill.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{bill.description}</p>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {bill.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-primary-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-primary-600 font-semibold group">
                    <span>Pay Now</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Payment Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl p-8 border-2 border-gray-200 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Bill Payment</h3>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Bill Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-black">
                  <option>Credit Card Bill</option>
                  <option>Electricity Bill</option>
                  <option>Gas Bill</option>
                  <option>Water Bill</option>
                  <option>Mobile Recharge</option>
                  <option>DTH Recharge</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount (₹)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-black"
                />
              </div>
            </div>
            <div className="text-center">
              <button className="px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-colors">
                Proceed to Pay
              </button>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Why Pay Bills with KreditRoute?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Instant Payment</h3>
              <p className="text-sm opacity-90">Pay bills instantly and get immediate confirmation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Safe</h3>
              <p className="text-sm opacity-90">Bank-level security to protect your transactions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Zero Convenience Fees</h3>
              <p className="text-sm opacity-90">Pay credit card bills and utilities with zero fees</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

