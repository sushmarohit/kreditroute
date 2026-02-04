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
      imageSrc?: string
      imageAlt?: string
    }>
  }> = [
    {
      category: 'Loans and Cards',
      items: [
        {
          IconComponent: PersonalLoanIcon,
          title: 'Personal Loan',
          href: '/loans',
          badge: '₹500 Cashback',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-wallet-3d-icon-png-download-3723123.png?f=webp&h=700',
          imageAlt: '3D wallet icon'
        },
        {
          IconComponent: CreditCardIcon,
          title: 'Credit Cards',
          href: '/credit-cards',
          badge: 'Cashback Offer',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-credit-card-3d-icon-png-download-6380709.png?f=webp&h=700',
          imageAlt: '3D credit card icon'
        },
        {
          IconComponent: BusinessLoanIcon,
          title: 'Business Loan',
          href: '/loans',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-dashboard-panel-layout-3d-icon-png-download-12430978@0.png?f=webp&h=700',
          imageAlt: '3D business dashboard icon'
        },
        {
          IconComponent: HomeLoanIcon,
          title: 'Home Loan',
          href: '/loans',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-home-3d-icon-png-download-6158668.png?f=webp&h=700',
          imageAlt: '3D home icon'
        },
        {
          IconComponent: BusinessLoanIcon,
          title: 'Loan Against Property',
          href: '/loans',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/premium/preview/debt-revenue-balance-3d-icon-5603340.png?f=webp&h=700',
          imageAlt: '3D property balance icon'
        },
        // {
        //   IconComponent: HomeLoanIcon,
        //   title: 'Transfer Home Loan',
        //   href: '/loans',
        //   imageSrc:
        //     'https://cdn3d.iconscout.com/3d/free/preview/free-home-3d-icon-png-download-6158668.png?f=webp&h=700',
        //   imageAlt: '3D home transfer icon'
        // },
      ]
    },
    {
      category: 'Credit Score & Bill Payments',
      items: [
        {
          IconComponent: CreditScoreIcon,
          title: 'Credit Score',
          href: '/credit-score',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-growth-chart-3d-icon-png-download-3187507.png?f=webp&h=700',
          imageAlt: '3D growth chart icon'
        },
        {
          IconComponent: CreditMonitoringIcon,
          title: 'Credit Health Pro',
          href: '/credit-score',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-dashboard-panel-layout-3d-icon-png-download-12430978@0.png?f=webp&h=700',
          imageAlt: '3D dashboard icon'
        },
        {
          IconComponent: CreditImprovementIcon,
          title: 'Fix your Credit Score',
          href: '/credit-score',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-checklist-3d-icon-png-download-12470135.png?f=webp&h=700',
          imageAlt: '3D checklist icon'
        },
        {
          IconComponent: VideoCreditReportIcon,
          title: 'Video Credit Report',
          href: '/credit-score',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-dashboard-panel-layout-3d-icon-png-download-12430978@0.png?f=webp&h=700',
          imageAlt: '3D report dashboard icon'
        },
        {
          IconComponent: BillPaymentIcon,
          title: 'Credit Card Bill',
          href: '/bill-payments',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-card-payment-3d-icon-png-download-6380717.png?f=webp&h=700',
          imageAlt: '3D card payment icon'
        },
        {
          IconComponent: LoanRepaymentIcon,
          title: 'Loan Repayment',
          href: '/bill-payments',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-wallet-3d-icon-png-download-3723123.png?f=webp&h=700',
          imageAlt: '3D wallet icon'
        },
        {
          IconComponent: ElectricityBillIcon,
          title: 'Electricity Bill',
          href: '/bill-payments',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-light-bulb-3d-icon-png-download-6558781.png?f=webp&h=700',
          imageAlt: '3D light bulb icon'
        },
      ]
    },
    {
      category: 'Investment & Insurance Products',
      items: [
        {
          IconComponent: InvestmentBondsIcon,
          title: 'Bonds',
          href: '/investments',
          badge: 'Newly Launched',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-growth-chart-3d-icon-png-download-3187507.png?f=webp&h=700',
          imageAlt: '3D growth chart icon'
        },
        {
          IconComponent: FixedDepositIcon,
          title: 'Fixed Deposits',
          href: '/investments',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-secure-shield-3d-icon-png-download-4715757.png?f=webp&h=700',
          imageAlt: '3D secure shield icon'
        },
        {
          IconComponent: MarketLinkedIcon,
          title: 'Market Linked Plans',
          href: '/investments',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-growth-chart-3d-icon-png-download-3187507.png?f=webp&h=700',
          imageAlt: '3D growth chart icon'
        },
        {
          IconComponent: NPSIcon,
          title: 'National Pension Scheme',
          href: '/investments',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-wallet-3d-icon-png-download-3723123.png?f=webp&h=700',
          imageAlt: '3D wallet icon'
        },
        {
          IconComponent: HealthInsuranceIcon,
          title: 'Health Insurance',
          href: '/insurance',
          badge: '0% GST',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-secure-shield-3d-icon-png-download-4715757.png?f=webp&h=700',
          imageAlt: '3D secure shield icon'
        },
        {
          IconComponent: TermLifeInsuranceIcon,
          title: 'Term Life Insurance',
          href: '/insurance',
          badge: '0% GST',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-secure-shield-3d-icon-png-download-4715757.png?f=webp&h=700',
          imageAlt: '3D secure shield icon'
        },
        {
          IconComponent: CarInsuranceIcon,
          title: 'Car Insurance',
          href: '/insurance',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-police-car-3d-icon-png-download-12885259.png?f=webp&h=700',
          imageAlt: '3D car icon'
        },
        {
          IconComponent: TwoWheelerInsuranceIcon,
          title: 'Two Wheeler Insurance',
          href: '/insurance',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-police-car-3d-icon-png-download-12885259.png?f=webp&h=700',
          imageAlt: '3D two wheeler icon'
        },
        {
          IconComponent: RetirementPlansIcon,
          title: 'Retirement Plans',
          href: '/insurance',
          imageSrc:
            'https://cdn3d.iconscout.com/3d/free/preview/free-wallet-3d-icon-png-download-3723123.png?f=webp&h=700',
          imageAlt: '3D retirement savings icon'
        },
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
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
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

