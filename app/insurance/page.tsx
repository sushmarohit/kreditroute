'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Heart, Car, Bike, Users, ArrowRight, CheckCircle, Percent, Clock, Zap, Target, Globe } from 'lucide-react'
import { FeatureHighlightsTable } from '@/components/FeatureHighlightsTable'
import { FAQAccordion } from '@/components/FAQAccordion'

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

  const featureHighlights = [
    { feature: 'Coverage Amount', details: '₹1 Lakh – ₹2 Crores' },
    { feature: 'Premium', details: 'Starting from ₹200/month' },
    { feature: 'GST', details: '0% on Health & Term Life' },
    { feature: 'Claim Settlement', details: 'Quick & hassle-free' },
    { feature: 'Coverage Type', details: 'Individual, Family, Group' },
    { feature: 'Eligibility', details: '18 - 65 years' },
    { feature: 'Medical Checkup', details: 'Required for some plans' },
    { feature: 'Waiting Period', details: '30 days - 2 years' },
    { feature: 'Renewal', details: 'Annual renewal available' }
  ]

  const keyFeatures = [
    {
      icon: Percent,
      title: 'Best Prices',
      description: 'Get the best insurance rates with 0% GST on health and term life insurance.'
    },
    {
      icon: Clock,
      title: 'Quick Claims',
      description: 'Fast and hassle-free claim settlement process.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Coverage',
      description: 'Wide range of insurance products to meet all your protection needs.'
    },
    {
      icon: Zap,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your insurance needs.'
    }
  ]

  const whyChooseUs = [
    {
      icon: Percent,
      title: 'Best Prices',
      description: 'Get the best insurance rates with 0% GST on health and term life insurance.'
    },
    {
      icon: CheckCircle,
      title: 'Quick Claims',
      description: 'Fast and hassle-free claim settlement process with minimal documentation.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Coverage',
      description: 'Wide range of insurance products to meet all your protection needs.'
    },
    {
      icon: Zap,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your insurance queries and claims.'
    },
    {
      icon: Target,
      title: 'Expert Guidance',
      description: 'Get expert advice to choose the right insurance plan for your needs.'
    },
    {
      icon: Globe,
      title: 'Trusted Partners',
      description: 'Partnered with top insurance companies for reliable coverage.'
    }
  ]

  const faqs = [
    {
      question: 'What types of insurance does KreditRoute offer?',
      answer: 'KreditRoute offers a comprehensive range of insurance products including health insurance, term life insurance, car insurance, two-wheeler insurance, travel insurance, and retirement plans.'
    },
    {
      question: 'Is there GST on insurance premiums?',
      answer: 'Health insurance and term life insurance have 0% GST. Other insurance products may have applicable GST as per government regulations.'
    },
    {
      question: 'How do I file an insurance claim?',
      answer: 'You can file an insurance claim through KreditRoute\'s online portal or by contacting our 24/7 customer support. We guide you through the entire process for quick settlement.'
    },
    {
      question: 'What is the waiting period for health insurance?',
      answer: 'The waiting period for health insurance typically ranges from 30 days to 2 years depending on the plan and coverage. Pre-existing conditions may have longer waiting periods.'
    },
    {
      question: 'Can I renew my insurance policy online?',
      answer: 'Yes, you can renew your insurance policy online through KreditRoute. The renewal process is quick and easy with minimal documentation.'
    },
    {
      question: 'What documents do I need to buy insurance?',
      answer: 'Common documents include PAN card, Aadhaar card, age proof, income proof, and medical reports (if required). The exact documents depend on the type of insurance you\'re purchasing.'
    }
  ]

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-accent-600 via-accent-500 to-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Protect What Matters Most
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive insurance coverage with 0% GST on health and term life insurance. Get the best rates and quick claims.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/insurance/health">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-accent-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Get Quote
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
              >
                Explore Plans
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insurance Products Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insurance Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protect what matters most with comprehensive insurance coverage. From health to life, car to travel, we have you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceProducts.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Link
                    href={product.href}
                    className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-2xl transition-all duration-300 h-full group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center"
                        whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.15 }}
                      >
                        <Icon className="w-7 h-7 text-primary-600" />
                      </motion.div>
                      {product.badge && (
                        <span className="text-xs font-semibold bg-accent-100 text-accent-700 px-3 py-1 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {product.title}
                    </h3>
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
                    <motion.div
                      className="flex items-center text-primary-600 font-semibold"
                      whileHover={{ x: 4 }}
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Highlights Table */}
      <FeatureHighlightsTable
        title="KreditRoute Edge: Insurance Highlights"
        subtitle="Get an instant overview of everything about insurance that delivers value and protection."
        features={featureHighlights}
      />

      {/* Key Features Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose KreditRoute Insurance?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These features are designed to provide you with the best insurance coverage and service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all text-center"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Is KreditRoute Your Ideal Insurance Partner?
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We're working to make your insurance journey effortless and satisfying. Here's how:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <motion.div
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have Questions? We've Got Answers!
            </h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions about our insurance products and processes.
            </p>
          </motion.div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  )
}
