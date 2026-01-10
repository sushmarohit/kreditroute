'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ComponentType } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import {
  PersonalLoanIcon,
  CreditCardIcon,
  BusinessLoanIcon,
  HomeLoanIcon,
  CreditScoreIcon,
  BillPaymentIcon,
  LoanRepaymentIcon,
  ElectricityBillIcon,
  InvestmentBondsIcon,
  FixedDepositIcon,
  MarketLinkedIcon,
  HealthInsuranceIcon,
  TermLifeInsuranceIcon,
  CarInsuranceIcon
} from '@/components/icons/IconLibrary'

export function FinancialServices() {
  const services: Array<{
    category: string
    items: Array<{
      IconComponent: ComponentType
      title: string
      desc: string
      href: string
      badge?: string
    }>
  }> = [
    {
      category: 'Loans and Cards',
      items: [
        { IconComponent: PersonalLoanIcon, title: 'Personal Loan', desc: 'Instant personal loans up to ₹40 Lakhs', href: '/loans/personal', badge: '₹500 Cashback' },
        { IconComponent: CreditCardIcon, title: 'Credit Cards', desc: 'Best credit cards with exciting rewards', href: '/credit-cards', badge: 'Cashback Offer' },
        { IconComponent: BusinessLoanIcon, title: 'Business Loan', desc: 'Grow your business with flexible financing', href: '/loans/business' },
        { IconComponent: HomeLoanIcon, title: 'Home Loan', desc: 'Fulfill your dream of owning a home', href: '/loans/home' },
        { IconComponent: BusinessLoanIcon, title: 'Loan Against Property', desc: 'Unlock value from your property', href: '/loans/lap' },
        { IconComponent: HomeLoanIcon, title: 'Transfer Home Loan', desc: 'Save on interest with balance transfer', href: '/loans/transfer' },
      ]
    },
    {
      category: 'Credit Score & Bill Payments',
      items: [
        { IconComponent: CreditScoreIcon, title: 'Credit Score', desc: 'Check your credit score for free', href: '/credit-score' },
        { IconComponent: CreditScoreIcon, title: 'Credit Health Pro', desc: 'Advanced credit monitoring & insights', href: '/credit-score/pro' },
        { IconComponent: CreditScoreIcon, title: 'Fix your Credit Score', desc: 'Improve your credit score with expert guidance', href: '/credit-score/fix' },
        { IconComponent: CreditScoreIcon, title: 'Video Credit Report', desc: 'Understand your credit report easily', href: '/credit-score/report' },
        { IconComponent: BillPaymentIcon, title: 'Credit Card Bill', desc: 'Pay credit card bills instantly', href: '/bill-payments/credit-card' },
        { IconComponent: LoanRepaymentIcon, title: 'Loan Repayment', desc: 'Repay loans with ease', href: '/bill-payments/loan' },
        { IconComponent: ElectricityBillIcon, title: 'Electricity Bill', desc: 'Pay electricity bills online', href: '/bill-payments/electricity' },
      ]
    },
    {
      category: 'Investment & Insurance Products',
      items: [
        { IconComponent: InvestmentBondsIcon, title: 'Bonds', desc: 'SEBI Regulated - Newly Launched', href: '/investments/bonds' },
        { IconComponent: FixedDepositIcon, title: 'Fixed Deposits', desc: 'Earn up to 8% returns', href: '/investments/fixed-deposits' },
        { IconComponent: MarketLinkedIcon, title: 'Market Linked Plans', desc: 'Invest in market-linked products', href: '/investments/market-linked' },
        { IconComponent: FixedDepositIcon, title: 'National Pension Scheme', desc: 'Plan for your retirement', href: '/investments/nps' },
        { IconComponent: HealthInsuranceIcon, title: 'Health Insurance', desc: '0% GST - Comprehensive coverage', href: '/insurance/health' },
        { IconComponent: TermLifeInsuranceIcon, title: 'Term Life Insurance', desc: '0% GST - Lowest Price', href: '/insurance/term-life' },
        { IconComponent: CarInsuranceIcon, title: 'Car Insurance', desc: 'Comprehensive car insurance plans', href: '/insurance/car' },
        { IconComponent: CarInsuranceIcon, title: 'Two Wheeler Insurance', desc: 'Protect your two-wheeler', href: '/insurance/two-wheeler' },
        { IconComponent: FixedDepositIcon, title: 'Retirement Plans', desc: 'Secure your golden years', href: '/insurance/retirement' },
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One Stop for all Financial Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of financial products and services designed to meet all your needs
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, categoryIndex) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {service.items.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -8,
                        scale: 1.03
                      }}
                      animate={{
                        y: [0, -4, 0],
                        opacity: 1
                      }}
                      transition={{
                        opacity: { duration: 0.5, delay: index * 0.05 },
                        y: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.15,
                          repeatType: "reverse"
                        }
                      }}
                    >
                      <Link
                        href={item.href}
                        className="group block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <motion.div 
                            className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center overflow-hidden relative"
                            whileHover={{ 
                              rotate: [0, -15, 15, -15, 0],
                              scale: 1.15,
                              transition: { duration: 0.5 }
                            }}
                          >
                            <div className="w-full h-full flex items-center justify-center">
                              <item.IconComponent />
                            </div>
                          </motion.div>
                          {item.badge && (
                            <motion.span 
                              className="text-xs font-semibold bg-accent-100 text-accent-700 px-2 py-1 rounded"
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
                              {item.badge}
                            </motion.span>
                          )}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                        <motion.div 
                          className="flex items-center text-primary-600 text-sm font-medium"
                          whileHover={{ x: 4 }}
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

