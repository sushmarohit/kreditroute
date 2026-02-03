'use client'

import { motion } from 'framer-motion'
import type { ComponentType } from 'react'
import Image from 'next/image'
import {
  CreditCardIcon,
  LoanRepaymentIcon,
  ElectricityBillIcon,
  BillPaymentIcon,
  DigitalProcessIcon,
  InstantFundsIcon,
  SecureIcon
} from '@/components/icons/IconLibrary'
import { ServiceCard } from '@/components/ServiceCard'

export default function BillPaymentsPage() {
  const billTypes: Array<{
    IconComponent: ComponentType
    title: string
    href: string
    badge?: string
    imageSrc?: string
    imageAlt?: string
  }> = [
    {
      IconComponent: CreditCardIcon,
      title: 'Credit Card Bill Payment',
      href: '/bill-payments/credit-card',
      badge: 'Zero Fees',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-credit-card-3d-icon-png-download-6380709.png?f=webp&h=700',
      imageAlt: '3D credit card icon'
    },
    {
      IconComponent: LoanRepaymentIcon,
      title: 'Loan Repayment',
      href: '/bill-payments/loan',
      badge: 'Easy',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-wallet-3d-icon-png-download-3723123.png?f=webp&h=700',
      imageAlt: '3D wallet icon'
    },
    {
      IconComponent: ElectricityBillIcon,
      title: 'Electricity Bill',
      href: '/bill-payments/electricity',
      badge: 'Instant',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-light-bulb-3d-icon-png-download-6558781.png?f=webp&h=700',
      imageAlt: '3D light bulb icon'
    },
    {
      IconComponent: BillPaymentIcon,
      title: 'Gas Bill Payment',
      href: '/bill-payments/gas',
      badge: 'Quick',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-stove-3d-icon-png-download-5122366.png?f=webp&h=700',
      imageAlt: '3D gas stove icon'
    },
    {
      IconComponent: BillPaymentIcon,
      title: 'Water Bill Payment',
      href: '/bill-payments/water',
      badge: 'Easy',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-save-water-3d-icon-png-download-6558773.png?f=webp&h=700',
      imageAlt: '3D water drop icon'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: 'Mobile & DTH Recharge',
      href: '/bill-payments/recharge',
      badge: 'Best Offers',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-phone-3d-icon-png-download-13516637.png?f=webp&h=700',
      imageAlt: '3D phone icon'
    }
  ]

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-white relative overflow-hidden">
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
          className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl opacity-20"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl opacity-20"
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
            <div className="w-20 h-20 bg-black/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-[0_8px_25px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] overflow-hidden relative border border-black/20">
              <Image
                src="https://cdn3d.iconscout.com/3d/free/preview/free-card-payment-3d-icon-png-download-6380717.png?f=webp&h=700"
                alt="3D bill payment icon"
                fill
                sizes="80px"
                className="object-contain p-2"
              />
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12">
          {billTypes.map((bill, index) => (
            <ServiceCard
              key={index}
              IconComponent={bill.IconComponent}
              title={bill.title}
              href={bill.href}
              badge={bill.badge}
              index={index}
              imageSrc={bill.imageSrc}
              imageAlt={bill.imageAlt}
            />
          ))}
        </div>

        {/* Quick Payment Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border-2 border-black/10 mb-12 shadow-[0_20px_60px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)] relative overflow-hidden"
          style={{
            transform: 'perspective(1000px) rotateX(1deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-900/5 rounded-full blur-3xl opacity-30" />

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
                  <select className="w-full px-4 py-3 border-2 border-black/20 rounded-lg focus:ring-2 focus:ring-black/30 focus:border-black/40 outline-none text-black transition-all hover:border-black/30 bg-white/50 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
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
                    className="w-full px-4 py-3 border-2 border-black/20 rounded-lg focus:ring-2 focus:ring-black/30 focus:border-black/40 outline-none text-black transition-all hover:border-black/30 bg-white/50 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
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
                  className="px-8 py-4 bg-black text-white rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors relative overflow-hidden group border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
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
          className="bg-white rounded-3xl p-8 md:p-12 text-black relative overflow-hidden"
          style={{
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className="absolute inset-0 "></div>
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
                {
                  IconComponent: InstantFundsIcon,
                  title: 'Instant Payment',
                  desc: 'Pay bills instantly and get immediate confirmation',
                  imageSrc:
                    'https://cdn3d.iconscout.com/3d/free/preview/free-rocket-3d-icon-png-download-14103655.png?f=webp&h=700',
                  imageAlt: '3D rocket icon'
                },
                {
                  IconComponent: SecureIcon,
                  title: 'Secure & Safe',
                  desc: 'Bank-level security to protect your transactions',
                  imageSrc:
                    'https://cdn3d.iconscout.com/3d/free/preview/free-secure-shield-3d-icon-png-download-4715757.png?f=webp&h=700',
                  imageAlt: '3D secure shield icon'
                },
                {
                  IconComponent: BillPaymentIcon,
                  title: 'Zero Convenience Fees',
                  desc: 'Pay credit card bills and utilities with zero fees',
                  imageSrc:
                    'https://cdn3d.iconscout.com/3d/free/preview/free-card-payment-3d-icon-png-download-6380717.png?f=webp&h=700',
                  imageAlt: '3D bill payment icon'
                }
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
                    className="text-center bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <motion.div
                      className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm overflow-hidden relative"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    >
                      {benefit.imageSrc ? (
                        <Image
                          src={benefit.imageSrc}
                          alt={benefit.imageAlt ?? benefit.title}
                          fill
                          sizes="80px"
                          className="object-contain p-2"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center brightness-0 invert">
                          <benefit.IconComponent />
                        </div>
                      )}
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

