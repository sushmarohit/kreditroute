'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { EligibilityIcon, CompareIcon3D, ApplyIcon, DisbursementIcon } from '@/components/icons/IconLibrary'

interface Step {
  number: string
  title: string
  description: string
  iconSvg: React.ReactNode
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Eligibility',
    description: 'Tell us your requirement. 2 minutes fill details,',
    iconSvg: <EligibilityIcon />
  },
  {
    number: '02',
    title: 'Compare',
    description: 'AI matches best banks 90+ criteria 90% success.',
    iconSvg: <CompareIcon3D />
  },
  {
    number: '03',
    title: 'Apply',
    description: 'Digital bank application complete digitally.',
    iconSvg: <ApplyIcon />
  },
  {
    number: '04',
    title: 'Disbursement',
    description: 'Get quick sanction minutes not weeks,',
    iconSvg: <DisbursementIcon />
  }
]

export function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Easy. Convenient. Quick.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The simple & Quick steps to your loan.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05
                }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Arrow between steps (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    >
                      <ArrowRight className="w-8 h-8 text-primary-500" />
                    </motion.div>
                  </div>
                )}

                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-2xl transition-all h-full relative overflow-hidden group">
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="relative z-10">
                    {/* Step Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: index * 0.15
                      }}
                      className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform"
                    >
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      initial={{ opacity: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                      className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-600 group-hover:bg-primary-200 transition-colors overflow-hidden relative"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        {step.iconSvg}
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-primary-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-bold text-lg hover:from-accent-600 hover:to-accent-700 transition-colors relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Get Started</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

