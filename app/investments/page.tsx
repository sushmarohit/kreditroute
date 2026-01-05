'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Percent, Shield, ArrowRight, CheckCircle, Clock, DollarSign, BarChart } from 'lucide-react'
import { useState } from 'react'

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

    // Calculate using Future Value of Annuity formula: FV = P * [((1 + r)^n - 1) / r]
    // Where P = monthly payment, r = monthly rate, n = number of months
    const monthlyRate = rate / 100 / 12
    const numberOfMonths = years * 12
    const totalInvestment = monthly * numberOfMonths

    // Future Value calculation
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
            Investments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grow your wealth with our comprehensive range of investment products. From fixed deposits to market-linked plans, choose what suits your financial goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {investmentProducts.map((product, index) => {
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

                  <div className="flex items-center text-primary-600 font-semibold group">
                    <span>Invest Now</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Why Invest Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Why Invest with KreditRoute?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Regulated</h3>
              <p className="text-sm opacity-90">All investment products are SEBI regulated and secure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
              <p className="text-sm opacity-90">Get expert advice to choose the right investment products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Process</h3>
              <p className="text-sm opacity-90">Invest online with minimal documentation and quick processing</p>
            </div>
          </div>
        </motion.div>

        {/* Investment Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl p-8 border-2 border-gray-200"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-black"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Investment Period (Years)</label>
              <input
                type="number"
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(e.target.value)}
                placeholder="10"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-black"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={calculateReturns}
              className="px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-colors"
            >
              Calculate Returns
            </button>
          </div>

          {/* Results */}
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
    </div>
  )
}

