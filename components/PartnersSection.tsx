'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Building2, Shield, Award, Users } from 'lucide-react'

export function PartnersSection() {
  const partners = [
    {
      name: 'Top Banks',
      icon: Building2,
      count: '50+',
      description: 'Partner Banks',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-dashboard-panel-layout-3d-icon-png-download-12430978@0.png?f=webp&h=700',
      imageAlt: '3D bank dashboard icon'
    },
    {
      name: 'NBFCs',
      icon: Building2,
      count: '30+',
      description: 'Lending Partners',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-wallet-3d-icon-png-download-3723123.png?f=webp&h=700',
      imageAlt: '3D wallet icon'
    },
    {
      name: 'ISO Certified',
      icon: Shield,
      count: 'ISO 27001',
      description: 'Data Security',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-secure-shield-3d-icon-png-download-4715757.png?f=webp&h=700',
      imageAlt: '3D secure shield icon'
    },
    {
      name: 'Trusted By',
      icon: Users,
      count: '5.8M+',
      description: 'Happy Customers',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-checklist-3d-icon-png-download-12470135.png?f=webp&h=700',
      imageAlt: '3D verified checklist icon'
    },
  ]

  const trustBadges = [
    {
      name: 'Banking Partners',
      icon: Building2,
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-dashboard-panel-layout-3d-icon-png-download-12430978@0.png?f=webp&h=700',
      imageAlt: '3D bank dashboard icon'
    },
    {
      name: 'Security Certified',
      icon: Shield,
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-secure-shield-3d-icon-png-download-4715757.png?f=webp&h=700',
      imageAlt: '3D secure shield icon'
    },
    {
      name: 'Award Winning',
      icon: Award,
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-star-badge-3d-icon-png-download-3286975.png?f=webp&h=700',
      imageAlt: '3D award badge icon'
    },
    {
      name: 'Customer Trusted',
      icon: Users,
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-checklist-3d-icon-png-download-12470135.png?f=webp&h=700',
      imageAlt: '3D verified checklist icon'
    },
  ]

  return (
    <section className="py-16 md:py-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted By Leading Financial Institutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partnered with top banks, NBFCs, and financial institutions to offer you the best financial products
          </p>
        </motion.div>

        {/* Partner Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all text-center"
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                    {partner.imageSrc ? (
                      <Image
                        src={partner.imageSrc}
                        alt={partner.imageAlt ?? partner.name}
                        fill
                        sizes="56px"
                        className="object-contain p-2"
                      />
                    ) : (
                      <Icon className="w-7 h-7 text-primary-600" />
                    )}
                  </div>
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{partner.count}</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{partner.name}</div>
                <div className="text-xs text-gray-500">{partner.description}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-200 pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-3">
                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                      {badge.imageSrc ? (
                        <Image
                          src={badge.imageSrc}
                          alt={badge.imageAlt ?? badge.name}
                          fill
                          sizes="48px"
                          className="object-contain p-2"
                        />
                      ) : (
                        <Icon className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 text-center">{badge.name}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
