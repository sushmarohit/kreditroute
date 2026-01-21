'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ComponentType } from 'react'
import {
  PersonalLoanIcon,
  CreditCardIcon,
  BusinessLoanIcon,
  HomeLoanIcon,
  CreditScoreIcon,
  CreditMonitoringIcon,
  CreditImprovementIcon,
  VideoCreditReportIcon,
  BillPaymentIcon,
  LoanRepaymentIcon,
  ElectricityBillIcon,
  InvestmentBondsIcon,
  FixedDepositIcon,
  MarketLinkedIcon,
  NPSIcon,
  HealthInsuranceIcon,
  TermLifeInsuranceIcon,
  CarInsuranceIcon,
  TwoWheelerInsuranceIcon,
  RetirementPlansIcon
} from '@/components/icons/IconLibrary'

export function FinancialServices() {
  const services: Array<{
    category: string
    items: Array<{
      IconComponent: ComponentType
      title: string
      href: string
      badge?: string
    }>
  }> = [
    {
      category: 'Loans and Cards',
      items: [
        { IconComponent: PersonalLoanIcon, title: 'Personal Loan', href: '/loans', badge: '₹500 Cashback' },
        { IconComponent: CreditCardIcon, title: 'Credit Cards', href: '/credit-cards', badge: 'Cashback Offer' },
        { IconComponent: BusinessLoanIcon, title: 'Business Loan', href: '/loans' },
        { IconComponent: HomeLoanIcon, title: 'Home Loan', href: '/loans' },
        { IconComponent: BusinessLoanIcon, title: 'Loan Against Property', href: '/loans' },
        { IconComponent: HomeLoanIcon, title: 'Transfer Home Loan', href: '/loans' },
      ]
    },
    {
      category: 'Credit Score & Bill Payments',
      items: [
        { IconComponent: CreditScoreIcon, title: 'Credit Score', href: '/credit-score' },
        { IconComponent: CreditMonitoringIcon, title: 'Credit Health Pro', href: '/credit-score' },
        { IconComponent: CreditImprovementIcon, title: 'Fix your Credit Score', href: '/credit-score' },
        { IconComponent: VideoCreditReportIcon, title: 'Video Credit Report', href: '/credit-score' },
        { IconComponent: BillPaymentIcon, title: 'Credit Card Bill', href: '/bill-payments' },
        { IconComponent: LoanRepaymentIcon, title: 'Loan Repayment', href: '/bill-payments' },
        { IconComponent: ElectricityBillIcon, title: 'Electricity Bill', href: '/bill-payments' },
      ]
    },
    {
      category: 'Investment & Insurance Products',
      items: [
        { IconComponent: InvestmentBondsIcon, title: 'Bonds', href: '/investments', badge: 'Newly Launched' },
        { IconComponent: FixedDepositIcon, title: 'Fixed Deposits', href: '/investments' },
        { IconComponent: MarketLinkedIcon, title: 'Market Linked Plans', href: '/investments' },
        { IconComponent: NPSIcon, title: 'National Pension Scheme', href: '/investments' },
        { IconComponent: HealthInsuranceIcon, title: 'Health Insurance', href: '/insurance', badge: '0% GST' },
        { IconComponent: TermLifeInsuranceIcon, title: 'Term Life Insurance', href: '/insurance', badge: '0% GST' },
        { IconComponent: CarInsuranceIcon, title: 'Car Insurance', href: '/insurance' },
        { IconComponent: TwoWheelerInsuranceIcon, title: 'Two Wheeler Insurance', href: '/insurance' },
        { IconComponent: RetirementPlansIcon, title: 'Retirement Plans', href: '/insurance' },
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
                        className="group flex flex-col bg-white/60 backdrop-blur-md border-2 border-black/10 rounded-xl p-6 hover:border-black/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-300 h-full shadow-[0_8px_25px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]"
                        style={{
                          transform: 'perspective(1000px) rotateX(1deg)',
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <motion.div 
                            className="w-14 h-14 bg-black/10 backdrop-blur-sm rounded-lg flex items-center justify-center overflow-hidden relative border border-black/20 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]"
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
                              className="text-xs font-semibold bg-white/80 backdrop-blur-sm text-black px-2 py-1 rounded-full border border-black/20 shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3)]"
                              whileHover={{ scale: 1.1 }}
                            >
                              {item.badge}
                            </motion.span>
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-black transition-colors flex-grow">
                          {item.title}
                        </h4>
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

