'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Heart, Car, Bike, Users, ArrowRight, CheckCircle, Percent, Clock } from 'lucide-react'

export default function InsurancePage() {
  const insuranceProducts = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive health coverage with 0% GST. Protect your family\'s health with the best plans.',
      features: ['0% GST', 'Cashless treatment', 'Family coverage', 'Pre & post hospitalization'],
      href: '/insurance/health',
      badge: '0% GST',
      coverage: 'Up to ₹1 Crore',
      startingFrom: '₹500/month'
    },
    {
      icon: Shield,
      title: 'Term Life Insurance',
      description: 'Secure your family\'s future with term life insurance at the lowest prices.',
      features: ['0% GST', 'Lowest price', 'High coverage', 'Flexible tenure'],
      href: '/insurance/term-life',
      badge: '0% GST',
      coverage: 'Up to ₹2 Crores',
      startingFrom: '₹300/month'
    },
    {
      icon: Car,
      title: 'Car Insurance',
      description: 'Comprehensive car insurance with quick claim settlement and 24/7 support.',
      features: ['Comprehensive coverage', 'Quick claims', '24/7 support', 'Cashless repairs'],
      href: '/insurance/car',
      coverage: 'Full coverage',
      startingFrom: '₹2,000/year'
    },
    {
      icon: Bike,
      title: 'Two Wheeler Insurance',
      description: 'Protect your two-wheeler with comprehensive insurance coverage.',
      features: ['Third party & own damage', 'Quick renewal', 'Easy claims', 'Affordable premium'],
      href: '/insurance/two-wheeler',
      coverage: 'Full coverage',
      startingFrom: '₹500/year'
    },
    {
      icon: Users,
      title: 'Retirement Plans',
      description: 'Plan for your golden years with retirement insurance plans.',
      features: ['Retirement corpus', 'Tax benefits', 'Regular income', 'Long-term savings'],
      href: '/insurance/retirement',
      coverage: 'Lifetime coverage',
      startingFrom: '₹1,000/month'
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Travel worry-free with comprehensive travel insurance coverage.',
      features: ['Medical coverage', 'Trip cancellation', 'Baggage loss', 'Emergency assistance'],
      href: '/insurance/travel',
      coverage: 'Trip coverage',
      startingFrom: '₹200/trip'
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
            Insurance Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect what matters most with comprehensive insurance coverage. From health to life, car to travel, we have you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insuranceProducts.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={product.href}
                  className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    {product.badge && (
                      <span className="text-xs font-semibold bg-accent-100 text-accent-700 px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Shield className="w-4 h-4 text-primary-600" />
                      <span className="font-medium">Coverage: {product.coverage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Percent className="w-4 h-4 text-primary-600" />
                      <span>Starting from: {product.startingFrom}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-primary-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-primary-600 font-semibold group">
                    <span>Get Quote</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
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
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose KreditRoute Insurance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Best Prices</h3>
              <p className="text-sm opacity-90">Get the best insurance rates with 0% GST on health and term life insurance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Claims</h3>
              <p className="text-sm opacity-90">Fast and hassle-free claim settlement process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Comprehensive Coverage</h3>
              <p className="text-sm opacity-90">Wide range of insurance products to meet all your protection needs</p>
            </div>
          </div>
        </motion.div>

        {/* All Insurance Products Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/insurance/all"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-colors"
          >
            Explore All Insurance Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

