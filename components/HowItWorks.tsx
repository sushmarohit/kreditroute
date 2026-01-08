'use client'

import { motion } from 'framer-motion'
import { homeHowItWorksSteps, homeHowItWorksContent } from '@/constants'

export function HowItWorks() {
  const { title } = homeHowItWorksContent
  const steps = homeHowItWorksSteps

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                default: { duration: 0.6, delay: index * 0.1 },
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                  repeatType: "reverse"
                }
              }}
              className="relative"
            >
              <div className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-xl hover:border-primary-300 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center"
                    whileHover={{ 
                      rotate: [0, -15, 15, -15, 0],
                      scale: 1.15,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </motion.div>
                  <motion.span 
                    className="text-2xl font-bold text-primary-600"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1
                      }
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-300 transform -translate-y-1/2"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <motion.div 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary-300 border-t-4 border-t-transparent border-b-4 border-b-transparent"
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      x: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1
                      }
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

