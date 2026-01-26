'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ComponentType } from 'react'
import {
  HealthInsuranceIcon,
  TermLifeInsuranceIcon,
  CarInsuranceIcon,
  TermLifeInsuranceIcon as TwoWheelerIcon,
  FixedDepositIcon,
  TermLifeInsuranceIcon as TravelIcon,
  BestRatesIcon,
  InstantFundsIcon,
  SecureIcon,
  DigitalProcessIcon
} from '@/components/icons/IconLibrary'
import { FeatureHighlightsTable } from '@/components/FeatureHighlightsTable'
import { FAQAccordion } from '@/components/FAQAccordion'
import { ServiceCard } from '@/components/ServiceCard'

export default function InsurancePage() {
  const insuranceProducts: Array<{
    IconComponent: ComponentType
    title: string
    href: string
    badge?: string
  }> = [
    {
      IconComponent: HealthInsuranceIcon,
      title: 'Health Insurance',
      href: '/insurance/health',
      badge: '0% GST'
    },
    {
      IconComponent: TermLifeInsuranceIcon,
      title: 'Term Life Insurance',
      href: '/insurance/term-life',
      badge: '0% GST'
    },
    {
      IconComponent: CarInsuranceIcon,
      title: 'Car Insurance',
      href: '/insurance/car'
    },
    {
      IconComponent: CarInsuranceIcon,
      title: 'Two Wheeler Insurance',
      href: '/insurance/two-wheeler'
    },
    {
      IconComponent: FixedDepositIcon,
      title: 'Retirement Plans',
      href: '/insurance/retirement'
    },
    {
      IconComponent: TermLifeInsuranceIcon,
      title: 'Travel Insurance',
      href: '/insurance/travel'
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

  const keyFeatures: Array<{
    IconComponent: ComponentType
    title: string
    description: string
  }> = [
    {
      IconComponent: BestRatesIcon,
      title: 'Best Prices',
      description: 'Get the best insurance rates with 0% GST on health and term life insurance.'
    },
    {
      IconComponent: InstantFundsIcon,
      title: 'Quick Claims',
      description: 'Fast and hassle-free claim settlement process.'
    },
    {
      IconComponent: SecureIcon,
      title: 'Comprehensive Coverage',
      description: 'Wide range of insurance products to meet all your protection needs.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your insurance needs.'
    }
  ]

  const whyChooseUs: Array<{
    IconComponent: ComponentType
    title: string
    description: string
  }> = [
    {
      IconComponent: BestRatesIcon,
      title: 'Best Prices',
      description: 'Get the best insurance rates with 0% GST on health and term life insurance.'
    },
    {
      IconComponent: InstantFundsIcon,
      title: 'Quick Claims',
      description: 'Fast and hassle-free claim settlement process with minimal documentation.'
    },
    {
      IconComponent: SecureIcon,
      title: 'Comprehensive Coverage',
      description: 'Wide range of insurance products to meet all your protection needs.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your insurance queries and claims.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: 'Expert Guidance',
      description: 'Get expert advice to choose the right insurance plan for your needs.'
    },
    {
      IconComponent: SecureIcon,
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
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden"
        style={{
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5), 0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 border-4 border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.1),inset_0_0_40px_rgba(0,0,0,0.3)]"></div>
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
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-colors border-2 border-white/30 shadow-[0_8px_25px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]"
                >
                  Get Quote
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-colors border-2 border-white/30 shadow-[0_8px_25px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]"
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {insuranceProducts.map((product, index) => (
              <ServiceCard
                key={index}
                IconComponent={product.IconComponent}
                title={product.title}
                href={product.href}
                badge={product.badge}
                index={index}
              />
            ))}
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
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-white/60 backdrop-blur-md rounded-xl p-6 border-2 border-black/10 hover:border-black/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all text-center shadow-[0_8px_25px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]"
                  style={{
                    transform: 'perspective(1000px) rotateX(1deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <motion.div
                    className="w-16 h-16 bg-black/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 overflow-hidden relative border border-black/20 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <feature.IconComponent />
                    </div>
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative"
        style={{
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5), 0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="absolute inset-0 border-4 border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.1),inset_0_0_40px_rgba(0,0,0,0.3)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all shadow-[0_8px_25px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
                >
                  <motion.div
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  >
                      <div className="w-full h-full flex items-center justify-center brightness-0 invert">
                        <item.IconComponent />
                      </div>
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
