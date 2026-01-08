'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CreditCard, Gift, Plane, ShoppingBag, TrendingUp, ArrowRight, CheckCircle, Percent, Star, Shield } from 'lucide-react'

export default function CreditCardsPage() {
  const cardTypes = [
    {
      icon: Gift,
      title: 'Rewards Credit Cards',
      description: 'Earn reward points on every purchase and redeem them for exciting gifts and vouchers.',
      features: ['5X reward points', 'Welcome bonus', 'Airport lounge access', 'Zero annual fee'],
      href: '/credit-cards/rewards',
      badge: 'Cashback Offer',
      cashback: 'Up to 5% cashback',
      joiningFee: '₹0 - ₹1,500'
    },
    {
      icon: Plane,
      title: 'Travel Credit Cards',
      description: 'Make your travel dreams come true with exclusive travel benefits and miles.',
      features: ['Air miles', 'Travel insurance', 'Lounge access', 'Hotel discounts'],
      href: '/credit-cards/travel',
      cashback: 'Up to 10X miles',
      joiningFee: '₹500 - ₹5,000'
    },
    {
      icon: ShoppingBag,
      title: 'Shopping Credit Cards',
      description: 'Shop more, save more with exclusive discounts and cashback on shopping.',
      features: ['Shopping discounts', 'EMI options', 'Brand offers', 'Cashback rewards'],
      href: '/credit-cards/shopping',
      badge: 'Cashback Offer',
      cashback: 'Up to 10% cashback',
      joiningFee: '₹0 - ₹2,000'
    },
    {
      icon: TrendingUp,
      title: 'Premium Credit Cards',
      description: 'Experience luxury with premium credit cards offering exclusive privileges.',
      features: ['Concierge service', 'Premium rewards', 'Exclusive events', 'Priority support'],
      href: '/credit-cards/premium',
      cashback: 'Premium benefits',
      joiningFee: '₹5,000 - ₹15,000'
    },
    {
      icon: CreditCard,
      title: 'Fuel Credit Cards',
      description: 'Save on fuel expenses with dedicated fuel credit cards.',
      features: ['Fuel surcharge waiver', 'Cashback on fuel', 'Reward points', 'Low annual fee'],
      href: '/credit-cards/fuel',
      cashback: 'Up to 5% on fuel',
      joiningFee: '₹0 - ₹1,000'
    },
    {
      icon: Star,
      title: 'Secured Credit Cards',
      description: 'Build or rebuild your credit score with secured credit cards.',
      features: ['Easy approval', 'Credit building', 'Flexible limit', 'Low fees'],
      href: '/credit-cards/secured',
      cashback: 'Standard rewards',
      joiningFee: '₹0 - ₹500'
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
            Credit Cards
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from India's best credit cards with exciting rewards, cashback, and exclusive benefits. Apply now and get instant approval.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cardTypes.map((card, index) => {
            const Icon = card.icon
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
                  href={card.href}
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
                    {card.badge && (
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
                        {card.badge}
                      </motion.span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{card.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{card.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Percent className="w-4 h-4 text-primary-600" />
                      <span className="font-medium">{card.cashback}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CreditCard className="w-4 h-4 text-primary-600" />
                      <span>Joining Fee: {card.joiningFee}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {card.features.slice(0, 2).map((feature, idx) => (
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

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose KreditRoute Credit Cards?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Best Rewards</h3>
              <p className="text-sm opacity-90">Earn maximum rewards and cashback on every purchase</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Approval</h3>
              <p className="text-sm opacity-90">Get instant approval and start using your card immediately</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Safe</h3>
              <p className="text-sm opacity-90">Advanced security features to protect your transactions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

