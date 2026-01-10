'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ComponentType } from 'react'
import { ArrowRight, CheckCircle, Clock, Shield, Sparkles } from 'lucide-react'
import { useState } from 'react'
import {
  CreditCardIcon,
  LoanRepaymentIcon,
  ElectricityBillIcon,
  BillPaymentIcon,
  DigitalProcessIcon,
  InstantFundsIcon,
  SecureIcon
} from '@/components/icons/IconLibrary'

export default function BillPaymentsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const billTypes: Array<{
    IconComponent: ComponentType
    title: string
    description: string
    features: string[]
    href: string
    badge?: string
    gradient: string
    iconBg: string
  }> = [
    {
      IconComponent: CreditCardIcon,
      title: 'Credit Card Bill Payment',
      description: 'Pay your credit card bills instantly with zero convenience fees and earn rewards.',
      features: ['Zero fees', 'Instant payment', 'Reward points', 'Auto-pay option'],
      href: '/bill-payments/credit-card',
      badge: 'Zero Fees',
      gradient: 'from-primary-500 to-primary-600',
      iconBg: 'from-primary-100 to-primary-200'
    },
    {
      IconComponent: LoanRepaymentIcon,
      title: 'Loan Repayment',
      description: 'Repay your loans easily with flexible payment options and instant confirmation.',
      features: ['Flexible payment', 'Instant confirmation', 'Multiple banks', 'Auto-debit'],
      href: '/bill-payments/loan',
      badge: 'Easy',
      gradient: 'from-accent-500 to-accent-600',
      iconBg: 'from-accent-100 to-accent-200'
    },
    {
      IconComponent: ElectricityBillIcon,
      title: 'Electricity Bill',
      description: 'Pay electricity bills online instantly and get instant confirmation.',
      features: ['Instant payment', 'All providers', 'Bill history', 'Auto-pay'],
      href: '/bill-payments/electricity',
      badge: 'Instant',
      gradient: 'from-yellow-500 to-orange-500',
      iconBg: 'from-yellow-100 to-orange-100'
    },
    {
      IconComponent: BillPaymentIcon,
      title: 'Gas Bill Payment',
      description: 'Pay your gas bills online with quick processing and confirmation.',
      features: ['Quick processing', 'All providers', 'Bill alerts', 'Payment history'],
      href: '/bill-payments/gas',
      badge: 'Quick',
      gradient: 'from-blue-500 to-blue-600',
      iconBg: 'from-blue-100 to-blue-200'
    },
    {
      IconComponent: BillPaymentIcon,
      title: 'Water Bill Payment',
      description: 'Pay water bills online with ease and get instant confirmation.',
      features: ['Easy payment', 'All providers', 'Bill tracking', 'Auto-pay'],
      href: '/bill-payments/water',
      badge: 'Easy',
      gradient: 'from-cyan-500 to-cyan-600',
      iconBg: 'from-cyan-100 to-cyan-200'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: 'Mobile & DTH Recharge',
      description: 'Recharge your mobile, DTH, and data cards instantly with exciting offers.',
      features: ['Instant recharge', 'Best offers', 'All operators', 'Auto-recharge'],
      href: '/bill-payments/recharge',
      badge: 'Best Offers',
      gradient: 'from-purple-500 to-purple-600',
      iconBg: 'from-purple-100 to-purple-200'
    }
  ]

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg overflow-hidden relative brightness-0 invert">
              <BillPaymentIcon />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Bill Payments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Pay all your bills in one place. From credit cards to utilities, recharge to loan repayments - quick, easy, and hassle-free.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {billTypes.map((bill, index) => {
            const isHovered = hoveredIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Link
                  href={bill.href}
                  className="block bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden group"
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${bill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                  />

                  {/* Animated Border Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${bill.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
                    animate={{
                      scale: isHovered ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isHovered ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${bill.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg overflow-hidden relative`}
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center group-hover:brightness-0 group-hover:invert transition-all">
                          <bill.IconComponent />
                        </div>
                      </motion.div>
                      {bill.badge && (
                        <motion.span
                          className="text-xs font-semibold bg-accent-100 text-accent-700 px-3 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors"
                          animate={{
                            scale: isHovered ? [1, 1.1, 1] : 1,
                          }}
                          transition={{
                            duration: 1,
                            repeat: isHovered ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        >
                          {bill.badge}
                        </motion.span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                      {bill.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm group-hover:text-white/90 transition-colors">
                      {bill.description}
                    </p>

                    <div className="border-t border-gray-200 group-hover:border-white/30 pt-4 mb-4 transition-colors">
                      <div className="flex flex-wrap gap-2">
                        {bill.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                            className="flex items-center gap-1 text-xs text-gray-600 group-hover:text-white/90 transition-colors"
                          >
                            <CheckCircle className="w-3 h-3 text-primary-600 group-hover:text-white transition-colors" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      className="flex items-center text-primary-600 font-semibold group-hover:text-white transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <span>Pay Now</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </motion.div>
                  </div>

                  {/* Sparkle Effect on Hover */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute top-4 right-4"
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Payment Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl p-8 md:p-12 border-2 border-gray-200 mb-12 shadow-xl relative overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-30" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mb-8"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Quick Bill Payment</h3>
              <p className="text-gray-600">Pay your bills instantly in just a few clicks</p>
            </motion.div>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Bill Type</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-black transition-all hover:border-primary-400">
                    <option>Credit Card Bill</option>
                    <option>Electricity Bill</option>
                    <option>Gas Bill</option>
                    <option>Water Bill</option>
                    <option>Mobile Recharge</option>
                    <option>DTH Recharge</option>
                  </select>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-black transition-all hover:border-primary-400"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-bold text-lg hover:from-accent-600 hover:to-accent-700 transition-colors relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Proceed to Pay</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
                rotate: [0, -90, 0]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
            >
              Why Pay Bills with KreditRoute?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { IconComponent: InstantFundsIcon, title: 'Instant Payment', desc: 'Pay bills instantly and get immediate confirmation' },
                { IconComponent: SecureIcon, title: 'Secure & Safe', desc: 'Bank-level security to protect your transactions' },
                { IconComponent: BillPaymentIcon, title: 'Zero Convenience Fees', desc: 'Pay credit card bills and utilities with zero fees' }
              ].map((benefit, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <motion.div
                      className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm overflow-hidden relative"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center brightness-0 invert">
                        <benefit.IconComponent />
                      </div>
                    </motion.div>
                    <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                    <p className="text-sm opacity-90">{benefit.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

