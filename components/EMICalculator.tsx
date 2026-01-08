'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Calculator } from 'lucide-react'

interface EMICalculatorProps {
  title?: string
  defaultLoanAmount?: number
  defaultInterestRate?: number
  defaultTenure?: number
}

export function EMICalculator({ 
  title = "Smart EMI Calculator",
  defaultLoanAmount = 1000000,
  defaultInterestRate = 10.5,
  defaultTenure = 5
}: EMICalculatorProps) {
  const [loanAmount, setLoanAmount] = useState(defaultLoanAmount.toString())
  const [interestRate, setInterestRate] = useState(defaultInterestRate.toString())
  const [tenure, setTenure] = useState(defaultTenure.toString())
  const [tenureType, setTenureType] = useState<'month' | 'year'>('year')
  const [result, setResult] = useState<{
    emi: number
    totalAmount: number
    totalInterest: number
    principal: number
  } | null>(null)

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 100 / 12 // Monthly interest rate
    const months = tenureType === 'year' ? parseFloat(tenure) * 12 : parseFloat(tenure)

    if (!principal || !rate || !months || principal <= 0 || rate <= 0 || months <= 0) {
      return
    }

    // EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1)
    const totalAmount = emi * months
    const totalInterest = totalAmount - principal

    setResult({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principal: Math.round(principal)
    })
  }

  // Auto-calculate on mount
  useEffect(() => {
    calculateEMI()
  }, [])

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto">
              <Calculator className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₹)</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => {
                  setLoanAmount(e.target.value)
                  setTimeout(calculateEMI, 100)
                }}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (% p.a.)</label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => {
                  setInterestRate(e.target.value)
                  setTimeout(calculateEMI, 100)
                }}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => {
                    setTenure(e.target.value)
                    setTimeout(calculateEMI, 100)
                  }}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-black"
                />
                <select
                  value={tenureType}
                  onChange={(e) => {
                    setTenureType(e.target.value as 'month' | 'year')
                    setTimeout(calculateEMI, 100)
                  }}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-black"
                >
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </div>
            </div>
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border-2 border-primary-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Break-up of Total Payment
              </h3>
              <div className="text-center mb-4">
                <p className="text-3xl font-bold text-primary-600 mb-1">
                  ₹{result.emi.toLocaleString('en-IN')} Per Month
                </p>
                <p className="text-gray-600">
                  EMI for {tenureType === 'year' ? `${tenure} Years` : `${tenure} Months`}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Principal Amount</p>
                  <p className="text-xl font-bold text-gray-900">₹{result.principal.toLocaleString('en-IN')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Interest Payable</p>
                  <p className="text-xl font-bold text-accent-600">₹{result.totalInterest.toLocaleString('en-IN')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Amount Payable</p>
                  <p className="text-xl font-bold text-primary-600">₹{result.totalAmount.toLocaleString('en-IN')}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

