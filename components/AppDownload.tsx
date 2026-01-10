'use client'

import { motion } from 'framer-motion'
import { Smartphone, QrCode, ArrowRight, Download } from 'lucide-react'
import { DigitalProcessIcon } from '@/components/icons/IconLibrary'

export function AppDownload() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6"
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <DigitalProcessIcon />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get The App
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 opacity-90">
              Download the KreditRoute App Today!
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get instant access to loans, credit cards, and financial tools — all in one place
            </p>
            
            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                'Free Credit Score Check',
                'Pre-approved Loan Offers',
                'Instant Bill Payments',
                'Investment Tracking',
                'Reward Points & Cashback'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <span className="text-lg opacity-90">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-white text-primary-600 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                <Download className="w-6 h-6" />
                <span>Download App</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/30 transition-colors border border-white/30"
              >
                <QrCode className="w-6 h-6" />
                <span>Scan QR Code</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Phone Mockup */}
              <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl relative">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                  
                  {/* App Screen Content */}
                  <div className="h-full bg-gradient-to-br from-primary-50 to-accent-50 p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6 mt-8">
                      <h4 className="text-xl font-bold text-gray-900">KreditRoute</h4>
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-3 flex-grow">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white rounded-xl p-4 shadow-md">
                          <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
