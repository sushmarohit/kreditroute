'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Wallet, Home, Briefcase, FileText, TrendingUp, ArrowRight, CheckCircle, Clock, Percent } from 'lucide-react'

export default function LoansPage() {
  const loanTypes = [
    {
      icon: Wallet,
      title: 'Personal Loan',
      description: 'Get instant personal loans up to ₹40 Lakhs with quick approval and flexible repayment options.',
      features: ['Quick approval', 'No collateral required', 'Flexible tenure', 'Competitive interest rates'],
      href: '/instant-loan',
      badge: '₹500 Cashback',
      amount: 'Up to ₹40 Lakhs',
      rate: 'Starting from 10.5% p.a.',
      time: 'Approved in 24 hours'
    },
    {
      icon: Home,
      title: 'Home Loan',
      description: 'Fulfill your dream of owning a home with our attractive home loan offers and easy documentation.',
      features: ['Long repayment tenure', 'Low interest rates', 'Tax benefits', 'Quick processing'],
      href: '/instant-loan',
      amount: 'Up to ₹5 Crores',
      rate: 'Starting from 8.5% p.a.',
      time: 'Sanctioned in 3-5 days'
    },
    {
      icon: Briefcase,
      title: 'Business Loan',
      description: 'Fuel your business growth with flexible business loans tailored to your needs.',
      features: ['No collateral required', 'Quick disbursal', 'Flexible repayment', 'Competitive rates'],
      href: '/instant-loan',
      amount: 'Up to ₹50 Lakhs',
      rate: 'Starting from 12% p.a.',
      time: 'Approved in 48 hours'
    },
    {
      icon: FileText,
      title: 'Loan Against Property',
      description: 'Unlock the value of your property and get funds for your financial needs.',
      features: ['High loan amount', 'Low interest rates', 'Long tenure', 'Easy documentation'],
      href: '/instant-loan',
      amount: 'Up to ₹10 Crores',
      rate: 'Starting from 9% p.a.',
      time: 'Sanctioned in 5-7 days'
    },
    {
      icon: TrendingUp,
      title: 'Transfer Home Loan',
      description: 'Save on interest by transferring your existing home loan to better rates.',
      features: ['Lower interest rates', 'Top-up facility', 'Balance transfer', 'No prepayment charges'],
      href: '/instant-loan',
      amount: 'Balance Transfer',
      rate: 'Starting from 8.25% p.a.',
      time: 'Processed in 7-10 days'
    },
    {
      icon: Wallet,
      title: 'Consumer Durable Loan',
      description: 'Buy your favorite appliances and electronics with easy financing options.',
      features: ['Zero down payment', 'Quick approval', 'Flexible EMI', 'Wide product range'],
      href: '/instant-loan',
      amount: 'Up to ₹5 Lakhs',
      rate: 'Starting from 14% p.a.',
      time: 'Approved instantly'
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
            Loans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from a wide range of loan products designed to meet your financial needs. Quick approval, competitive rates, and flexible repayment options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loanTypes.map((loan, index) => {
            const Icon = loan.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  y: [0, -6, 0],
                  opacity: 1
                }}
                transition={{
                  default: { duration: 0.6, delay: index * 0.1 },
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                    repeatType: "reverse"
                  }
                }}
              >
                <Link
                  href={loan.href}
                  className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-2xl transition-all duration-300 h-full group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center"
                      whileHover={{ 
                        rotate: [0, -15, 15, -15, 0],
                        scale: 1.15,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Icon className="w-7 h-7 text-primary-600" />
                    </motion.div>
                    {loan.badge && (
                      <motion.span 
                        className="text-xs font-semibold bg-accent-100 text-accent-700 px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        {loan.badge}
                      </motion.span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{loan.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{loan.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Wallet className="w-4 h-4 text-primary-600" />
                      <span className="font-medium">{loan.amount}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Percent className="w-4 h-4 text-primary-600" />
                      <span>{loan.rate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock className="w-4 h-4 text-primary-600" />
                      <span>{loan.time}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {loan.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-primary-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    className="flex items-center text-primary-600 font-semibold"
                    whileHover={{ x: 4 }}
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose KreditRoute for Loans?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Approval</h3>
              <p className="text-sm opacity-90">Get loan approval in as little as 24 hours with minimal documentation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Rates</h3>
              <p className="text-sm opacity-90">Enjoy competitive interest rates starting from 8.5% p.a.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Transparent Process</h3>
              <p className="text-sm opacity-90">No hidden charges, complete transparency in terms and conditions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

