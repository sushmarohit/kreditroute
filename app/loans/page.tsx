'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Zap, Users } from 'lucide-react'
import type { ComponentType } from 'react'
import { 
  PersonalLoanIcon, 
  HomeLoanIcon, 
  BusinessLoanIcon,
  BillPaymentIcon,
  BestRatesIcon,
  DigitalProcessIcon,
  InstantFundsIcon,
  SecureIcon
} from '@/components/icons/IconLibrary'
import { FeatureHighlightsTable } from '@/components/FeatureHighlightsTable'
import { EligibilityTable } from '@/components/EligibilityTable'
import { ProcessSteps } from '@/components/ProcessSteps'
import { EMICalculator } from '@/components/EMICalculator'
import { DocumentsChecklist } from '@/components/DocumentsChecklist'
import { FAQAccordion } from '@/components/FAQAccordion'

export default function LoansPage() {
  const loanTypes: Array<{
    IconComponent: ComponentType
    title: string
    href: string
    badge?: string
  }> = [
    {
      IconComponent: PersonalLoanIcon,
      title: 'Personal Loan',
      href: '/instant-loan',
      badge: '₹500 Cashback'
    },
    {
      IconComponent: HomeLoanIcon,
      title: 'Home Loan',
      href: '/instant-loan'
    },
    {
      IconComponent: BusinessLoanIcon,
      title: 'Business Loan',
      href: '/instant-loan'
    },
    {
      IconComponent: BusinessLoanIcon,
      title: 'Loan Against Property',
      href: '/instant-loan'
    },
    {
      IconComponent: HomeLoanIcon,
      title: 'Transfer Home Loan',
      href: '/instant-loan'
    },
    {
      IconComponent: PersonalLoanIcon,
      title: 'Consumer Durable Loan',
      href: '/instant-loan'
    }
  ]

  const featureHighlights = [
    { feature: 'Loan Amount', details: '₹1 Lakh – ₹10 Crores' },
    { feature: 'Interest Rates', details: '7.5% – 15% p.a.' },
    { feature: 'Tenure', details: '1 – 30 Years' },
    { feature: 'Processing Fee', details: '0.5% – 2%' },
    { feature: 'Funding', details: 'Up to 100% of requirement' },
    { feature: 'Eligibility', details: 'Salaried & Self Employed' },
    { feature: 'CIBIL Score', details: '700+ preferred' },
    { feature: 'Prepayment', details: 'Allowed (may include charges)' },
    { feature: 'Approval Time', details: '1–7 Days' }
  ]

  const eligibilityCriteria = [
    { criterion: 'Age', requirement: '21 - 65 years' },
    { criterion: 'Employment', requirement: 'Salaried / Self-Employed' },
    { criterion: 'Income', requirement: 'Min. ₹15,000/month' },
    { criterion: 'Credit Score', requirement: '700+' },
    { criterion: 'Work Experience', requirement: '1-2 years+' }
  ]

  const keyFeatures: Array<{
    IconComponent: ComponentType
    title: string
    description: string
  }> = [
    {
      IconComponent: BillPaymentIcon,
      title: 'Easy Repayment Terms',
      description: 'Flexible EMI options. Repay your loan conveniently.'
    },
    {
      IconComponent: BestRatesIcon,
      title: 'Competitive Interest Rates',
      description: 'Enjoy attractive rates. Save more on your loan EMIs.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: 'Digital Application',
      description: 'Apply for a loan online in minutes. Quick, paperless, and easy process.'
    },
    {
      IconComponent: InstantFundsIcon,
      title: 'Fast Disbursal',
      description: 'Quick loan approval & disbursal. Get your funds swiftly.'
    }
  ]

  const whyChooseUs: Array<{
    IconComponent: ComponentType
    title: string
    description: string
  }> = [
    {
      IconComponent: BestRatesIcon,
      title: 'Competitive Interest Rates',
      description: 'Enjoy attractive rates. Save more on your loan EMIs.'
    },
    {
      IconComponent: PersonalLoanIcon,
      title: 'Zero Foreclosure Charges',
      description: 'Pay off your loan early with no extra fees. Save on interest.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: '100% Digital Process',
      description: 'Apply for a loan online, from start to finish. Quick, easy, paperless.'
    },
    {
      IconComponent: SecureIcon,
      title: 'No Credit Score Impact',
      description: 'Check eligibility without affecting your credit score. Apply safely.'
    },
    {
      IconComponent: InstantFundsIcon,
      title: 'Instant Funds',
      description: 'Get your emergency funds in as little as a few minutes, depending on your eligibility.'
    },
    {
      IconComponent: BillPaymentIcon,
      title: 'Easy Instalments',
      description: 'Your loan EMI customised as per your needs and affordability.'
    }
  ]

  const documents = [
    {
      title: 'Common Documents (Required for All Applicants)',
      documents: [
        'PAN Card (Copy)',
        'Aadhaar Card (Copy - for ID & Address Proof)',
        'Recent Passport-sized Photographs'
      ]
    },
    {
      title: 'For Salaried Applicants',
      documents: [
        'Latest Salary Slips (e.g., last 3 to 6 months)',
        'Bank Account Statements (e.g., last 6 months, showing salary credits)',
        'Form 16 or Income Tax Returns (Latest)',
        'Employment ID Card / Proof of Employment (e.g., Appointment Letter)'
      ]
    },
    {
      title: 'For Self-Employed Applicants / Business Owners',
      documents: [
        'Income Tax Returns of the last 2 to 3 years',
        'Financial Statements for the previous 2-3 years',
        'Bank Account Statements of the last 6 to 12 months',
        'Proof of Business Existence (e.g., GST Registration, Shop Act License, Partnership Deed, etc.)',
        'Office Address Proof'
      ]
    }
  ]

  const faqs = [
    {
      question: 'Who can apply for a loan from KreditRoute?',
      answer: 'Anyone between 21 and 65 years old can easily apply through KreditRoute. You can be eligible if you are salaried or self-employed and your income meets the basic limit. You are also required to hold 1–2 years of work experience.'
    },
    {
      question: 'How much is a CIBIL score needed for a loan?',
      answer: 'Most lenders consider a CIBIL score of at least 700. A higher score may help you get better loan interest rates.'
    },
    {
      question: 'How much loan can I get?',
      answer: 'You may be eligible to receive up to ₹10 Crores depending on your profile, income, and the lender\'s policy.'
    },
    {
      question: 'What are the loan tenure options?',
      answer: 'You can choose a loan tenure from 1 year to 30 years. Pick what fits your budget.'
    },
    {
      question: 'Are loan interest rates fixed or floating?',
      answer: 'Loan interest rates can be either fixed or floating. Fixed rates mean your EMI stays the same every month. The rate depends on your credit score, loan amount, and lender.'
    },
    {
      question: 'How long does the approval and disbursal take?',
      answer: 'The process is fast. You can apply with KreditRoute to fast-track your application. After successfully passing the eligibility test, you can get approval and disbursal quickly, typically within 1-7 days.'
    }
  ]

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 text-white overflow-hidden">
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
              Instant Loans That Drive Your Dreams
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Get attractive interest rates and experience fast disbursal.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/apply">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Apply Now
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
              >
                Calculate EMI
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Loan Types Grid */}
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
              Choose Your Loan Type
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of loan products designed to meet all your financial needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => {
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
                    href={loan.href}
                    className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-2xl transition-all duration-300 h-full flex flex-col group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center overflow-hidden relative"
                        whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.15 }}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <loan.IconComponent />
                        </div>
                      </motion.div>
                      {loan.badge && (
                        <span className="text-xs font-semibold bg-accent-100 text-accent-700 px-3 py-1 rounded-full">
                          {loan.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors flex-grow">
                      {loan.title}
                    </h3>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Highlights Table */}
      <FeatureHighlightsTable
        title="KreditRoute Edge: Loan Highlights"
        subtitle="Get an instant overview of everything about loans that deliver speed, value, and convenience."
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
              Gear Up With The Best Loan Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These features, from great loan interest rates to fast disbursal, are designed to get you funded sooner.
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
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all text-center"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4 overflow-hidden relative"
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
        title="Do You Qualify? See Loan Eligibility Criteria Below"
        subtitle="A quick overview of the loan eligibility criteria."
        criteria={eligibilityCriteria}
      />

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
              Why Is KreditRoute Your Ideal Loan Partner?
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We're working to make your loan journey effortless and satisfying. Here's how:
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
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
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

      {/* EMI Calculator */}
      <EMICalculator title="Smart EMI Calculator for Loan" />

      {/* Documents Checklist */}
      <DocumentsChecklist
        title="Loan Documents You Need"
        subtitle="A quick checklist of the necessary paperwork for your KreditRoute loan."
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
              Find quick answers to common questions about our loan products and processes.
            </p>
          </motion.div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  )
}
