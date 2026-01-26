'use client'

import { motion } from 'framer-motion'
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
import { ServiceCard } from '@/components/ServiceCard'

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
    <section className="py-16 md:py-4 bg-white">
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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{service.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {service.items.map((item, index) => (
                  <ServiceCard
                    key={index}
                    IconComponent={item.IconComponent}
                    title={item.title}
                    href={item.href}
                    badge={item.badge}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

