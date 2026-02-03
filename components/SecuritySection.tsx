'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Lock, Award, CheckCircle, FileCheck, Eye } from 'lucide-react'
import { SecureIcon } from '@/components/icons/IconLibrary'

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'ISO 27001 Certified',
      description: 'Bank-level security with ISO certification for data protection',
      color: 'from-blue-500 to-blue-600',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-star-badge-3d-icon-png-download-3286975.png?f=webp&h=700',
      imageAlt: '3D certification badge icon'
    },
    {
      icon: Lock,
      title: '256-bit SSL Encryption',
      description: 'Your data is encrypted with industry-standard SSL security',
      color: 'from-green-500 to-green-600',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-secure-shield-3d-icon-png-download-4715757.png?f=webp&h=700',
      imageAlt: '3D secure shield icon'
    },
    {
      icon: FileCheck,
      title: 'GDPR Compliant',
      description: 'Fully compliant with data protection and privacy regulations',
      color: 'from-purple-500 to-purple-600',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-checklist-3d-icon-png-download-12470135.png?f=webp&h=700',
      imageAlt: '3D checklist icon'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring and threat detection',
      color: 'from-orange-500 to-orange-600',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-dashboard-panel-layout-3d-icon-png-download-12430978@0.png?f=webp&h=700',
      imageAlt: '3D monitoring dashboard icon'
    }
  ]

  const certifications = [
    { name: 'ISO 27001:2013', icon: Award },
    { name: 'Data Security', icon: Shield },
    { name: 'Privacy Certified', icon: Lock },
    { name: 'Banking Grade', icon: CheckCircle }
  ]

  return (
    <section className="py-16 md:py-4 bg-white">
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
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg relative overflow-hidden">
              <Image
                src="https://cdn3d.iconscout.com/3d/free/preview/free-secure-shield-3d-icon-png-download-4715757.png?f=webp&h=700"
                alt="3D secure shield icon"
                fill
                sizes="80px"
                className="object-contain p-2"
              />
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
                  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                    {feature.imageSrc ? (
                      <Image
                        src={feature.imageSrc}
                        alt={feature.imageAlt ?? feature.title}
                        fill
                        sizes="64px"
                        className="object-contain p-2"
                      />
                    ) : (
                      <Icon className="w-8 h-8 text-white" />
                    )}
                  </div>
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
        {/* <motion.div
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
        </motion.div> */}

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Secure Transactions',
                description: 'All transactions are protected with advanced encryption',
                imageSrc:
                  'https://cdn3d.iconscout.com/3d/free/preview/free-card-payment-3d-icon-png-download-6380717.png?f=webp&h=700',
                imageAlt: '3D card payment icon',
                bordered: false
              },
              {
                title: 'Privacy Protected',
                description: 'Your personal information is never shared without consent',
                imageSrc:
                  'https://cdn3d.iconscout.com/3d/free/preview/free-secure-shield-3d-icon-png-download-4715757.png?f=webp&h=700',
                imageAlt: '3D secure shield icon',
                bordered: true
              },
              {
                title: 'Verified Platform',
                description: 'Trusted by millions of customers across India',
                imageSrc:
                  'https://cdn3d.iconscout.com/3d/free/preview/free-checklist-3d-icon-png-download-12470135.png?f=webp&h=700',
                imageAlt: '3D verification checklist icon',
                bordered: false
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }}
                className={`flex flex-col items-center${
                  item.bordered
                    ? ' border-l border-r md:border-l md:border-r md:border-y-0 border-y md:py-0 py-8 border-white/20'
                    : ''
                }`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="64px"
                    className="object-contain p-2"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
