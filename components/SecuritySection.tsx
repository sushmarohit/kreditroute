'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Award, CheckCircle, FileCheck, Eye } from 'lucide-react'
import { SecureIcon } from '@/components/icons/IconLibrary'

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'ISO 27001 Certified',
      description: 'Bank-level security with ISO certification for data protection',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lock,
      title: '256-bit SSL Encryption',
      description: 'Your data is encrypted with industry-standard SSL security',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileCheck,
      title: 'GDPR Compliant',
      description: 'Fully compliant with data protection and privacy regulations',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring and threat detection',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const certifications = [
    { name: 'ISO 27001:2013', icon: Award },
    { name: 'Data Security', icon: Shield },
    { name: 'Privacy Certified', icon: Lock },
    { name: 'Banking Grade', icon: CheckCircle }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <SecureIcon />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Security is Our Priority
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We use bank-level security measures to protect your financial data and personal information
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all text-center group"
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-200 pt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 text-center">{cert.name}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Secure Transactions</h4>
              <p className="text-sm opacity-90">All transactions are protected with advanced encryption</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center border-l border-r md:border-l md:border-r md:border-y-0 border-y md:py-0 py-8 border-white/20"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Privacy Protected</h4>
              <p className="text-sm opacity-90">Your personal information is never shared without consent</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Verified Platform</h4>
              <p className="text-sm opacity-90">Trusted by millions of customers across India</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
