'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ComponentType } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  PersonalLoanIcon,
  HomeLoanIcon,
  CarInsuranceIcon,
  MarketLinkedIcon,
  CalculatorIcon
} from '@/components/icons/IconLibrary'

interface CalculatorItem {
  IconComponent: ComponentType
  title: string
  subtitle: string
  href: string
  gradient: string
}

const calculators: CalculatorItem[] = [
  {
    IconComponent: PersonalLoanIcon,
    title: 'Personal Loan',
    subtitle: 'EMI Calculator',
    href: '/calculators/personal-loan-emi',
    gradient: 'from-primary-500 to-primary-600'
  },
  {
    IconComponent: PersonalLoanIcon,
    title: 'Personal Loan',
    subtitle: 'Eligibility Calculator',
    href: '/calculators/personal-loan-eligibility',
    gradient: 'from-accent-500 to-accent-600'
  },
  {
    IconComponent: PersonalLoanIcon,
    title: 'Personal Loan',
    subtitle: 'Prepayment Calculator',
    href: '/calculators/personal-loan-prepayment',
    gradient: 'from-primary-500 to-accent-500'
  },
  {
    IconComponent: HomeLoanIcon,
    title: 'Home Loan',
    subtitle: 'EMI Calculator',
    href: '/calculators/home-loan-emi',
    gradient: 'from-accent-500 to-primary-600'
  },
  {
    IconComponent: HomeLoanIcon,
    title: 'Home Loan',
    subtitle: 'Eligibility Calculator',
    href: '/calculators/home-loan-eligibility',
    gradient: 'from-primary-600 to-accent-600'
  },
  {
    IconComponent: HomeLoanIcon,
    title: 'Home Loan',
    subtitle: 'Prepayment Calculator',
    href: '/calculators/home-loan-prepayment',
    gradient: 'from-accent-600 to-primary-500'
  },
  {
    IconComponent: CarInsuranceIcon,
    title: 'Car Loan',
    subtitle: 'EMI Calculator',
    href: '/calculators/car-loan-emi',
    gradient: 'from-primary-500 to-primary-600'
  },
  {
    IconComponent: MarketLinkedIcon,
    title: 'SIP Calculator',
    subtitle: 'Investment Planning',
    href: '/calculators/sip',
    gradient: 'from-accent-500 to-accent-600'
  }
]

export function FinancialCalculators() {
  return (
    <section className="py-16 md:py-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto overflow-hidden relative brightness-0 invert">
              <CalculatorIcon />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial Calculators
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our calculators assist you in planning your finances, estimating payments, and making informed money decisions, from EMIs to FDs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {calculators.map((calc, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={calc.href}
                  className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-2xl transition-all h-full group relative overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${calc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 align-middle">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${calc.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform overflow-hidden relative`}
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center brightness-0 invert">
                        <calc.IconComponent />
                      </div>
                    </motion.div>

                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-white transition-colors">
                      {calc.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 group-hover:text-white/90 transition-colors">
                      {calc.subtitle}
                    </p>

                    <motion.div
                      className="flex items-center text-primary-600 font-semibold text-sm group-hover:text-white transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <span>Try Now</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/calculators">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 25px rgba(22, 163, 74, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-colors"
            >
              Explore More Calculators
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

