'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Percent, Shield, ArrowRight, CheckCircle, Clock, DollarSign, BarChart, Zap, Target, Users, Globe } from 'lucide-react'
import { useState } from 'react'
import { FeatureHighlightsTable } from '@/components/FeatureHighlightsTable'
import { FAQAccordion } from '@/components/FAQAccordion'

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

  const investmentProducts = [
    {
      icon: TrendingUp,
      title: 'Bonds',
      description: 'SEBI Regulated investment products with fixed returns and low risk.',
      features: ['SEBI Regulated', 'Fixed returns', 'Low risk', 'Regular income'],
      href: '/investments/bonds',
      badge: 'Newly Launched',
      returns: '7-9% p.a.',
      minInvestment: '₹10,000'
    },
    {
      icon: Percent,
      title: 'Fixed Deposits',
      description: 'Earn up to 8% returns with secure fixed deposit investments.',
      features: ['Up to 8% returns', 'Safe investment', 'Flexible tenure', 'Tax benefits'],
      href: '/investments/fixed-deposits',
      returns: 'Up to 8% p.a.',
      minInvestment: '₹5,000'
    },
    {
      icon: BarChart,
      title: 'Market Linked Plans',
      description: 'Invest in market-linked products for potential higher returns.',
      features: ['Market linked', 'Growth potential', 'Diversified portfolio', 'Professional management'],
      href: '/investments/market-linked',
      returns: 'Market linked',
      minInvestment: '₹1,000'
    },
    {
      icon: Shield,
      title: 'National Pension Scheme (NPS)',
      description: 'Plan for your retirement with tax benefits and long-term wealth creation.',
      features: ['Tax benefits', 'Retirement planning', 'Long-term growth', 'Government backed'],
      href: '/investments/nps',
      returns: '8-12% p.a.',
      minInvestment: '₹500'
    },
    {
      icon: DollarSign,
      title: 'Mutual Funds',
      description: 'Diversify your portfolio with professionally managed mutual funds.',
      features: ['Diversified', 'Professional management', 'Liquidity', 'Flexible SIP'],
      href: '/investments/mutual-funds',
      returns: 'Market linked',
      minInvestment: '₹500'
    },
    {
      icon: TrendingUp,
      title: 'Stocks & Equity',
      description: 'Invest in stocks and equity for long-term wealth creation.',
      features: ['Direct equity', 'Long-term growth', 'Dividend income', 'Portfolio building'],
      href: '/investments/stocks',
      returns: 'Market linked',
      minInvestment: '₹1,000'
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

  const keyFeatures = [
    {
      icon: Shield,
      title: 'Secure & Regulated',
      description: 'All investment products are SEBI regulated and secure.'
    },
    {
      icon: TrendingUp,
      title: 'Expert Guidance',
      description: 'Get expert advice to choose the right investment products.'
    },
    {
      icon: Clock,
      title: 'Easy Process',
      description: 'Invest online with minimal documentation and quick processing.'
    },
    {
      icon: Target,
      title: 'Diversified Portfolio',
      description: 'Build a diversified portfolio with multiple investment options.'
    }
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Secure & Regulated',
      description: 'All investment products are SEBI regulated and secure.'
    },
    {
      icon: TrendingUp,
      title: 'Expert Guidance',
      description: 'Get expert advice to choose the right investment products for your goals.'
    },
    {
      icon: Clock,
      title: 'Easy Process',
      description: 'Invest online with minimal documentation and quick processing.'
    },
    {
      icon: Target,
      title: 'Diversified Portfolio',
      description: 'Build a diversified portfolio with multiple investment options.'
    },
    {
      icon: Zap,
      title: 'Flexible Investment',
      description: 'Choose from SIP, lump sum, or flexible investment options.'
    },
    {
      icon: Users,
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
              Grow Your Wealth with Smart Investments
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive range of investment products. From fixed deposits to market-linked plans, choose what suits your financial goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/investments/bonds">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Invest Now
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentProducts.map((product, index) => {
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
                        <Percent className="w-4 h-4 text-primary-600" />
                        <span className="font-medium">Returns: {product.returns}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <DollarSign className="w-4 h-4 text-primary-600" />
                        <span>Min Investment: {product.minInvestment}</span>
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
                      <span>Invest Now</span>
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
        title="KreditRoute Edge: Investment Highlights"
        subtitle="Get an instant overview of everything about investments that deliver value and growth."
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
              Why Invest with KreditRoute?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These features are designed to help you make informed investment decisions.
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
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4"
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
                className="px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-colors"
              >
                Calculate Returns
              </motion.button>
            </div>

            {calculatedResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border-2 border-primary-200"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Investment Summary</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Total Investment</p>
                    <p className="text-2xl font-bold text-gray-900">₹{calculatedResult.totalInvestment.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Maturity Amount</p>
                    <p className="text-2xl font-bold text-primary-600">₹{calculatedResult.maturityAmount.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Estimated Returns</p>
                    <p className="text-2xl font-bold text-accent-600">₹{calculatedResult.returns.toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Returns Percentage: <span className="font-semibold text-primary-600">
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
              Why Is KreditRoute Your Ideal Investment Partner?
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We're working to make your investment journey effortless and rewarding. Here's how:
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
              Find quick answers to common questions about our investment products and processes.
            </p>
          </motion.div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  )
}
