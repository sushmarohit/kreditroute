'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { featuresContent } from '@/constants'

export function Features() {
  const { title, features } = featuresContent

  return (
    <section className="py-20 bg-white">
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
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                scale: 1.02
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: index * 0.1 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                  repeatType: "reverse"
                }
              }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:border-primary-300 transition-all cursor-pointer"
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                  transition: { duration: 0.5 }
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  {feature.imageSrc ? (
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt ?? feature.title}
                      fill
                      sizes="48px"
                      className="object-contain p-1"
                    />
                  ) : (
                    <feature.IconComponent />
                  )}
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

