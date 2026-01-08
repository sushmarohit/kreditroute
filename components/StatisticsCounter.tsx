'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Users, MapPin, Building2, TrendingUp } from 'lucide-react'

interface Stat {
  icon: typeof Users
  value: string
  suffix: string
  label: string
  color: string
}

const stats: Stat[] = [
  {
    icon: Users,
    value: '5.8',
    suffix: ' Lacs+',
    label: 'Customers Annually',
    color: 'text-primary-600'
  },
  {
    icon: MapPin,
    value: '150',
    suffix: '+',
    label: 'Cities Covered',
    color: 'text-accent-600'
  },
  {
    icon: Building2,
    value: '587',
    suffix: '+',
    label: 'Branches',
    color: 'text-primary-600'
  },
  {
    icon: TrendingUp,
    value: '61,000',
    suffix: ' Cr+',
    label: 'Disbursed Annually',
    color: 'text-accent-600'
  }
]

function useCounter(end: number, duration: number = 2, suffix: string = '', formatComma: boolean = false) {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isAnimating) return

    let startTime: number | null = null
    const isDecimal = end % 1 !== 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      if (isDecimal) {
        setCount(parseFloat((end * easeOutQuart).toFixed(1)))
      } else {
        setCount(Math.floor(end * easeOutQuart))
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
        setIsAnimating(false)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isAnimating])

  return { count, startAnimation: () => setIsAnimating(true), formatComma }
}

function Counter({ end, duration, suffix, formatComma }: { end: number; duration: number; suffix: string; formatComma?: boolean }) {
  const { count, startAnimation } = useCounter(end, duration, suffix, formatComma)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      startAnimation()
    }
  }, [isInView, startAnimation])

  const formatNumber = (num: number) => {
    if (num % 1 !== 0) {
      return num.toFixed(1)
    }
    const floorNum = Math.floor(num)
    if (formatComma) {
      return floorNum.toLocaleString('en-IN')
    }
    return floorNum.toString()
  }

  return (
    <span ref={ref}>
      {formatNumber(count)}{suffix}
    </span>
  )
}

export function StatisticsCounter() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted By Millions
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied customers who trust us with their financial needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            // Handle both comma-separated and regular numbers
            const numericValue = parseFloat(stat.value.replace(/,/g, ''))
            const needsCommaFormat = stat.value.includes(',')
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-primary-300 hover:shadow-xl transition-all text-center group"
              >
                <motion.div
                  className={`w-16 h-16 ${stat.color} bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                >
                  <Counter 
                    end={numericValue} 
                    duration={2.5} 
                    suffix={stat.suffix}
                    formatComma={needsCommaFormat}
                  />
                </motion.div>
                
                <p className="text-gray-600 font-medium text-lg">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

