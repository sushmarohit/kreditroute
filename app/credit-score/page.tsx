'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ComponentType } from 'react'
import { useState } from 'react'
import { 
  CreditScoreIcon, 
  DigitalProcessIcon, 
  SecureIcon, 
  InstantFundsIcon,
  CreditReportIcon,
  CreditInsightsIcon,
  CreditImprovementIcon,
  CreditMonitoringIcon
} from '@/components/icons/IconLibrary'
import { FeatureHighlightsTable } from '@/components/FeatureHighlightsTable'
import { FAQAccordion } from '@/components/FAQAccordion'

export default function CreditScorePage() {
  const [mobileNumber, setMobileNumber] = useState('')
  const [showOTP, setShowOTP] = useState(false)
  const [otp, setOtp] = useState('')

  const services: Array<{
    IconComponent: ComponentType
    title: string
    href: string
    badge?: string
  }> = [
    {
      IconComponent: CreditScoreIcon,
      title: 'Free Credit Score',
      href: '/credit-score/check',
      badge: 'Free'
    },
    {
      IconComponent: CreditMonitoringIcon,
      title: 'Credit Health Pro',
      href: '/credit-score/pro',
      badge: 'Pro'
    },
    {
      IconComponent: CreditImprovementIcon,
      title: 'Fix your Credit Score',
      href: '/credit-score/fix'
    },
    {
      IconComponent: CreditReportIcon,
      title: 'Video Credit Report',
      href: '/credit-score/report'
    }
  ]

  const scoreRanges = [
    { range: '750-900', label: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' },
    { range: '700-749', label: 'Good', color: 'text-blue-600', bg: 'bg-blue-100' },
    { range: '650-699', label: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { range: '300-649', label: 'Poor', color: 'text-red-600', bg: 'bg-red-100' },
  ]

  const featureHighlights = [
    { feature: 'Credit Score Range', details: '300 - 900' },
    { feature: 'Free Check', details: 'Yes, No credit card required' },
    { feature: 'Report Access', details: 'Full credit report available' },
    { feature: 'Update Frequency', details: 'Monthly updates' },
    { feature: 'CIBIL Score', details: 'Direct from CIBIL' },
    { feature: 'Score Insights', details: 'Detailed analysis included' },
    { feature: 'Improvement Tips', details: 'Personalized recommendations' },
    { feature: 'Credit Monitoring', details: '24/7 monitoring available' },
    { feature: 'Report Value', details: 'Worth ₹500 - FREE' }
  ]

  const keyFeatures: Array<{
    IconComponent: ComponentType
    title: string
    description: string
  }> = [
    {
      IconComponent: CreditScoreIcon,
      title: 'Free Credit Score',
      description: 'Check your credit score for free. No credit card required.'
    },
    {
      IconComponent: CreditInsightsIcon,
      title: 'Detailed Insights',
      description: 'Get detailed analysis of your credit profile and factors affecting your score.'
    },
    {
      IconComponent: CreditImprovementIcon,
      title: 'Improvement Tips',
      description: 'Receive personalized recommendations to improve your credit score.'
    },
    {
      IconComponent: SecureIcon,
      title: 'Secure & Private',
      description: 'Your credit information is protected with bank-level security.'
    }
  ]

  const whyChooseUs: Array<{
    IconComponent: ComponentType
    title: string
    description: string
  }> = [
    {
      IconComponent: CreditScoreIcon,
      title: 'Free Credit Score',
      description: 'Get your CIBIL credit report worth ₹500 for FREE. No hidden charges.'
    },
    {
      IconComponent: SecureIcon,
      title: 'No Credit Score Impact',
      description: 'Check your credit score without affecting it. Safe and secure.'
    },
    {
      IconComponent: InstantFundsIcon,
      title: 'Instant Results',
      description: 'Get your credit score instantly. No waiting, no delays.'
    },
    {
      IconComponent: CreditReportIcon,
      title: 'Detailed Analysis',
      description: 'Understand your credit profile with detailed insights and recommendations.'
    },
    {
      IconComponent: CreditMonitoringIcon,
      title: 'Monthly Updates',
      description: 'Track your credit score changes with monthly updates.'
    },
    {
      IconComponent: CreditInsightsIcon,
      title: 'Expert Guidance',
      description: 'Get expert advice on how to improve your credit score.'
    }
  ]

  const faqs = [
    {
      question: 'What is a credit score?',
      answer: 'A credit score is a three-digit number that represents your creditworthiness. It ranges from 300 to 900, with higher scores indicating better credit health. Lenders use this score to evaluate your loan and credit card applications.'
    },
    {
      question: 'How can I check my credit score for free?',
      answer: 'You can check your credit score for free on KreditRoute. Simply enter your mobile number, verify with OTP, and get instant access to your credit score and report. No credit card required.'
    },
    {
      question: 'Will checking my credit score affect it?',
      answer: 'No, checking your own credit score through KreditRoute will not affect your credit score. This is considered a "soft inquiry" and does not impact your credit profile.'
    },
    {
      question: 'What is a good credit score?',
      answer: 'A credit score above 750 is considered excellent, 700-749 is good, 650-699 is fair, and below 650 is poor. Higher scores help you get better interest rates and loan approvals.'
    },
    {
      question: 'How often is my credit score updated?',
      answer: 'Your credit score is updated monthly based on your credit activity. You can check your updated score anytime on KreditRoute.'
    },
    {
      question: 'How can I improve my credit score?',
      answer: 'To improve your credit score: pay bills on time, keep credit utilization low, maintain a good credit mix, avoid too many credit inquiries, and check your credit report regularly for errors.'
    }
  ]

  const handleGetOTP = () => {
    if (mobileNumber.length === 10) {
      setShowOTP(true)
    }
  }

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-white text-black overflow-hidden"
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get your CIBIL Credit Report worth ₹500 for FREE
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              5 Lac+ people have got their Credit Scores for FREE!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-200 text-black rounded-lg font-bold text-lg hover:bg-gray-300 transition-colors border border-gray-300"
            >
              Get Free Credit Score
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Credit Score Check Card */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)] p-8 md:p-12 border-2 border-black/10"
            style={{
              transform: 'perspective(1000px) rotateX(1deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Your Credit Score</h2>
                <p className="text-gray-600 mb-6">
                  Get your free credit score instantly. No credit card required. Check your score and understand your credit health.
                </p>
                
                {!showOTP ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder="Enter 10-digit mobile number"
                        className="w-full px-4 py-3 border-2 border-black/20 rounded-lg focus:ring-2 focus:ring-black/30 focus:border-black/40 outline-none text-black placeholder:text-gray-400 bg-white/50 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
                        maxLength={10}
                      />
                    </div>
                    <motion.button
                      onClick={handleGetOTP}
                      disabled={mobileNumber.length !== 10}
                      whileHover={{ scale: mobileNumber.length === 10 ? 1.02 : 1 }}
                      whileTap={{ scale: mobileNumber.length === 10 ? 0.98 : 1 }}
                      className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
                    >
                      Check Credit Score
                    </motion.button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enter OTP sent to {mobileNumber.slice(0, 2)}XXXXXX{mobileNumber.slice(-2)}
                      </label>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        placeholder="Enter 6-digit OTP"
                        className="w-full px-4 py-3 border-2 border-black/20 rounded-lg focus:ring-2 focus:ring-black/30 focus:border-black/40 outline-none text-black placeholder:text-gray-400 text-center text-2xl tracking-widest bg-white/50 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
                        maxLength={6}
                      />
                    </div>
                    <motion.button
                      onClick={() => {/* Handle OTP verification */}}
                      disabled={otp.length !== 6}
                      whileHover={{ scale: otp.length === 6 ? 1.02 : 1 }}
                      whileTap={{ scale: otp.length === 6 ? 0.98 : 1 }}
                      className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
                    >
                      Verify OTP
                    </motion.button>
                    <button
                      onClick={() => setShowOTP(false)}
                      className="w-full py-2 text-black hover:text-gray-800 text-sm font-medium"
                    >
                      Change Mobile Number
                    </button>
                  </div>
                )}
              </div>
              <div className="bg-white/40 rounded-xl p-8 text-center border-2 border-black/10 shadow-[0_8px_25px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]">
                <div className="w-24 h-24 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden relative border border-black/20 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]">
                  <CreditScoreIcon />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">770</h3>
                <p className="text-xl text-gray-600 mb-6">Excellent</p>
                <div className="space-y-2">
                  {scoreRanges.map((range, index) => (
                    <div key={index} className={`${range.bg} ${range.color} px-4 py-2 rounded-lg text-sm font-medium`}>
                      {range.range} - {range.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Credit Score Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of credit score services to monitor and improve your credit health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
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
                    href={service.href}
                    className="block bg-white/60 rounded-xl p-6 border-2 border-black/10 hover:border-black/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-300 h-full flex flex-col group shadow-[0_8px_25px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]"
                    style={{
                      transform: 'perspective(1000px) rotateX(1deg)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="w-14 h-14 bg-black/10 backdrop-blur-sm rounded-lg flex items-center justify-center overflow-hidden relative border border-black/20 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]"
                        whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.15 }}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <service.IconComponent />
                        </div>
                      </motion.div>
                      {service.badge && (
                        <span className="text-xs font-semibold bg-white/80 backdrop-blur-sm text-black px-3 py-1 rounded-full border border-black/20 shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3)]">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors flex-grow">
                      {service.title}
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
        title="KreditRoute Edge: Credit Score Highlights"
        subtitle="Get an instant overview of everything about credit scores that deliver value and convenience."
        features={featureHighlights}
      />

      {/* Key Features Section */}
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
              Credit Score Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive credit score services designed to help you understand and improve your credit health
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
      <section className="py-12 md:py-16 bg-white text-black relative"
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose KreditRoute for Credit Score?
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We're working to make your credit health journey effortless and satisfying. Here's how:
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
              Find quick answers to common questions about credit scores and credit reports.
            </p>
          </motion.div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  )
}
