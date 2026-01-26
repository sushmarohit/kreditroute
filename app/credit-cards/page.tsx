'use client'

import { motion } from 'framer-motion'
import type { ComponentType } from 'react'
import Link from 'next/link'
import { CreditCardIcon, BestRatesIcon, SecureIcon, InstantFundsIcon, DigitalProcessIcon } from '@/components/icons/IconLibrary'
import { FeatureHighlightsTable } from '@/components/FeatureHighlightsTable'
import { EligibilityTable } from '@/components/EligibilityTable'
import { ProcessSteps } from '@/components/ProcessSteps'
import { DocumentsChecklist } from '@/components/DocumentsChecklist'
import { FAQAccordion } from '@/components/FAQAccordion'
import { ServiceCard } from '@/components/ServiceCard'

export default function CreditCardsPage() {
  const cardTypes: Array<{
    IconComponent: ComponentType
    title: string
    href: string
    badge?: string
  }> = [
    {
      IconComponent: CreditCardIcon,
      title: 'Rewards Credit Cards',
      href: '/credit-cards/rewards',
      badge: 'Cashback Offer'
    },
    {
      IconComponent: CreditCardIcon,
      title: 'Travel Credit Cards',
      href: '/credit-cards/travel'
    },
    {
      IconComponent: CreditCardIcon,
      title: 'Shopping Credit Cards',
      href: '/credit-cards/shopping',
      badge: 'Cashback Offer'
    },
    {
      IconComponent: CreditCardIcon,
      title: 'Premium Credit Cards',
      href: '/credit-cards/premium'
    },
    {
      IconComponent: CreditCardIcon,
      title: 'Fuel Credit Cards',
      href: '/credit-cards/fuel'
    },
    {
      IconComponent: CreditCardIcon,
      title: 'Secured Credit Cards',
      href: '/credit-cards/secured'
    }
  ]

  const featureHighlights = [
    { feature: 'Credit Limit', details: '₹10,000 – ₹10 Lakhs' },
    { feature: 'Interest Rate', details: '24% – 42% p.a.' },
    { feature: 'Annual Fee', details: '₹0 – ₹15,000' },
    { feature: 'Joining Fee', details: '₹0 – ₹15,000' },
    { feature: 'Reward Rate', details: 'Up to 10% cashback' },
    { feature: 'Eligibility', details: 'Salaried & Self Employed' },
    { feature: 'CIBIL Score', details: '650+ preferred' },
    { feature: 'Age Requirement', details: '18 - 70 years' },
    { feature: 'Approval Time', details: 'Instant – 7 Days' }
  ]

  const eligibilityCriteria = [
    { criterion: 'Age', requirement: '18 - 70 years' },
    { criterion: 'Employment', requirement: 'Salaried / Self-Employed' },
    { criterion: 'Income', requirement: 'Min. ₹12,000/month' },
    { criterion: 'Credit Score', requirement: '650+' },
    { criterion: 'Work Experience', requirement: '6 months+' }
  ]

  const keyFeatures: Array<{
    IconComponent: ComponentType
    title: string
    description: string
  }> = [
    {
      IconComponent: CreditCardIcon,
      title: 'Global Acceptance',
      description: 'Use your card anywhere in the world with wide acceptance.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: '24/7 Concierge Service',
      description: 'Personal travel assistance anytime, anywhere.'
    },
    {
      IconComponent: BestRatesIcon,
      title: 'Accelerated Rewards',
      description: 'Double points on flight & hotel bookings.'
    },
    {
      IconComponent: SecureIcon,
      title: 'Secure Transactions',
      description: 'Advanced security features to protect your transactions.'
    }
  ]

  const whyChooseUs: Array<{
    IconComponent: ComponentType
    title: string
    description: string
  }> = [
    {
      IconComponent: BestRatesIcon,
      title: 'Best Rewards',
      description: 'Earn maximum rewards and cashback on every purchase.'
    },
    {
      IconComponent: InstantFundsIcon,
      title: 'Quick Approval',
      description: 'Get instant approval and start using your card immediately.'
    },
    {
      IconComponent: SecureIcon,
      title: 'Secure & Safe',
      description: 'Advanced security features to protect your transactions.'
    },
    {
      IconComponent: SecureIcon,
      title: 'Zero Credit Score Impact',
      description: 'Check eligibility without affecting your credit score.'
    },
    {
      IconComponent: InstantFundsIcon,
      title: 'Instant Activation',
      description: 'Activate and start using your card within minutes of approval.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: '24/7 Customer Support',
      description: 'Round-the-clock support for all your card-related queries.'
    }
  ]

  const documents = [
    {
      title: 'Common Documents (Required for All Applicants)',
      documents: [
        'PAN Card (Copy)',
        'Aadhaar Card (Copy - for ID & Address Proof)',
        'Recent Passport-sized Photographs',
        'Bank Account Statement (last 3 months)'
      ]
    },
    {
      title: 'For Salaried Applicants',
      documents: [
        'Latest Salary Slips (last 3 months)',
        'Form 16 or Income Tax Returns (Latest)',
        'Employment ID Card / Proof of Employment'
      ]
    },
    {
      title: 'For Self-Employed Applicants',
      documents: [
        'Income Tax Returns of the last 2 years',
        'Bank Account Statements (last 6 months)',
        'Proof of Business Existence (GST Registration, etc.)'
      ]
    }
  ]

  const faqs = [
    {
      question: 'Who can apply for a credit card from KreditRoute?',
      answer: 'Anyone between 18 and 70 years old can apply through KreditRoute. You can be eligible if you are salaried or self-employed and your income meets the basic limit of ₹12,000/month. You are also required to have a minimum credit score of 650.'
    },
    {
      question: 'How much is a CIBIL score needed for a credit card?',
      answer: 'Most lenders consider a CIBIL score of at least 650. A higher score may help you get better credit card offers with higher limits and lower interest rates.'
    },
    {
      question: 'Are credit cards accessible to students or first-time applicants?',
      answer: 'Students may not qualify if they don\'t have regular income. First-time applicants can apply if they meet the income and credit score requirements. A secured credit card or a co-applicant with a good profile can improve your chances.'
    },
    {
      question: 'How much credit limit can I get?',
      answer: 'You may be eligible to receive a credit limit from ₹10,000 to ₹10 Lakhs depending on your profile, income, credit score, and the lender\'s policy.'
    },
    {
      question: 'What are the fees and charges for a credit card?',
      answer: 'There\'s an annual fee (₹0 to ₹15,000) and a joining fee (₹0 to ₹15,000). Some cards also have charges for cash advances, late payments, and other services. We don\'t hide charges. You\'ll see all costs before you apply.'
    },
    {
      question: 'How long does the approval and card delivery take?',
      answer: 'The process is fast. You can apply with KreditRoute to fast-track your application. After successfully passing the eligibility test, you can get approval within 1-7 days, and card delivery typically takes 7-14 days.'
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
              Smart Credit Cards Designed For You
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Explore top credit card options suited to your spending and goals. KreditRoute assists you in comparing, choosing, and applying online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/apply">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-colors border-2 border-white/30 shadow-[0_8px_25px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]"
                >
                  Apply Now
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-colors border-2 border-white/30 shadow-[0_8px_25px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]"
              >
                Explore More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Card Types Grid */}
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
              Choose Your Credit Card Type
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select from a wide range of credit cards designed to match your lifestyle and spending habits
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {cardTypes.map((card, index) => (
              <ServiceCard
                key={index}
                IconComponent={card.IconComponent}
                title={card.title}
                href={card.href}
                badge={card.badge}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights Table */}
      <FeatureHighlightsTable
        title="KreditRoute Edge: Credit Card Highlights"
        subtitle="Get an instant overview of everything about credit cards that deliver value and convenience."
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
              Smart Credit Cards Designed For You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore top credit card options suited to your spending and goals.
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

      {/* Eligibility Table */}
      <EligibilityTable
        title="Do You Qualify? See Credit Card Eligibility Criteria Below"
        subtitle="A quick overview of the credit card eligibility criteria."
        criteria={eligibilityCriteria}
      />

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
              Why Is KreditRoute Your Ideal Credit Card Partner?
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We're working to make your credit card journey effortless and satisfying. Here's how:
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

      {/* Process Steps */}
      <ProcessSteps />

      {/* Documents Checklist */}
      <DocumentsChecklist
        title="Credit Card Documents You Need"
        subtitle="A quick checklist of the necessary paperwork for your KreditRoute credit card."
        categories={documents}
      />

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
              Find quick answers to common questions about our credit card products and processes.
            </p>
          </motion.div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  )
}
