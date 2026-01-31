'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ComponentType } from 'react'
import { useState } from 'react'
import {
  InvestmentBondsIcon,
  FixedDepositIcon,
  MarketLinkedIcon,
  SecureIcon,
  DigitalProcessIcon,
  BestRatesIcon
} from '@/components/icons/IconLibrary'
import { FeatureHighlightsTable } from '@/components/FeatureHighlightsTable'
import { FAQAccordion } from '@/components/FAQAccordion'
import { ServiceCard } from '@/components/ServiceCard'

export default function InvestmentsPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('')
  const [expectedReturns, setExpectedReturns] = useState('')
  const [investmentPeriod, setInvestmentPeriod] = useState('')
  const [calculatedResult, setCalculatedResult] = useState<{
    totalInvestment: number
    maturityAmount: number
    returns: number
  } | null>(null)

  const calculateReturns = () => {
    const monthly = parseFloat(monthlyInvestment)
    const rate = parseFloat(expectedReturns)
    const years = parseFloat(investmentPeriod)

    if (!monthly || !rate || !years || monthly <= 0 || rate <= 0 || years <= 0) {
      alert('Please enter valid values for all fields')
      return
    }

    const monthlyRate = rate / 100 / 12
    const numberOfMonths = years * 12
    const totalInvestment = monthly * numberOfMonths
    const maturityAmount = monthly * (((Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate))
    const returns = maturityAmount - totalInvestment

    setCalculatedResult({
      totalInvestment: Math.round(totalInvestment),
      maturityAmount: Math.round(maturityAmount),
      returns: Math.round(returns)
    })
  }

  const investmentProducts: Array<{
    IconComponent: ComponentType
    title: string
    href: string
    badge?: string
  }> = [
    {
      IconComponent: InvestmentBondsIcon,
      title: 'Bonds',
      href: '/investments/bonds',
      badge: 'Newly Launched'
    },
    {
      IconComponent: FixedDepositIcon,
      title: 'Fixed Deposits',
      href: '/investments/fixed-deposits'
    },
    {
      IconComponent: MarketLinkedIcon,
      title: 'Market Linked Plans',
      href: '/investments/market-linked'
    },
    {
      IconComponent: FixedDepositIcon,
      title: 'National Pension Scheme (NPS)',
      href: '/investments/nps'
    },
    {
      IconComponent: MarketLinkedIcon,
      title: 'Mutual Funds',
      href: '/investments/mutual-funds'
    },
    {
      IconComponent: MarketLinkedIcon,
      title: 'Stocks & Equity',
      href: '/investments/stocks'
    }
  ]

  const featureHighlights = [
    { feature: 'Investment Amount', details: '₹500 – ₹1 Crore+' },
    { feature: 'Expected Returns', details: '7% – 15% p.a.' },
    { feature: 'Investment Type', details: 'Fixed & Market Linked' },
    { feature: 'Risk Level', details: 'Low to High' },
    { feature: 'Tax Benefits', details: 'Available on select products' },
    { feature: 'Eligibility', details: '18+ years, Indian Resident' },
    { feature: 'Lock-in Period', details: '0 - 5 years' },
    { feature: 'Liquidity', details: 'Immediate to Long-term' },
    { feature: 'Minimum Investment', details: '₹500 onwards' }
  ]

  const keyFeatures: Array<{
    IconComponent: ComponentType
    title: string
    description: string
  }> = [
    {
      IconComponent: SecureIcon,
      title: 'Secure & Regulated',
      description: 'All investment products are SEBI regulated and secure.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: 'Expert Guidance',
      description: 'Get expert advice to choose the right investment products.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: 'Easy Process',
      description: 'Invest online with minimal documentation and quick processing.'
    },
    {
      IconComponent: MarketLinkedIcon,
      title: 'Diversified Portfolio',
      description: 'Build a diversified portfolio with multiple investment options.'
    }
  ]

  const whyChooseUs: Array<{
    IconComponent: ComponentType
    title: string
    description: string
  }> = [
    {
      IconComponent: SecureIcon,
      title: 'Secure & Regulated',
      description: 'All investment products are SEBI regulated and secure.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: 'Expert Guidance',
      description: 'Get expert advice to choose the right investment products for your goals.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: 'Easy Process',
      description: 'Invest online with minimal documentation and quick processing.'
    },
    {
      IconComponent: MarketLinkedIcon,
      title: 'Diversified Portfolio',
      description: 'Build a diversified portfolio with multiple investment options.'
    },
    {
      IconComponent: MarketLinkedIcon,
      title: 'Flexible Investment',
      description: 'Choose from SIP, lump sum, or flexible investment options.'
    },
    {
      IconComponent: DigitalProcessIcon,
      title: 'Professional Management',
      description: 'Your investments are managed by professional fund managers.'
    }
  ]

  const faqs = [
    {
      question: 'What investment products does KreditRoute offer?',
      answer: 'KreditRoute offers a comprehensive range of investment products including bonds, fixed deposits, market-linked plans, NPS, mutual funds, and stocks & equity.'
    },
    {
      question: 'What is the minimum investment amount?',
      answer: 'The minimum investment amount varies by product. It can be as low as ₹500 for SIPs and mutual funds, and ₹5,000 for fixed deposits.'
    },
    {
      question: 'Are the investment products safe?',
      answer: 'Yes, all investment products offered through KreditRoute are SEBI regulated. However, market-linked products are subject to market risks. Please read the offer documents carefully before investing.'
    },
    {
      question: 'What are the tax benefits on investments?',
      answer: 'Tax benefits are available on select investment products like NPS, ELSS mutual funds, and certain fixed deposits. Tax benefits are subject to applicable tax laws.'
    },
    {
      question: 'Can I withdraw my investment early?',
      answer: 'Withdrawal terms depend on the investment product. Some products have lock-in periods, while others offer liquidity. Please check the specific product terms before investing.'
    },
    {
      question: 'How do I track my investments?',
      answer: 'You can track all your investments through your KreditRoute account. We provide regular updates and statements for all your investments.'
    }
  ]

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
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Grow Your Wealth with Smart Investments
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive range of investment products. From fixed deposits to market-linked plans, choose what suits your financial goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/investments/bonds">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-200 text-black rounded-lg font-bold text-lg hover:bg-gray-300 transition-colors border border-gray-300"
                >
                  Invest Now
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-200 text-black rounded-lg font-bold text-lg hover:bg-gray-300 transition-colors border border-gray-300"
              >
                Explore Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Products Grid */}
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
              Investment Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Grow your wealth with our comprehensive range of investment products designed to meet all your financial goals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {investmentProducts.map((product, index) => (
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
        title="KreditRoute Edge: Investment Highlights"
        subtitle="Get an instant overview of everything about investments that deliver value and growth."
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
              Why Invest with KreditRoute?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These features are designed to help you make informed investment decisions.
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
                  className="bg-white/60 rounded-xl p-6 border-2 border-black/10 hover:border-black/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all text-center shadow-[0_8px_25px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]"
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

      {/* Investment Calculator */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Investment Calculator</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Investment (₹)</label>
                <input
                  type="number"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(e.target.value)}
                  placeholder="10,000"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Returns (% p.a.)</label>
                <input
                  type="number"
                  value={expectedReturns}
                  onChange={(e) => setExpectedReturns(e.target.value)}
                  placeholder="12"
                  step="0.1"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Period (Years)</label>
                <input
                  type="number"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(e.target.value)}
                  placeholder="10"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-black"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <motion.button
                onClick={calculateReturns}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
              >
                Calculate Returns
              </motion.button>
            </div>

            {calculatedResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 bg-white/60 backdrop-blur-md rounded-xl p-6 border-2 border-black/10 shadow-[0_8px_25px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Investment Summary</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Total Investment</p>
                    <p className="text-2xl font-bold text-gray-900">₹{calculatedResult.totalInvestment.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Maturity Amount</p>
                    <p className="text-2xl font-bold text-black">₹{calculatedResult.maturityAmount.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Estimated Returns</p>
                    <p className="text-2xl font-bold text-gray-900">₹{calculatedResult.returns.toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Returns Percentage: <span className="font-semibold text-black">
                      {((calculatedResult.returns / calculatedResult.totalInvestment) * 100).toFixed(2)}%
                    </span>
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
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
              Why Is KreditRoute Your Ideal Investment Partner?
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We're working to make your investment journey effortless and rewarding. Here's how:
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
                  className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all shadow-[0_8px_25px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
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
              Find quick answers to common questions about our investment products and processes.
            </p>
          </motion.div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  )
}
